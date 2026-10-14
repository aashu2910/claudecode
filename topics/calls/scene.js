const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827',`<circle cx="100" cy="14" r="6" fill="#a78bfa"/><circle cx="100" cy="190" r="6" fill="#a78bfa"/>`,90,.85);
const wv=(c)=>{const d=mk(`<svg width="380" height="140"><path fill="none" stroke="${c}" stroke-width="6"/></svg>`);d.P=d.querySelector('path');return d};
function drawW(d,t,a,f=.08,n=0){let s='';for(let x=0;x<=380;x+=5)s+=(x?'L':'M')+x+' '+(70-a*(Math.sin(x*f-t*8)*40+n*Math.sin(x*.4+t*13)*20)).toFixed(1);d.P.setAttribute('d',s)}
// HOOK
{const P=phoneC(),Car=[0,1,2].map(()=>mk('<div style="font-size:80px">🚗</div>')),Hn=label('📢 BEEP BEEP','pill',30),Ok=label('they hear just you ✓','tok',34),Q=qmark();
const tb=W('hook','busy'),tc=W('hook','clearly'),tw=W('hook','where');cue(tb,'scramble');cue(tc,'ding');cue(tw,'whoosh');
SCN('hook',(t,o)=>{Car.forEach((c,i)=>place(c,((t*300+i*400)%1300)-100,1450-i*40,1,o));place(Hn,800,1150,pop(t,tb),o);cplace(P,t,540,1050,{op:o,s:1.5,popT:S0('hook')-.3,mood:t>tc?'joy':'happy'});place(Ok,540,420,pop(t,tc),o);kk(t,170,1490,{op:o,s:.5,mood:t>tw?'o':'happy',jumpT:tw});place(Q,880,700,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// MICS
{const P=phoneC(),M=[label('mic 1 · near mouth','tok',30),label('mic 2 · top / back','pill',30)];
const tm=W('mics','more'),tn=W('mics','near'),to=W('mics','others');cue(tn,'pop');cue(to,'pop');
SCN('mics',(t,o)=>{cplace(P,t,540,1300,{op:o,s:2.6,mood:'happy'});place(M[0],540,1380,pop(t,tn),o);place(M[1],540,700,pop(t,to),o);kk(t,880,1490,{op:o,s:.45,point:1})})}
// COMPARE
{const A=wv('#a78bfa'),B=wv('#a78bfa'),N1=wv('#9ca3af'),N2=wv('#9ca3af'),L=[label('bottom mic','pill',28),label('top mic','pill',28)],Lv=label('voice: loud vs quiet','tok',30),Ln=label('noise: about equal','pill',30);
const tv=W('compare','voice'),tt=W('compare','traffic');cue(tv,'tick');cue(tt,'tick');
SCN('compare',(t,o)=>{drawW(A,t,1);drawW(B,t,.3);drawW(N1,t,.6,.03,1);drawW(N2,t,.6,.03,1);place(L[0],270,420,1,o);place(L[1],810,420,1,o);place(A,270,600,1,o*p(t,tv,tv+.3));place(B,810,600,1,o*p(t,tv,tv+.3));place(Lv,540,760,pop(t,tv),o);place(N1,270,980,1,o*p(t,tt,tt+.3));place(N2,810,980,1,o*p(t,tt,tt+.3));place(Ln,540,1140,pop(t,tt),o)})}
// FOCUS
{const P=phoneC(),Bm=mk('<div style="width:500px;height:160px;background:linear-gradient(90deg,rgba(167,139,250,.7),transparent);clip-path:polygon(0 40%,100% 0,100% 100%,0 60%)"></div>'),L=label('focus on your mouth direction','tok',32);
const tc=W('focus','comparing'),tf=W('focus','focuses');cue(tc,'scramble');cue(tf,'shimmer');
SCN('focus',(t,o)=>{cplace(P,t,300,1100,{op:o,s:1.3,mood:t>tf?'grin':'happy'});place(Bm,600,880,1,o*p(t,tf,tf+.5),-20);place(L,540,420,pop(t,tc),o);kk(t,880,780,{op:o,s:.6,mood:'joy'})})}
// SUPPRESS
{const In=wv('#9ca3af'),Out=wv('#a78bfa'),Ai=node('brain','Noise suppression'),L=label('trained on thousands of hours of audio','pill',28);
const tn=W('suppress','noise'),tt=W('suppress','trained'),tc=W('suppress','cuts');cue(tn,'pop');cue(tc,'down');
SCN('suppress',(t,o)=>{drawW(In,t,.8,.08,1);drawW(Out,t,.8,.08,1-p(t,tc,tc+.8));place(In,540,420,1,o);place(Ai,540,700,pop(t,tn),o);glow(Ai,t>tc);place(Out,540,980,1,o*p(t,tc-.3,tc));place(L,540,1180,pop(t,tt),o);kk(t,170,1490,{op:o,s:.5,mood:t>tc?'grin':'happy'})})}
// ECHO
{const P=phoneC(),Sp=label('🔊 their voice','pill',30),X=label('removed before sending ✓','tok',32),R=[0,1].map(()=>mk('<div style="width:160px;height:160px;border-radius:80px;border:5px solid #9ca3af"></div>'));
const tr=W('echo','removes'),te=W('echo','echo');cue(tr,'down');cue(te,'ding');
SCN('echo',(t,o)=>{cplace(P,t,540,1200,{op:o,s:1.5,mood:'happy'});R.forEach((r,i)=>{const ph=((t*.8)+i/2)%1;place(r,540,880,.4+ph,o*(1-ph)*(1-p(t,tr,tr+.6)))});place(Sp,540,600,pop(t,S0('echo')),o);place(X,540,440,pop(t,tr),o)})}
// SEND
{const P=phoneC(),T=buddy('tall','#ede9fe','#7c3aed','',90,.8),e=edge([[300,900],[780,900]]),D=[0,1,2,3].map(()=>mk('<div style="width:30px;height:30px;border-radius:8px;background:#a78bfa"></div>')),L=label('compressed · sent live','tok',32);
const tc=W('send','compressed'),tl=W('send','live');cue(tc,'lock');cue(tl,'ding');
SCN('send',(t,o)=>{cplace(P,t,250,1050,{op:o,s:.9,mood:'joy'});cplace(T,t,830,1050,{op:o,s:.9,mood:'joy'});drawEdge(e,t,tc,o,true);D.forEach((d,i)=>place(d,300+((t-tc)*300+i*120)%480,900,1,o*(t>tc?1:0)));place(L,540,420,pop(t,tc),o)})}
charOutro([[phoneC(),.6],[buddy('circle','#ede9fe','#a78bfa','',95,.8),.55]],'Just','your voice.');
