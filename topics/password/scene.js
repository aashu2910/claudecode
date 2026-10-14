const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const lockC=()=>buddy('rect','#d1fae5','#059669',`<path d="M60 20V0a40 40 0 0180 0v20" stroke="#d1fae5" stroke-width="16" fill="none" transform="translate(0 10)"/>`,110,.8);
const H='$2b$12$Xk9…f3Qa';const box=(h,c='card')=>mk(`<div class="${c} mono" style="font-size:30px">${h}</div>`);
// HOOK
{const In=box('password: ••••••••'),Db=mk('<div class="card mono" style="font-size:26px;text-align:center"><span class="dim">DATABASE</span><br>user: you<br>pass: <span class="acc">✕ not stored</span></div>'),Q=qmark();
const tc=W('hook','checks'),tn=W('hook','never'),th=W('hook','how');cue(tc,'beep');cue(tn,'lock');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(In,540,480,pop(t,S0('hook')-.3),o);place(Db,540,840,pop(t,tn-.4),o);kk(t,880,1490,{op:o,s:.55,mood:t>th?'o':'happy',jumpT:th});place(Q,180,1300,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// HASH
{const P=box('"mango123"'),F=node('gate','Hash function'),O=box(H,'card on'),e1=edge([[540,480],[540,620]]),e2=edge([[540,800],[540,940]]);
const th=W('hash','hash'),ts=W('hash','scramble'),tj=W('hash','jumble');cue(th,'pop');cue(ts,'scramble');cue(tj,'ding');
SCN('hash',(t,o)=>{place(P,540,420,1,o);drawEdge(e1,t,th,o,true);place(F,540,710,pop(t,th),o);glow(F,t>ts);drawEdge(e2,t,ts,o,true);place(O,540,1030,pop(t,tj),o);kk(t,170,1490,{op:o,s:.5})})}
// ONEWAY
{const A=box('"mango123" → '+H),B=box('"mango123" → '+H),X=mk('<div class="card" style="font-size:34px;text-align:center">'+H+' → <span style="color:#f87171">❓ ✕</span><br><span class="dim">can\'t reverse</span></div>');
const ts=W('oneway','same'),tb=W('oneway','backwards');cue(ts,'tick');cue(tb,'lock');
SCN('oneway',(t,o)=>{place(A,540,480,pop(t,ts),o);place(B,540,620,pop(t,ts+.4),o);place(X,540,900,pop(t,tb),o);kk(t,170,1490,{op:o,s:.5,mood:t>tb?'grin':'happy'})})}
// LOGIN
{const T=box('you type: "mango123"'),H1=box('new hash: '+H),H2=box('stored: '+H,'card on'),Ok=label('✓ MATCH → you\'re in','tok',38);
const th=W('login','hashed'),tm=W('login','match'),ti=W('login','in');cue(th,'scramble');cue(tm,'ding');cue(ti,'unlock');
SCN('login',(t,o)=>{place(T,540,420,pop(t,S0('login')-.3),o);place(H1,540,620,pop(t,th),o);place(H2,540,780,pop(t,th+.4),o);place(Ok,540,1000,pop(t,tm),o);kk(t,170,1490,{op:o,s:.5,mood:t>ti?'grin':'happy',jumpT:ti})})}
// SALT
{const S=buddy('tall','#ffffff','#d1d5db',`<g fill="#6b7280">${[70,100,130].map(x=>`<circle cx="${x}" cy="20" r="6"/>`).join('')}</g>`,110,.8),A=box('A: "mango123" + 7fQ2 → $…Kd8'),B=box('B: "mango123" + p9Lx → $…a1Z'),L=label('same password, different hashes','tok',32);
const tr=W('salt','random'),ts=W('salt','salt'),td=W('salt','different');cue(ts,'shimmer');cue(td,'ding');
SCN('salt',(t,o)=>{cplace(S,t,540,620,{op:o,s:1,popT:ts-.3,mood:'joy',r:t>ts?Math.sin(t*8)*15:0});place(A,540,820,pop(t,ts+.3),o);place(B,540,960,pop(t,ts+.7),o);place(L,540,1160,pop(t,td),o)})}
// SLOW
{const G=mk('<div class="big" style="font-size:56px">guesses: <span class="acc mono" id="gs"></span></div>'),Al=['bcrypt','Argon2'].map(s=>label(s,'pill',34)),Sn=mk('<div style="font-size:130px">🐢</div>'),L=label('billions of guesses → painfully slow','tok',30);
const ts=W('slow','slow'),tb=W('slow','bcrypt'),tg=W('slow','guessing');cue(tb,'pop');cue(tg,'down');
SCN('slow',(t,o)=>{const n=t<tg?Math.floor((t-S0('slow'))*2e6):Math.floor((tg-S0('slow'))*2e6+(t-tg)*20);$('gs').textContent=Math.max(0,n).toLocaleString('en-IN');place(G,540,440,1,o);Al.forEach((a,i)=>place(a,380+i*320,640,pop(t,tb+i*.3),o));place(Sn,540,920,pop(t,tg),o);place(L,540,1180,pop(t,tg+.3),o)})}
// YOU
{const L=lockC(),T=['🔑 different password per site','📲 turn on 2FA'].map(s=>label(s,'pill',32)),Lk=label('leaks happen ⚠','tok',34);
const td=W('you','different'),tt=W('you','two'),tl=W('you','leaks');cue(td,'tick');cue(tt,'tick');cue(tl,'beep');
SCN('you',(t,o)=>{T.forEach((x,i)=>place(x,540,420+i*120,pop(t,[td,tt][i]),o));cplace(L,t,540,1100,{op:o,s:1.2,mood:'joy',jumpT:tt+.3});place(Lk,540,1250,pop(t,tl),o)})}
charOutro([[lockC(),.6],[buddy('tall','#ffffff','#d1d5db','',110,.8),.55]],'Your secret','stays secret.');
