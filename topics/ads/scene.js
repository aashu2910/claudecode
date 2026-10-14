const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const ad=()=>mk('<div class="card on" style="font-size:32px">👟 <span class="acc">SALE</span> · Running shoes</div>');
// HOOK
{const B1=bubble('Need new shoes 👟',30),P=phoneC(),A=ad(),M=mk('<div style="font-size:90px">🎤❓</div>');
const tt=W('hook','talk'),ta=W('hook','ad'),tl=W('hook','listening'),tn=W('hook','probably');cue(tt,'pop');cue(ta,'ding');cue(tl,'whoosh');
SCN('hook',(t,o)=>{place(B1,360,480,pop(t,tt),o);cplace(P,t,540,1200,{op:o,s:1.3,mood:t>tl?'o':'happy'});place(A,540,760,pop(t,ta),o);place(M,860,520,pop(t,tl),o)})}
// LISTEN
{const M=mk('<div style="font-size:130px">🎤</div>'),X=mk('<div style="font-size:150px;color:#f87171;font-weight:900">✕</div>'),L=[label('no evidence found of secret recording for ads','pill',28),label('simpler explanations ↓','tok',32)];
const tr=W('listen','researchers'),te=W('listen','evidence'),ts=W('listen','simpler');cue(te,'lock');cue(ts,'ding');
SCN('listen',(t,o)=>{place(M,540,700,pop(t,tr),o);place(X,540,700,pop(t,te),o);place(L[0],540,950,pop(t,te),o);place(L[1],540,1080,pop(t,ts),o)})}
// TRACKING
{const S=['👟 shoe site','📰 news site','🎮 game app'].map(s=>mk(`<div class="card" style="width:300px;text-align:center;font-size:30px">${s}</div>`)),Px=mk('<div style="width:20px;height:20px;background:#f59e0b;box-shadow:0 0 14px #f59e0b"></div>'),A=ad(),L=label('invisible trackers follow you','tok',30);
const ti=W('tracking','invisible'),tf=W('tracking','follow');cue(ti,'pop');cue(tf,'whoosh');
SCN('tracking',(t,o)=>{S.forEach((s,i)=>place(s,540,500+i*230,1,o));const k=Math.min(2,Math.floor(Math.max(0,t-tf)*1.2));place(Px,780,500+k*230,1,o*p(t,ti,ti+.3));place(A,540,1260,pop(t,tf+1.5),o);place(L,540,330,pop(t,ti),o)})}
// LOCATION
{const Pin=mk('<div style="font-size:120px">📍</div>'),St=mk('<div style="font-size:120px">🏬</div>'),L=label('location access → "visited a shoe store"','tok',28);
const tl=W('location','location'),tv=W('location','visited');cue(tl,'pop');cue(tv,'beep');
SCN('location',(t,o)=>{place(St,540,800,1,o);place(Pin,540,kf(t,[[tl,450],[tv,650]]),1,o*p(t,tl-.3,tl));place(L,540,1100,pop(t,tv),o)})}
// FRIENDS
{const A=phoneC(),B=phoneC(),S=label('🔍 friend searched "shoes"','pill',30),G=label('grouped together → similar ads','tok',30),e=edge([[300,1000],[780,1000]]);
const ts=W('friends','searched'),tg=W('friends','grouped');cue(ts,'tick');cue(tg,'whoosh');
SCN('friends',(t,o)=>{cplace(A,t,300,1100,{op:o,s:.8,mood:'happy'});cplace(B,t,780,1100,{op:o,s:.8,mood:'grin'});place(S,780,700,pop(t,ts),o);drawEdge(e,t,tg,o,true);place(G,540,1300,pop(t,tg),o)})}
// AUCTION
{const B=['Brand A ₹2','Brand B ₹3.5','Brand C ₹2.8'].map(s=>label(s,'pill',30)),W1=label('🏆 winner shown to you','tok',32),T=mk('<div class="big" style="font-size:80px">~<span class="acc">milliseconds</span></div>');
const tb=W('auction','bid'),ts=W('auction','split');cue(tb,'scramble');cue(ts,'ding');
SCN('auction',(t,o)=>{place(T,540,420,pop(t,ts),o);B.forEach((b,i)=>place(b,540,640+i*120,pop(t,tb+i*.2),o*(t>ts+.5&&i!=1?.4:1)));place(W1,540,1100,pop(t,ts+.5),o)})}
// CONTROL
{const C=['🚫 limit ad tracking','🎯 turn off ad personalisation','📍 deny location to apps that don\'t need it'].map(s=>label(s,'pill',28));
const ts=[W('control','limit'),W('control','turn'),W('control','deny')];ts.forEach(x=>cue(x,'tick'));
SCN('control',(t,o)=>{ts.forEach((x,i)=>place(C[i],540,520+i*150,pop(t,x),o));kk(t,540,1350,{op:o,s:.7,mood:'grin'})})}
charOutro([[phoneC(),.6],[buddy('circle','#fef3c7','#f59e0b','',95,.8),.55]],'Not magic,','just data.');
