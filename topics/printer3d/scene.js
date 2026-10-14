const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const nozzle=()=>mk('<div style="width:80px;height:120px;background:#9ca3af;clip-path:polygon(0 0,100% 0,100% 60%,65% 100%,35% 100%,0 60%)"></div>');
const layers=(n)=>Array.from({length:n},()=>mk('<div style="height:22px;border-radius:6px;background:#fb923c"></div>'));
// HOOK
{const It=['🧸','📱','⚙️'].map(e=>mk(`<div style="font-size:120px">${e}</div>`)),Sp=mk('<div style="width:200px;height:200px;border-radius:100px;border:30px solid #fb923c"></div>'),Q=qmark();
const tt=W('hook','toy'),ts=W('hook','stand'),tp=W('hook','part'),tsp=W('hook','spool'),th=W('hook','how');[tt,ts,tp].forEach(x=>cue(x,'pop'));cue(th,'whoosh');
SCN('hook',(t,o)=>{[tt,ts,tp].forEach((x,i)=>place(It[i],240+i*300,560,pop(t,x),o));place(Sp,540,1000,pop(t,tsp),o,t*60);place(Q,860,1300,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8);kk(t,180,1490,{op:o,s:.5,mood:t>th?'o':'happy'})})}
// MODEL
{const M=mk('<div style="font-size:200px">🏺</div>'),S=Array.from({length:10},()=>mk('<div style="width:420px;height:6px;background:#fb923c"></div>')),L=label('slicer cuts it into thin layers','tok',30);
const tm=W('model','model'),ts=W('model','slicer');cue(tm,'pop');cue(ts,'scramble');
SCN('model',(t,o)=>{place(M,540,780,pop(t,tm),o);S.forEach((s,i)=>place(s,540,640+i*30,1,o*p(t,ts+i*.08,ts+i*.08+.2)));place(L,540,1150,pop(t,ts),o)})}
// MELT
{const N=nozzle(),F=mk('<div style="width:20px;height:400px;background:#fb923c"></div>'),T=mk('<div class="big" style="font-size:90px">~<span class="acc">200</span>°C</div>'),D=mk('<div style="width:24px;height:24px;border-radius:12px;background:#fb923c;box-shadow:0 0 16px #fb923c"></div>');
const tp=W('melt','push'),tt=W('melt','two'),tm=W('melt','melts');cue(tp,'tick');cue(tt,'up');cue(tm,'shimmer');
SCN('melt',(t,o)=>{place(F,540,560-((t-tp)*40%40),1,o*p(t,tp,tp+.3));place(N,540,840,1,o);N.firstElementChild.style.background=t>tt?'#f97316':'#9ca3af';place(T,820,840,pop(t,tt),o);place(D,540,950+((t-tm)*80%120),1,o*(t>tm?1:0))})}
// DRAW
{const N=nozzle(),Pth=[[300,900],[780,900],[780,1100],[300,1100],[300,900]],e=edge(Pth),L=label('tracing one layer','tok',32);
const tm=W('draw','moves'),tt=W('draw','tracing');cue(tm,'whoosh');cue(tt,'pop');
SCN('draw',(t,o)=>{const u=p(t,tm,S1('draw')-.3);e.pl.setAttribute('stroke-width','16');drawEdge(e,t,tm,o,true);const q=lerpPath(Pth,u);place(N,q[0],q[1]-80,1,o);place(L,540,420,pop(t,tt),o)})}
// STACK
{const N=nozzle(),Ls=layers(10),L=label('up a fraction of a mm → next layer fuses on','tok',28);
const tu=W('stack','moves'),tn=W('stack','next'),tf=W('stack','fuses');cue(tu,'tick');cue(tf,'ding');
SCN('stack',(t,o)=>{const n=Math.min(10,Math.max(1,Math.floor((t-tu)*3)+1));Ls.forEach((l,i)=>{l.firstElementChild.style.width='420px';place(l,540,1200-i*26,1,o*(i<n?1:0))});place(N,540+Math.sin(t*6)*180,1200-n*26-70,1,o);place(L,540,420,pop(t,tn),o)})}
// INFILL
{const Hx=mk(`<svg width="400" height="400" viewBox="0 0 400 400"><rect x="10" y="10" width="380" height="380" rx="20" fill="none" stroke="#fb923c" stroke-width="10"/>${Array.from({length:12},(_,i)=>{const x=60+(i%4)*90+(Math.floor(i/4)%2)*45,y=80+Math.floor(i/4)*110;return `<polygon points="${[0,1,2,3,4,5].map(k=>`${x+30*Math.cos(k*Math.PI/3)},${y+30*Math.sin(k*Math.PI/3)}`).join(' ')}" fill="none" stroke="#fdba74" stroke-width="5"/>`}).join('')}</svg>`),L=[label('honeycomb inside → saves plastic','tok',30),label('overhangs → temporary supports','pill',30)];
const ti=W('infill','inside'),to=W('infill','overhangs');cue(ti,'pop');cue(to,'tick');
SCN('infill',(t,o)=>{place(Hx,540,800,pop(t,ti),o);place(L[0],540,420,pop(t,ti),o);place(L[1],540,1150,pop(t,to),o)})}
// TIME
{const C=mk('<div style="font-size:150px">⏳</div>'),L=label('small objects → a few hours','tok',32);
const tl=W('time','layer'),th=W('time','hours');cue(th,'ding');
SCN('time',(t,o)=>{place(C,540,700,pop(t,tl),o,Math.floor(t)%2*180);place(L,540,950,pop(t,th),o);kk(t,540,1350,{op:o,s:.6,mood:'flat'})})}
charOutro([[buddy('rect','#ffedd5','#fb923c','',95,.8),.55],[buddy('circle','#fed7aa','#ea580c','',95,.8),.55]],'Building','from nothing.');
