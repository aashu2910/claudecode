const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9),posC=()=>buddy('tall','#475569','#1e293b',`<rect x="60" y="20" width="80" height="50" rx="8" fill="#0b0a0d"/>`,110,.7);
const rings=n=>Array.from({length:n},()=>mk('<div style="width:140px;height:140px;border-radius:70px;border:5px solid #22d3ee"></div>'));
// HOOK
{const P=phoneC(),M=posC(),R=rings(3),Pd=label('✓ Paid · BEEP','tok',38),Cd=mk('<div class="card mono" style="font-size:30px">real card: 4321 •••• •••• 9876 🔒 stays put</div>'),Q=qmark();
const th=W('hook','hold'),tb=W('hook','beeps'),tn=W('hook','never'),tw=W('hook','how');cue(tb,'beep');cue(tb+.2,'ding');cue(tw,'whoosh');
SCN('hook',(t,o)=>{cplace(M,t,760,1250,{op:o,s:1.3,mood:t>tb?'joy':'happy'});cplace(P,t,kf(t,[[th-.5,200],[th+.3,480]]),1050,{op:o,s:1.1,r:-15,mood:t>tb?'joy':'happy'});R.forEach((r,i)=>{const ph=((t*.9)+i/3)%1;place(r,600,920,.4+ph*1.2,o*(t>th+.3&&t<tb+.5?1-ph:0))});place(Pd,760,560,pop(t,tb),o);place(Cd,540,420,pop(t,tn),o);place(Q,180,1350,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// NFC
{const P=phoneC(),M=posC(),R=rings(3),L=label('NFC · works within a few cm','tok',32),Rl=mk('<div style="width:200px;height:10px;background:#22d3ee;border-radius:5px"></div>'),Cm=label('~4 cm','pill',28);
const tn=W('nfc','nfc'),tf=W('nfc','few');cue(tn,'beep');cue(tf,'tick');
SCN('nfc',(t,o)=>{cplace(P,t,380,1050,{op:o,s:1.1,r:-10});cplace(M,t,720,1150,{op:o,s:1.2});R.forEach((r,i)=>{const ph=((t*.9)+i/3)%1;place(r,550,900,.4+ph,o*(t>tn?1-ph:0))});place(L,540,420,pop(t,tn),o);place(Rl,550,1300,pop(t,tf),o);place(Cm,550,1360,pop(t,tf),o)})}
// TOKEN
{const Rc=mk('<div class="card mono" style="font-size:32px">real: 4321 5678 9012 9876</div>'),Tk=mk('<div class="card mono on" style="font-size:32px">token: 5491 0377 2216 4408</div>'),N=node('gate','Card network',150),P=phoneC(),Ns=label('real number not on the phone ✓','pill',30);
const ta=W('token','add'),tt=W('token','token'),tr=W('token','real');cue(ta,'pop');cue(tt,'shimmer');cue(tr,'lock');
SCN('token',(t,o)=>{place(Rc,540,400,pop(t,ta),o);place(N,540,620,pop(t,tt-.3),o);glow(N,t>tt);place(Tk,540,840,pop(t,tt),o);cplace(P,t,540,1300,{op:o,s:.9,mood:'joy'});place(Ns,540,1380,pop(t,tr),o)})}
// UNLOCK
{const P=phoneC(),B=['👆 fingerprint','🙂 face','🔢 PIN'].map(s=>label(s,'pill',32)),L=label('a thief can\'t just tap it','tok',32);
const tf=W('unlock','fingerprint'),tfa=W('unlock','face'),tp=W('unlock','pin'),tt=W('unlock','thief');[tf,tfa,tp].forEach(x=>cue(x,'tick'));cue(tt,'lock');
SCN('unlock',(t,o)=>{cplace(P,t,540,1150,{op:o,s:1.4,mood:t>tp?'grin':'happy'});[tf,tfa,tp].forEach((x,i)=>place(B[i],220+i*320,460,pop(t,x),o));place(L,540,620,pop(t,tt),o)})}
// CODE
{const C1=mk('<div class="card mono on" style="font-size:32px">pay #1 → code <span class="acc">8F2A…</span></div>'),C2=mk('<div class="card mono" style="font-size:32px">pay #2 → code <span class="acc">31CE…</span></div>'),X=label('copied 8F2A again → ✕ rejected','pill',30);
const to=W('code','one'),tc=W('code','copy');cue(to,'scramble');cue(tc,'lock');
SCN('code',(t,o)=>{place(C1,540,560,pop(t,to),o);place(C2,540,720,pop(t,to+.8),o);place(X,540,920,pop(t,tc),o);kk(t,170,1490,{op:o,s:.5,mood:t>tc?'grin':'happy'})})}
// SWAP
{const N=node('gate','Card network'),Bk=node('bank','Your bank'),T=label('token → real card','tok',32),Ap=label('✓ approved as usual','pill',32),e=edge([[300,800],[780,800]]);
const ts=W('swap','swaps'),ta=W('swap','approves');cue(ts,'scramble');cue(ta,'ding');
SCN('swap',(t,o)=>{place(N,300,800,pop(t,S0('swap')-.3),o);glow(N,t>ts);place(T,300,560,pop(t,ts),o);drawEdge(e,t,ts+.5,o,true);place(Bk,780,800,pop(t,ta-.4),o);glow(Bk,t>ta);place(Ap,780,1050,pop(t,ta),o)})}
// SAFE
{const Sh=node('store','Shop system'),Lk=label('💧 leak','pill',30),T=mk('<div class="card mono" style="font-size:30px">stolen token → ✕ useless elsewhere</div>'),R=label('🇮🇳 RBI: card tokenisation','tok',32);
const tl=W('safe','leaked'),tt=W('safe','token'),tr=W('safe','rbi');cue(tl,'down');cue(tt,'lock');cue(tr,'ding');
SCN('safe',(t,o)=>{place(Sh,540,500,pop(t,S0('safe')-.3),o);place(Lk,760,420,pop(t,tl),o);place(T,540,820,pop(t,tt),o);place(R,540,1000,pop(t,tr),o);kk(t,540,1400,{op:o,s:.6,mood:'grin'})})}
charOutro([[phoneC(),.6],[posC(),.6]],'Your card','stays secret.');
