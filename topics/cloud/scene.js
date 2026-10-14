const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const cloudC=()=>char(420,220,({blink,mood='happy'})=>`<g fill="#e0f2fe"><circle cx="120" cy="120" r="80"/><circle cx="220" cy="90" r="90"/><circle cx="310" cy="125" r="75"/><rect x="60" y="120" width="300" height="80" rx="40"/></g>${face(210,130,.9,{blink,mood})}`);
const fileC=()=>buddy('tall','#ffffff','#bae6fd','',90,.8);
const dc=()=>mk('<div style="width:200px;height:240px;border-radius:14px;background:#1e293b;border:4px solid #38bdf8;display:flex;flex-direction:column;gap:12px;padding:20px">'+Array(5).fill('<div style="height:20px;border-radius:5px;background:#334155"></div>').join('')+'</div>');
// HOOK
{const P=mk('<div style="font-size:120px">📱</div>'),W1=mk('<div style="width:500px;height:200px;border-radius:30px;background:rgba(56,189,248,.3)"></div>'),C=cloudC(),F=fileC(),Q=qmark();
const ts=W('hook','save'),td=W('hook','drop'),tsf=W('hook','safe');cue(ts,'whoosh');cue(td,'down');cue(tsf,'ding');
SCN('hook',(t,o)=>{cplace(C,t,540,560,{op:o,s:1,mood:t>tsf?'joy':'happy'});cplace(F,t,540,kf(t,[[ts,1000],[ts+1,520]]),{op:o*p(t,ts-.3,ts),s:.5,bob:0});place(W1,540,1300,1,o*p(t,td,td+.3));place(P,540,kf(t,[[td,1000],[td+.6,1300]]),1,o);place(Q,860,1000,pop(t,tsf+.5),o*p(t,tsf+.5,tsf+.6),Math.sin(t*3)*8)})}
// UPLOAD
{const F=fileC(),D=[dc(),dc(),dc()],e=edge([[200,900],[540,600]]),L=label('🔒 encrypted → data centres','tok',30);
const tt=W('upload','travels'),td=W('upload','data');cue(tt,'whoosh');cue(td,'pop');
SCN('upload',(t,o)=>{cplace(F,t,200,1000,{op:o,s:.6});drawEdge(e,t,tt,o,true);D.forEach((d,i)=>place(d,560+i*170,700,pop(t,td+i*.15),o));place(L,540,400,pop(t,tt),o)})}
// CHUNKS
{const F=fileC(),Ch=Array.from({length:6},(_,i)=>mk(`<div style="width:100px;height:70px;border-radius:10px;background:#38bdf8;opacity:${.6+i*.06}"></div>`)),L=label('split into chunks','tok',32);
const ts=W('chunks','split');cue(ts,'scramble');
SCN('chunks',(t,o)=>{const u=eio(p(t,ts,ts+.8));cplace(F,t,540,800,{op:o*(1-u),s:1});Ch.forEach((c,i)=>place(c,540+(i-2.5)*150*u,760+((i%2)*120-60)*u,1,o*u));place(L,540,1100,pop(t,ts),o)})}
// COPIES
{const D=[dc(),dc(),dc()],X=mk('<div style="font-size:120px;color:#f87171;font-weight:900">✕</div>'),L=[label('stored more than once','tok',30),label('one drive dies → another copy takes over','pill',28)];
const tm=W('copies','more'),td=W('copies','dies');cue(tm,'pop');cue(td,'down');
SCN('copies',(t,o)=>{D.forEach((d,i)=>place(d,220+i*320,800,pop(t,tm+i*.2),o*(i==0&&t>td?.4:1)));place(X,220,800,pop(t,td),o);place(L[0],540,420,pop(t,tm),o);place(L[1],540,1120,pop(t,td),o)})}
// ENCRYPT
{const D=dc(),Lk=mk('<div style="font-size:120px">🔒</div>'),L=label('encrypted at rest → stolen drive is useless','tok',28);
const te=W('encrypt','encrypt'),ts=W('encrypt','stolen');cue(te,'lock');cue(ts,'tick');
SCN('encrypt',(t,o)=>{place(D,540,820,1,o);place(Lk,540,820,pop(t,te),o);place(L,540,1120,pop(t,ts),o)})}
// SYNC
{const C=cloudC(),Dv=['📱','💻'].map(e=>mk(`<div style="font-size:100px">${e}</div>`)),E=[edge([[260,1100],[480,640]]),edge([[600,640],[820,1100]])],Ch=label('only the changes uploaded','tok',30);
const te=W('sync','edit'),tc=W('sync','changes'),tu=W('sync','updates');cue(tc,'whoosh');cue(tu,'ding');
SCN('sync',(t,o)=>{cplace(C,t,540,620,{op:o,s:.8,mood:'grin'});place(Dv[0],260,1150,1,o);place(Dv[1],820,1150,1,o);drawEdge(E[0],t,tc,o,true);drawEdge(E[1],t,tu,o,true);place(Ch,540,1350,pop(t,tc),o)})}
// YOU
{const L=[label('🔑 weakest link: your password','pill',30),label('📲 turn on 2FA','tok',34)];
const tw=W('you','weakest'),tt=W('you','two');cue(tw,'down');cue(tt,'ding');
SCN('you',(t,o)=>{place(L[0],540,600,pop(t,tw),o);place(L[1],540,760,pop(t,tt),o);kk(t,540,1300,{op:o,s:.7,mood:'grin',jumpT:tt})})}
charOutro([[cloudC(),.4],[fileC(),.6]],'Your files,','somewhere safe.');
