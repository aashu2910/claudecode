const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const thumb=(c)=>mk(`<div style="width:150px;height:90px;border-radius:10px;background:linear-gradient(135deg,${c},#1f2937);display:flex;align-items:center;justify-content:center"><div style="width:0;height:0;border-left:24px solid #fff;border-top:15px solid transparent;border-bottom:15px solid transparent"></div></div>`);
const COL=['#ef4444','#f59e0b','#22c55e','#3b82f6','#a855f7','#ec4899'];
// HOOK
{const T=thumb('#ef4444'),N=label('Up next →','tok',34),Q=qmark(),B=mk('<div class="big" style="font-size:80px">billions</div>');
const tf=W('hook','finish'),tl=W('hook','lines'),tb=W('hook','billions');cue(tl,'pop');cue(tb,'whoosh');
SCN('hook',(t,o)=>{place(T,540,700,pop(t,tl)*2.5,o);place(N,540,920,pop(t,tl),o);place(B,540,420,pop(t,tb),o);place(Q,860,1200,pop(t,tb),o*p(t,tb,tb+.1),Math.sin(t*3)*8);kk(t,180,1490,{op:o,s:.5,mood:t>tb?'o':'happy'})})}
// CANDIDATES
{const T=Array.from({length:30},(_,i)=>thumb(COL[i%6])),L=label('billions → a few hundred','tok',32);
const tf=W('candidates','fast'),th=W('candidates','hundred');cue(tf,'scramble');cue(th,'ding');
SCN('candidates',(t,o)=>{const k=p(t,th,th+1);T.forEach((x,i)=>{const keep=i%5==0;place(x,150+(i%6)*156,520+Math.floor(i/6)*120,.9,o*(keep?1:1-k))});place(L,540,1250,pop(t,th),o)})}
// SIGNALS
{const S=['🕘 watch history','🔍 searches','👍 likes','🔔 subscriptions','⏭️ skips · not interested'].map(s=>label(s,'pill',30));
const ts=[W('signals','watch'),W('signals','searches'),W('signals','likes'),W('signals','subscriptions'),W('signals','skip')];ts.forEach(x=>cue(x,'tick'));
SCN('signals',(t,o)=>{ts.forEach((x,i)=>place(S[i],540,450+i*130,pop(t,x),o));kk(t,540,1400,{op:o,s:.6,mood:'grin'})})}
// RANK
{const R=[['click',.62],['keep watching',.48]].map(([a,v])=>{const d=mk(`<div style="width:820px;font-weight:800;font-size:30px">${a}<div style="height:44px;border-radius:22px;background:#1f2937;overflow:hidden;margin-top:8px"><div class="b" style="height:100%;background:#ef4444"></div></div></div>`);d.v=v;return d}),T=thumb('#3b82f6'),L=label('score each candidate','tok',32);
const ts=W('rank','scores'),tc=W('rank','click'),tl=W('rank','long');cue(ts,'scramble');cue(tc,'tick');cue(tl,'tick');
SCN('rank',(t,o)=>{place(T,540,480,1.6,o);place(L,540,640,pop(t,ts),o);R.forEach((r,i)=>{r.querySelector('.b').style.width=(r.v*100*eio(p(t,[tc,tl][i],[tc,tl][i]+.6)))+'%';place(r,540,860+i*170,pop(t,[tc,tl][i]),o)})})}
// SATISFY
{const S=mk('<div class="card" style="font-size:32px;text-align:center;width:700px"><span class="dim">SURVEY</span><br>Was this video worth your time?<br>⭐⭐⭐⭐⭐</div>'),L=label('not just clicks','tok',32);
const ts=W('satisfy','surveys'),tc=W('satisfy','clicks');cue(ts,'pop');cue(tc,'ding');
SCN('satisfy',(t,o)=>{place(S,540,700,pop(t,ts),o);place(L,540,960,pop(t,tc),o);kk(t,540,1350,{op:o,s:.6,mood:'grin'})})}
// MIX
{const T=Array.from({length:6},(_,i)=>thumb(COL[i])),L=label('variety + fresh topics','tok',32);
const tv=W('mix','variety');cue(tv,'shimmer');
SCN('mix',(t,o)=>{T.forEach((x,i)=>{x.firstElementChild.style.background=`linear-gradient(135deg,${t>tv?COL[i]:COL[0]},#1f2937)`;place(x,300+(i%2)*480,560+Math.floor(i/2)*170,1.3,o)});place(L,540,1150,pop(t,tv),o)})}
// CONTROL
{const C=['🚫 not interested','🗑️ remove from history','⏸️ pause watch history'].map(s=>label(s,'pill',32));
const ts=[W('control','not'),W('control','remove'),W('control','pause')];ts.forEach(x=>cue(x,'tick'));
SCN('control',(t,o)=>{ts.forEach((x,i)=>place(C[i],540,520+i*150,pop(t,x),o));kk(t,540,1350,{op:o,s:.7,mood:'grin',wave:1})})}
charOutro([[buddy('wide','#fecaca','#ef4444','',110,.7),.6],[buddy('circle','#fee2e2','#ef4444','',95,.8),.55]],'Your next video,','picked for you.');
