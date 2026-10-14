const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const personC=()=>char(220,300,({blink,mood='happy',look=[0,0]})=>{const g=gid();return `<defs>${grad(g,'#ffe4cc','#e0a77a')}</defs><rect x="30" y="170" width="160" height="130" rx="60" fill="#4b5563"/><circle cx="110" cy="100" r="85" fill="url(#${g})"/><path d="M30 80 Q50 10 110 15 Q175 10 190 80 Q150 45 110 50 Q70 45 30 80Z" fill="#3b2314"/>${face(110,105,.95,{blink,mood,look})}`});
const chart=(n)=>{const d=mk(`<svg width="860" height="${n*130}">${Array.from({length:n},(_,i)=>`<path class="tr" data-i="${i}" fill="none" stroke="#eab308" stroke-width="5" transform="translate(0 ${i*130})"/>`).join('')}</svg>`);return d};
function drawChart(c,t,amp){c.querySelectorAll('.tr').forEach(p=>{const i=+p.dataset.i;let d='';for(let x=0;x<=860;x+=6){const a=(amp[i]||1)*(x>560?1:.35);const y=65-a*(i==0?40*Math.sin(x*.12-t*8):i==1?35*Math.sin(x*.03-t*2):25*Math.sin(x*.05-t*3)+10*Math.sin(x*.3));d+=(x?'L':'M')+x+' '+y.toFixed(1)}p.setAttribute('d',d)})}
// HOOK
{const Ch=chart(1),P=personC(),Q=qmark(),M=label('🎬 movies','pill',30);
const tn=W('hook','needle'),tc=W('hook','caught'),tr=W('hook','really');cue(tn,'scramble');cue(tc,'lock');cue(tr,'whoosh');
SCN('hook',(t,o)=>{drawChart(Ch,t,[t>tn?2.2:.5]);place(Ch,540,560,1,o);place(M,540,400,pop(t,S0('hook')),o);cplace(P,t,540,1250,{op:o,s:1.3,mood:t>tc?'worry':'happy'});kk(t,880,1490,{op:o,s:.55,mood:t>tr?'o':'happy',jumpT:tr});place(Q,180,1300,pop(t,tr),o*p(t,tr,tr+.1),Math.sin(t*3)*8)})}
// SENSORS
{const Ch=chart(3),L=[['❤️ pulse + blood pressure'],['🫁 breathing'],['💧 skin sweat']].map(([a])=>label(a,'pill',28)),P=personC();
const ts=[W('sensors','blood'),W('sensors','breathing'),W('sensors','sweats')];ts.forEach(x=>cue(x,'tick'));
SCN('sensors',(t,o)=>{drawChart(Ch,t,[1,1,1]);[...Ch.querySelectorAll('.tr')].forEach((p,i)=>p.style.opacity=t>ts[i]?1:0);place(Ch,540,700,1,o);ts.forEach((x,i)=>place(L[i],220,520+i*130,pop(t,x),o));cplace(P,t,540,1460,{op:o,s:.8,mood:'flat'})})}
// QUESTIONS
{const Qs=[['neutral','“Is today Tuesday?”','#9ca3af'],['control','“Ever told a lie?”','#60a5fa'],['relevant','“Did you take it?”','#eab308']].map(([a,b,c])=>mk(`<div class="card" style="width:760px;border-color:${c}"><div class="dim" style="color:${c}">${a.toUpperCase()}</div>${b}</div>`));
const ts=[W('questions','neutral'),W('questions','control'),W('questions','real')];ts.forEach(x=>cue(x,'pop'));
SCN('questions',(t,o)=>{ts.forEach((x,i)=>place(Qs[i],540,520+i*230,pop(t,x),o));kk(t,170,1490,{op:o,s:.5,mood:'flat'})})}
// COMPARE
{const Ch=chart(1),Lb=label('bigger reaction on real questions','tok',32),Dc=label('→ read as deception ⚠','pill',30),Mk=mk('<div style="width:300px;height:140px;border:4px dashed #eab308;border-radius:20px"></div>');
const tr=W('compare','reacts'),td=W('compare','deception');cue(tr,'up');cue(td,'beep');
SCN('compare',(t,o)=>{drawChart(Ch,t,[t>tr?2.4:1]);place(Ch,540,700,1,o);place(Mk,850,700,pop(t,tr),o);place(Lb,540,920,pop(t,tr),o);place(Dc,540,1040,pop(t,td),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// PROBLEM
{const A=personC(),B=personC(),La=label('nervous + innocent → FAIL ✕','pill',28),Lb=label('calm liar → PASS ✓','pill',28),S=label('measures STRESS, not lies','tok',36);
const ts=W('problem','stress'),tn=W('problem','nervous'),tc=W('problem','calm');cue(ts,'lock');cue(tn,'down');cue(tc,'tick');
SCN('problem',(t,o)=>{place(S,540,400,pop(t,ts),o);cplace(A,t,300,1100,{op:o,s:1,popT:tn-.3,mood:'worry',r:t>tn?Math.sin(t*25)*2:0});cplace(B,t,780,1100,{op:o,s:1,popT:tc-.3,mood:'happy'});place(La,300,1200,pop(t,tn),o);place(Lb,780,1200,pop(t,tc),o)})}
// SCIENCE
{const R=mk('<div class="card" style="font-size:32px;text-align:center"><span class="dim">SCIENTIFIC REVIEWS</span><br>far from reliable</div>'),Cr=mk('<div style="font-size:150px">⚖️</div>'),Nx=label('many courts: not proof ✕','tok',34);
const tr=W('science','reviews'),tc=W('science','courts');cue(tr,'pop');cue(tc,'lock');
SCN('science',(t,o)=>{place(R,540,520,pop(t,tr),o);place(Cr,540,850,pop(t,tc-.3),o,Math.sin(t*2)*6);place(Nx,540,1100,pop(t,tc),o);kk(t,170,1490,{op:o,s:.5,mood:'flat'})})}
// INDIA
{const Sc=mk('<div style="font-size:150px">🏛️</div>'),C=mk('<div class="card on" style="font-size:36px;text-align:center"><span class="dim">SUPREME COURT OF INDIA</span><br>can\'t be forced<br><span class="acc">consent needed</span></div>');
const ts=W('india','supreme'),tc=W('india','consent');cue(ts,'pop');cue(tc,'ding');
SCN('india',(t,o)=>{place(Sc,540,560,pop(t,ts-.3),o);place(C,540,950,pop(t,ts+.3),o);kk(t,540,1490,{op:o,s:.55,mood:t>tc?'grin':'happy',jumpT:tc})})}
charOutro([[personC(),.5],[buddy('circle','#fef9c3','#eab308','',95,.8),.55]],'Not a','lie meter.');
