const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const numC=()=>mk('<div class="card mono" style="font-size:30px">+91 98•• •••21</div>');
// HOOK
{const P=phoneC(),Calls=['💰 Loan offer!','🎁 You won!','📈 Invest now'].map(s=>label(s,'pill',32)),Q=qmark();
const tc=W('hook','call'),tn=W('hook','never'),th=W('hook','how');cue(tc,'beep');cue(tc+.6,'beep');cue(th,'whoosh');
SCN('hook',(t,o)=>{cplace(P,t,540,1250,{op:o,s:1.8,popT:S0('hook')-.3,mood:t>tc?'worry':'happy',r:t>tc?Math.sin(t*30)*3:0});Calls.forEach((c,i)=>place(c,540,400+i*120,pop(t,tc+i*.4),o));kk(t,880,1490,{op:o,s:.5,mood:t>th?'o':'happy',jumpT:th});place(Q,180,1300,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// LEAKS
{const N=numC(),S=[['🔓 data breaches','breaches'],['📝 shared forms','forms'],['🛍️ shopping sign-ups','shopping'],['📱 apps reading contacts','apps']].map(([a,w])=>({e:label(a,'pill',28),w})),E=[0,1,2,3].map((_,i)=>edge([[[220,860,220,860][i],[460,460,1200,1200][i]],[540,830]]));
const ts=S.map(s=>W('leaks',s.w));ts.forEach(x=>cue(x,'tick'));
SCN('leaks',(t,o)=>{place(N,540,830,pop(t,S0('leaks')-.3),o);S.forEach((s,i)=>{place(s.e,[220,860,220,860][i],[460,460,1200,1200][i],pop(t,ts[i]),o);drawEdge(E[i],t,ts[i],o,true)})})}
// LISTS
{const L=mk(`<div class="card mono" style="font-size:26px;line-height:1.7;width:760px"><span class="dim">LEAD LIST · ₹ for sale</span><br>${['+91 98•• •••21 · Pune · 28 · loans','+91 99•• •••07 · Delhi · 35 · cars','+91 70•• •••54 · Chennai · 22 · gadgets'].map(r=>`<div>${r}</div>`).join('')}</div>`),Tg=label('tagged: city · age · interests','tok',32),Ct=label('💸 sold','pill',36);
const tb=W('lists','bundled'),ts=W('lists','sold'),tt=W('lists','tagged');cue(tb,'pop');cue(ts,'shimmer');cue(tt,'tick');
SCN('lists',(t,o)=>{place(L,540,760,pop(t,tb),o);place(Ct,860,520,pop(t,ts),o,-10);place(Tg,540,1100,pop(t,tt),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// DIALER
{const D=node('server','Auto-dialer'),Ps=Array.from({length:12},()=>phoneC()),Sq=label('…021, …022, …023','pill',30);
const td=W('dialer','dials'),ts=W('dialer','sequence');cue(td,'scramble');cue(ts,'tick');
SCN('dialer',(t,o)=>{place(D,540,460,pop(t,S0('dialer')-.3),o);glow(D,t>td);Ps.forEach((p0,i)=>cplace(p0,t,140+(i%6)*160,950+Math.floor(i/6)*260,{op:o,s:.45,popT:td+i*.08,mood:'worry',r:Math.sin(t*30+i)*3}));place(Sq,540,1450,pop(t,ts),o)})}
// ANSWER
{const P=phoneC(),A=label('✓ ACTIVE','tok',40),V=label('value ↑ · more calls ↑','pill',32),Cs=Array.from({length:5},()=>label('📞','pill',36));
const tp=W('answer','pick'),ta=W('answer','active'),tm=W('answer','more',1);cue(tp,'pop');cue(ta,'lock');cue(tm,'up');
SCN('answer',(t,o)=>{cplace(P,t,540,1200,{op:o,s:1.6,mood:t>tm?'worry':'happy'});place(A,540,500,pop(t,ta),o);place(V,540,620,pop(t,ta+.6),o);Cs.forEach((c,i)=>place(c,200+i*170,820,pop(t,tm+i*.15),o))})}
// CALLERID
{const P=phoneC(),Id=mk('<div class="card on" style="font-size:32px;text-align:center"><span class="dim">INCOMING</span><br>⚠ Likely spam · "Loan Offers"<br><span class="dim">reported by 12,400 users</span></div>'),Cr=label('crowdsourced contacts + reports','pill',30);
const ta=W('callerid','apps'),tc=W('callerid','crowdsourced'),ts=W('callerid','spam');cue(ta,'pop');cue(ts,'ding');
SCN('callerid',(t,o)=>{place(Id,540,520,pop(t,ts-.4),o);place(Cr,540,720,pop(t,tc),o);cplace(P,t,540,1250,{op:o,s:1.4,mood:t>ts?'grin':'happy'});kk(t,880,1490,{op:o,s:.5,mood:'grin'})})}
// FIGHT
{const C=['🚫 turn on DND (TRAI)','🚩 report spam','☎️ telemarketers: 140-xxxxx'].map(s=>label(s,'pill',32)),Sh=buddy('circle','#fed7aa','#f97316','<text x="100" y="135" font-size="80" text-anchor="middle">🛡️</text>',75,.6);
const ts=[W('fight','dnd'),W('fight','report'),W('fight','one')];ts.forEach(x=>cue(x,'tick'));
SCN('fight',(t,o)=>{ts.forEach((x,i)=>place(C[i],540,420+i*130,pop(t,x),o));cplace(Sh,t,540,1250,{op:o,s:1.2,popT:ts[0],mood:'joy',jumpT:ts[2]});kk(t,180,1490,{op:o,s:.5,mood:'grin'})})}
charOutro([[phoneC(),.6],[buddy('circle','#fed7aa','#f97316','',95,.8),.55]],'Now','you know.');
