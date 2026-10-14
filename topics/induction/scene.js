const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const panC=()=>char(420,200,({blink,mood='happy',hot=0})=>`<rect x="360" y="70" width="60" height="20" rx="8" fill="#1f2937"/><path d="M20 40 H360 V150 Q360 180 330 180 H50 Q20 180 20 150Z" fill="#4b5563"/><rect x="20" y="168" width="340" height="14" rx="6" fill="rgb(${Math.round(75+180*hot)},${Math.round(85-20*hot)},${Math.round(99-80*hot)})" style="filter:drop-shadow(0 0 ${hot*20}px #f97316)"/>${face(190,100,.8,{blink,mood})}`);
const top=()=>mk('<div style="width:760px;height:40px;border-radius:12px;background:rgba(17,24,39,.85);border:3px solid #6b7280"></div>');
const coil=()=>mk(`<svg width="560" height="120" viewBox="0 0 560 120">${Array.from({length:6},(_,i)=>`<ellipse cx="280" cy="60" rx="${40+i*42}" ry="${10+i*8}" fill="none" stroke="#b45309" stroke-width="9"/>`).join('')}</svg>`);
// HOOK
{const P=panC(),T=top(),St=Array.from({length:4},()=>mk('<div style="width:40px;height:40px;border-radius:20px;background:rgba(255,255,255,.5)"></div>')),L1=label('🔥 no flame','pill',30),L2=label('glass beside: fairly cool','pill',30),Q=qmark();
const tn=W('hook','flame'),tg=W('hook','glass'),tb=W('hook','boils'),th=W('hook','how');cue(tn,'tick');cue(tb,'whoosh');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(T,540,1000,1,o);cplace(P,t,540,980,{op:o,s:1.3,popT:S0('hook')-.3,hot:p(t,tb-.5,tb+.5),mood:t>tb?'grin':'happy'});St.forEach((s,i)=>{const u=((t-tb)*.7+i/4)%1;place(s,440+i*70,740-u*250,.5+u,o*(t>tb?1-u:0))});place(L1,300,420,pop(t,tn),o);place(L2,700,520,pop(t,tg),o);kk(t,880,1490,{op:o,s:.5,mood:t>th?'o':'happy',jumpT:th});place(Q,180,1300,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// COIL
{const T=top(),C=coil(),Hz=label('~tens of thousands of flips / second','tok',30),L=label('copper coil under the glass','pill',30);
const tc=W('coil','coil'),tf=W('coil','fast');cue(tc,'pop');cue(tf,'scramble');
SCN('coil',(t,o)=>{place(T,540,760,1,o*.5);place(C,540,880,pop(t,tc),o);C.querySelectorAll('ellipse').forEach((e,i)=>e.setAttribute('stroke',t>tf&&Math.floor(t*10+i)%2?'#f97316':'#b45309'));place(L,540,1060,pop(t,tc),o);place(Hz,540,420,pop(t,tf),o)})}
// FIELD
{const T=top(),C=coil(),Fl=Array.from({length:7},()=>mk('<div style="font-size:70px;font-weight:900" class="acc fl">↑</div>')),L=label('flipping magnetic field ↑↓','tok',32);
const tm=W('field','magnetic'),tf=W('field','flipping'),tg=W('field','glass');cue(tm,'shimmer');cue(tf,'tick');
SCN('field',(t,o)=>{place(C,540,1000,1,o);place(T,540,880,1,o);const up=Math.floor(t*4)%2==0||t<tf;Fl.forEach((f,i)=>{f.firstElementChild.textContent=up?'↑':'↓';place(f,240+i*100,700-Math.abs(i-3)*20,1,o*p(t,tm,tm+.4))});place(L,540,420,pop(t,tm),o)})}
// EDDY
{const P=mk('<div style="width:640px;height:200px;border-radius:20px;background:#4b5563;position:relative"></div>'),E=[0,1,2].map(()=>mk('<svg width="160" height="100"><ellipse cx="80" cy="50" rx="70" ry="36" fill="none" stroke="#fde047" stroke-width="7" stroke-dasharray="20 14"/></svg>')),L=label('eddy currents in the metal base','tok',30);
const ti=W('eddy','induces'),te=W('eddy','eddy');cue(ti,'whoosh');cue(te,'ding');
SCN('eddy',(t,o)=>{place(P,540,820,1,o);E.forEach((e,i)=>{e.querySelector('ellipse').setAttribute('stroke-dashoffset',-t*80);place(e,340+i*200,820,pop(t,ti+i*.2),o)});place(L,540,1080,pop(t,te),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// HEAT
{const P=panC(),T=top(),Gl=label('glass: not the heater','pill',30),H=label('pan = the heater 🔥','tok',34);
const tr=W('heat','resists'),th=W('heat','heater');cue(tr,'up');cue(th,'ding');
SCN('heat',(t,o)=>{place(T,540,1000,1,o);cplace(P,t,540,980,{op:o,s:1.4,hot:p(t,tr,tr+1),mood:'joy'});place(H,540,420,pop(t,th),o);place(Gl,540,1150,pop(t,th+.5),o)})}
// PAN
{const M=mk('<div style="font-size:120px">🧲</div>'),Ok=label('✓ cast iron · many steel pans','tok',30),No=label('✕ aluminium · copper · glass (usually)','pill',28),P=panC();
const tm=W('pan','magnetic'),ts=W('pan','sticks');cue(tm,'pop');cue(ts,'lock');
SCN('pan',(t,o)=>{cplace(P,t,540,1000,{op:o,s:1.2,mood:t>ts?'joy':'happy'});place(M,540,kf(t,[[ts-.6,560],[ts,860]]),1,o*p(t,tm,tm+.3));place(Ok,540,1180,pop(t,tm),o);place(No,540,1300,pop(t,tm+.6),o)})}
// EFF
{const A=mk('<div style="width:820px"><div style="font-weight:800;font-size:30px">induction → <span class="acc">most energy into the pan</span></div><div style="height:50px;border-radius:25px;background:#1f2937;overflow:hidden;margin-top:10px"><div id="e1" style="height:100%;background:#f97316"></div></div></div>'),B=mk('<div style="width:820px"><div style="font-weight:800;font-size:30px">gas flame → much lost to the air</div><div style="height:50px;border-radius:25px;background:#1f2937;overflow:hidden;margin-top:10px"><div id="e2" style="height:100%;background:#60a5fa"></div></div></div>');
const tm=W('eff','most'),tg=W('eff','gas');cue(tm,'up');cue(tg,'down');
SCN('eff',(t,o)=>{$('e1').style.width=(85*eio(p(t,tm,tm+.8)))+'%';$('e2').style.width=(40*eio(p(t,tg,tg+.8)))+'%';place(A,540,620,pop(t,tm-.3),o);place(B,540,860,pop(t,tg-.3),o);kk(t,540,1400,{op:o,s:.6,mood:'grin'})})}
charOutro([[panC(),.45],[buddy('circle','#ffedd5','#f97316','',95,.8),.55]],'Cooking','with magnetism.');
