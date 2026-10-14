const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phone=(id)=>mk(`<div style="width:380px;height:680px;border-radius:50px;background:#111827;border:10px solid #374151;display:flex;align-items:center;justify-content:center"><div id="${id}" style="width:330px;height:600px;border-radius:30px;background:linear-gradient(135deg,#8b5cf6,#ec4899);display:flex;align-items:center;justify-content:center;font-size:120px">🎬</div></div>`);
// HOOK
{const P=phone('hp'),R=label('● REC','tok',34),Q=qmark();
const tr=W('hook','screen'),tb=W('hook','black'),th=W('hook','how');cue(tr,'beep');cue(tb,'whoosh');cue(th,'pop');
SCN('hook',(t,o)=>{const e=$('hp');e.style.background=t>tb?'#000':'linear-gradient(135deg,#8b5cf6,#ec4899)';e.textContent=t>tb?'':'🎬';place(P,540,760,1,o);place(R,540,330,pop(t,tr),o);kk(t,280,1350,{op:o,s:.55,mood:t>tb?'sad':'happy'});place(Q,820,1300,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// DRM
{const L=label('DRM · digital rights management','tok',32),Lk=mk('<div style="font-size:200px">🔒</div>'),U=[label('▶ watch ✓','pill',32),label('⧉ copy ✗','pill',32)];
const td=W('drm','drm'),tl=W('drm','locks'),tw=W('drm','watched'),tc=W('drm','copied');cue(td,'pop');cue(tl,'lock');cue(tw,'tick');cue(tc,'beep');
SCN('drm',(t,o)=>{place(L,540,420,pop(t,td),o);place(Lk,540,780,pop(t,tl),o);place(U[0],360,1080,pop(t,tw),o);place(U[1],720,1080,pop(t,tc),o)})}
// ENCRYPT
{const F=mk('<div class="card mono" id="enc" style="font-size:40px;width:640px;word-break:break-all"></div>'),L=label('no key → scrambled data','pill',30);
const te=W('encrypt','encrypted'),tu=W('encrypt','useless');cue(te,'scramble');cue(tu,'beep');
SCN('encrypt',(t,o)=>{let s='';for(let i=0;i<60;i++)s+='#$%&@*0Z9xQ'[(i*7+Math.floor(t*12))%11];$('enc').textContent=s;place(F,540,760,pop(t,te),o);place(L,540,1080,pop(t,tu),o)})}
// KEY
{const S=node('server','licence server',150),Ph=node('phone','your device',150),Ky=mk('<div style="font-size:90px">🔑</div>'),L=label('trusted device ✓','pill',30);
const ts=W('key','licence'),tk=W('key','key'),tt=W('key','trusted');cue(ts,'pop');cue(tk,'whoosh');cue(tt,'ding');
SCN('key',(t,o)=>{place(S,540,450,pop(t,ts),o);place(Ph,540,1100,1,o);const k=eio(p(t,tt,tt+1));place(Ky,540,560+k*420,p(t,tk,tk+.2),o);place(L,540,1300,pop(t,tt+.8),o)})}
// SECURE
{const C=mk('<div style="width:360px;height:260px;border-radius:24px;background:#1f2937;border:6px solid #8b5cf6;display:flex;align-items:center;justify-content:center;color:#fff;font-size:34px;text-align:center">protected<br>zone 🔐</div>'),Sc=mk('<div style="font-size:150px">🖥️</div>'),L=label('decrypt → straight to screen','tok',30);
const td=W('secure','decrypted'),ts=W('secure','straight');cue(td,'lock');cue(ts,'whoosh');
SCN('secure',(t,o)=>{place(C,540,620,pop(t,td),o);place(Sc,540,1120,pop(t,ts),o);place(L,540,1340,pop(t,ts+.4),o)})}
// FLAG
{const P=phone('fp'),F=label('🚩 window = secure','tok',32),Cap=label('📸 capture → black','pill',30);
const tm=W('flag','marks'),tb=W('flag','black');cue(tm,'pop');cue(tb,'beep');
SCN('flag',(t,o)=>{const e=$('fp');e.style.background=t>tb?'#000':'linear-gradient(135deg,#8b5cf6,#ec4899)';e.textContent=t>tb?'':'🎬';place(F,540,330,pop(t,tm),o);place(P,540,820,1,o,0);place(Cap,540,1300,pop(t,tb),o)})}
// LIMITS
{const Cm=mk('<div style="font-size:160px">📷</div>'),L=[label('camera at screen ✗ not stopped','pill',28),label('easy copying → much harder','tok',30)];
const tc=W('limits','camera'),th=W('limits','harder');cue(tc,'pop');cue(th,'ding');
SCN('limits',(t,o)=>{place(Cm,540,700,pop(t,tc),o);place(L[0],540,980,pop(t,tc+.3),o);place(L[1],540,1120,pop(t,th),o);kk(t,540,1450,{op:o,s:.45,mood:'happy'})})}
charOutro([[K,.6],[buddy('rect','#ede9fe','#8b5cf6','',95,.8),.5]],'Watch it,','don\'t copy it.');
