const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const mriC=()=>char(520,420,({blink,mood='happy'})=>{const g=gid();return `<defs>${grad(g,'#ffffff','#bfdbfe')}</defs><rect x="10" y="10" width="500" height="380" rx="80" fill="url(#${g})"/><circle cx="260" cy="210" r="120" fill="#0b1b3a"/><rect x="0" y="300" width="520" height="40" rx="12" fill="#93c5fd"/>${face(260,80,.8,{blink,mood})}`});
const spinEl=()=>mk('<div style="position:relative;width:70px;height:70px"><div style="position:absolute;inset:0;border-radius:35px;background:radial-gradient(circle at 35% 30%,#fff,#3b82f6)"></div><div class="ar" style="position:absolute;left:31px;top:-24px;width:8px;height:118px;background:#fde047;border-radius:4px"></div></div>');
const SP=Array.from({length:12},(_,i)=>[220+(i%4)*210,640+Math.floor(i/4)*210]);
function spins(S,t,o,ang){S.forEach((s,i)=>{const a=typeof ang=='function'?ang(i):ang;s.querySelector('.ar').style.transform=`rotate(${a}deg)`;place(s,SP[i][0],SP[i][1],1,o)})}
// HOOK
{const M=mriC(),X=label('✕ no X-rays','tok',36),Q=qmark();
const tx=W('hook','x'),th=W('hook','how');cue(tx,'lock');cue(th,'whoosh');
SCN('hook',(t,o)=>{cplace(M,t,540,1200,{op:o,s:1.4,popT:S0('hook')-.3,mood:'happy'});place(X,540,450,pop(t,tx),o);kk(t,880,1490,{op:o,s:.5,mood:t>th?'o':'happy',jumpT:th});place(Q,180,1300,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// MAGNET
{const M=mriC(),T=mk('<div class="big" style="font-size:110px"><span class="acc">1.5–3</span> T</div>'),E=label('≈ tens of thousands × Earth\'s field','pill',30),Fl=Array.from({length:6},()=>mk('<div style="width:700px;height:6px;border-radius:3px;background:rgba(59,130,246,.5)"></div>'));
const tm=W('magnet','magnet'),tt=W('magnet','tesla'),te=W('magnet','earth');cue(tm,'pop');cue(tt,'ding');cue(te,'up');
SCN('magnet',(t,o)=>{cplace(M,t,540,1350,{op:o,s:1.1,mood:'grin'});Fl.forEach((f,i)=>place(f,540,560+i*40,1,o*p(t,tm,tm+.4)*(.5+.5*Math.sin(t*3+i))));place(T,540,420,pop(t,tt),o);place(E,540,860,pop(t,te),o)})}
// ALIGN
{const S=Array.from({length:12},()=>spinEl()),L=label('H₂O → hydrogen nuclei = tiny magnets','pill',28),Lu=label('line up with the field ↑','tok',34);
const th=W('align','hydrogen'),tl=W('align','line');cue(th,'pop');cue(tl,'shimmer');
SCN('align',(t,o)=>{spins(S,t,o,i=>{const r=(i*97)%360;return r*(1-eio(p(t,tl,tl+1)))});place(L,540,400,pop(t,th),o);place(Lu,540,1330,pop(t,tl),o)})}
// PULSE
{const S=Array.from({length:12},()=>spins?spinEl():0),R=[0,1,2].map(()=>mk('<div style="width:200px;height:200px;border-radius:100px;border:5px solid #3b82f6"></div>')),L1=label('radio pulse → knocked out of line','tok',30),L2=label('relax back → faint radio signal 📡','pill',30);
const tp=W('pulse','pulse'),ts=W('pulse','stops'),tg=W('pulse','signals');cue(tp,'whoosh');cue(ts,'tick');cue(tg,'shimmer');
SCN('pulse',(t,o)=>{const k=eio(p(t,tp,tp+.5))*(1-eio(p(t,ts,ts+1.2)));spins(S,t,o,i=>90*k+Math.sin(t*6+i)*10*k);R.forEach((w,i)=>{const ph=((t*.8)+i/3)%1;place(w,540,850,.5+ph*2.5,o*(t>tg?1-ph:0)*.7)});place(L1,540,400,pop(t,tp),o);place(L2,540,1330,pop(t,ts),o)})}
// WHERE
{const G=mk(`<div style="width:760px;height:500px;display:grid;grid-template-columns:repeat(8,1fr);gap:6px">${Array(48).fill('<div class="gc" style="border-radius:8px"></div>').join('')}</div>`),Kn=label('🔊 KNOCK KNOCK','tok',38),L=label('slightly different field at each spot','pill',30);
const td=W('where','different'),tl=W('where','location'),tk=W('where','knocking');cue(td,'scramble');cue(tk,'lock');cue(tk+.5,'lock');
SCN('where',(t,o)=>{G.querySelectorAll('.gc').forEach((c,i)=>{const x=i%8,y=Math.floor(i/8);c.style.background=`rgba(59,130,246,${.15+.7*p(t,td,td+1)*(x/8*.6+y/6*.4)})`});place(G,540,820,1,o);place(L,540,440,pop(t,td),o);place(Kn,540,1250,pop(t,tk),o,Math.sin(t*30)*3*(t>tk?1:0))})}
// IMAGE
{const Sc=mk('<div style="width:520px;height:620px;border-radius:40px;background:#000;border:4px solid #3b82f6;overflow:hidden;position:relative"><div id="br" style="position:absolute;left:60px;top:80px;width:400px;height:460px;border-radius:50%;background:radial-gradient(ellipse at 50% 50%,#d1d5db 0 30%,#6b7280 31% 55%,#e5e7eb 56% 62%,#374151 63%)"></div></div>'),L=['fat','water','tissue'].map(s=>label(s,'pill',28)),Cm=label('computer → detailed image','tok',32);
const tf=W('image','fat'),tc=W('image','computer');cue(tf,'tick');cue(tc,'ding');
SCN('image',(t,o)=>{const r=p(t,tc,tc+1.5);Sc.querySelector('#br').style.clipPath=`inset(0 0 ${100-r*100}% 0)`;place(Sc,540,800,1,o);L.forEach((l,i)=>place(l,200+i*340,420,pop(t,tf+i*.3),o));place(Cm,540,1250,pop(t,tc),o)})}
// SAFE
{const M=mriC(),Ok=label('✓ no ionising radiation','tok',34),No=['🔑','✂️','💳','⌚'].map(e=>mk(`<div style="font-size:80px">${e}</div>`)),X=label('🧲 always on → no metal!','pill',32);
const tn=W('safe','no'),ta=W('safe','always'),tm=W('safe','metal');cue(tn,'ding');cue(tm,'lock');
SCN('safe',(t,o)=>{place(Ok,540,400,pop(t,tn),o);cplace(M,t,540,1350,{op:o,s:1,mood:t>tm?'flat':'happy'});No.forEach((n,i)=>{const pull=p(t,ta,ta+1);place(n,180+i*240-(i*240-360)*pull*.2,720+pull*120,1,o*p(t,ta-.3,ta),Math.sin(t*20+i)*10*pull)});place(X,540,560,pop(t,tm),o)})}
charOutro([[mriC(),.35],[buddy('circle','#dbeafe','#3b82f6','',95,.8),.55]],'Seeing','with physics.');
