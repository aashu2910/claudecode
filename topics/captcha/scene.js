const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const box=(id)=>mk(`<div class="card" style="width:640px;font-size:36px;display:flex;align-items:center;gap:24px"><div id="${id}" style="width:60px;height:60px;border-radius:10px;border:4px solid #9ca3af;display:flex;align-items:center;justify-content:center;color:#10b981;font-size:48px"></div>I'm not a robot</div>`);
const botC=()=>char(160,180,()=>`<rect x="20" y="30" width="120" height="110" rx="24" fill="#ef4444"/><rect x="75" y="5" width="10" height="28" fill="#ef4444"/><rect x="45" y="70" width="25" height="14" fill="#111"/><rect x="92" y="70" width="25" height="14" fill="#111"/>`);
// HOOK
{const B=box('hb'),Q=qmark();
const tt=W('hook','tick'),tb=W('hook','believes'),th=W('hook','how');cue(tt,'tick');cue(tb,'ding');cue(th,'whoosh');
SCN('hook',(t,o)=>{$('hb').textContent=t>tt+.4?'✓':'';place(B,540,700,1,o);kk(t,540,1300,{op:o,s:.7,mood:t>tb?'grin':'happy'});place(Q,860,1000,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// NAME
{const L=label('humans vs bots','tok',34),B=botC(),U=['📧 spam','🎟️ ticket scalping','🔓 account break-ins'].map(s=>label(s,'pill',30));
const tt=W('name','test'),tb=W('name','bots');cue(tt,'pop');cue(tb,'lock');
SCN('name',(t,o)=>{place(L,540,420,pop(t,tt),o);cplace(B,t,540,860,{op:o,s:1.2,popT:tb-.3,bob:0});U.forEach((u,i)=>place(u,540,1000+i*110,pop(t,tb+i*.3),o))})}
// OLD
{const W1=mk('<div class="card mono" style="font-size:70px;letter-spacing:10px;font-style:italic;transform:skew(-12deg)">x7Kp2</div>'),L=label('easy for people · hard for computers (back then)','pill',28);
const tw=W('old','warped'),te=W('old','easy');cue(tw,'pop');cue(te,'tick');
SCN('old',(t,o)=>{place(W1,540,720,pop(t,tw),o,Math.sin(t*2)*4);place(L,540,1000,pop(t,te),o)})}
// BEHAVIOUR
{const Cur=mk('<div style="font-size:60px">➤</div>'),S=['🖱️ mouse movement','📜 scrolling + typing','🌐 browser details'].map(s=>label(s,'pill',30));
const tw=W('behaviour','watch'),tm=W('behaviour','mouse'),ts=W('behaviour','scroll'),tb=W('behaviour','browser');[tm,ts,tb].forEach(x=>cue(x,'tick'));
SCN('behaviour',(t,o)=>{place(Cur,540+Math.sin(t*2)*200+Math.sin(t*7)*20,560+Math.cos(t*1.5)*80,1,o,-45);[tm,ts,tb].forEach((x,i)=>place(S[i],540,860+i*130,pop(t,x),o))})}
// SCORE
{const G=mk('<div style="width:700px;height:60px;border-radius:30px;background:linear-gradient(90deg,#10b981,#fbbf24,#ef4444);position:relative"><div id="sn" style="position:absolute;top:-20px;width:20px;height:100px;background:#fff;border-radius:6px"></div></div>'),L=[label('risk score','tok',34),label('looks normal → one click (or no test)','pill',28)];
const tr=W('score','risk'),tl=W('score','normal');cue(tr,'scramble');cue(tl,'ding');
SCN('score',(t,o)=>{$('sn').style.left=(kf(t,[[tr,350],[tl,90]]))+'px';place(G,540,800,1,o);place(L[0],540,560,pop(t,tr),o);place(L[1],540,1040,pop(t,tl),o)})}
// PUZZLE
{const Gr=mk(`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:480px">${Array.from({length:9},(_,i)=>`<div class="pz" style="height:150px;border-radius:8px;background:#374151;display:flex;align-items:center;justify-content:center;font-size:60px">${[2,4,6].includes(i)?'🚦':i==7?'🚸':''}</div>`).join('')}</div>`),L=label('suspicious → puzzle time','tok',30);
const ts=W('puzzle','suspicious'),tl=W('puzzle','traffic');cue(ts,'beep');cue(tl,'pop');
SCN('puzzle',(t,o)=>{place(L,540,400,pop(t,ts),o);place(Gr,540,900,pop(t,tl),o);Gr.querySelectorAll('.pz').forEach((c,i)=>c.style.outline=t>tl+1&&[2,4,6].includes(i)?'6px solid #10b981':'none')})}
// AI
{const B=botC(),Ck=label('✓ AI solves many image puzzles','pill',30),R=label('→ more weight on behaviour','tok',32);
const ta=W('ai','ai'),tb=W('ai','behaviour');cue(ta,'pop');cue(tb,'ding');
SCN('ai',(t,o)=>{cplace(B,t,540,900,{op:o,s:1.3,popT:ta-.3,bob:0});place(Ck,540,450,pop(t,ta),o);place(R,540,1100,pop(t,tb),o)})}
charOutro([[buddy('rect','#d1fae5','#10b981','',95,.8),.55],[botC(),.6]],'Proving','you\'re human.');
