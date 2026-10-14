const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const drum=()=>mk('<svg width="420" height="420" viewBox="0 0 420 420"><circle cx="210" cy="210" r="190" fill="#1e3a8a" stroke="#60a5fa" stroke-width="8"/><g class="ch"></g></svg>');
function charges(D,t,rot,f){let s='';for(let i=0;i<16;i++){const a=(i*22.5+rot)*Math.PI/180;const keep=f?f(i):true;s+=`<text x="${210+160*Math.cos(a)-10}" y="${210+160*Math.sin(a)+10}" font-size="30" font-weight="900" fill="${keep?'#fff':'#60a5fa'}" font-family="Inter">${keep?'−':'·'}</text>`}D.querySelector('.ch').innerHTML=s}
const prC=()=>buddy('wide','#e5e7eb','#9ca3af',`<rect x="40" y="30" width="120" height="20" rx="4" fill="#fff"/>`,110,.7);
// HOOK
{const P=prC(),Pg=mk('<div style="width:300px;height:400px;background:#f8fafc;border-radius:6px;padding:30px"><div style="height:16px;background:#111;margin:12px 0;width:80%"></div><div style="height:16px;background:#111;margin:12px 0"></div><div style="height:16px;background:#111;margin:12px 0;width:60%"></div></div>'),H=label('🔥 warm paper','pill',30),Q=qmark();
const ts=W('hook','seconds'),tw=W('hook','warm'),tl=W('hook','laser',1);cue(ts,'whoosh');cue(tw,'up');cue(tl,'whoosh');
SCN('hook',(t,o)=>{cplace(P,t,540,1250,{op:o,s:1.5,popT:S0('hook')-.3,mood:'grin'});place(Pg,540,kf(t,[[ts-.5,1150],[ts+.5,720]]),1,o*p(t,ts-.5,ts-.2));place(H,820,560,pop(t,tw),o);place(Q,220,600,pop(t,tl),o*p(t,tl,tl+.1),Math.sin(t*3)*8)})}
// CHARGE
{const D=drum(),L=label('even charge all over','tok',32);
const tr=W('charge','rotating'),te=W('charge','even');cue(tr,'pop');cue(te,'shimmer');
SCN('charge',(t,o)=>{charges(D,t,t*30,i=>t>te);place(D,540,820,pop(t,tr),o);place(L,540,400,pop(t,te),o)})}
// LASER
{const D=drum(),Mr=mk('<div style="width:80px;height:80px;background:#93c5fd;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)"></div>'),Bm=mk('<div style="width:6px;height:420px;background:#ef4444;box-shadow:0 0 16px #ef4444"></div>'),L=label('laser draws your page invisibly','tok',30);
const tl=W('laser','laser'),ts=W('laser','sweeps'),th=W('laser','hits');cue(tl,'pop');cue(ts,'whoosh');cue(th,'tick');
SCN('laser',(t,o)=>{charges(D,t,t*30,i=>!(t>th&&(i%4==1||i%5==2)));place(D,540,950,1,o);place(Mr,540,420,pop(t,tl),o,t*400);place(Bm,540+Math.sin(t*6)*120,640,1,o*p(t,ts,ts+.2),Math.sin(t*6)*15);place(L,540,1250,pop(t,th),o)})}
// TONER
{const D=drum(),Pw=Array.from({length:20},()=>mk('<div style="width:14px;height:14px;border-radius:7px;background:#111;border:2px solid #9ca3af"></div>')),L=label('toner sticks only where the laser drew','tok',30);
const tt=W('toner','toner'),ts=W('toner','sticks');cue(tt,'scramble');cue(ts,'lock');
SCN('toner',(t,o)=>{charges(D,t,t*30,i=>!(i%4==1||i%5==2));place(D,540,900,1,o);Pw.forEach((w,i)=>{const u=p(t,tt+i*.05,ts+i*.05);place(w,540+((i*71)%400)-200,(450*(1-u)+720*u),1,o*(t>tt?1:0))});place(L,540,1250,pop(t,ts),o)})}
// TRANSFER
{const D=drum(),Pg=mk('<div style="width:600px;height:30px;background:#f8fafc;border-radius:4px"></div>'),Dots=Array.from({length:10},()=>mk('<div style="width:14px;height:14px;border-radius:7px;background:#111"></div>')),L=label('charged paper pulls the toner off','tok',30);
const tp=W('transfer','paper'),tl=W('transfer','pull');cue(tp,'pop');cue(tl,'whoosh');
SCN('transfer',(t,o)=>{place(D,540,700,.8,o);place(Pg,540+((t-tp)*200)%200-100,1000,1,o*p(t,tp,tp+.3));Dots.forEach((d,i)=>{const u=p(t,tl+i*.08,tl+i*.08+.5);place(d,400+i*30,840+u*150,1,o*(t>tl?1:0))});place(L,540,1250,pop(t,tl),o)})}
// FUSE
{const R=[0,1].map(()=>mk('<div style="width:520px;height:110px;border-radius:55px;background:linear-gradient(#fdba74,#ea580c)"></div>')),Pg=mk('<div style="width:600px;height:20px;background:#f8fafc"></div>'),L=[label('hot rollers melt + press the toner','tok',30),label('🔥 that\'s why pages are warm','pill',30)];
const th=W('fuse','hot'),tw=W('fuse','warm');cue(th,'up');cue(tw,'ding');
SCN('fuse',(t,o)=>{place(R[0],540,720,1,o);place(Pg,540,800,1,o);place(R[1],540,880,1,o);place(L[0],540,420,pop(t,th),o);place(L[1],540,1150,pop(t,tw),o)})}
// VS INKJET
{const A=mk('<div class="card" style="width:420px;text-align:center;font-size:30px">💧 inkjet<br><span class="dim">sprays liquid drops</span></div>'),B=mk('<div class="card on" style="width:420px;text-align:center;font-size:30px">⚡ laser<br><span class="dim">faster · cheaper per page for text</span></div>');
const ti=W('vsink','inkjets'),tl=W('vsink','laser');cue(ti,'pop');cue(tl,'ding');
SCN('vsink',(t,o)=>{place(A,540,600,pop(t,ti),o);place(B,540,850,pop(t,tl),o);kk(t,540,1300,{op:o,s:.6,mood:'grin'})})}
charOutro([[prC(),.6],[buddy('circle','#dbeafe','#60a5fa','',95,.8),.55]],'A page','in seconds.');
