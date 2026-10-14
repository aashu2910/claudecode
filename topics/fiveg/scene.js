const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const towerC=()=>char(220,360,({blink,mood='happy'})=>`<path d="M110 60 L40 350 M110 60 L180 350 M70 230 L150 230 M85 160 L135 160" stroke="#c4b5fd" stroke-width="12" stroke-linecap="round"/><rect x="60" y="10" width="100" height="70" rx="20" fill="#8b5cf6"/>${face(110,40,.5,{blink,mood,cheek:false,eye:'#fff'})}`);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
// HOOK
{const P=phoneC(),B=[label('4G · 30 Mbps','pill',34),label('5G · 300+ Mbps','tok',40)],Q=qmark();
const t4=W('hook','faster'),tw=W('hook','what');cue(t4,'up');cue(tw,'whoosh');
SCN('hook',(t,o)=>{cplace(P,t,540,1200,{op:o,s:1.8,popT:S0('hook')-.3,mood:t>t4?'joy':'happy'});place(B[0],540,420,pop(t,S0('hook')),o);place(B[1],540,560,pop(t,t4),o);kk(t,880,1490,{op:o,s:.55,mood:t>tw?'o':'happy',jumpT:tw});place(Q,180,1350,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// LANES
{const R=[mk('<div style="width:860px;height:120px;background:#3f3f46;border-radius:16px;border:3px dashed #888"></div>'),mk('<div style="width:860px;height:360px;background:#3f3f46;border-radius:16px;border:3px dashed #8b5cf6"></div>')],C=Array.from({length:12},()=>mk('<div style="width:70px;height:40px;border-radius:10px;background:#8b5cf6"></div>')),L=[label('4G channel','pill',28),label('5G: wider channel','tok',32)];
const tw=W('lanes','wider'),th=W('lanes','highway'),tm=W('lanes','more');cue(tw,'pop');cue(tm,'whoosh');
SCN('lanes',(t,o)=>{place(R[0],540,500,1,o);place(L[0],540,400,1,o);place(R[1],540,920,pop(t,tw),o);place(L[1],540,700,pop(t,tw),o);C.forEach((c,i)=>{const lane=i%4;const x=((t*300+i*170)%1000)+40;place(c,x,i<3?500:820+lane*60,1,o*(i<3||t>th?1:0))})})}
// FREQ
{const Sc=mk('<div style="width:860px;height:30px;border-radius:15px;background:linear-gradient(90deg,#4b5563,#8b5cf6)"></div>'),Mk=[['4G bands',.1],['3.5 GHz',.32],['26 GHz',.92]].map(([l])=>label(l,'pill',28)),Ms=[.1,.32,.92],L=label('India 5G: ~3.5 GHz + 26 GHz','tok',32);
const ti=W('freq','india'),t3=W('freq','three'),t26=W('freq','twenty'),th=W('freq','higher');cue(t3,'pop');cue(t26,'pop');cue(th,'ding');
SCN('freq',(t,o)=>{place(Sc,540,800,1,o);[th-.6,t3,t26].forEach((x,i)=>place(Mk[i],110+860*Ms[i],i%2?900:700,pop(t,x),o));place(L,540,420,pop(t,ti),o);kk(t,170,1490,{op:o,s:.5})})}
// MIMO
{const T=towerC(),Ph=[0,1,2,3].map(()=>phoneC()),Ant=mk(`<div style="display:grid;grid-template-columns:repeat(8,1fr);gap:8px">${Array(32).fill('<div style="width:18px;height:18px;border-radius:4px;background:#c4b5fd"></div>').join('')}</div>`),E=[0,1,2,3].map(i=>edge([[540,620],[180+i*240,1200]])),L=label('massive MIMO','tok',36);
const tm=W('mimo','mimo'),td=W('mimo','dozens'),ts=W('mimo','separate');cue(tm,'pop');cue(td,'scramble');cue(ts,'whoosh');
SCN('mimo',(t,o)=>{cplace(T,t,540,640,{op:o,s:.8,mood:'grin'});place(Ant,540,400,pop(t,td),o);E.forEach((e,i)=>drawEdge(e,t,ts+i*.15,o,t>ts));Ph.forEach((p0,i)=>cplace(p0,t,180+i*240,1380,{op:o,s:.55,mood:t>ts+i*.15+.4?'joy':'happy'}));place(L,860,560,pop(t,tm),o)})}
// BEAM
{const T=towerC(),P=phoneC(),Bm=mk('<div style="width:600px;height:120px;background:linear-gradient(90deg,rgba(139,92,246,.8),rgba(139,92,246,0));clip-path:polygon(0 40%,100% 0,100% 100%,0 60%)"></div>'),Sp=mk('<div style="width:700px;height:700px;border-radius:350px;background:radial-gradient(rgba(139,92,246,.35),transparent 70%)"></div>'),L=label('focused beam → your phone','tok',32);
const tf=W('beam','focus'),ts=W('beam','spraying');cue(tf,'shimmer');
SCN('beam',(t,o)=>{cplace(T,t,220,1100,{op:o,s:.8});cplace(P,t,860,1050,{op:o,s:.8,mood:t>tf?'joy':'happy'});place(Sp,220,800,1,o*(1-p(t,tf,tf+.5))*.8);place(Bm,540,820,1,o*p(t,tf,tf+.5),-8);place(L,540,420,pop(t,tf),o)})}
// RANGE
{const T=[towerC(),towerC(),towerC()],Wl=mk('<div style="width:40px;height:400px;background:#78716c;border-radius:8px"></div>'),C=[0,1].map(()=>mk('<div style="border-radius:50%;border:4px dashed #8b5cf6"></div>')),L1=label('shorter range · walls block more','pill',30),L2=label('→ more towers needed','tok',34);
const tt=W('range','travel'),tw=W('range','walls'),tm=W('range','more');cue(tt,'down');cue(tw,'lock');cue(tm,'pop');
SCN('range',(t,o)=>{const r=600-300*eio(p(t,tt,tt+1));C[0].firstElementChild.style.width=C[0].firstElementChild.style.height=r+'px';place(C[0],540,1000,1,o);place(Wl,800,960,pop(t,tw),o);cplace(T[0],t,540,1150,{op:o,s:.6});[1,2].forEach(i=>cplace(T[i],t,i==1?200:880,1150,{op:o,s:.5,popT:tm+i*.2,mood:'joy'}));place(L1,540,400,pop(t,tt),o);place(L2,540,520,pop(t,tm),o)})}
// LAT
{const P=phoneC(),T=towerC(),e=edge([[300,900],[780,900]]),Pg=mk('<div style="width:40px;height:40px;border-radius:20px;background:#8b5cf6;box-shadow:0 0 20px #8b5cf6"></div>'),L=label('lower delay (latency)','tok',34),G=label('🎮 gaming · 📹 video calls','pill',30);
const td=W('lat','delay'),tg=W('lat','gaming');cue(td,'tick');cue(tg,'ding');
SCN('lat',(t,o)=>{cplace(P,t,260,1050,{op:o,s:.9});cplace(T,t,820,1100,{op:o,s:.7});drawEdge(e,t,td,o,true);const u=((t-td)*1.5)%2;place(Pg,u<1?300+480*u:780-480*(u-1),900,1,o*(t>td?1:0));place(L,540,420,pop(t,td),o);place(G,540,1300,pop(t,tg),o)})}
charOutro([[towerC(),.45],[phoneC(),.6]],"That's",'the jump.');
