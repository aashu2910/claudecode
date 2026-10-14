const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const cloudC=()=>char(420,220,({blink,mood='flat'})=>`<g fill="#4b5563"><circle cx="120" cy="120" r="80"/><circle cx="220" cy="90" r="90"/><circle cx="310" cy="125" r="75"/><rect x="60" y="120" width="300" height="80" rx="40"/></g>${face(210,130,.9,{blink,mood,eye:'#facc15',cheek:false})}`);
const bldg=()=>mk('<div style="width:260px;height:700px;background:#334155;border-radius:10px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;padding:30px">'+Array(24).fill('<div style="background:#1e293b;border-radius:6px"></div>').join('')+'</div>');
const bolt=()=>mk('<svg width="300" height="700" viewBox="0 0 300 700"><path d="M160 0 L100 260 L180 270 L90 520 L170 530 L120 700" fill="none" stroke="#fde047" stroke-width="16" stroke-linejoin="round" style="filter:drop-shadow(0 0 20px #facc15)"/></svg>');
// HOOK
{const C=cloudC(),B=bldg(),Bt=bolt(),Ok=label('no fire, no cracks ✓','tok',34),Q=qmark();
const th=W('hook','hits'),tw=W('hook','what');cue(th,'lock');cue(tw,'whoosh');
SCN('hook',(t,o)=>{cplace(C,t,540,420,{op:o,s:1.2,mood:'flat'});place(B,540,1120,1,o);place(Bt,560,620,1,o*win(t,th,th+.4,.05));place(Ok,540,1500,pop(t,th+.8),o);place(Q,880,800,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// CHARGE
{const C=cloudC(),N=Array.from({length:10},()=>label('−','pill',30)),P=Array.from({length:6},()=>label('+','tok',30)),L=label('ice + water collide → charge separates','pill',28);
const tc=W('charge','collide'),tb=W('charge','bottom');cue(tc,'scramble');cue(tb,'tick');
SCN('charge',(t,o)=>{cplace(C,t,540,900,{op:o,s:2,mood:'worry'});const s=eio(p(t,tc,tc+1.5));N.forEach((n,i)=>place(n,300+(i%5)*120,700+80*s+Math.floor(i/5)*60,1,o*p(t,tc,tc+.3)));P.forEach((n,i)=>place(n,360+(i%3)*160,600-60*s,1,o*p(t,tc,tc+.3)));place(L,540,400,pop(t,tc),o)})}
// STRIKE
{const C=cloudC(),Bt=bolt(),A=mk('<div class="big" style="font-size:100px">~<span class="acc">30,000</span> A</div>'),Gr=mk('<div style="width:1080px;height:120px;background:#3f3f46"></div>');
const tj=W('strike','jumps'),tt=W('strike','thirty');cue(tj,'lock');cue(tt,'ding');
SCN('strike',(t,o)=>{cplace(C,t,540,560,{op:o,s:1.2,mood:'o'});place(Bt,540,880,1,o*(t>tj&&Math.floor(t*12)%3!=0?1:0));place(Gr,540,1300,1,o);place(A,540,1450,pop(t,tt),o)})}
// ROD
{const B=bldg(),R=mk('<div style="width:14px;height:160px;background:#facc15;box-shadow:0 0 14px #facc15"></div>'),S=mk('<div style="width:16px;height:720px;background:#b45309"></div>'),L=[label('metal rod · highest point','tok',30),label('thick metal strip down the side','pill',28)];
const tr=W('rod','rod'),ts=W('rod','strip');cue(tr,'pop');cue(ts,'tick');
SCN('rod',(t,o)=>{place(B,500,1100,1,o);place(R,500,690,pop(t,tr),o);place(S,650,1100,1,o*p(t,ts,ts+.5));place(L[0],540,420,pop(t,tr),o);place(L[1],540,540,pop(t,ts),o)})}
// GROUND
{const B=bldg(),R=mk('<div style="width:14px;height:160px;background:#facc15"></div>'),S=mk('<div style="width:16px;height:720px;background:#b45309"></div>'),G=mk('<div style="width:1080px;height:300px;background:#44403c"></div>'),E=mk('<div style="width:200px;height:24px;background:#b45309"></div>'),Bt=bolt(),Cur=Array.from({length:6},()=>mk('<div style="width:24px;height:24px;border-radius:12px;background:#fde047;box-shadow:0 0 14px #facc15"></div>')),L=label('easy path → not through the walls','tok',30);
const tb=W('ground','buried'),te=W('ground','easy');cue(tb,'pop');cue(te,'whoosh');
SCN('ground',(t,o)=>{place(G,540,1600,1,o);place(B,500,1100,1,o);place(R,500,690,1,o);place(S,650,1100,1,o);place(E,650,1560,pop(t,tb),o);place(Bt,520,440,.5,o*win(t,te,te+.3,.05));Cur.forEach((c,i)=>{const u=((t-te)*.8+i/6)%1;place(c,650,620+u*940,1,o*(t>te?1:0))});place(L,540,380,pop(t,te),o)})}
// MYTH
{const X=label('✕ attracts lightning from far away','pill',30),Ok=label('✓ gives nearby strikes a safe route','tok',30),R=mk('<div style="width:14px;height:200px;background:#facc15"></div>');
const td=W('myth','doesn'),tg=W('myth','gives');cue(td,'lock');cue(tg,'ding');
SCN('myth',(t,o)=>{place(X,540,500,pop(t,td),o);place(Ok,540,640,pop(t,tg),o);place(R,540,1000,1,o);kk(t,540,1450,{op:o,s:.7,mood:t>tg?'grin':'o'})})}
// YOU
{const T=['🌳 avoid tall trees','🏞️ avoid open fields','🏠🚗 get inside a building or metal-roof car'].map(s=>label(s,'pill',30));
const ts=[W('you','tall'),W('you','open'),W('you','inside')];ts.forEach(x=>cue(x,'tick'));
SCN('you',(t,o)=>{ts.forEach((x,i)=>place(T[i],540,500+i*140,pop(t,x),o));kk(t,540,1450,{op:o,s:.7,mood:'grin',jumpT:ts[2]})})}
charOutro([[cloudC(),.4],[buddy('circle','#fef9c3','#facc15','',95,.8),.55]],'A safe road','for lightning.');
