let seed=11;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
const COLS=['#fb923c','#60a5fa','#f472b6','#34d399','#facc15','#a78bfa'];
const reel=(c,w=120)=>mk(`<div style="width:${w}px;height:${w*1.7}px;border-radius:${w/7}px;background:linear-gradient(160deg,${c},#1a1a1f);border:3px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center"><div style="width:${w*.35}px;height:${w*.35}px">${icon('<path d="M8 6l10 6-10 6z"/>')}</div></div>`);
// HOOK
{const R=[reel(COLS[1],380),reel(COLS[0],380)],Q=mk('<div style="font-size:150px;font-weight:900" class="acc">?</div>'),Pf=mk('<div class="pill" style="font-size:36px">weirdly perfect</div>');
const ts=W('hook','swipe'),tp=W('hook','perfect'),tb=W('hook','but');cue(ts,'whoosh');cue(tp,'ding');cue(tb,'whoosh');
SCN('hook',(t,o)=>{const u=eio(p(t,ts,ts+.6));place(R[0],540,880-u*1300,1,o);place(R[1],540,880+(1-u)*1300,1,o);place(Pf,540,1430,pop(t,tp),o);place(Q,880,500,pop(t,tb),o*p(t,tb,tb+.1),Math.sin(t*3)*8)})}
// CAND
{const N=48,R=Array.from({length:N},(_,i)=>reel(COLS[i%6],70)),RP=R.map(()=>[rnd(),rnd()]),C=mk('<div class="card" style="font-size:34px">pool: <span class="acc mono" id="cn"></span> reels</div>'),Pi=mk('<div style="display:flex;gap:30px"><div class="card" style="font-size:28px">you follow · <span class="acc">few</span></div><div class="card on" style="font-size:28px">don\'t follow · <span class="acc">most</span></div></div>');
const tg=W('cand','gathers'),tm=W('cand','mostly');cue(tg,'scramble');cue(tm,'pop');
SCN('cand',(t,o)=>{R.forEach((r,i)=>{const [a,b]=RP[i];place(r,120+(i%8)*120,430+Math.floor(i/8)*140+Math.sin(t*2+i)*6,pop(t,tg+i*.03)*.85,o*(i%8<2?.45:1))});$('cn').textContent=Math.round(5000*eio(p(t,tg,tg+1.6))).toLocaleString('en-IN')+'+';place(C,540,1310,pop(t,tg),o);place(Pi,540,1450,pop(t,tm),o)})}
// SIGNALS
{const U=node('user','You'),S=[['watched to end','✓'],['liked','♥'],['shared','↗'],['skipped fast','✕']].map(([a,b])=>mk(`<div class="card" style="width:420px;display:flex;justify-content:space-between"><span>${a}</span><span class="acc">${b}</span></div>`)),es=[0,1,2,3].map(i=>edge([[540,560],[540,700+i*170]]));
const tl=W('signals','looks'),tk=[W('signals','watched'),W('signals','liked'),W('signals','shared'),W('signals','skipped')];tk.forEach(x=>cue(x,'tick'));
SCN('signals',(t,o)=>{place(U,540,420,pop(t,tl-.3),o);glow(U,t>tl);tk.forEach((x,i)=>place(S[i],540,720+i*170,pop(t,x),o))})}
// PREDICT
{const R=reel(COLS[2],220),Br=node('brain','Model',150),P=[['watch fully',.72],['like',.31],['send to friend',.18],['open audio',.09]].map(([a,v])=>{const d=mk(`<div style="width:860px;display:flex;align-items:center;gap:20px;font-weight:700;font-size:32px"><span style="width:280px;white-space:nowrap">${a}</span><div style="flex:1;height:36px;border-radius:18px;background:rgba(255,255,255,.08)"><div class="pb" style="height:100%;border-radius:18px;background:#fb923c"></div></div><span class="mono pv" style="width:110px;text-align:right"></span></div>`);d.v=v;return d});
const tm=W('predict','models'),tk=[W('predict','watch'),W('predict','like'),W('predict','send'),W('predict','audio')];cue(tm,'scramble');tk.forEach(x=>cue(x,'tick'));
SCN('predict',(t,o)=>{place(R,330,520,pop(t,S0('predict')-.3),o);place(Br,760,520,pop(t,tm),o);glow(Br,t>tm);P.forEach((d,i)=>{const v=d.v*eio(p(t,tk[i],tk[i]+.6));d.querySelector('.pb').style.width=v*100+'%';d.querySelector('.pv').textContent=Math.round(v*100)+'%';place(d,540,880+i*140,pop(t,tk[i]),o)})})}
// SCORE
{const Rw=[['watch',.72,'×1'],['like',.31,'×2'],['send',.18,'×5'],['audio',.09,'×1']].map(([a,v,w])=>mk(`<div class="card mono" style="width:520px;font-size:30px;display:flex;justify-content:space-between"><span>${a} ${Math.round(v*100)}%</span><span class="acc">${w}</span></div>`)),Sc=mk('<div class="big" style="font-size:80px">score <span class="acc mono" id="sc"></span></div>'),Ig=mk('<div class="card on" style="font-size:30px;text-align:center">sends to friends · weighted heavily<div class="dim" style="margin-top:6px">per Instagram · weights illustrative</div></div>');
const tw=W('score','weighted'),ta=W('score','added'),ts=W('score','sends');cue(tw,'tick');cue(ta,'ding');cue(ts,'up');
SCN('score',(t,o)=>{Rw.forEach((r,i)=>{const m=eio(p(t,ta,ta+.6));place(r,540,440+i*120+m*(700-440-i*120)*0,1-.0*m,o*pop(t,S0('score')-.3+i*.15)*(1-m*.5));r.firstElementChild.classList.toggle('on',i==2&&t>ts)});$('sc').textContent=(2.23*eio(p(t,ta,ta+1))).toFixed(2);place(Sc,540,980,pop(t,ta),o);place(Ig,540,1260,pop(t,ts),o)})}
// FILTER
{const N=8,cr=[0,1,1,2,3,4,2,5],R=Array.from({length:N},(_,i)=>reel(COLS[cr[i]],110)),bad=4,X=mk('<div style="font-size:120px;font-weight:900;color:#f87171">✕</div>'),G=mk('<div class="pill">breaks guidelines</div>'),Mx=mk('<div class="pill">no same creator back to back</div>');
const tr=W('filter','removes'),tm=W('filter','mixes'),tb=W('filter','back');cue(tr,'down');cue(tm,'whoosh');
SCN('filter',(t,o)=>{const m=eio(p(t,tm,tm+.8));const order=[0,1,3,2,5,6,7];let k=0;R.forEach((r,i)=>{if(i==bad){place(r,540,560,1,o*(1-p(t,tr+.3,tr+.8)));return}const j0=order.indexOf(i)>=0?[0,1,2,3,5,6,7].indexOf(i):k;const j1=order.indexOf(i);const x0=120+i*120,x1=180+j1*120;place(r,x0+(x1-x0)*m,560+(i==bad?0:0)+(i==2&&m>0&&m<1?-120*Math.sin(m*Math.PI):0),1,o)});
 place(X,540,560,pop(t,tr),o*(1-p(t,tr+.5,tr+.8)));place(G,540,820,pop(t,tr),o);place(Mx,540,950,pop(t,tm),o);
 const C=mk;})}
// LEARN
{const R=reel(COLS[3],320),H=mk('<div style="font-size:120px" class="acc">♥</div>'),Sg=mk('<div class="tok" style="font-size:32px">new signal</div>'),U=node('brain','Model',150),Lp=edge([[540,1000],[540,1150],[860,1150],[860,500],[700,500]]);
const tw=W('learn','whatever'),ts=W('learn','signal'),ta=W('learn','adjusting');cue(tw,'pop');cue(ts,'beep');cue(ta,'whoosh');
SCN('learn',(t,o)=>{place(R,450,720,1,o);place(H,450,720,pop(t,tw+.3)*(1+.1*Math.sin(t*6)),o*(t>tw+.3?1:0));drawEdge(Lp,t,ts-.3,o,t>ts);place(Sg,...lerpPath(Lp.pts,p(t,ts,ta+.5)),pop(t,ts),o);place(U,860,420,pop(t,S0('learn')),o);glow(U,t>ta)})}
outro([['play','Gather'],['brain','Predict'],['chart','Score'],['grid','Filter']],'Every swipe,','a new guess.');
