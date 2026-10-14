const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const massBox=(id)=>mk(`<div style="width:500px;height:300px;border:5px solid #f59e0b;border-radius:20px;position:relative"><div id="${id}" style="position:absolute;left:200px;top:100px;width:100px;height:100px;border-radius:16px;background:#f59e0b"></div><svg width="500" height="300" style="position:absolute;left:0;top:0"><path class="sl" stroke="#fcd34d" stroke-width="5" fill="none"/><path class="sr" stroke="#fcd34d" stroke-width="5" fill="none"/></svg></div>`);
function springs(B,dx){const l=200+dx,r=300+dx;let a='M0 150',b=`M${r} 150`;for(let i=1;i<=8;i++){a+=` L${l*i/8} ${150+(i%2?20:-20)}`;b+=` L${r+(500-r)*i/8} ${150+(i%2?20:-20)}`}B.querySelector('.sl').setAttribute('d',a);B.querySelector('.sr').setAttribute('d',b)}
// HOOK
{const P=phoneC(),C=mk('<div style="font-size:100px">🏎️</div>'),Q=qmark();
const tt=W('hook','turn'),tr=W('hook','rotates'),tg=W('hook','game'),tf=W('hook','feel');cue(tr,'whoosh');cue(tg,'pop');cue(tf,'whoosh');
SCN('hook',(t,o)=>{cplace(P,t,540,1100,{op:o,s:1.6,popT:S0('hook')-.3,r:-90*eio(p(t,tt,tr))+(t>tg?Math.sin(t*3)*15:0),mood:'grin'});place(C,540+(t>tg?Math.sin(t*3)*200:0),480,pop(t,tg),o);place(Q,860,1350,pop(t,tf),o*p(t,tf,tf+.1),Math.sin(t*3)*8)})}
// MEMS
{const Ch=node('chip','MEMS chip'),Z=mk(`<div style="width:600px;height:360px;border-radius:30px;border:5px solid #f59e0b;background:#1c1917;display:grid;grid-template-columns:repeat(10,1fr);gap:10px;padding:30px">${Array(30).fill('<div style="background:#78716c;border-radius:4px"></div>').join('')}</div>`),L=label('thinner than a hair','pill',30);
const tc=W('mems','chip'),tm=W('mems','mems'),tt=W('mems','thinner');cue(tc,'pop');cue(tm,'shimmer');
SCN('mems',(t,o)=>{place(Ch,540,420,pop(t,tc),o);place(Z,540,850,pop(t,tm),o);place(L,540,1150,pop(t,tt),o)})}
// ACCEL
{const B=massBox('am'),L=[label('tiny mass on springs','pill',30),label('shift → measured electrically','tok',30)];
const tm=W('accel','mass'),ts=W('accel','shifts');cue(tm,'pop');cue(ts,'whoosh');
SCN('accel',(t,o)=>{const dx=t>ts?Math.sin((t-ts)*4)*70:0;$('am').style.left=(200+dx)+'px';springs(B,dx);place(B,540,800,1,o);place(L[0],540,420,pop(t,tm),o);place(L[1],540,1100,pop(t,ts),o)})}
// GRAVITY
{const P=phoneC(),G=mk('<div style="font-size:120px;font-weight:900" class="acc">↓</div>'),L=label('gravity → knows which way is down','tok',30);
const tg=W('gravity','gravity'),tr=W('gravity','rotates');cue(tg,'down');cue(tr,'whoosh');
SCN('gravity',(t,o)=>{place(G,540,450,pop(t,tg),o);cplace(P,t,540,1150,{op:o,s:1.4,r:-90*eio(p(t,tr,tr+.6)),mood:'grin'});place(L,540,1350,pop(t,tg+.4),o)})}
// GYRO
{const V=mk('<div style="width:120px;height:120px;border-radius:20px;background:#f59e0b"></div>'),Ar=mk('<div style="font-size:90px;font-weight:900;color:#fde047">→</div>'),L=[label('vibrating part','pill',30),label('twist → pushed sideways → rotation speed','tok',28)];
const tv=W('gyro','vibrates'),tt=W('gyro','twist'),tr=W('gyro','rotating');cue(tv,'scramble');cue(tt,'whoosh');cue(tr,'ding');
SCN('gyro',(t,o)=>{const vib=t>tv?Math.sin(t*40)*20:0,side=t>tt?Math.sin(t*3)*60:0;place(V,540+side,800+vib,1,o,t>tt?(t-tt)*30:0);place(Ar,780,800,1,o*p(t,tt,tt+.3));place(L[0],540,420,pop(t,tv),o);place(L[1],540,1150,pop(t,tr),o)})}
// USES
{const U=['👣 steps','🎮 games','📷 steady camera','🧭 maps facing'].map(s=>label(s,'pill',34));
const ts=[W('uses','steps'),W('uses','games'),W('uses','camera'),W('uses','maps')];ts.forEach(x=>cue(x,'pop'));
SCN('uses',(t,o)=>{ts.forEach((x,i)=>place(U[i],(i%2?780:300),600+Math.floor(i/2)*200,pop(t,x),o));kk(t,540,1350,{op:o,s:.7,mood:'grin',jumpT:ts[3]})})}
// COMPASS
{const C=mk('<div style="font-size:160px">🧭</div>'),L=label('magnetometer = digital compass','tok',32),E=label("senses Earth's magnetic field 🌍",'pill',30);
const tm=W('compass','magnetometer'),te=W('compass','earth');cue(tm,'pop');cue(te,'shimmer');
SCN('compass',(t,o)=>{place(C,540,680,pop(t,tm-.3),o,Math.sin(t*2)*20);place(L,540,920,pop(t,tm),o);place(E,540,1040,pop(t,te),o)})}
charOutro([[phoneC(),.6],[buddy('rect','#fef3c7','#f59e0b','',95,.8),.55]],'Your phone feels','every move.');
