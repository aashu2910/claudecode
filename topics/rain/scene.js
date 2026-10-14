const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const cloudC=()=>char(420,220,({blink,mood='happy'})=>`<g fill="#e2e8f0"><circle cx="120" cy="120" r="80"/><circle cx="220" cy="90" r="90"/><circle cx="310" cy="125" r="75"/><rect x="60" y="120" width="300" height="80" rx="40"/></g>${face(210,130,.9,{blink,mood})}`);
const dropC=()=>buddy('circle','#dbeafe','#3b82f6','',95,.8);
const dots=(n,c='#93c5fd',r=12)=>Array.from({length:n},()=>mk(`<div style="width:${r}px;height:${r}px;border-radius:${r/2}px;background:${c}"></div>`));
// HOOK
{const C=cloudC(),Q=qmark(),F=label('💧 made of water… but floating','pill',30);
const tm=W('hook','made'),tf=W('hook','float'),tr=W('hook','rain');cue(tm,'pop');cue(tr,'whoosh');
SCN('hook',(t,o)=>{cplace(C,t,540,760+Math.sin(t*1.5)*20,{op:o,s:1.6,popT:S0('hook')-.3,mood:'happy'});place(F,540,1000,pop(t,tf),o);kk(t,880,1490,{op:o,s:.55,mood:t>tr?'o':'happy',look:[-1,-1],jumpT:tr});place(Q,180,1300,pop(t,tr),o*p(t,tr,tr+.1),Math.sin(t*3)*8)})}
// RISE
{const S=buddy('circle','#fff7b0','#fbbf24','',95,.8),G=mk('<div style="width:1080px;height:200px;background:linear-gradient(#166534,#14532d)"></div>'),V=dots(14,'rgba(147,197,253,.7)',18),L=label('warm moist air rises · cools higher up','tok',30),Th=mk('<div class="card mono" style="font-size:28px">30°C ↓ … 10°C ↑</div>');
const te=W('rise','evaporates'),tr=W('rise','rises'),tc=W('rise','cools');cue(te,'up');cue(tc,'down');
SCN('rise',(t,o)=>{cplace(S,t,880,560,{op:o,s:.9,mood:'joy'});place(G,540,1450,1,o);V.forEach((v,i)=>{const u=((t-te)*.3+i/14)%1;place(v,120+(i*61)%840,1340-u*900,1,o*(t>te?1-u*.6:0))});place(L,540,380,pop(t,tr),o);place(Th,280,700,pop(t,tc),o)})}
// CONDENSE
{const Du=Array.from({length:6},()=>mk('<div style="width:16px;height:16px;border-radius:4px;background:#a8a29e"></div>')),Dr=Array.from({length:6},()=>mk('<div style="width:70px;height:70px;border-radius:35px;background:rgba(147,197,253,.6);border:3px solid #60a5fa"></div>')),L=label('vapour condenses on dust, salt, smoke','tok',30);
const tc=W('condense','condenses'),td=W('condense','dust');cue(tc,'shimmer');cue(td,'tick');
SCN('condense',(t,o)=>{const P=[[260,620],[540,560],[820,640],[320,960],[620,1000],[860,1100]];P.forEach((q,i)=>{place(Du[i],q[0],q[1],1,o*p(t,td-.6,td-.3));place(Dr[i],q[0],q[1],eio(p(t,tc+i*.15,tc+i*.15+.6)),o)});place(L,540,400,pop(t,tc),o)})}
// CLOUD
{const C=cloudC(),A=Array.from({length:5},()=>mk('<div style="font-size:60px;color:#93c5fd;font-weight:900">↑</div>')),L=label('billions of tiny droplets','tok',32),Fl=label('rising air keeps them floating','pill',30);
const tb=W('cloud','billions'),tr=W('cloud','rising');cue(tb,'pop');cue(tr,'up');
SCN('cloud',(t,o)=>{cplace(C,t,540,760,{op:o,s:1.8,popT:tb-.3,mood:'joy'});A.forEach((a,i)=>place(a,240+i*150,1150-((t*120+i*40)%160),1,o*p(t,tr,tr+.3)));place(L,540,380,pop(t,tb),o);place(Fl,540,1300,pop(t,tr),o)})}
// GROW
{const A=dropC(),B=dropC(),M=dropC(),Ic=mk('<div style="font-size:120px">❄️</div>'),L=[label('bump + merge','pill',30),label('cold clouds: ice crystals grow','tok',30)];
const tb=W('grow','bump'),tm=W('grow','merge'),ti=W('grow','ice');cue(tb,'tick');cue(tm,'pop');cue(ti,'shimmer');
SCN('grow',(t,o)=>{const u=eio(p(t,tb,tm));if(t<tm+.2){cplace(A,t,300+200*u,700,{op:o,s:.5,mood:'happy'});cplace(B,t,780-200*u,700,{op:o,s:.5,mood:'happy'})}cplace(M,t,540,720,{op:o*(t>tm?1:0),s:.5+.25*p(t,tm,tm+.4),mood:'joy',popT:tm});place(L[0],540,880,pop(t,tm),o);place(Ic,540,1120,pop(t,ti),o,t*20);place(L[1],540,1300,pop(t,ti),o)})}
// FALL
{const C=cloudC(),D=dropC(),Mn=label('~1,000,000 droplets → 1 raindrop','tok',30),G=label('gravity wins ⬇','pill',32);
const tm=W('fall','million'),th=W('fall','heavy'),tf=W('fall','falls');cue(tm,'scramble');cue(tf,'down');
SCN('fall',(t,o)=>{cplace(C,t,540,560,{op:o,s:1.2,mood:'grin'});cplace(D,t,540,620+eio(p(t,tf,tf+1.2))*780,{op:o*p(t,th-.3,th),s:.25+.35*p(t,tm,th),mood:'joy',bob:0});place(Mn,540,780,pop(t,tm),o);place(G,540,940,pop(t,th),o)})}
// SHAPE
{const S=mk('<div style="width:120px;height:120px;border-radius:60px;background:#60a5fa"></div>'),Bn=mk('<div style="width:220px;height:140px;border-radius:110px 110px 30px 30px;background:#60a5fa"></div>'),T=mk('<svg width="140" height="200"><path d="M70 10 C70 10 130 100 130 140 A60 60 0 0 1 10 140 C10 100 70 10 70 10Z" fill="#60a5fa" opacity=".4"/></svg>'),X=mk('<div style="font-size:120px;color:#f87171;font-weight:900">✕</div>'),L=[label('small: round','pill',28),label('big: bun shape','pill',28),label('not a teardrop','tok',28)];
const ts=W('shape','small'),tb=W('shape','flatten'),tt=W('shape','teardrop');cue(ts,'pop');cue(tb,'pop');cue(tt,'lock');
SCN('shape',(t,o)=>{place(S,200,800,pop(t,ts),o);place(Bn,540,800,pop(t,tb),o);place(T,880,780,pop(t,tt-.3),o);place(X,880,780,pop(t,tt),o);[200,540,880].forEach((x,i)=>place(L[i],x,1000,pop(t,[ts,tb,tt][i]),o));kk(t,540,1450,{op:o,s:.6,mood:'grin'})})}
charOutro([[cloudC(),.4],[dropC(),.55]],"That's",'rain.');
