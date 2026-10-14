const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const pbC=()=>buddy('tall','#d1fae5','#16a34a',`<rect x="85" y="185" width="30" height="12" rx="4" fill="#111"/>`,90,.85),phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const cell=()=>mk('<div style="width:110px;height:200px;border-radius:20px;background:linear-gradient(#bbf7d0,#16a34a);border:4px solid #fff"></div>');
// HOOK
{const P=pbC(),N=mk('<div class="big" style="font-size:90px"><span class="acc">10,000</span> mAh</div>'),Ph=phoneC(),C=label('📱 charges… not even twice?','pill',30),Q=qmark();
const tt=W('hook','ten'),tc=W('hook','charge'),tw=W('hook','why');cue(tt,'pop');cue(tc,'down');cue(tw,'whoosh');
SCN('hook',(t,o)=>{place(N,540,420,pop(t,tt),o);cplace(P,t,330,1150,{op:o,s:1.2,popT:S0('hook')-.3,mood:t>tc?'worry':'happy'});cplace(Ph,t,760,1150,{op:o,s:1.1,popT:tc-.3,mood:'o'});place(C,540,1300,pop(t,tc),o);place(Q,540,750,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// CELLS
{const Cs=[cell(),cell(),cell()],Pcb=mk('<div style="width:460px;height:100px;border-radius:14px;background:#065f46;border:4px solid #4ade80"></div>'),L=[label('lithium-ion cells','tok',30),label('+ circuit board','pill',30)];
const tl=W('cells','lithium'),tc=W('cells','circuit');cue(tl,'pop');cue(tc,'pop');
SCN('cells',(t,o)=>{Cs.forEach((c,i)=>place(c,380+i*160,780,pop(t,tl+i*.15),o));place(Pcb,540,1020,pop(t,tc),o);place(L[0],540,560,pop(t,tl),o);place(L[1],540,1140,pop(t,tc),o)})}
// VOLTAGE
{const A=mk('<div class="big" style="font-size:90px">3.7 V</div>'),B=mk('<div class="big" style="font-size:90px"><span class="acc">5 V+</span></div>'),Bo=node('bolt','Boost converter',150),e1=edge([[260,800],[420,800]]),e2=edge([[660,800],[820,800]]);
const tc=W('voltage','cells'),tu=W('voltage','usb'),tb=W('voltage','boost');cue(tc,'tick');cue(tb,'up');
SCN('voltage',(t,o)=>{place(A,180,800,pop(t,tc),o);place(Bo,540,800,pop(t,tb-.2),o);glow(Bo,t>tb);drawEdge(e1,t,tb,o,true);drawEdge(e2,t,tb+.3,o,true);place(B,900,800,pop(t,tu),o)})}
// LOSS
{const H=Array.from({length:5},()=>mk('<div style="width:12px;height:120px;border-radius:6px;background:linear-gradient(transparent,#f87171,transparent)"></div>')),L=[label('🔥 conversion loses energy as heat','pill',30),label('rating measured at the lower 3.7 V','tok',30)];
const tl=W('loss','loses'),tr=W('loss','rating');cue(tl,'down');cue(tr,'tick');
SCN('loss',(t,o)=>{H.forEach((h,i)=>place(h,380+i*80,820-((t*100+i*30)%140),1,o*p(t,tl,tl+.3)));place(L[0],540,500,pop(t,tl),o);place(L[1],540,1100,pop(t,tr),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// REAL
{const B=mk('<div style="width:820px"><div style="font-weight:800;font-size:30px">on the box: 10,000 mAh</div><div style="height:50px;border-radius:25px;background:#1f2937;overflow:hidden;margin:10px 0 40px"><div style="height:100%;width:100%;background:#4b5563"></div></div><div style="font-weight:800;font-size:30px">to your phone: <span class="acc">~6,000–7,000 mAh</span></div><div style="height:50px;border-radius:25px;background:#1f2937;overflow:hidden;margin-top:10px"><div id="rb" style="height:100%;background:#4ade80"></div></div></div>');
const ts=W('real','six');cue(ts,'ding');
SCN('real',(t,o)=>{$('rb').style.width=(65*eio(p(t,ts-.3,ts+.6)))+'%';place(B,540,760,1,o);kk(t,540,1300,{op:o,s:.6,mood:'grin'})})}
// PROTECT
{const P=pbC(),Ls=['⚡ overcharge','🔌 short circuit','🔥 overheating'].map(s=>label(s,'pill',30)),W1=label('⚠ cheap unbranded = risky','tok',30);
const ts=[W('protect','overcharging'),W('protect','short'),W('protect','overheating')],tc=W('protect','cheap');ts.forEach(x=>cue(x,'tick'));cue(tc,'lock');
SCN('protect',(t,o)=>{cplace(P,t,540,1100,{op:o,s:1.2,mood:'grin'});ts.forEach((x,i)=>place(Ls[i],540,400+i*100,pop(t,x),o));place(W1,540,1260,pop(t,tc),o)})}
// FLY
{const Bg=[label('🎒 cabin bag ✓','tok',34),label('🧳 checked luggage ✕','pill',34)],Pl=mk('<div style="font-size:120px">✈️</div>');
const tc=W('fly','cabin'),tk=W('fly','checked');cue(tc,'ding');cue(tk,'lock');
SCN('fly',(t,o)=>{place(Pl,540,520,pop(t,S0('fly')),o);place(Bg[0],540,800,pop(t,tc),o);place(Bg[1],540,940,pop(t,tk),o);kk(t,540,1350,{op:o,s:.6,mood:'grin'})})}
charOutro([[pbC(),.6],[phoneC(),.6]],'Energy','in your pocket.');
