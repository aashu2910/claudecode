#!/usr/bin/env python3
"""One-pager generator: shared motion engine + per-shop config -> standalone HTML files.
Usage: python3 build.py [slug ...]   (no args = all)"""
import json, sys, os, html
from shops import SHOPS

E = html.escape
OUT = os.path.dirname(os.path.abspath(__file__))

CSS = r"""
:root{--bg:%(bg)s;--bg2:%(bg2)s;--ink:%(ink)s;--mut:%(mut)s;--a:%(a)s;--b:%(b)s;--c:%(c)s;--card:%(card)s;--hf:'%(hf)s',serif;--bf:'%(bf)s',sans-serif;--r:%(radius)s}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
html,body{overflow-x:clip}
body{background:var(--bg);color:var(--ink);font-family:var(--bf);line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
img,svg{display:block}
.wrap{width:min(1180px,100% - 40px);margin-inline:auto}
h1,h2,h3{font-family:var(--hf);line-height:1.08;letter-spacing:-.01em}
/* progress + cursor glow */
#prog{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--a),var(--b));z-index:100}
#glow{position:fixed;width:420px;height:420px;border-radius:50%;pointer-events:none;z-index:0;background:radial-gradient(circle,color-mix(in srgb,var(--a) 22%,transparent),transparent 65%);transform:translate(-50%,-50%);transition:opacity .4s;opacity:.0}
/* nav */
nav{position:fixed;inset:0 0 auto;z-index:50;transition:background .4s,box-shadow .4s,padding .4s;padding:22px 0}
nav.solid{background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(14px);box-shadow:0 8px 30px rgba(0,0,0,.08);padding:12px 0}
nav .wrap{display:flex;align-items:center;justify-content:space-between;gap:20px}
.logo{display:flex;align-items:center;gap:10px;font-family:var(--hf);font-size:1.45rem;font-weight:800}
.logo i{font-style:normal;display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--a),var(--b));font-size:1.3rem;animation:spinIn 1.2s cubic-bezier(.2,.9,.3,1.3) both}
.links{display:flex;gap:28px;font-weight:600;font-size:.95rem}
.links a{position:relative;opacity:.85}
.links a::after{content:'';position:absolute;left:0;bottom:-4px;height:2px;width:100%;background:var(--a);transform:scaleX(0);transform-origin:right;transition:transform .45s cubic-bezier(.7,0,.2,1)}
.links a:hover::after{transform:scaleX(1);transform-origin:left}
.btn{display:inline-flex;align-items:center;gap:10px;padding:14px 26px;border-radius:999px;font-weight:700;background:linear-gradient(135deg,var(--a),var(--b));color:%(btnink)s;box-shadow:0 10px 30px color-mix(in srgb,var(--a) 40%,transparent);transition:transform .35s cubic-bezier(.2,.9,.3,1.4),box-shadow .35s;position:relative;overflow:hidden;will-change:transform}
.btn::before{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.45),transparent 70%);transform:translateX(-120%);transition:transform .8s}
.btn:hover::before{transform:translateX(120%)}
.btn:hover{box-shadow:0 16px 40px color-mix(in srgb,var(--a) 55%,transparent)}
.btn.ghost{background:transparent;color:var(--ink);border:2px solid color-mix(in srgb,var(--ink) 25%,transparent);box-shadow:none}
.burger{display:none;background:none;border:0;color:var(--ink);font-size:1.6rem;cursor:pointer}
/* hero */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:120px 0 80px;overflow:hidden;background:var(--heroBg)}
.hero .wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:50px;align-items:center;position:relative;z-index:2}
.hero.center .wrap{grid-template-columns:1fr;text-align:center;justify-items:center}
.hero.flip .wrap>:first-child{order:2}
.eyebrow{display:inline-flex;align-items:center;gap:10px;padding:8px 16px;border-radius:999px;background:color-mix(in srgb,var(--a) 14%,transparent);color:var(--a);font-weight:700;font-size:.85rem;letter-spacing:.12em;text-transform:uppercase}
.eyebrow b{width:8px;height:8px;border-radius:50%;background:var(--a);animation:pulse 1.6s infinite}
.hero h1{font-size:clamp(2.6rem,6.2vw,5.4rem);margin:22px 0 20px}
.hero h1 .w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.08em}
.hero h1 .w>span{display:inline-block;transform:translateY(110%) rotate(6deg);animation:rise .95s cubic-bezier(.2,.9,.25,1) forwards}
.hero h1 em{font-style:normal;background:linear-gradient(90deg,var(--a),var(--b),var(--a));background-size:200%% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shine 4s linear infinite}
.hero p.lead{font-size:1.15rem;color:var(--mut);max-width:540px;opacity:0;animation:fadeUp .9s .9s forwards}
.hero.center p.lead{margin-inline:auto}
.cta{display:flex;gap:14px;margin-top:32px;flex-wrap:wrap;opacity:0;animation:fadeUp .9s 1.1s forwards}
.hero.center .cta{justify-content:center}
.chips{display:flex;gap:22px;margin-top:38px;flex-wrap:wrap;opacity:0;animation:fadeUp .9s 1.3s forwards}
.chips div{font-size:.9rem;color:var(--mut)} .chips strong{display:block;font-family:var(--hf);font-size:1.7rem;color:var(--ink)}
/* hero art */
.art{position:relative;aspect-ratio:1;max-width:520px;width:100%%;justify-self:center;opacity:0;animation:popIn 1.2s .4s cubic-bezier(.2,.9,.3,1.2) forwards}
.blob{position:absolute;inset:6%%;border-radius:42%% 58%% 60%% 40%%/45%% 40%% 60%% 55%%;background:linear-gradient(135deg,var(--a),var(--b));animation:morph 12s ease-in-out infinite;box-shadow:0 40px 80px color-mix(in srgb,var(--a) 35%,transparent)}
.blob.two{inset:14%%;background:var(--card);opacity:.9;animation-duration:16s;animation-direction:reverse}
.ring{position:absolute;inset:0;border:2px dashed color-mix(in srgb,var(--a) 50%,transparent);border-radius:50%%;animation:spin 40s linear infinite}
.hero-emoji{position:absolute;inset:0;display:grid;place-items:center;font-size:clamp(7rem,15vw,11rem);filter:drop-shadow(0 25px 30px rgba(0,0,0,.25));animation:float 6s ease-in-out infinite}
.orbit{position:absolute;inset:0;animation:spin 28s linear infinite}
.orbit span{position:absolute;display:grid;place-items:center;width:74px;height:74px;border-radius:22px;background:var(--card);box-shadow:0 14px 30px rgba(0,0,0,.14);font-size:2.1rem;animation:spin 28s linear infinite reverse}
.badge{position:absolute;padding:12px 18px;border-radius:16px;background:var(--card);box-shadow:0 18px 40px rgba(0,0,0,.15);font-weight:700;font-size:.9rem;display:flex;gap:10px;align-items:center;animation:float 5s ease-in-out infinite;color:var(--ink)}
.badge small{display:block;font-weight:500;color:var(--mut);font-size:.75rem}
.shape{position:absolute;border-radius:50%%;filter:blur(2px);opacity:.5;animation:drift 18s ease-in-out infinite;z-index:1}
/* marquee */
.marquee{background:var(--ink);color:var(--bg);padding:20px 0;overflow:hidden;transform:rotate(-1.4deg);margin:-10px -20px 0;position:relative;z-index:3}
.marquee .track{display:flex;gap:46px;width:max-content;animation:marq 32s linear infinite;font-family:var(--hf);font-size:1.6rem;font-weight:700;white-space:nowrap}
.marquee .track span{display:flex;align-items:center;gap:46px}
/* sections */
section{padding:110px 0;position:relative}
.head{text-align:center;max-width:680px;margin:0 auto 60px}
.head h2{font-size:clamp(2rem,4.2vw,3.3rem);margin:14px 0 14px}
.head p{color:var(--mut)}
.grid{display:grid;gap:26px}
.g3{grid-template-columns:repeat(3,1fr)} .g4{grid-template-columns:repeat(4,1fr)} .g2{grid-template-columns:repeat(2,1fr)}
.card{background:var(--card);border-radius:var(--r);padding:34px 28px;position:relative;overflow:hidden;transition:transform .5s cubic-bezier(.2,.9,.3,1.2),box-shadow .5s;box-shadow:0 10px 30px rgba(0,0,0,.06);transform-style:preserve-3d;will-change:transform}
.card:hover{box-shadow:0 30px 60px rgba(0,0,0,.14)}
.card::after{content:'';position:absolute;inset:0;border-radius:inherit;background:radial-gradient(400px circle at var(--mx,50%%) var(--my,50%%),color-mix(in srgb,var(--a) 16%%,transparent),transparent 45%%);opacity:0;transition:opacity .4s;pointer-events:none}
.card:hover::after{opacity:1}
.ico{width:66px;height:66px;border-radius:20px;display:grid;place-items:center;font-size:2rem;background:color-mix(in srgb,var(--a) 15%%,transparent);margin-bottom:22px;transition:transform .6s cubic-bezier(.2,.9,.3,1.4)}
.card:hover .ico{transform:rotate(-10deg) scale(1.15)}
.card h3{font-size:1.35rem;margin-bottom:10px}
.card p{color:var(--mut);font-size:.97rem}
/* products */
.prod{padding:0}
.prod .pic{aspect-ratio:4/3;display:grid;place-items:center;font-size:5.2rem;position:relative;overflow:hidden}
.prod .pic::before{content:'';position:absolute;inset:-40%%;background:conic-gradient(from 0deg,var(--a),var(--b),var(--c),var(--a));opacity:.22;animation:spin 14s linear infinite}
.prod .pic span{position:relative;transition:transform .7s cubic-bezier(.2,.9,.3,1.3)}
.prod:hover .pic span{transform:scale(1.22) rotate(-8deg)}
.prod .tag{position:absolute;top:16px;left:16px;padding:6px 12px;border-radius:999px;background:var(--ink);color:var(--bg);font-size:.75rem;font-weight:700;z-index:2}
.prod .info{padding:22px 24px 26px;display:flex;justify-content:space-between;align-items:flex-end;gap:10px}
.prod .price{font-family:var(--hf);font-size:1.4rem;color:var(--a);font-weight:800;white-space:nowrap}
.add{width:44px;height:44px;border-radius:50%%;border:0;background:var(--ink);color:var(--bg);font-size:1.3rem;cursor:pointer;transition:transform .4s cubic-bezier(.2,.9,.3,1.5),background .3s;flex:none}
.add:hover{transform:rotate(90deg) scale(1.1);background:var(--a)}
/* about split */
.split{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}
.stack{position:relative;aspect-ratio:1/1.05}
.stack div{position:absolute;border-radius:var(--r);display:grid;place-items:center;font-size:5rem;box-shadow:0 30px 60px rgba(0,0,0,.15)}
.stack .s1{inset:0 22%% 22%% 0;place-items:start;padding:36px;font-size:6.5rem;background:linear-gradient(135deg,var(--a),var(--b))}
.stack .s2{inset:40%% 0 0 38%%;background:var(--card);border:8px solid var(--bg)}
.stack .s3{width:130px;height:130px;right:6%%;top:4%%;background:var(--ink);color:var(--bg);font-size:1rem;font-weight:800;text-align:center;border-radius:50%%;animation:spin 18s linear infinite}
.list{margin:26px 0 34px;display:grid;gap:14px}
.list li{list-style:none;display:flex;gap:14px;align-items:flex-start}
.list li b{flex:none;width:28px;height:28px;border-radius:50%%;display:grid;place-items:center;background:var(--a);color:%(btnink)s;font-size:.8rem}
/* stats */
.stats{background:linear-gradient(135deg,var(--a),var(--b));color:%(btnink)s;border-radius:calc(var(--r) * 1.6);padding:60px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center;position:relative;overflow:hidden}
.stats::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%%;background:rgba(255,255,255,.12);top:-200px;right:-100px;animation:float 8s ease-in-out infinite}
.stats strong{font-family:var(--hf);font-size:clamp(2.2rem,4vw,3.4rem);display:block}
/* process / steps */
.steps{counter-reset:s}
.step{position:relative;padding-top:70px}
.step::before{counter-increment:s;content:'0' counter(s);position:absolute;top:0;left:0;font-family:var(--hf);font-size:4rem;font-weight:900;color:color-mix(in srgb,var(--a) 22%%,transparent);line-height:1}
.step h3{font-size:1.3rem;margin-bottom:8px}
.step p{color:var(--mut)}
.line{height:2px;background:color-mix(in srgb,var(--ink) 12%%,transparent);margin-bottom:40px;position:relative;overflow:hidden}
.line i{position:absolute;inset:0;background:linear-gradient(90deg,var(--a),var(--b));transform:scaleX(0);transform-origin:left;transition:transform 1.6s cubic-bezier(.7,0,.2,1)}
.in .line i,.line.in i{transform:scaleX(1)}
/* testimonials */
.tslider{position:relative;max-width:820px;margin:auto;min-height:250px}
.t{position:absolute;inset:0;text-align:center;opacity:0;transform:translateY(30px) scale(.97);transition:opacity .8s,transform .8s cubic-bezier(.2,.9,.3,1)}
.t.on{opacity:1;transform:none}
.t blockquote{font-family:var(--hf);font-size:clamp(1.3rem,2.6vw,1.9rem);line-height:1.4;margin-bottom:24px}
.t .who{display:inline-flex;align-items:center;gap:12px;font-weight:700}
.t .who i{font-style:normal;width:48px;height:48px;border-radius:50%%;display:grid;place-items:center;background:linear-gradient(135deg,var(--a),var(--b));color:%(btnink)s}
.stars{color:var(--a);letter-spacing:4px;margin-bottom:14px}
.dots{display:flex;gap:10px;justify-content:center;margin-top:20px}
.dots button{width:10px;height:10px;border-radius:999px;border:0;background:color-mix(in srgb,var(--ink) 20%%,transparent);cursor:pointer;transition:width .4s,background .4s}
.dots button.on{width:34px;background:var(--a)}
/* gallery */
.gal{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:190px;gap:16px}
.gal div{border-radius:var(--r);display:grid;place-items:center;font-size:3.6rem;overflow:hidden;position:relative;transition:transform .6s cubic-bezier(.2,.9,.3,1.2)}
.gal div:hover{transform:scale(1.04) rotate(-1deg)}
.gal div:nth-child(1){grid-row:span 2;grid-column:span 2;font-size:7rem}
.gal div:nth-child(6){grid-column:span 4}
/* cta banner */
.banner{border-radius:calc(var(--r) * 1.6);padding:80px 60px;background:var(--ink);color:var(--bg);text-align:center;position:relative;overflow:hidden}
.banner h2{font-size:clamp(2rem,4.5vw,3.6rem);margin-bottom:16px;position:relative}
.banner p{opacity:.75;margin-bottom:30px;position:relative}
.banner .bubbles span{position:absolute;bottom:-60px;border-radius:50%%;background:linear-gradient(135deg,var(--a),var(--b));opacity:.55;animation:bubble linear infinite}
/* contact */
.contact{display:grid;grid-template-columns:1fr 1.1fr;gap:50px}
.info-row{display:flex;gap:16px;align-items:center;margin-bottom:22px}
.info-row i{font-style:normal;width:54px;height:54px;border-radius:16px;display:grid;place-items:center;background:color-mix(in srgb,var(--a) 15%%,transparent);font-size:1.4rem}
form{display:grid;gap:14px}
input,textarea,select{width:100%%;padding:16px 18px;border-radius:14px;border:2px solid color-mix(in srgb,var(--ink) 10%%,transparent);background:var(--card);color:var(--ink);font:inherit;transition:border-color .3s,box-shadow .3s}
input:focus,textarea:focus,select:focus{outline:0;border-color:var(--a);box-shadow:0 0 0 5px color-mix(in srgb,var(--a) 18%%,transparent)}
footer{padding:40px 0;border-top:1px solid color-mix(in srgb,var(--ink) 10%%,transparent);color:var(--mut);font-size:.9rem}
footer .wrap{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
/* reveal system */
.rv{opacity:0;transform:translateY(50px);transition:opacity 1s cubic-bezier(.2,.9,.25,1),transform 1s cubic-bezier(.2,.9,.25,1)}
.rv.l{transform:translateX(-70px)} .rv.r{transform:translateX(70px)} .rv.z{transform:scale(.85)}
.rv.in{opacity:1;transform:none}
.split-txt .ch{display:inline-block;opacity:0;transform:translateY(.6em) rotate(8deg);transition:opacity .6s,transform .7s cubic-bezier(.2,.9,.3,1.3)}
.split-txt.in .ch{opacity:1;transform:none}
.toast{position:fixed;bottom:26px;left:50%%;transform:translate(-50%%,140%%);background:var(--ink);color:var(--bg);padding:14px 24px;border-radius:999px;font-weight:700;z-index:90;transition:transform .6s cubic-bezier(.2,.9,.3,1.3)}
.toast.on{transform:translate(-50%%,0)}
.fab{position:fixed;right:22px;bottom:22px;width:60px;height:60px;border-radius:50%%;display:grid;place-items:center;font-size:1.6rem;background:linear-gradient(135deg,var(--a),var(--b));box-shadow:0 14px 30px color-mix(in srgb,var(--a) 45%%,transparent);z-index:60;animation:pulseRing 2.4s infinite}
@keyframes rise{to{transform:none}}
@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@keyframes popIn{from{opacity:0;transform:scale(.6) rotate(-8deg)}to{opacity:1;transform:none}}
@keyframes spinIn{from{transform:rotate(-200deg) scale(0)}}
@keyframes shine{to{background-position:200%% center}}
@keyframes morph{0%%,100%%{border-radius:42%% 58%% 60%% 40%%/45%% 40%% 60%% 55%%;transform:rotate(0)}50%%{border-radius:60%% 40%% 35%% 65%%/55%% 60%% 40%% 45%%;transform:rotate(12deg)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes float{0%%,100%%{transform:translateY(0)}50%%{transform:translateY(-18px)}}
@keyframes drift{0%%,100%%{transform:translate(0,0)}33%%{transform:translate(40px,-30px)}66%%{transform:translate(-30px,25px)}}
@keyframes marq{to{transform:translateX(-50%%)}}
@keyframes pulse{0%%{box-shadow:0 0 0 0 color-mix(in srgb,var(--a) 60%%,transparent)}100%%{box-shadow:0 0 0 12px transparent}}
@keyframes pulseRing{0%%{box-shadow:0 0 0 0 color-mix(in srgb,var(--a) 55%%,transparent)}70%%{box-shadow:0 0 0 18px transparent}100%%{box-shadow:0 0 0 0 transparent}}
@keyframes bubble{from{transform:translateY(0) scale(.6)}to{transform:translateY(-700px) scale(1.2);opacity:0}}
@media (max-width:900px){.hero .wrap,.split,.contact{grid-template-columns:1fr}.g3,.g4{grid-template-columns:repeat(2,1fr)}.stats{grid-template-columns:repeat(2,1fr);padding:40px 24px}.gal{grid-template-columns:repeat(2,1fr)}.links,.nav-cta{display:none}.burger{display:block}.hero.flip .wrap>:first-child{order:0}.links.open{display:flex;position:absolute;top:100%%;left:0;right:0;flex-direction:column;padding:24px;background:var(--bg);box-shadow:0 20px 30px rgba(0,0,0,.1)}}
@media (max-width:900px){.shape{opacity:.15}.art{max-width:400px}.badge{font-size:.78rem;padding:9px 12px}}
@media (max-width:560px){.g3,.g4,.g2{grid-template-columns:1fr}section{padding:80px 0}.banner{padding:60px 24px}.gal div:nth-child(1){grid-column:span 2}}
@media (max-width:900px){.gal div:nth-child(6){grid-column:span 2}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}.rv,.split-txt .ch{opacity:1;transform:none}}
"""

JS = r"""
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// split hero words
$$('.hero h1 .w>span').forEach((s,i)=>s.style.animationDelay=(.15+i*.09)+'s');
// split section titles into chars
$$('.split-txt').forEach(el=>{const t=el.textContent;el.textContent='';let i=0;t.split(' ').forEach((w,wi,arr)=>{const ws=document.createElement('span');ws.style.whiteSpace='nowrap';[...w].forEach(c=>{const s=document.createElement('span');s.className='ch';s.textContent=c;s.style.transitionDelay=(i++*.025)+'s';ws.appendChild(s)});el.appendChild(ws);if(wi<arr.length-1)el.appendChild(document.createTextNode(' '))})});
// reveal on scroll (staggered within groups)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -40px'});
$$('[data-stagger]').forEach(g=>[...g.children].forEach((c,i)=>{c.classList.add('rv');c.style.transitionDelay=(i*.12)+'s'}));
$$('.rv,.split-txt,.line,.steps').forEach(el=>io.observe(el));
// counters
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,end=+el.dataset.n,suf=el.dataset.s||'',t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/1800),v=end*(1-Math.pow(1-k,4));el.textContent=(end%1?v.toFixed(1):Math.round(v).toLocaleString('en-IN'))+suf;if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f);co.unobserve(el)}),{threshold:.6});
$$('[data-n]').forEach(el=>co.observe(el));
// nav + progress + parallax
const nav=$('nav'),prog=$('#prog'),par=$$('[data-par]');
let ticking=false;addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;nav.classList.toggle('solid',y>40);prog.style.width=(y/h*100)+'%';par.forEach(el=>el.style.transform=`translate3d(0,${y*el.dataset.par}px,0)`);ticking=false})},{passive:true});
// cursor glow + magnetic buttons + tilt cards
const glow=$('#glow');const fine=matchMedia('(pointer:fine)').matches;
if(fine){addEventListener('pointermove',e=>{glow.style.opacity=1;glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
 $$('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
 $$('.card').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.transform=`perspective(900px) rotateX(${(.5-y)*8}deg) rotateY(${(x-.5)*10}deg) translateY(-6px)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
 const art=$('.art');if(art)addEventListener('pointermove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;art.style.translate=`${x*-24}px ${y*-24}px`});}
// testimonials
const ts=$$('.t'),ds=$$('.dots button');let ti=0;const show=i=>{ti=i;ts.forEach((t,k)=>t.classList.toggle('on',k==i));ds.forEach((d,k)=>d.classList.toggle('on',k==i))};ds.forEach((d,k)=>d.onclick=()=>show(k));if(ts.length){show(0);setInterval(()=>show((ti+1)%ts.length),5200)}
// bubbles
const bb=$('.bubbles');if(bb)for(let i=0;i<14;i++){const s=document.createElement('span'),z=20+Math.random()*70;s.style.cssText=`left:${Math.random()*100}%;width:${z}px;height:${z}px;animation-duration:${7+Math.random()*8}s;animation-delay:${-Math.random()*10}s`;bb.appendChild(s)}
// cart toast + burger + form
const toast=$('.toast');let tt;$$('.add').forEach(b=>b.onclick=()=>{toast.textContent='✓ '+b.dataset.name+' added';toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),2200)});
$('.burger').onclick=()=>$('.links').classList.toggle('open');$$('.links a').forEach(a=>a.onclick=()=>$('.links').classList.remove('open'));
$('form').onsubmit=e=>{e.preventDefault();toast.textContent='✓ Thanks! We will get back to you soon.';toast.classList.add('on');setTimeout(()=>toast.classList.remove('on'),2600);e.target.reset()};
$('#yr').textContent=new Date().getFullYear();
"""


def hero_h1(parts):
    out = []
    for txt, em in parts:
        for w in txt.split():
            inner = f"<em>{E(w)}</em>" if em else E(w)
            out.append(f'<span class="w"><span>{inner}</span></span>')
    return ' '.join(out)


def page(s):
    p = s['pal']
    vals = dict(bg=p['bg'], bg2=p['bg2'], ink=p['ink'], mut=p['mut'], a=p['a'], b=p['b'], c=p['c'],
                card=p['card'], hf=s['fonts'][0], bf=s['fonts'][1], radius=s.get('radius', '24px'),
                btnink=p.get('btnink', '#fff'))
    css = CSS.replace('%%', '%')
    for k, v in vals.items():
        css = css.replace('%(' + k + ')s', v)
    css += f":root{{--heroBg:{s.get('heroBg', 'radial-gradient(circle at 80% 20%, var(--bg2), var(--bg) 60%)')}}}\n"
    gf = '&'.join('family=' + f.replace(' ', '+') + ':wght@400;500;600;700;800;900' for f in dict.fromkeys(s['fonts']))
    hero_cls = s.get('hero', '')
    orbit = ''.join(
        f'<span style="left:calc(50% + {r}*cos({a}deg) - 37px);top:calc(50% + {r}*sin({a}deg) - 37px)">{e}</span>'
        for e, a, r in zip(s['orbit'], [0, 120, 240, 60, 180, 300], ['46%'] * 6))
    badges = ''.join(
        f'<div class="badge" style="{pos};animation-delay:{i*1.2}s">{b[0]}<div>{E(b[1])}<small>{E(b[2])}</small></div></div>'
        for i, (b, pos) in enumerate(zip(s['badges'], ['left:-4%;top:14%', 'right:-6%;bottom:16%', 'left:2%;bottom:-2%'])))
    art = '' if hero_cls == 'center' else f'''<div class="art"><div class="ring"></div><div class="blob"></div><div class="blob two"></div>
 <div class="orbit">{orbit}</div><div class="hero-emoji">{s['emoji']}</div>{badges}</div>'''
    shapes = ''.join(f'<div class="shape" data-par="{par}" style="{st}"></div>' for par, st in [
        ('-.15', 'width:260px;height:260px;left:-80px;top:20%;background:var(--a)'),
        ('.12', 'width:180px;height:180px;right:8%;top:8%;background:var(--b);animation-delay:-6s'),
        ('-.08', 'width:120px;height:120px;left:40%;bottom:6%;background:var(--c);animation-delay:-12s')])
    if hero_cls == 'center':
        shapes += f'<div class="hero-emoji" data-par=".25" style="opacity:.08;font-size:30rem;z-index:0">{s["emoji"]}</div>'
    chips = ''.join(f'<div><strong>{E(a)}</strong>{E(b)}</div>' for a, b in s['chips'])
    marq = ''.join(f'<span>{E(m)} <b style="color:var(--a)">✦</b></span>' for m in s['marquee']) * 2
    feats = ''.join(f'<div class="card"><div class="ico">{i}</div><h3>{E(t)}</h3><p>{E(d)}</p></div>' for i, t, d in s['features'])
    prods = ''.join(
        f'<div class="card prod"><div class="pic" style="background:color-mix(in srgb,var(--{["a","b","c"][k%3]}) 12%,var(--card))">'
        f'{"<div class=tag>"+E(tg)+"</div>" if tg else ""}<span>{e}</span></div><div class="info"><div><h3>{E(n)}</h3>'
        f'<p>{E(d)}</p></div><div style="text-align:right"><div class="price">{E(pr)}</div>'
        f'<button class="add" aria-label="Add {E(n)}" data-name="{E(n)}">+</button></div></div></div>'
        for k, (e, n, d, pr, tg) in enumerate(s['products']))
    ab = s['about']
    alist = ''.join(f'<li><b>✓</b><span>{E(x)}</span></li>' for x in ab['points'])
    stats = ''.join(f'<div><strong data-n="{n}" data-s="{E(suf)}">0</strong>{E(l)}</div>' for n, suf, l in s['stats'])
    steps = ''.join(f'<div class="step"><h3>{E(t)}</h3><p>{E(d)}</p></div>' for t, d in s['steps'])
    tst = ''.join(
        f'<div class="t"><div class="stars">★★★★★</div><blockquote>“{E(q)}”</blockquote><div class="who"><i>{E(n[0])}</i>'
        f'<span>{E(n)}<br><small style="font-weight:500;color:var(--mut)">{E(r)}</small></span></div></div>'
        for q, n, r in s['testimonials'])
    dots = ''.join(f'<button aria-label="Review {i+1}"></button>' for i in range(len(s['testimonials'])))
    gal = ''.join(f'<div style="background:linear-gradient(135deg,color-mix(in srgb,var(--{["a","b","c","a","b","c"][i]}) {[70,30,45,25,60,35][i]}%,var(--card)),var(--card))">{e}</div>' for i, e in enumerate(s['gallery']))
    opts = ''.join(f'<option>{E(o)}</option>' for o in s['contact']['options'])
    c = s['contact']
    title = E(s['name'])
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} — {E(s["tagline"])}</title><meta name="description" content="{E(s["desc"])}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?{gf}&display=swap" rel="stylesheet">
<style>{css}</style></head><body>
<div id="prog"></div><div id="glow"></div>
<nav><div class="wrap"><a href="#top" class="logo"><i>{s["logo"]}</i>{title}</a>
<div class="links"><a href="#features">{E(s["nav"][0])}</a><a href="#shop">{E(s["nav"][1])}</a><a href="#about">About</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></div>
<a href="#contact" class="btn nav-cta">{E(s["cta"][0])}</a><button class="burger" aria-label="Menu">☰</button></div></nav>

<header class="hero {hero_cls}" id="top">{shapes}<div class="wrap"><div>
<span class="eyebrow"><b></b>{E(s["eyebrow"])}</span>
<h1>{hero_h1(s["h1"])}</h1><p class="lead">{E(s["lead"])}</p>
<div class="cta"><a href="#shop" class="btn">{E(s["cta"][0])} →</a><a href="#about" class="btn ghost">{E(s["cta"][1])}</a></div>
<div class="chips">{chips}</div></div>{art}</div></header>
<div class="marquee"><div class="track">{marq}</div></div>

<section id="features"><div class="wrap"><div class="head"><span class="eyebrow">{E(s["sec"][0][0])}</span><h2 class="split-txt">{E(s["sec"][0][1])}</h2><p class="rv">{E(s["sec"][0][2])}</p></div>
<div class="grid {"g4" if len(s["features"])==4 else "g3"}" data-stagger>{feats}</div></div></section>

<section id="shop" style="background:var(--bg2)"><div class="wrap"><div class="head"><span class="eyebrow">{E(s["sec"][1][0])}</span><h2 class="split-txt">{E(s["sec"][1][1])}</h2><p class="rv">{E(s["sec"][1][2])}</p></div>
<div class="grid g3" data-stagger>{prods}</div></div></section>

<section id="about"><div class="wrap split"><div class="stack rv l"><div class="s1">{ab["e1"]}</div><div class="s2">{ab["e2"]}</div><div class="s3"><span>{E(ab["since"])}</span></div></div>
<div class="rv r"><span class="eyebrow">Our story</span><h2 style="font-size:clamp(2rem,4vw,3.1rem);margin:14px 0 18px">{E(ab["title"])}</h2><p style="color:var(--mut)">{E(ab["text"])}</p>
<ul class="list">{alist}</ul><a href="#contact" class="btn">{E(ab["cta"])} →</a></div></div></section>

<section style="padding-top:0"><div class="wrap"><div class="stats rv z">{stats}</div></div></section>

<section style="background:var(--bg2)"><div class="wrap"><div class="head"><span class="eyebrow">{E(s["sec"][2][0])}</span><h2 class="split-txt">{E(s["sec"][2][1])}</h2></div>
<div class="line"><i></i></div><div class="grid g4 steps" data-stagger>{steps}</div></div></section>

<section id="reviews"><div class="wrap"><div class="head"><span class="eyebrow">Happy customers</span><h2 class="split-txt">{E(s["sec"][3])}</h2></div>
<div class="tslider rv">{tst}</div><div class="dots">{dots}</div></div></section>

<section style="padding-top:0"><div class="wrap"><div class="gal" data-stagger>{gal}</div></div></section>

<section style="padding-top:0"><div class="wrap"><div class="banner rv z"><div class="bubbles"></div><h2>{E(s["banner"][0])}</h2><p>{E(s["banner"][1])}</p><a href="#contact" class="btn">{E(s["banner"][2])} →</a></div></div></section>

<section id="contact" style="background:var(--bg2)"><div class="wrap contact"><div class="rv l"><span class="eyebrow">Visit us</span><h2 style="font-size:clamp(2rem,4vw,3rem);margin:14px 0 26px">{E(c["title"])}</h2>
<div class="info-row"><i>📍</i><div><b>Address</b><br><span style="color:var(--mut)">{E(c["addr"])}</span></div></div>
<div class="info-row"><i>📞</i><div><b>Call / WhatsApp</b><br><span style="color:var(--mut)">+91 98765 43210</span></div></div>
<div class="info-row"><i>🕒</i><div><b>Open</b><br><span style="color:var(--mut)">{E(c["hours"])}</span></div></div></div>
<form class="rv r card" style="padding:34px"><h3 style="font-size:1.4rem">{E(c["form"])}</h3><input required placeholder="Your name"><input required type="tel" placeholder="Phone number"><select>{opts}</select><textarea rows="4" placeholder="Message"></textarea><button class="btn" style="justify-content:center;border:0;cursor:pointer;font:inherit;font-weight:700">Send →</button></form></div></section>

<footer><div class="wrap"><span>© <span id="yr"></span> {title}. All rights reserved.</span><span>{E(s["foot"])}</span></div></footer>
<a href="#contact" class="fab" aria-label="Contact">{s["fab"]}</a><div class="toast"></div>
<script>{JS}</script></body></html>'''


if __name__ == '__main__':
    want = sys.argv[1:] or list(SHOPS)
    for k in want:
        open(os.path.join(OUT, k + '.html'), 'w', encoding='utf-8').write(page(SHOPS[k]))
        print('built', k)
