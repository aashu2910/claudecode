const budC=()=>char(160,220,({blink,mood='happy',look=[0,0]})=>{const g=gid();return `<defs>${grad(g,'#ffffff','#cbd5e1')}</defs><rect x="58" y="110" width="44" height="110" rx="22" fill="url(#${g})"/><circle cx="80" cy="80" r="72" fill="url(#${g})"/><circle cx="80" cy="80" r="30" fill="#94a3b8" opacity=".25"/>${face(80,74,.75,{blink,mood,look})}`});
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const keyC=()=>char(220,120,({blink,mood='joy'})=>`<circle cx="55" cy="60" r="50" fill="#fbbf24"/><circle cx="55" cy="60" r="16" fill="#0b0a0d"/><rect x="95" y="48" width="120" height="24" rx="8" fill="#fbbf24"/><rect x="170" y="70" width="18" height="30" fill="#fbbf24"/><rect x="200" y="70" width="14" height="22" fill="#fbbf24"/>`);
const noteC=()=>char(140,200,({blink,mood='joy'})=>{const g=gid();return `<defs>${grad(g,'#bfdbfe','#3b82f6')}</defs><rect x="96" y="10" width="16" height="150" rx="8" fill="#3b82f6"/><path d="M104 10 Q150 30 135 80" stroke="#3b82f6" stroke-width="14" fill="none" stroke-linecap="round"/><ellipse cx="70" cy="160" rx="55" ry="42" fill="url(#${g})"/>${face(70,152,.6,{blink,mood})}`});
const caseC=()=>char(300,240,({blink,mood='happy',lid=0})=>{const g=gid();return `<defs>${grad(g,'#ffffff','#cbd5e1')}</defs><g transform="translate(${lid*20} ${-lid*70}) rotate(${-lid*18} 30 90)"><rect x="20" y="20" width="260" height="80" rx="40" fill="url(#${g})"/></g><rect x="20" y="95" width="260" height="140" rx="50" fill="url(#${g})"/><circle cx="150" cy="135" r="8" fill="#4ade80"/>${face(150,175,.8,{blink,mood})}`});
const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const waveRings=()=>[0,1,2].map(()=>mk('<div style="width:200px;height:200px;border-radius:100px;border:5px solid #60a5fa"></div>'));
function rings(R,t,x,y,on){R.forEach((w,i)=>{const ph=((t*.8)+i/3)%1;place(w,x,y,.3+ph*2,on*(1-ph)*.8)})}
// HOOK
{const C=caseC(),B=[budC(),budC()],P=phoneC(),Ok=label('✓ Connected','tok',36),Q=qmark();
const to=W('hook','open'),tc=W('hook','connect'),th=W('hook','how');cue(to,'pop');cue(tc,'ding');cue(th,'whoosh');
SCN('hook',(t,o)=>{const lid=eio(p(t,to,to+.5));cplace(C,t,360,1300,{op:o,s:1.3,popT:S0('hook')-.3,lid,mood:t>to?'joy':'happy'});B.forEach((b,i)=>cplace(b,t,280+i*160-(i?0:0),1180-280*eio(p(t,to+.3+i*.15,to+.9+i*.15)),{op:o*p(t,to+.2,to+.4),s:.7,jumpT:tc+i*.2,mood:t>tc?'joy':'happy'}));cplace(P,t,840,900,{op:o,s:1.3,popT:S0('hook'),mood:t>tc?'joy':'happy'});place(Ok,820,460,pop(t,tc),o);kk(t,860,1480,{op:o,s:.55,mood:t>th?'o':'happy'});place(Q,600,520,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// RADIO
{const P=phoneC(),R=waveRings(),G=label('2.4 GHz','tok',44),Wf=label('same band as Wi-Fi 📶'),Sh=label('low power · short range');
const tl=W('radio','low'),tg=W('radio','gigahertz'),tw=W('radio','wi'),ts=W('radio','short');cue(tl,'up');cue(tg,'ding');cue(tw,'pop');cue(ts,'tick');
SCN('radio',(t,o)=>{cplace(P,t,540,1050,{op:o,s:1.4,popT:S0('radio')-.3,mood:'joy'});rings(R,t,540,880,o*p(t,tl,tl+.3));place(G,540,380,pop(t,tg),o);place(Wf,540,1240,pop(t,tw),o);place(Sh,540,1360,pop(t,ts),o);kk(t,170,1480,{op:o,s:.55,point:1})})}
// PAIR
{const P=phoneC(),B=budC(),Ky=keyC(),e=edge([[300,900],[780,900]]),L=label('🔑 secret key exchanged','tok',34),M=label('remembered for next time');
const tp=W('pair','pair'),tk=W('pair','key'),tr=W('pair','remember');cue(tp,'pop');cue(tk,'shimmer');cue(tr,'ding');
SCN('pair',(t,o)=>{cplace(P,t,280,1100,{op:o,s:1.2,popT:S0('pair')-.3,look:[1,0],mood:t>tr?'joy':'happy'});cplace(B,t,800,1100,{op:o,s:1,popT:S0('pair'),look:[-1,0],mood:t>tr?'joy':'happy'});drawEdge(e,t,tp,o,t>tp);const u=(t-tk)*.6%1;cplace(Ky,t,300+480*(Math.floor((t-tk)*.6)%2?1-u:u),800,{op:o*(t>tk?1:0),s:.55,bob:0,r:Math.sin(t*4)*10});place(L,540,400,pop(t,tk),o);place(M,540,1300,pop(t,tr),o)})}
// RECONNECT
{const C=caseC(),B=budC(),P=phoneC(),B1=bubble("It's me! 👋",32),B2=bubble('Welcome back! ✓',32);
const to=W('reconn','opening'),tc=W('reconn','call'),tr=W('reconn','recognises'),ta=W('reconn','automatically');cue(to,'pop');cue(tc,'beep');cue(tr,'ding');cue(ta,'pop');
SCN('reconn',(t,o)=>{cplace(C,t,300,1350,{op:o,s:1.1,lid:eio(p(t,to,to+.5)),mood:'happy'});cplace(B,t,260,1240-240*eio(p(t,to+.3,to+.9)),{op:o*p(t,to+.2,to+.4),s:.75,mood:t>tc?'joy':'happy',jumpT:tc});cplace(P,t,820,1050,{op:o,s:1.3,mood:t>tr?'joy':'happy',jumpT:ta});place(B1,360,620,pop(t,tc),o);place(B2,760,450,pop(t,tr),o)})}
// HOP
{const N=79,Bs=Array.from({length:N},()=>mk('<div style="width:8px;height:300px;border-radius:4px;background:rgba(255,255,255,.18)"></div>')),Wf=mk('<div style="width:200px;height:320px;border-radius:30px;background:rgba(248,113,113,.25);border:3px dashed #f87171"></div>'),Wl=label('Wi-Fi noise','pill',26),L=label('79 channels','tok',36),H=label('≈1,600 hops / second','tok',36);
const tdg=W('hop','dodge'),th=W('hop','hops'),ts=W('hop','sixteen');cue(tdg,'pop');cue(th,'scramble');cue(ts,'ding');
SCN('hop',(t,o)=>{const sp=t>ts?30:t>th?8:2;const cur=Math.floor((Math.sin(Math.floor(t*sp)*12.9898)*43758.5453%1+1)%1*N);Bs.forEach((b,i)=>{const bad=i>30&&i<44;const on=i==cur&&!bad||(bad&&i==cur&&false);b.firstElementChild.style.background=on?ACC:'rgba(255,255,255,.18)';b.firstElementChild.style.boxShadow=on?`0 0 20px ${ACC}`:'none';place(b,110+i*11,820,1,o*p(t,S0('hop')-.3+i*.01,S0('hop')+i*.01))});place(Wf,520,820,pop(t,tdg),o);place(Wl,520,620,pop(t,tdg),o);place(L,540,400,pop(t,th-.6),o);place(H,540,1200,pop(t,ts),o);kk(t,170,1480,{op:o,s:.55,mood:t>ts?'grin':'o'})})}
// CODEC
{const Ns=[0,1,2].map(()=>noteC()),Pk=[0,1,2,3,4].map(()=>mk('<div style="width:44px;height:44px;border-radius:10px;background:#60a5fa;box-shadow:0 0 18px #60a5fa"></div>')),B=budC(),P=phoneC(),Cd=label('codec · AAC','tok',36),Dc=label('decoded 🎵'),e=edge([[260,860],[820,860]]);
const tc=W('codec','compressed'),tp=W('codec','packets'),td=W('codec','decoded');cue(tc,'lock');cue(tp,'whoosh');cue(td,'shimmer');
SCN('codec',(t,o)=>{cplace(P,t,200,1000,{op:o,s:1,mood:'happy'});cplace(B,t,880,1000,{op:o,s:.85,mood:t>td?'joy':'happy'});drawEdge(e,t,tp,o,t>tp);const sq=eio(p(t,tc,tc+.6));Ns.forEach((n,i)=>cplace(n,t,200+(i-1)*140,700,{op:o*(1-sq),s:.6,popT:S0('codec')-.3+i*.1,mood:'joy'}));
 Pk.forEach((k,i)=>{const u=((t-tp)*.5+i/5)%1;place(k,260+u*560,860,1,o*(t>tp?1:0))});place(Cd,540,420,pop(t,tc),o);place(Dc,880,1080,pop(t,td),o);kk(t,540,1480,{op:o,s:.55,mood:'grin'})})}
// BUDS
{const P=phoneC(),L=budC(),R=budC(),e1=edge([[540,620],[300,1000]]),e2=edge([[300,1000],[780,1000]]),e3=edge([[540,620],[780,1000]]),A=label('A · one bud relays'),Bm=label('B · both listen directly','tok',32),Sy=label('in sync ✓');
const tr=W('buds','relays'),tb=W('buds','both'),ts=W('buds','sync');cue(tr,'whoosh');cue(tb,'whoosh');cue(ts,'ding');
SCN('buds',(t,o)=>{cplace(P,t,540,700,{op:o,s:.9,popT:S0('buds')-.3});cplace(L,t,300,1150,{op:o,s:.8,mood:'joy'});cplace(R,t,780,1150,{op:o,s:.8,mood:'joy'});const mB=t>tb;drawEdge(e1,t,tr,o,true);drawEdge(e2,t,tr+.3,o*(mB?.2:1),!mB);drawEdge(e3,t,tb,o*(mB?1:0),true);place(A,540,1300,pop(t,tr),o*(mB?.4:1));place(Bm,540,1410,pop(t,tb),o);place(Sy,540,380,pop(t,ts),o)})}
charOutro([[phoneC(),.65],[budC(),.75],[keyC(),.5],[noteC(),.7]],'Music through','thin air.');
