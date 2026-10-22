const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
// heading char effects: split text nodes into chars (keeps highlight spans)
$$('.fx').forEach(el=>{if(el.dataset.fx=='mask')return;let i=0;
 const split=(node,into)=>{node.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){into.appendChild(document.createTextNode(' '));return}
  const ws=document.createElement('span');ws.style.cssText='white-space:nowrap;display:inline-block';
  [...w].forEach(c=>{const s=document.createElement('span');s.className='ch';s.textContent=c;s.style.transitionDelay=(i++*.03)+'s';ws.appendChild(s)});into.appendChild(ws)})};
 const nodes=[...el.childNodes];el.textContent='';
 nodes.forEach(n=>{if(n.nodeType==3)split(n,el);else{const c=n.cloneNode(false);el.appendChild(c);split(n,c)}})});
$$('[data-fx=scramble]').forEach(el=>el.dataset.final=el.textContent);
function scramble(el){const f=el.dataset.final,ch='!<>-_/[]{}=+*^?#ABCDEFX0123456789';let k=0;const n=f.length;
 const it=setInterval(()=>{el.textContent=[...f].map((c,i)=>i<k||c==' '?c:ch[Math.random()*ch.length|0]).join('');k+=Math.max(1,n/28);if(k>=n){el.textContent=f;clearInterval(it)}},35)}
// reveal observer
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');if(t.dataset.fx=='scramble'&&!RM)scramble(t);io.unobserve(t)}),{threshold:0,rootMargin:'0px 0px -60px'});
$$('[data-stagger]').forEach(g=>[...g.children].forEach((c,i)=>{c.classList.add('rv');c.style.transitionDelay=(i*.12)+'s'}));
$$('.rv,.fx,.line,[data-fx=scramble]').forEach(el=>{if(!el.closest('.hero'))io.observe(el)});
setTimeout(()=>$$('.hero .fx,.hero [data-fx=scramble]').forEach(el=>{el.classList.add('in');if(el.dataset.fx=='scramble'&&!RM)scramble(el)}),200);
// counters
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,end=+el.dataset.n,suf=el.dataset.s||'',t0=performance.now();
 const f=t=>{const k=Math.min(1,(t-t0)/1800),v=end*(1-Math.pow(1-k,4));el.textContent=(end%1?v.toFixed(1):Math.round(v).toLocaleString('en-IN'))+suf;if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f);co.unobserve(el)}),{threshold:.5});
$$('[data-n]').forEach(el=>co.observe(el));
// typewriter
const ty=$('[data-type]');if(ty){const words=JSON.parse(ty.dataset.type);let wi=0,ci=0,del=false;
 const step=()=>{const w=words[wi];ty.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(step,85)}else if(!del){del=true;setTimeout(step,1700)}else if(ci>0){ci--;setTimeout(step,40)}else{del=false;wi=(wi+1)%words.length;setTimeout(step,300)}};step()}
// hero slideshow (panel)
const sl=$$('.slide'),sb=$$('.sbar i b');if(sl.length){let k=0;const go=()=>{sl.forEach((s,i)=>s.classList.toggle('on',i==k));
 sb.forEach((b,i)=>{b.style.transition='none';b.style.width=i<k?'100%':'0';if(i==k){void b.offsetWidth;b.style.transition='width 3.8s linear';b.style.width='100%'}});k=(k+1)%sl.length};go();setInterval(go,4000)}
// tiles wave (typer)
const tl=$$('.tiles span');if(tl.length&&!RM){const loop=t=>{const cols=innerWidth<900?4:8;tl.forEach((s,i)=>{const x=i%cols,y=i/cols|0;s.style.transform=`translateY(${Math.sin(t/700+x*.6+y*.4)*10}px) scale(${1+Math.sin(t/900+x*.5+y*.7)*.06})`});requestAnimationFrame(loop)};requestAnimationFrame(loop)}
// bubbles
$$('.bubbles,.hero-bubbles').forEach(bb=>{for(let i=0;i<14;i++){const s=document.createElement('span'),z=16+Math.random()*60;if(bb.classList.contains('hero-bubbles'))s.className='bubble';
 s.style.cssText=`left:${Math.random()*100}%;width:${z}px;height:${z}px;animation-duration:${8+Math.random()*9}s;animation-delay:${-Math.random()*12}s`;bb.appendChild(s)}});
// polaroid tilt values
$$('.pola>div').forEach((d,i)=>{d.style.setProperty('--rot',[-6,4,-3,7,-5,3][i%6]+'deg');d.style.setProperty('--ty',[0,14,-8,10,-4,6][i%6]+'px')});
// scroll-linked effects
const nav=$('nav'),prog=$('#prog'),wds=$$('.statement .wd'),fills=$$('.fill'),hs=$('.hs'),hrow=$('.hs .row'),mega=$('.mega-emoji');
const onScroll=()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;nav.classList.toggle('solid',y>40);prog.style.width=(y/h*100)+'%';
 if(mega&&!RM)mega.style.transform=`scale(${1+y/1600}) rotate(${y/14}deg)`;
 if(wds.length){const r=wds[0].closest('.statement').getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.8-r.top)/(r.height*.7)));const n=Math.round(p*wds.length);wds.forEach((w,i)=>w.classList.toggle('lit',i<n))}
 fills.forEach(f=>{const r=f.parentElement.getBoundingClientRect();f.style.height=Math.min(r.height,Math.max(0,innerHeight*.6-r.top))+'px'});
 if(hs&&innerWidth>0){const r=hs.getBoundingClientRect(),max=Math.max(0,hrow.scrollWidth-innerWidth+40),p=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight)));hrow.style.transform=`translateX(${-p*max}px)`}};
let tk=false;addEventListener('scroll',()=>{if(tk)return;tk=true;requestAnimationFrame(()=>{onScroll();tk=false})},{passive:true});onScroll();
// pointer effects (desktop only)
if(matchMedia('(pointer:fine)').matches&&!RM){const glow=$('#glow');addEventListener('pointermove',e=>{glow.style.opacity=1;glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
 $$('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.22}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
 $$('[data-tilt] .card').forEach(c=>{c.addEventListener('pointermove',e=>{if(!c.classList.contains('in'))return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.transform=`perspective(900px) rotateX(${(.5-y)*8}deg) rotateY(${(x-.5)*10}deg) translateY(-6px)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
 const art=$('[data-follow]');if(art)addEventListener('pointermove',e=>{art.style.translate=`${(e.clientX/innerWidth-.5)*-26}px ${(e.clientY/innerHeight-.5)*-26}px`});
 $$('.banner.spot').forEach(b=>b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.setProperty('--sx',e.clientX-r.left+'px');b.style.setProperty('--sy',e.clientY-r.top+'px')}));}
// tabs
$$('.tabs button').forEach((b,i)=>b.onclick=()=>{$$('.tabs button').forEach((x,k)=>x.classList.toggle('on',k==i));$$('.tabpane').forEach((x,k)=>x.classList.toggle('on',k==i))});
// accordion: one open at a time
$$('.acc details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)$$('.acc details').forEach(o=>o!=d&&(o.open=false))}));
// carousel
const car=$('.car');if(car){const w=()=>car.firstElementChild.getBoundingClientRect().width+22;$('.carnav .p').onclick=()=>car.scrollBy({left:-w(),behavior:'smooth'});$('.carnav .n').onclick=()=>car.scrollBy({left:w(),behavior:'smooth'});
 const auto=setInterval(()=>{car.scrollLeft+car.clientWidth>=car.scrollWidth-5?car.scrollTo({left:0,behavior:'smooth'}):car.scrollBy({left:w(),behavior:'smooth'})},3500);
 ['pointerdown','wheel','touchstart'].forEach(ev=>car.addEventListener(ev,()=>clearInterval(auto),{passive:true}))}
// flip on tap
$$('.flipc').forEach(f=>f.addEventListener('click',()=>f.classList.toggle('tap')));
// spotlight switcher
const sp=$('.spot-main');if(sp){const D=JSON.parse(sp.dataset.items),tb=$$('.thumbs button'),b=sp.querySelector('b');let si=0,spa;
 const set=i=>{si=i;tb.forEach((x,k)=>x.classList.toggle('on',k==i));b.style.transform='scale(.4) rotate(-30deg)';b.style.opacity=0;
  setTimeout(()=>{b.textContent=D[i][0];sp.querySelector('.cap h3').textContent=D[i][1];sp.querySelector('.cap p').textContent=D[i][2];sp.querySelector('.cap .price').textContent=D[i][3];b.style.transform='';b.style.opacity=1},280)};
 tb.forEach((x,i)=>x.onclick=()=>{set(i);clearInterval(spa)});spa=setInterval(()=>set((si+1)%tb.length),3200);set(0)}
// reviews
const ts=$$('.t'),ds=$$('.dots button');if(ts.length){let ti=0;const show=i=>{ti=i;ts.forEach((t,k)=>t.classList.toggle('on',k==i));ds.forEach((d,k)=>d.classList.toggle('on',k==i))};ds.forEach((d,k)=>d.onclick=()=>show(k));show(0);setInterval(()=>show((ti+1)%ts.length),5200)}
const deck=$$('.deck .card');if(deck.length){const order=deck.map((_,i)=>i);const lay=()=>order.forEach((c,p)=>{deck[c].style.transform=`translate(${p*16}px,${p*16}px) rotate(${p*3}deg) scale(${1-p*.05})`;deck[c].style.zIndex=10-p});
 const next=()=>{order.push(order.shift());lay()};lay();deck.forEach(c=>c.onclick=next);setInterval(next,4800)}
const bq=$('.bq');if(bq){const D=JSON.parse(bq.dataset.q),pb=$$('.bq .people button'),q=bq.querySelector('blockquote'),nm=bq.querySelector('.nm');let bi=0;
 const set=i=>{bi=i;pb.forEach((b,k)=>b.classList.toggle('on',k==i));q.style.opacity=0;q.style.transform='translateY(16px)';
  setTimeout(()=>{q.textContent='“'+D[i][0]+'”';nm.textContent=D[i][1]+' · '+D[i][2];q.style.opacity=1;q.style.transform=''},350)};
 pb.forEach((b,i)=>b.onclick=()=>set(i));set(0);setInterval(()=>set((bi+1)%D.length),5600)}
// toast, burger, form
const toast=$('.toast');let tt;const say=m=>{toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),2400)};
$$('.add').forEach(b=>b.onclick=e=>{e.stopPropagation();say('✓ '+b.dataset.name+' added')});
$('.burger').onclick=()=>$('.links').classList.toggle('open');$$('.links a').forEach(a=>a.onclick=()=>$('.links').classList.remove('open'));
$('form').onsubmit=e=>{e.preventDefault();say('✓ Thanks! We will get back to you soon.');e.target.reset()};
$('#yr').textContent=new Date().getFullYear();
