// shared props
const booth=()=>mk(`<div style="position:relative;width:420px;height:420px"><div style="position:absolute;left:0;bottom:0;width:150px;height:300px;border-radius:20px;background:#1e1c22;border:3px solid #3a3540"></div><div style="position:absolute;left:-20px;top:20px;width:460px;height:60px;border-radius:14px;background:#2a2730;border:3px solid #3a3540;font-weight:800;font-size:30px;display:flex;align-items:center;justify-content:center;letter-spacing:3px" class="acc">FASTag LANE</div></div>`);
const arm=()=>mk('<div style="width:880px;height:28px;display:flex"><div style="width:440px"></div><div style="width:440px;border-radius:14px;background:repeating-linear-gradient(90deg,#fde047 0 50px,#222 50px 100px)"></div></div>');
const carEl=()=>mk(`<div style="width:300px;height:180px">${icon('car')}</div>`);
// HOOK
{const B=booth(),A=arm(),C=carEl(),Q=mk('<div style="font-size:150px;font-weight:900" class="acc">?</div>'),N=mk('<div class="pill" style="font-size:36px">no cash · no card</div>');
const tl=W('hook','lifts'),tb=W('hook','but'),tn=W('hook','no');cue(tl,'unlock');cue(tb,'whoosh');
SCN('hook',(t,o)=>{place(B,380,800,pop(t,S0('hook')-.3),o);const r=-80*eio(p(t,tl,tl+.6));place(A,300,890,1,o,r);
 const x=kf(t,[[S0('hook')-.3,1250],[tl,760],[tl+1.5,-300]]);place(C,x,1150,1,o);place(N,540,1400,pop(t,tn),o);place(Q,880,560,pop(t,tb),o*p(t,tb,tb+.1),Math.sin(t*3)*8)})}
// TAG
{const WS=mk(`<div style="width:760px;height:420px;border-radius:60px 60px 20px 20px;border:4px solid #3a3540;background:linear-gradient(180deg,#1d2430,#121418);position:relative"><div id="stk" style="position:absolute;right:60px;top:40px;width:200px;height:110px;border-radius:14px;background:#fde047"></div></div>`);
const Z=mk(`<div style="width:640px;height:340px;border-radius:30px;background:#fde047;position:relative;box-shadow:0 0 60px rgba(253,224,71,.5)"><svg width="640" height="340" viewBox="0 0 640 340"><g fill="none" stroke="#3b2f00" stroke-width="6">${[0,1,2,3,4].map(i=>`<rect x="${70+i*22}" y="${60+i*22}" width="${500-i*44}" height="${220-i*44}" rx="20"/>`).join('')}</g><rect x="285" y="140" width="70" height="60" rx="8" fill="#111"/></svg></div>`);
const L1=mk('<div class="pill">antenna</div>'),L2=mk('<div class="pill">chip</div>'),NB=mk('<div class="card" style="font-size:36px">🔋 <s>battery</s> · none</div>'),ID=mk('<div class="card on mono" style="font-size:36px"><span class="dim">TAG ID</span><br>34161FA8 2032 9F1C…</div>');
const tc=W('tag','chip'),ta=W('tag','antenna'),tn=W('tag','no'),ti=W('tag','unique');cue(tc,'pop');cue(ti,'ding');
SCN('tag',(t,o)=>{const z=p(t,tc-.6,tc);place(WS,540,560,1,o*(1-z*.7));place(Z,540,620,.3+.7*eio(z),o*z);place(L2,540,850,pop(t,tc),o);place(L1,240,430,pop(t,ta),o);place(NB,540,1060,pop(t,tn),o);place(ID,540,1280,pop(t,ti),o)})}
// READ
{const R=node('tower','Lane reader'),C=carEl(),Wv=[0,1,2].map(()=>mk('<div style="width:300px;height:150px;border-radius:0 0 150px 150px;border:5px solid #fde047;border-top:none"></div>')),PW=mk('<div class="pill">radio waves → power</div>'),T=mk('<div class="tok mono">ID 34161FA8…</div>'),ST=mk('<div style="width:60px;height:40px;border-radius:8px;background:#fde047;box-shadow:0 0 30px #fde047"></div>');
const ts=W('read','sends'),tp=W('read','power'),tr=W('read','reflects');cue(ts,'up');cue(tp,'shimmer');cue(tr,'beep');
SCN('read',(t,o)=>{place(R,540,420,pop(t,S0('read')-.3),o);glow(R,t>ts);place(C,540,1050,1,o);place(ST,600,985,1,o*(t>tp?1:.5));
 Wv.forEach((w,i)=>{const ph=((t-ts)*.7+i/3)%1;place(w,540,560+ph*360,.5+ph*.8,o*(t>ts&&t<tr+.3?(1-ph):0))});
 place(PW,540,1300,pop(t,tp),o);const u=eio(p(t,tr,tr+1.2));place(T,540,kf(u,[[0,930],[1,640]]),pop(t,tr),o*(1-p(t,tr+1.6,tr+2))) })}
// PLAZA
{const P=node('server','Plaza system'),Cm=node('cam','Camera'),Cl=['Car','Bus','Truck'].map(c=>mk(`<div class="card" style="width:220px;text-align:center">${c}</div>`)),Tl=mk('<div class="card on" style="font-size:36px">Toll set by vehicle class</div>'),PL=mk('<div class="card mono" style="font-size:44px;background:#f5f5f5;color:#111;border:4px solid #111">MH 12 AB 1234</div>');
const tv=W('plaza','vehicle'),tc=W('plaza','car'),tw=W('plaza','works'),tcam=W('plaza','camera'),tsn=W('plaza','snaps');cue(tv,'tick');cue(tc,'pop');cue(tsn,'lock');
SCN('plaza',(t,o)=>{place(P,540,440,pop(t,S0('plaza')-.3),o);glow(P,t>tv);Cl.forEach((c,i)=>{place(c,250+i*290,750,pop(t,tc+i*.25),o);c.firstElementChild.classList.toggle('on',i==0&&t>tw)});
 place(Tl,540,920,pop(t,tw),o);place(Cm,260,1200,pop(t,tcam),o);place(PL,680,1200,pop(t,tsn),o);glow(Cm,t>tsn&&t<tsn+.6)})}
// NETC
{const xs=[150,400,660,930],lb=[['server','Plaza'],['bank','Its bank'],['gate','NPCI NETC'],['bank','Your bank']],N=lb.map(([i,l])=>node(i,l,150)),e=edge([[150,700],[930,700]]),T=mk('<div class="tok" style="font-size:28px">₹ toll · tag ID</div>'),Sub=[mk('<div class="dim" style="text-align:center">acquirer</div>'),mk('<div class="dim" style="text-align:center">switch</div>'),mk('<div class="dim" style="text-align:center">issuer</div>')];
const tb=W('netc','bank'),tn=W('netc','npci'),ti=W('netc','issued');cue(tb,'whoosh');cue(tn,'beep');cue(ti,'pop');
SCN('netc',(t,o)=>{const ts=[S0('netc')-.3,tb-.2,tn-.2,ti-.6];N.forEach((n,i)=>{place(n,xs[i],700,pop(t,ts[i]),o)});drawEdge(e,t,S0('netc'),o,true);
 const x=kf(t,[[S0('netc'),150],[tb,400],[tn,660],[ti,930]]);place(T,x,540,pop(t,S0('netc')),o);N.forEach((n,i)=>glow(n,Math.abs(x-xs[i])<60));
 Sub.forEach((s,i)=>place(s,xs[i+1],890,1,o*p(t,ts[i+1],ts[i+1]+.3)))})}
// DEBIT
{const B=node('bank','Your bank'),C1=mk('<div class="card" style="font-size:36px"><span class="acc">✓</span> tag valid</div>'),C2=mk('<div class="card" style="font-size:36px"><span class="acc">✓</span> balance OK</div>'),Wl=mk('<div class="card on" style="font-size:40px"><span class="dim">FASTAG BALANCE</span><br><span class="mono" id="bal"></span></div>'),Ap=mk('<div class="tok" style="font-size:36px">✓ APPROVED</div>');
const tv=W('debit','valid'),tbal=W('debit','balance'),td=W('debit','debits'),tap=W('debit','approved');cue(tv,'tick');cue(tbal,'tick');cue(td,'down');cue(tap,'ding');
SCN('debit',(t,o)=>{place(B,540,430,pop(t,S0('debit')-.3),o);glow(B,t>tv);place(C1,320,700,pop(t,tv),o);place(C2,760,700,pop(t,tbal),o);place(Wl,540,960,pop(t,tbal+.3),o);
 const b=500-95*eio(p(t,td,td+.8));$('bal').textContent='₹ '+b.toFixed(0);place(Ap,kf(t,[[tap,540],[tap+1.6,-200]]),1220,pop(t,tap),o)})}
// GATE
{const B=booth(),A=arm(),C=carEl(),S=mk('<div class="card" style="width:640px;background:#26222b;font-size:30px;border-color:#fde047"><div class="dim acc">SMS · now</div><div style="margin-top:8px">Toll paid via FASTag for MH12AB1234</div></div>'),Tm=mk('<div class="pill" style="font-size:36px">within seconds</div>');
const tl=W('gate','lifts'),tu=W('gate','usually'),ts=W('gate','sms');cue(tl,'unlock');cue(ts,'ding');
SCN('gate',(t,o)=>{place(B,380,800,1,o);const r=-80*eio(p(t,tl,tl+.6));place(A,300,890,1,o,r);
 place(C,kf(t,[[S0('gate')-.3,900],[tl+.4,760],[tl+2.5,-300]]),1150,1,o);place(Tm,540,1400,pop(t,tu),o);place(S,540,380,1,o*p(t,ts-.3,ts))})}
outro([['chip','Tag'],['tower','Reader'],['server','Plaza'],['bank','Banks'],['car','Go']],'No stopping.','Just radio and banks.');
