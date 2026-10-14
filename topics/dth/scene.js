const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const satC=()=>buddy('rect','#fef3c7','#d97706',`<rect x="-60" y="80" width="60" height="40" fill="#1e3a8a"/><rect x="200" y="80" width="60" height="40" fill="#1e3a8a"/>`,95,.8);
const dishC=()=>char(260,260,({blink,mood='happy'})=>`<path d="M30 40 Q200 80 160 230" fill="#e5e7eb" stroke="#9ca3af" stroke-width="6"/><line x1="100" y1="140" x2="230" y2="90" stroke="#6b7280" stroke-width="6"/><rect x="215" y="75" width="34" height="34" rx="6" fill="#f59e0b"/><rect x="120" y="230" width="20" height="30" fill="#6b7280"/>${face(95,140,.6,{blink,mood,cheek:false})}`);
const earth=()=>mk('<div style="width:520px;height:520px;border-radius:260px;background:radial-gradient(circle at 35% 35%,#1e5f8a,#0b2236 70%)"></div>');
// HOOK
{const D=dishC(),S=satC(),e=edge([[860,380],[640,900]]),Ch=label('📺 hundreds of channels','tok',34),Q=qmark();
const tn=W('hook','never'),th=W('hook','hundreds'),tw=W('hook','how');cue(tn,'tick');cue(th,'shimmer');cue(tw,'whoosh');
SCN('hook',(t,o)=>{cplace(S,t,860,440,{op:o,s:.8,mood:'joy'});cplace(D,t,540,1150,{op:o,s:1.4,popT:S0('hook')-.3,mood:'grin'});drawEdge(e,t,th,o,true);place(Ch,540,1300,pop(t,th),o);kk(t,180,1490,{op:o,s:.5,mood:t>tw?'o':'happy',jumpT:tw})})}
// GEO
{const E=earth(),S=satC(),Or=mk('<div style="width:860px;height:860px;border-radius:430px;border:3px dashed rgba(245,158,11,.5)"></div>'),A=label('~36,000 km above the equator','tok',30),L=label('orbits as fast as Earth spins → looks fixed','pill',28);
const ts=W('geo','sit'),tc=W('geo','circle'),tf=W('geo','fixed');cue(ts,'pop');cue(tc,'whoosh');cue(tf,'ding');
SCN('geo',(t,o)=>{const a=(t-tc)*.5;place(E,540,860,1,o,a*57);place(Or,540,860,1,o);cplace(S,t,540+430*Math.cos(-1.2),860+430*Math.sin(-1.2)+50,{op:o,s:.5,mood:'joy'});place(A,540,380,pop(t,ts),o);place(L,540,1380,pop(t,tf),o)})}
// UPLINK
{const St=node('tower','Earth station'),S=satC(),e=edge([[260,1100],[800,520]]),Ps=Array.from({length:4},()=>mk('<div style="width:26px;height:26px;border-radius:13px;background:#f59e0b;box-shadow:0 0 14px #f59e0b"></div>')),L=label('all channels beamed UP','tok',32);
const tb=W('uplink','beams'),te=W('uplink','earth');cue(tb,'whoosh');cue(te,'pop');
SCN('uplink',(t,o)=>{place(St,260,1150,pop(t,te-.3),o);cplace(S,t,800,580,{op:o,s:.8,mood:t>tb+1?'joy':'happy'});drawEdge(e,t,tb,o,true);Ps.forEach((x,i)=>place(x,...lerpPath(e.pts,((t-tb)*.4+i/4)%1),1,o*(t>tb?1:0)));place(L,540,380,pop(t,tb),o)})}
// DOWN
{const S=satC(),B=mk('<div style="width:900px;height:800px;background:radial-gradient(ellipse at 50% 0,rgba(245,158,11,.45),transparent 70%);clip-path:polygon(45% 0,55% 0,100% 100%,0 100%)"></div>'),M=mk('<div style="font-size:300px;opacity:.5">🗺️</div>'),L=label('whole country at once','tok',32);
const ts=W('down','sends'),tc=W('down','country');cue(ts,'whoosh');cue(tc,'ding');
SCN('down',(t,o)=>{cplace(S,t,540,460,{op:o,s:.8,mood:'joy'});place(B,540,900,1,o*p(t,ts,ts+.6));place(M,540,1150,pop(t,tc-.5),o);place(L,540,1400,pop(t,tc),o)})}
// DISH
{const D=dishC(),R=Array.from({length:5},(_,i)=>edge([[0,480+i*80],[300,480+i*80],[640,700]])),L1=label('curved dish focuses the faint signal','pill',28),L2=label('LNB: collects + boosts','tok',32);
const tc=W('dish','curved'),tl=W('dish','lnb'),tb=W('dish','boosts');cue(tc,'shimmer');cue(tl,'pop');cue(tb,'up');
SCN('dish',(t,o)=>{R.forEach((e,i)=>drawEdge(e,t,tc+i*.1,o,true));cplace(D,t,560,1050,{op:o,s:1.6,mood:t>tb?'grin':'happy'});place(L1,540,380,pop(t,tc),o);place(L2,780,1250,pop(t,tl),o)})}
// BOX
{const B=buddy('wide','#374151','#111827',`<rect x="140" y="95" width="40" height="10" rx="4" fill="#22c55e"/>`,110,.7),TV=mk('<div style="width:440px;height:280px;border-radius:20px;background:#0f172a;border:8px solid #4b5563;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:16px" id="tvg">'+Array(6).fill('<div class="ch" style="border-radius:8px"></div>').join('')+'</div>'),e=edge([[200,1300],[200,1100],[440,1100]]),L=label('🔓 only the channels you paid for','tok',30);
const td=W('box','decodes'),tu=W('box','unlocks');cue(td,'scramble');cue(tu,'unlock');
SCN('box',(t,o)=>{drawEdge(e,t,S0('box'),o,true);cplace(B,t,560,1200,{op:o,s:1.2,mood:t>tu?'grin':'happy'});$('tvg').querySelectorAll('.ch').forEach((c,i)=>c.style.background=t>tu&&i<4?['#f59e0b','#ef4444','#3b82f6','#22c55e'][i]:'#1f2937');place(TV,540,640,1,o);place(L,540,960,pop(t,tu),o)})}
// RAIN
{const D=dishC(),C=mk('<div style="font-size:110px">🧭</div>'),S=label('points roughly SOUTH','pill',30),Rn=Array.from({length:24},()=>mk('<div style="width:4px;height:50px;background:rgba(147,197,253,.6)"></div>')),F=label('🌧️ heavy rain → picture freezes','tok',30);
const tp=W('rain','point'),th=W('rain','heavy'),tf=W('rain','freezes');cue(tp,'tick');cue(th,'down');cue(tf,'lock');
SCN('rain',(t,o)=>{place(C,300,460,pop(t,tp),o);place(S,700,460,pop(t,tp),o);cplace(D,t,540,1150,{op:o,s:1.3,mood:t>tf?'worry':'happy'});Rn.forEach((r,i)=>place(r,(i*47)%1080,600+((t*900+i*97)%700),1,o*p(t,th,th+.3),15));place(F,540,1320,pop(t,tf),o)})}
charOutro([[satC(),.55],[dishC(),.5]],'TV','from space.');
