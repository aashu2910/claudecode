const cardC=()=>buddy('wide','#fef9c3','#eab308',`<rect x="22" y="78" width="40" height="30" rx="6" fill="#a16207"/><path d="M150 70 q12 12 0 24 M162 62 q20 20 0 40" stroke="#713f12" stroke-width="5" fill="none"/>`,125,.75);
const posC=()=>buddy('tall','#4b5563','#1f2937',`<rect x="60" y="20" width="80" height="50" rx="8" fill="#0b0a0d"/>${[0,1,2].map(r=>[0,1,2].map(c=>`<rect x="${62+c*28}" y="${130+r*22}" width="20" height="14" rx="4" fill="#9ca3af"/>`).join('')).join('')}`,95,.7);
const bankC=(c1='#e5e7eb',c2='#9ca3af')=>buddy('rect',c1,c2,`<path d="M0 40 L100 -10 L200 40Z" fill="${c2}"/>${[35,75,115,155].map(x=>`<rect x="${x}" y="140" width="14" height="45" rx="4" fill="#fff" opacity=".6"/>`).join('')}`,90,.85);
const netC=()=>buddy('circle','#e0f2fe','#0ea5e9',`<g stroke="#0369a1" stroke-width="5" fill="none" opacity=".6"><ellipse cx="100" cy="100" rx="40" ry="88"/><line x1="12" y1="100" x2="188" y2="100"/><path d="M25 60 Q100 80 175 60 M25 140 Q100 120 175 140"/></g>`,95,.85);
const coinC=()=>buddy('circle','#fef08a','#ca8a04','<text x="100" y="80" font-size="60" font-weight="900" text-anchor="middle" fill="#a16207" font-family="Inter">₹</text>',120,.6);
const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const tok=(h)=>mk(`<div class="tok" style="font-size:28px">${h}</div>`);
// HOOK
{const C=cardC(),P=posC(),Ap=label('✓ APPROVED','tok',40),Q=qmark(),Tr=label('🧳 a trip!','pill',34);
const tt=W('hook','tap'),ta=W('hook','approved'),tr=W('hook','trip');cue(tt,'beep');cue(ta,'ding');cue(tr,'whoosh');
SCN('hook',(t,o)=>{cplace(P,t,620,1200,{op:o,s:1.6,popT:S0('hook')-.3,mood:t>ta?'joy':'happy'});const u=eio(p(t,tt-.6,tt));cplace(C,t,260+330*u,820+120*u-120*eio(p(t,tt+.3,tt+.8)),{op:o,s:.9,r:-15,popT:S0('hook')-.2,mood:t>ta?'joy':'happy'});place(Ap,620,500,pop(t,ta),o);place(Tr,300,420,pop(t,tr),o);kk(t,170,1490,{op:o,s:.55,mood:t>tr?'o':'happy',jumpT:tr})})}
// TAP
{const C=cardC(),P=posC(),R=[0,1,2].map(()=>mk('<div style="width:160px;height:160px;border-radius:80px;border:5px solid #facc15"></div>')),Cd=label('one-time code: <span class="mono">a7F3·91c2</span>','tok',32),Cp=mk('<div class="card" style="font-size:30px">copied code? <span style="color:#f87171">useless ✕</span></div>'),Nf=label('NFC');
const tn=W('tap','nfc'),tc=W('tap','creates'),tu=W('tap','useless');cue(tn,'beep');cue(tc,'scramble');cue(tu,'lock');
SCN('tap',(t,o)=>{cplace(C,t,330,900,{op:o,s:1.1,r:-10,mood:t>tc?'grin':'happy'});cplace(P,t,800,1150,{op:o,s:1.3,mood:'happy'});R.forEach((w,i)=>{const ph=((t*.9)+i/3)%1;place(w,560,820,.4+ph*1.4,o*(t>tn?(1-ph):0))});place(Nf,560,640,pop(t,tn),o);place(Cd,540,400,pop(t,tc),o);place(Cp,540,1380,pop(t,tu),o)})}
// ACQ
{const P=posC(),B=bankC('#fef3c7','#d97706'),e=edge([[260,900],[800,900]]),T=tok('₹450 · card ••21'),L=label("acquirer · shop's bank",'pill',32);
const ts=W('acq','sends'),tb=W('acq','bank'),ta=W('acq','acquirer');cue(ts,'whoosh');cue(ta,'pop');
SCN('acq',(t,o)=>{cplace(P,t,240,1050,{op:o,s:1.1,popT:S0('acq')-.3});cplace(B,t,820,1050,{op:o,s:1.1,popT:tb-.4,mood:t>ta?'joy':'happy',jumpT:ta});drawEdge(e,t,ts,o,t>ts);const u=eio(p(t,ts,tb+.4));place(T,240+580*u,760,pop(t,ts),o);place(L,820,1120,pop(t,ta),o);kk(t,540,1490,{op:o,s:.55,mood:'happy'})})}
// NET
{const A=bankC('#fef3c7','#d97706'),N=netC(),I=bankC('#dcfce7','#16a34a'),e=edge([[160,1000],[540,700],[920,1000]]),T=tok('₹450'),Ns=['Visa','Mastercard','RuPay'].map(n=>label(n,'pill',28)),Li=label('your bank · issuer','pill',28),La=label('acquirer','pill',28);
const tp=W('net','passes'),tn=W('net','network'),tr=W('net','routes'),ti=W('net','issued');cue(tp,'whoosh');cue(tn,'pop');cue(tr,'whoosh');cue(ti,'pop');
SCN('net',(t,o)=>{cplace(A,t,160,1150,{op:o,s:.9});cplace(N,t,540,850,{op:o,s:1,popT:tn-.3,mood:t>tr?'grin':'happy'});cplace(I,t,920,1150,{op:o,s:.9,popT:ti-.4,mood:t>ti?'joy':'happy'});drawEdge(e,t,tp,o,true);
 const u=p(t,tp,ti);place(T,...lerpPath(e.pts,eio(u)).map((v,k)=>k?v-80:v),pop(t,tp),o);Ns.forEach((n,i)=>place(n,300+i*240,420,pop(t,tn+.4+i*.25),o));place(La,160,1210,1,o);place(Li,920,1210,pop(t,ti),o)})}
// CHECK
{const I=bankC('#dcfce7','#16a34a'),Ck=[['credit limit','tl'],['fraud patterns','tf'],['PIN (if needed)','tp']].map(([a])=>mk(`<div class="card" style="width:520px;display:flex;justify-content:space-between;font-size:32px"><span>${a}</span><span class="acc">✓</span></div>`)),Ap=label('APPROVE','tok',48),Dc=label('or decline','pill',30);
const tl=W('check','limit'),tf=W('check','fraud'),tpn=W('check','pin'),ta=W('check','approve');[tl,tf,tpn].forEach(x=>cue(x,'tick'));cue(ta,'ding');
SCN('check',(t,o)=>{cplace(I,t,540,600,{op:o,s:1.1,popT:S0('check')-.3,mood:t>ta?'joy':'flat'});[tl,tf,tpn].forEach((x,i)=>place(Ck[i],540,760+i*130,pop(t,x),o));place(Ap,420,1230,pop(t,ta),o);place(Dc,720,1230,pop(t,ta+.6),o*.7);kk(t,170,1490,{op:o,s:.55,mood:'o'})})}
// BACK
{const P=posC(),A=bankC('#fef3c7','#d97706'),N=netC(),I=bankC('#dcfce7','#16a34a'),xs=[160,400,660,920],e=edge([[920,1000],[160,1000]]),T=tok('✓ approved'),Tm=label('≈ 1–2 seconds','tok',40),Bp=label('BEEP! ✓','pill',40);
const tt=W('back','travels'),tb=W('back','beeps'),ts=W('back','second');cue(tt,'whoosh');cue(tb,'beep');cue(tb+.15,'ding');
SCN('back',(t,o)=>{[[P,0],[A,1],[N,2],[I,3]].forEach(([c,i])=>cplace(c,t,xs[i],1150,{op:o,s:i==0?.9:.65,mood:t>tb?'joy':'happy',jumpT:i==0?tb:null}));drawEdge(e,t,tt,o,true);const u=eio(p(t,tt,tb));place(T,920-760*u,900,pop(t,tt),o);place(Bp,160,650,pop(t,tb),o);place(Tm,540,420,pop(t,ts),o)})}
// SETTLE
{const A=bankC('#fef3c7','#d97706'),I=bankC('#dcfce7','#16a34a'),C=Array.from({length:6},()=>coinC()),Mn=mk('<div style="font-size:110px">🌙</div>'),L=label('settlement · usually by next day','tok',32),Bt=label('in batches 📦');
const tm=W('settle','moves'),tn=W('settle','next'),tb=W('settle','batches');cue(tm,'whoosh');cue(tb,'shimmer');
SCN('settle',(t,o)=>{place(Mn,880,380,pop(t,tn),o);cplace(I,t,240,1100,{op:o,s:1,mood:'happy'});cplace(A,t,840,1100,{op:o,s:1,mood:t>tb?'joy':'happy'});C.forEach((c,i)=>{const u=eio(p(t,tm+i*.15,tm+i*.15+1.2));cplace(c,t,240+600*u,1000-200*Math.sin(u*Math.PI)-(i%2)*40,{op:o*p(t,tm+i*.15,tm+i*.15+.1),s:.45,mood:'joy'})});place(L,540,560,pop(t,tn),o);place(Bt,540,1300,pop(t,tb),o)})}
charOutro([[cardC(),.65],[netC(),.6],[bankC('#dcfce7','#16a34a'),.6],[posC(),.6]],'A round trip','in seconds.');
