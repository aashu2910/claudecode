const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const carC=()=>char(260,320,({blink,mood='happy'})=>`<rect x="10" y="10" width="240" height="300" rx="20" fill="#e5e7eb"/><rect x="40" y="70" width="80" height="220" fill="#9ca3af"/><rect x="140" y="70" width="80" height="220" fill="#9ca3af"/>${face(130,40,.6,{blink,mood,cheek:false})}`);
const rails=()=>mk('<div style="width:520px;height:1100px;border-left:14px solid #78716c;border-right:14px solid #78716c"></div>');
// HOOK
{const C=carC(),R=rails(),Rp=mk('<div style="width:8px;height:400px;background:#9ca3af"></div>'),X=label('✕ movie myth','pill',32),Q=qmark();
const ts=W('hook','snapped'),tr=W('hook','real'),th=W('hook','here');cue(ts,'lock');cue(tr,'ding');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(R,540,940,1,o);const f=t>ts?eio(p(t,ts,ts+.6))*160*(1-p(t,ts+.6,ts+.7)):0;place(Rp,540,380+f*0,1,o*(t<ts?1:.0));cplace(C,t,540,800+f,{op:o,s:1,mood:t>ts?'o':'happy'});place(X,540,1300,pop(t,tr),o);kk(t,880,1490,{op:o,s:.5,mood:t>th?'grin':'o',jumpT:th})})}
// ROPES
{const C=carC(),Rs=Array.from({length:6},()=>mk('<div style="width:10px;height:520px;background:#d6d3d1;border-radius:5px"></div>')),L=label('each rope alone can hold the car','tok',30);
const ts=W('ropes','several'),te=W('ropes','each');cue(ts,'pop');cue(te,'ding');
SCN('ropes',(t,o)=>{Rs.forEach((r,i)=>place(r,440+i*40,560,1,o*p(t,ts+i*.1,ts+i*.1+.2)));cplace(C,t,540,1150,{op:o,s:1.1,mood:'joy'});place(L,540,1300,pop(t,te),o)})}
// GOVERNOR
{const Gv=mk('<svg width="240" height="240" viewBox="0 0 240 240"><circle cx="120" cy="120" r="110" fill="#374151" stroke="#f59e0b" stroke-width="10"/><g id="gs"><line x1="20" y1="120" x2="220" y2="120" stroke="#f59e0b" stroke-width="10"/><line x1="120" y1="20" x2="120" y2="220" stroke="#f59e0b" stroke-width="10"/></g></svg>'),Lp=mk('<div style="width:260px;height:1000px;border:6px solid #f59e0b;border-radius:130px"></div>'),C=carC(),L=label('speed governor','tok',34);
const tl=W('governor','loop'),tg=W('governor','governor'),tm=W('governor','moving');cue(tl,'pop');cue(tg,'pop');
SCN('governor',(t,o)=>{place(Lp,700,960,1,o*p(t,tl,tl+.4));Gv.querySelector('#gs').setAttribute('transform',`rotate(${t*90} 120 120)`);place(Gv,700,470,pop(t,tg),o);cplace(C,t,400,1000+Math.sin(t)*150,{op:o,s:.8,mood:'happy'});place(L,700,320,pop(t,tg),o)})}
// TRIP
{const Gv=mk('<svg width="420" height="420" viewBox="0 0 420 420"><circle cx="210" cy="210" r="200" fill="#1f2937" stroke="#f59e0b" stroke-width="10"/><g id="ts"></g></svg>'),Ct=label('CLICK · rope grabbed','tok',36),Ft=label('⚠ too fast','pill',34);
const tf=W('trip','fast'),tw=W('trip','weights'),tc=W('trip','catch');cue(tf,'up');cue(tw,'whoosh');cue(tc,'lock');
SCN('trip',(t,o)=>{const out=eio(p(t,tw,tw+.8));const sp=t<tc?t*(t>tf?600:150):tc*600;let g='';[0,180].forEach(a=>{g+=`<g transform="rotate(${sp+a} 210 210)"><line x1="210" y1="210" x2="${210+60+80*out}" y2="210" stroke="#9ca3af" stroke-width="10"/><circle cx="${210+60+80*out}" cy="210" r="36" fill="#f59e0b"/></g>`});Gv.querySelector('#ts').innerHTML=g;place(Gv,540,820,1,o);place(Ft,540,420,pop(t,tf),o);place(Ct,540,1180,pop(t,tc),o)})}
// SAFETY
{const R=rails(),C=carC(),Wg=[0,1].map(()=>mk('<div style="width:40px;height:90px;background:#f59e0b;clip-path:polygon(0 0,100% 30%,100% 70%,0 100%)"></div>')),L=label('steel wedges grip the rails','tok',32),St=label('STOP ✓','pill',40);
const tl=W('safety','lever'),tj=W('safety','jams'),ts=W('safety','stops');cue(tl,'tick');cue(tj,'lock');cue(ts,'ding');
SCN('safety',(t,o)=>{place(R,540,940,1,o);const y=t<tj?700+(t-S0('safety'))*120:700+(tj-S0('safety'))*120;cplace(C,t,540,y+160,{op:o,s:1,mood:t>ts?'joy':'o'});Wg.forEach((w,i)=>place(w,i?796:284,y+120,pop(t,tj),o,i?180:0));place(L,540,380,pop(t,tj),o);place(St,540,1450,pop(t,ts),o)})}
// BUFFER
{const Pit=mk('<div style="width:520px;height:120px;background:#292524"></div>'),Sp=[0,1].map(()=>mk('<svg width="80" height="160"><path d="M40 0 L10 20 L70 40 L10 60 L70 80 L10 100 L70 120 L40 140" stroke="#f59e0b" stroke-width="8" fill="none"/></svg>')),C=carC(),L=label('springs or oil buffers','tok',32);
const tb=W('buffer','bottom'),ts=W('buffer','springs'),tf=W('buffer','soften');cue(ts,'pop');cue(tf,'down');
SCN('buffer',(t,o)=>{place(Pit,540,1400,1,o);Sp.forEach((s,i)=>place(s,420+i*240,1260,pop(t,ts),o));const y=kf(t,[[tf-.5,900],[tf,1180],[tf+.3,1160],[tf+.6,1170]]);cplace(C,t,540,y,{op:o,s:.9,mood:t>tf?'joy':'happy'});place(L,540,420,pop(t,ts),o)})}
// HISTORY
{const Y=mk('<div class="big" style="font-size:140px"><span class="acc">1853</span></div>'),Pl=mk('<div style="width:380px;height:30px;background:#a8a29e;border-radius:6px"></div>'),Rp=mk('<div style="width:8px;height:340px;background:#d6d3d1"></div>'),Cut=label('✂️ rope cut… platform holds!','tok',32),O=label('Elisha Otis','pill',32);
const te=W('history','elisha'),tc=W('history','cutting');cue(te,'pop');cue(tc,'lock');
SCN('history',(t,o)=>{place(Y,540,420,pop(t,S0('history')),o);place(O,540,580,pop(t,te),o);place(Rp,540,850,1,o*(t<tc+.2?1:0));place(Pl,540,1040,1,o);kk(t,540,1035,{op:o,s:.6,mood:t>tc?'grin':'o',jumpT:tc+.5});place(Cut,540,1300,pop(t,tc),o)})}
charOutro([[carC(),.45],[buddy('circle','#fef3c7','#f59e0b','',95,.8),.55]],'Built to','never fall.');
