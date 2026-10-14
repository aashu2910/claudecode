const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const vrC=()=>buddy('wide','#ede9fe','#7c3aed',`<circle cx="60" cy="110" r="30" fill="#1e1b4b"/><circle cx="140" cy="110" r="30" fill="#1e1b4b"/>`,80,.6);
const eyeScr=(dx)=>mk(`<div style="width:340px;height:260px;border-radius:20px;background:#0f172a;border:4px solid #a78bfa;position:relative;overflow:hidden"><div style="position:absolute;left:${120+dx}px;top:90px;width:90px;height:90px;border-radius:45px;background:#f472b6"></div><div style="position:absolute;left:${60+dx/3}px;top:170px;width:220px;height:60px;background:#22c55e"></div></div>`);
// HOOK
{const V=vrC(),W1=mk('<div style="font-size:150px">🏝️</div>'),L=label('just screens near your eyes','pill',30),Q=qmark();
const tp=W('hook','put'),tw=W('hook','world'),ts=W('hook','screens'),th=W('hook','how');cue(tp,'pop');cue(tw,'shimmer');cue(th,'whoosh');
SCN('hook',(t,o)=>{cplace(V,t,540,1150,{op:o,s:1.6,popT:tp-.2,mood:'joy'});place(W1,540,560,pop(t,tw),o);place(L,540,1300,pop(t,ts),o);place(Q,860,780,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// TWO
{const A=eyeScr(-20),B=eyeScr(20),L=[label('left eye','pill',28),label('right eye','pill',28)],T=label('slightly different images','tok',32);
const ts=W('two','slightly'),te=W('two','eyes');cue(ts,'pop');
SCN('two',(t,o)=>{place(A,300,800,pop(t,ts),o);place(B,780,800,pop(t,ts+.2),o);place(L[0],300,980,pop(t,ts),o);place(L[1],780,980,pop(t,ts+.2),o);place(T,540,420,pop(t,ts),o);kk(t,540,1400,{op:o,s:.6,look:[0,-1]})})}
// DEPTH
{const A=eyeScr(-20),B=eyeScr(20),M=eyeScr(0),L=label('brain combines → depth (stereoscopic 3D)','tok',28);
const tc=W('depth','combines'),ts=W('depth','stereoscopic');cue(tc,'whoosh');cue(ts,'ding');
SCN('depth',(t,o)=>{const u=eio(p(t,tc,tc+1));place(A,300+240*u,700,1,o*(1-u));place(B,780-240*u,700,1,o*(1-u));place(M,540,700,1+.2*u,o*u);place(L,540,1000,pop(t,ts),o);kk(t,540,1400,{op:o,s:.6,mood:t>ts?'grin':'o'})})}
// LENSES
{const E=mk('<div style="font-size:120px">👁️</div>'),Ln=mk('<div style="width:60px;height:300px;border-radius:50%;background:rgba(167,139,250,.4);border:4px solid #a78bfa"></div>'),S=mk('<div style="width:30px;height:360px;background:#0f172a;border:4px solid #a78bfa"></div>'),R=Array.from({length:3},(_,i)=>edge([[200,700],[540,600+i*100],[880,700]])),L=label('lenses bend light → easy focus, wide view','tok',28);
const tl=W('lenses','lenses'),tb=W('lenses','bend');cue(tl,'pop');cue(tb,'shimmer');
SCN('lenses',(t,o)=>{place(E,200,700,1,o);place(Ln,540,700,pop(t,tl),o);place(S,880,700,1,o);R.forEach((e,i)=>drawEdge(e,t,tb+i*.1,o,true));place(L,540,1050,pop(t,tb),o)})}
// TRACK
{const V=vrC(),Vw=mk('<div style="width:700px;height:300px;border-radius:20px;background:linear-gradient(90deg,#1e3a8a,#7c3aed,#be185d,#1e3a8a);background-size:200% 100%"></div>'),L=label('sensors + cameras → view updates to match','tok',28);
const ts=W('track','sensors'),tu=W('track','updates');cue(ts,'beep');cue(tu,'whoosh');
SCN('track',(t,o)=>{const yaw=t>ts?Math.sin(t*1.5)*25:0;cplace(V,t,540,1200,{op:o,s:1.3,r:yaw,mood:'joy'});Vw.firstElementChild.style.backgroundPosition=`${50+yaw*2}% 0`;place(Vw,540,650,1,o);place(L,540,400,pop(t,tu),o)})}
// FAST
{const N=mk('<div class="big" style="font-size:110px"><span class="acc">90+</span> fps</div>'),L=label('lag between move and image → motion sickness 🤢','pill',28);
const tn=W('fast','ninety'),tl=W('fast','lag');cue(tn,'ding');cue(tl,'down');
SCN('fast',(t,o)=>{place(N,540,600,pop(t,tn),o);place(L,540,820,pop(t,tl),o);kk(t,540,1300,{op:o,s:.7,mood:t>tl?'worry':'grin',r:t>tl?Math.sin(t*6)*5:0})})}
// HANDS
{const H=mk('<div style="font-size:150px">🎮</div>'),Ha=mk('<div style="font-size:150px">🖐️</div>'),L=label('reach out and touch that world','tok',32);
const tc=W('hands','controllers'),th=W('hands','hands');cue(tc,'pop');cue(th,'pop');
SCN('hands',(t,o)=>{place(H,330,700,pop(t,tc),o);place(Ha,750,700,pop(t,th),o,Math.sin(t*3)*10);place(L,540,1000,pop(t,th+.4),o)})}
charOutro([[vrC(),.7],[buddy('circle','#ede9fe','#a78bfa','',95,.8),.55]],'A world in front','of your eyes.');
