const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const coch=()=>mk(`<svg width="320" height="320" viewBox="0 0 320 320"><path class="sp" d="M160 160 m0 -10 a10 10 0 1 1 -1 0 M160 160 m0 -40 a40 40 0 1 1 -1 0 M160 160 m0 -80 a80 80 0 1 1 -1 0 M160 160 m0 -120 a120 120 0 1 1 -1 0" fill="none" stroke="#f9a8d4" stroke-width="18" stroke-linecap="round"/></svg>`);
const hairs=()=>Array.from({length:10},()=>mk('<div style="width:10px;height:60px;border-radius:5px;background:#a78bfa"></div>'));
const aidC=()=>buddy('drop','#ede9fe','#8b5cf6','',125,.6);
// HOOK
{const A=aidC(),B=buddy('circle','#e5e7eb','#6b7280',`<circle cx="100" cy="100" r="30" fill="#374151"/>`,150,.5),L=[label('hearing aid','pill',30),label('cochlear implant','tok',30)],D=label('very different ways','pill',30);
const ts=W('hook','small'),th=W('hook','hearing'),tc=W('hook','cochlear'),td=W('hook','different');cue(th,'pop');cue(tc,'pop');cue(td,'whoosh');
SCN('hook',(t,o)=>{cplace(A,t,300,1000,{op:o,s:1,popT:th-.2,mood:'joy'});place(L[0],300,1080,pop(t,th),o);cplace(B,t,780,1000,{op:o,s:1,popT:tc-.2,mood:'joy'});place(L[1],780,1080,pop(t,tc),o);place(D,540,420,pop(t,td),o);kk(t,540,1450,{op:o,s:.55,mood:t>td?'o':'happy'})})}
// EAR
{const Dr=mk('<div style="width:16px;height:220px;border-radius:8px;background:#fde2d4"></div>'),C=coch(),H=hairs(),L=[label('eardrum vibrates','pill',28),label('cochlea: thousands of hair cells → nerve signals','tok',28)];
const tv=W('ear','vibrate'),tc=W('ear','cochlea'),th=W('ear','hair');cue(tv,'tick');cue(th,'shimmer');
SCN('ear',(t,o)=>{place(Dr,180,700,1,o);Dr.style.transform+=` translateX(${t>tv?Math.sin(t*25)*8:0}px)`;place(L[0],180,860,pop(t,tv),o);place(C,700,700,pop(t,tc),o,t*10);H.forEach((h,i)=>place(h,320+i*50,1150,1,o*p(t,th,th+.3),Math.sin(t*8+i)*15));place(L[1],540,1300,pop(t,th),o)})}
// AID
{const Pt=['🎤 mic','🧠 processor','🔊 speaker'].map(s=>label(s,'pill',30)),E=[edge([[220,700],[540,700]]),edge([[540,700],[860,700]])],W1=mk('<svg width="300" height="120"><path class="w1" fill="none" stroke="#9ca3af" stroke-width="6"/></svg>'),W2=mk('<svg width="300" height="200"><path class="w2" fill="none" stroke="#a78bfa" stroke-width="8"/></svg>'),L=label('louder sound for weakened hair cells','tok',30);
const tm=W('aid','microphone'),tp=W('aid','processor'),ts=W('aid','speaker'),tl=W('aid','louder');[tm,tp,ts].forEach(x=>cue(x,'pop'));cue(tl,'up');
SCN('aid',(t,o)=>{[tm,tp,ts].forEach((x,i)=>place(Pt[i],220+i*320,700,pop(t,x),o));drawEdge(E[0],t,tp,o,true);drawEdge(E[1],t,ts,o,true);let a='',b='';for(let x=0;x<=300;x+=5){a+=(x?'L':'M')+x+' '+(60-15*Math.sin(x*.08-t*8));b+=(x?'L':'M')+x+' '+(100-60*Math.sin(x*.08-t*8))}W1.querySelector('.w1').setAttribute('d',a);W2.querySelector('.w2').setAttribute('d',b);place(W1,220,950,1,o*p(t,tm,tm+.3));place(W2,860,950,1,o*p(t,tl,tl+.3));place(L,540,1250,pop(t,tl),o)})}
// TUNE
{const Bars=[20,25,30,60,80,85].map(()=>mk('<div style="width:90px;border-radius:12px;background:#a78bfa"></div>')),Hv=[20,25,30,60,80,85],Ax=mk('<div style="width:700px;display:flex;justify-content:space-between;font-weight:700;font-size:26px;color:#aaa"><span>low pitch</span><span>high pitch</span></div>'),L=label('boost only what you struggle with','tok',30),Ht=label('📋 from your hearing test','pill',30);
const th=W('tune','hearing'),tb=W('tune','boosting');cue(th,'tick');cue(tb,'up');
SCN('tune',(t,o)=>{Bars.forEach((b,i)=>{const h=Hv[i]*5*eio(p(t,tb+i*.08,tb+i*.08+.5));b.firstElementChild.style.height=Math.max(4,h)+'px';place(b,240+i*120,1000-Math.max(4,h)/2,1,o)});place(Ax,540,1040,1,o);place(Ht,540,420,pop(t,th),o);place(L,540,1200,pop(t,tb),o)})}
// IMPLANT
{const H=hairs(),X=mk('<div style="font-size:120px;color:#f87171;font-weight:900">✕</div>'),L1=label('hair cells badly damaged → louder doesn\'t help','pill',28),L2=label('cochlear implant skips them','tok',32);
const tb=W('implant','badly'),ts=W('implant','skips');cue(tb,'down');cue(ts,'whoosh');
SCN('implant',(t,o)=>{H.forEach((h,i)=>{h.firstElementChild.style.background=t>tb?'#4b5563':'#a78bfa';place(h,320+i*50,800,1,o,t>tb?40+i*5:0)});place(X,540,800,pop(t,tb+.3),o);place(L1,540,420,pop(t,tb),o);place(L2,540,1150,pop(t,ts),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// ELECTRODES
{const C=coch(),Ou=node('chip','Outer processor',140),e=edge([[240,560],[540,800]]),El=Array.from({length:8},()=>mk('<div style="width:22px;height:22px;border-radius:11px;background:#fde047;box-shadow:0 0 14px #fde047"></div>')),L=label('electrodes → hearing nerve directly ⚡','tok',30),Sk=label('through the skin','pill',28);
const to=W('electrodes','outer'),ts=W('electrodes','skin'),te=W('electrodes','electrodes'),tn=W('electrodes','nerve');cue(to,'pop');cue(ts,'whoosh');cue(te,'shimmer');cue(tn,'ding');
SCN('electrodes',(t,o)=>{place(Ou,240,560,pop(t,to),o);glow(Ou,t>ts);drawEdge(e,t,ts,o,true);place(Sk,300,720,pop(t,ts),o);place(C,640,900,1,o);El.forEach((d,i)=>{const a=i*.7,r=120-i*12;place(d,640+r*Math.cos(a+1),900+r*Math.sin(a+1),1,o*(t>te+i*.08?(Math.floor(t*6+i)%3?1:.3):0))});place(L,540,1250,pop(t,tn),o)})}
// LEARN
{const B=buddy('circle','#fae8ff','#a78bfa','',95,.9),Sg=label('🏥 needs surgery','pill',30),T=label('🧠 brain learns the new signals','pill',30),S=label('many understand speech again 💬','tok',30);
const ts=W('learn','surgery'),tb=W('learn','brain'),tp=W('learn','practice');cue(ts,'tick');cue(tb,'shimmer');cue(tp,'ding');
SCN('learn',(t,o)=>{place(Sg,540,420,pop(t,ts),o);place(T,540,540,pop(t,tb),o);cplace(B,t,540,1050,{op:o,s:1.2,popT:tb,mood:t>tp?'joy':'happy',jumpT:tp});place(S,540,1200,pop(t,tp),o)})}
charOutro([[aidC(),.6],[buddy('circle','#e5e7eb','#6b7280','',95,.8),.55]],'Two ways','back to sound.');
