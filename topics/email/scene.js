const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const envC=()=>char(260,180,({blink,mood='happy'})=>`<rect x="10" y="10" width="240" height="160" rx="20" fill="#f8fafc"/><path d="M10 20 L130 100 L250 20" stroke="#60a5fa" stroke-width="8" fill="none"/>${face(130,130,.6,{blink,mood,cheek:false})}`);
const srv=(l)=>node('server',l,140);
// HOOK
{const E=envC(),G=mk('<div style="font-size:150px">🌍</div>'),Q=qmark();
const ts=W('hook','send'),tl=W('hook','lands'),tr=W('hook','route');cue(ts,'whoosh');cue(tl,'ding');cue(tr,'whoosh');
SCN('hook',(t,o)=>{place(G,540,800,1,o,t*10);const u=eio(p(t,ts,tl));cplace(E,t,200+680*u,800-300*Math.sin(u*Math.PI),{op:o,s:.6,mood:'joy',bob:0});place(Q,540,1250,pop(t,tr),o*p(t,tr,tr+.1),Math.sin(t*3)*8)})}
// OUT
{const A=node('phone','Your app',140),S=srv('Outgoing server'),e=edge([[260,800],[820,800]]),E=envC(),L=label('SMTP','tok',36);
const th=W('out','hands'),ts=W('out','smtp');cue(th,'whoosh');cue(ts,'pop');
SCN('out',(t,o)=>{place(A,260,800,1,o);place(S,820,800,pop(t,th-.2),o);drawEdge(e,t,th,o,true);cplace(E,t,260+560*eio(p(t,th,th+1.2)),680,{op:o,s:.45,bob:0});place(L,540,1000,pop(t,ts),o)})}
// MX
{const Ad=mk('<div class="card mono" style="font-size:40px">priya@<span class="acc">example.in</span></div>'),D=node('db','DNS',150),A=label('mail for example.in → mx.example.in','tok',28);
const ta=W('mx','after'),td=W('mx','dns'),tw=W('mx','which');cue(ta,'tick');cue(td,'pop');cue(tw,'ding');
SCN('mx',(t,o)=>{place(Ad,540,420,pop(t,S0('mx')),o);place(D,540,760,pop(t,td),o);glow(D,t>td);place(A,540,1050,pop(t,tw+.3),o)})}
// DELIVER
{const S1=srv('Sender server'),S2=srv('Recipient server'),e=edge([[240,800],[840,800]]),E=envC(),L=label('🔒 usually encrypted on the way','pill',30);
const tc=W('deliver','connects'),te=W('deliver','encrypted');cue(tc,'whoosh');cue(te,'lock');
SCN('deliver',(t,o)=>{place(S1,240,800,1,o);place(S2,840,800,1,o);drawEdge(e,t,tc,o,true);cplace(E,t,240+600*eio(p(t,tc,tc+1.5)),680,{op:o,s:.45,bob:0});place(L,540,1050,pop(t,te),o)})}
// CHECK
{const S=srv('Recipient server'),C=['✓ not spam','✓ real sender (SPF · DKIM)'].map(s=>label(s,'pill',30));
const ts=W('check','spam'),tf=W('check','fake');cue(ts,'tick');cue(tf,'tick');
SCN('check',(t,o)=>{place(S,540,500,1,o);glow(S,t>ts);place(C[0],540,760,pop(t,ts),o);place(C[1],540,880,pop(t,tf),o);kk(t,540,1350,{op:o,s:.6,mood:'grin'})})}
// STORE
{const Mb=mk('<div style="font-size:150px">📬</div>'),E=envC(),L=label('saved in the mailbox · waiting','tok',30);
const ts=W('store','saved');cue(ts,'pop');
SCN('store',(t,o)=>{place(Mb,540,800,pop(t,S0('store')),o);cplace(E,t,540,kf(t,[[ts-.3,500],[ts+.3,760]]),{op:o*(t<ts+.5?1:0),s:.4});place(L,540,1050,pop(t,ts),o)})}
// FETCH
{const S=srv('Server'),D=['📱','💻','⌚'].map(e=>mk(`<div style="font-size:110px">${e}</div>`)),E=[0,1,2].map((_,i)=>edge([[540,560],[240+i*300,950]])),L=label('synced to every device','tok',32);
const to=W('fetch','open'),ts=W('fetch','syncs'),te=W('fetch','every');cue(to,'pop');cue(ts,'whoosh');cue(te,'ding');
SCN('fetch',(t,o)=>{place(S,540,480,1,o);E.forEach((e,i)=>drawEdge(e,t,ts+i*.2,o,true));D.forEach((d,i)=>place(d,240+i*300,1000,pop(t,ts+i*.2),o));place(L,540,1250,pop(t,te),o)})}
charOutro([[envC(),.55],[buddy('rect','#dbeafe','#60a5fa','',95,.8),.55]],'Mail at','internet speed.');
