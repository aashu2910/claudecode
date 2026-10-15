// fx.js — energetic generic scene runtime (v2 style, no robots)
// FXRUN(scenes) where scenes=[{n,em,items:[[word,label]],ew}] (non-outro scenes, in order)
const bump=(t,t0,d=.5)=>t<t0||t>t0+d?0:Math.sin(Math.PI*(t-t0)/d);
function fxLayer(){const sh=[];for(let i=0;i<10;i++){const kind=i%3,s=40+((i*37)%70);const html=kind==0?`<div style="width:${s}px;height:${s}px;border-radius:50%;border:5px solid var(--a);opacity:.35"></div>`:kind==1?`<div style="width:${s}px;height:${s}px;border-radius:12px;background:var(--a);opacity:.18"></div>`:`<div style="width:0;height:0;border-left:${s/2}px solid transparent;border-right:${s/2}px solid transparent;border-bottom:${s}px solid var(--a);opacity:.22"></div>`;sh.push(mk(html))}
 return t=>sh.forEach((e,i)=>{const sp=.15+(i%4)*.06,x=(i*113+t*sp*120)%1180-50,y=1920-((i*271+t*(40+i*9))%2100),r=t*(20+i*7)*(i%2?1:-1);place(e,x,y,1,.9,r)})}
function FXRUN(list){const BG=fxLayer();const prev=SCENES.__bg;SCENES.__bg=t=>{BG(t);prev&&prev(t)};
 list.forEach((s,si)=>{const hook=si==0,dir=si%2?1:-1,n=s.n;
  const NUM=mk(`<div style="font-size:560px;font-weight:900;color:var(--a);opacity:.07;letter-spacing:-20px">${hook?'?':String(si).padStart(2,'0')}</div>`);
  const BADGE=mk(`<div style="position:relative;width:360px;height:360px;display:flex;align-items:center;justify-content:center">
   <div style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--a) 38%,transparent),transparent 70%)"></div>
   <svg class="ring" style="position:absolute;inset:0" viewBox="0 0 360 360"><circle cx="180" cy="180" r="165" fill="none" stroke="var(--a)" stroke-width="6" stroke-dasharray="26 18" stroke-linecap="round"/></svg>
   <div style="position:absolute;inset:40px;border-radius:50%;background:rgba(255,255,255,.06);border:3px solid color-mix(in srgb,var(--a) 60%,transparent)"></div>
   <div style="font-size:${hook?190:170}px;position:relative">${s.em}</div></div>`);
  const RING=BADGE.querySelector('.ring');
  const RIP=[0,1,2].map(()=>mk('<div style="width:360px;height:360px;border-radius:50%;border:6px solid var(--a)"></div>'));
  const DOTS=[0,1,2,3,4,5].map(i=>mk(`<div style="width:${i%2?14:22}px;height:${i%2?14:22}px;border-radius:50%;background:var(--a);box-shadow:0 0 18px var(--a)"></div>`));
  const L=s.items.map((it,i)=>mk(`<div class="${i==0?'tok':'pill'}" style="font-size:${it[1].length>24?28:34}px;letter-spacing:0">${it[1]}</div>`));
  const BAR=mk('<div style="width:620px;height:8px;border-radius:4px;background:rgba(255,255,255,.12);overflow:hidden"><div class="f" style="height:100%;background:var(--a);width:0"></div></div>'),BF=BAR.querySelector('.f');
  const Q=hook?qmark():null;
  const te=W(n,s.ew),T=s.items.map(it=>W(n,it[0]));
  cue(te,hook?'whoosh':'whoosh');T.forEach((x,i)=>cue(x,['pop','tick','ding','pop'][i%4]));
  const cy=hook?640:680,ty=hook?1040:1060;
  SCN(n,(t,o)=>{const t0=S0(n),t1=S1(n),u=eob(clamp(p(t,t0-.3,t0+.35))),v=eio(p(t,t1-.35,t1));
   const gx=dir*(1-u)*620-dir*v*620, zoom=1+.05*p(t,t0,t1);
   // giant number drifts opposite
   place(NUM,540-gx*.4-dir*60*p(t,t0,t1),960,1.05-.05*p(t,t0,t1),o,0);
   // hero badge
   const hs=hook?(1+2*(1-eob(clamp(p(t,te-.2,te+.5)))))*clamp(p(t,te-.25,te)):pop(t,te-.15,.5);
   const pulse=T.reduce((a,x)=>a+.12*bump(t,x,.45),0);
   place(BADGE,540+gx,cy+Math.sin(t*2.2)*14,hs*(zoom+pulse),o,hook?(1-clamp(p(t,te-.2,te+.6)))*-180:Math.sin(t*1.3)*4);
   RING.style.transform=`rotate(${t*40}deg)`;RING.style.transformOrigin='50% 50%';
   // ripples on each cue
   RIP.forEach((r,k)=>{const x=T[k]!==undefined?T[k]:te,q=p(t,x,x+.9);place(r,540+gx,cy,1+q*1.3,o*(q>0&&q<1?(1-q)*.8:0))});
   // orbiting dots
   DOTS.forEach((d,k)=>{const a=t*1.6+k*Math.PI/3,rr=230+Math.sin(t*3+k)*16;place(d,540+gx+Math.cos(a)*rr,cy+Math.sin(a)*rr*.55,hs>0?1:0,o*.9)});
   // cards fly in alternately, active one glows
   const act=T.reduce((a,x,i)=>t>=x?i:a,-1);
   L.forEach((e,i)=>{const sd=i%2?1:-1,k=eob(clamp(p(t,T[i]-.05,T[i]+.4)));const on=i==act;
    e.firstElementChild.style.boxShadow=on?'0 0 46px var(--a)':'none';
    place(e,540+gx+sd*(1-k)*700,ty+i*128,(k>0?1:0)*(on?1.07:1)*(1+.08*bump(t,T[i],.35)),o*(t<T[i]-.05?0:(on||act<0?1:.72)),sd*(1-k)*-12)});
   // scene progress bar
   BF.style.width=(100*p(t,t0,t1))+'%';place(BAR,540+gx,ty+Math.max(L.length,1)*128+30,1,o*.9);
   if(Q){const tq=T.length?T[T.length-1]:te;place(Q,880+gx,1420,pop(t,tq),o*p(t,tq,tq+.1),Math.sin(t*4)*12)}
  })})}
