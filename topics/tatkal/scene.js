const clockC=()=>char(200,200,({t,blink,mood='happy',hh=10,mm=0})=>{const g=gid();const a=mm*6,b=(hh%12)*30+mm*.5;return `<defs>${grad(g,'#ffffff','#fed7aa')}</defs><circle cx="100" cy="100" r="90" fill="url(#${g})" stroke="#f97316" stroke-width="8"/><line x1="100" y1="100" x2="${100+45*Math.sin(b*Math.PI/180)}" y2="${100-45*Math.cos(b*Math.PI/180)}" stroke="#1f2937" stroke-width="9" stroke-linecap="round"/><line x1="100" y1="100" x2="${100+70*Math.sin(a*Math.PI/180)}" y2="${100-70*Math.cos(a*Math.PI/180)}" stroke="#f97316" stroke-width="6" stroke-linecap="round"/>${face(100,128,.6,{blink,mood})}`});
const serverC=()=>buddy('tall','#94a3b8','#334155',`<g fill="#0f172a">${[30,80,130].map(y=>`<rect x="60" y="${y}" width="80" height="12" rx="6"/>`).join('')}</g><circle cx="130" cy="36" r="6" fill="#4ade80"/>`,175,.6);
const userC=(c='#fdba74')=>char(100,140,({blink,mood='happy'})=>`<circle cx="50" cy="45" r="38" fill="${c}"/><rect x="15" y="85" width="70" height="55" rx="28" fill="#f97316"/>${face(50,42,.45,{blink,mood})}`);
const seatC=()=>buddy('rect','#fed7aa','#f97316',`<rect x="20" y="150" width="160" height="40" rx="14" fill="#c2410c"/>`,85,.9);
const cardC=()=>buddy('wide','#c7d2fe','#6366f1',`<rect x="0" y="80" width="200" height="22" fill="#1e1b4b"/><rect x="20" y="120" width="44" height="30" rx="6" fill="#fbbf24"/>`,125,.75);
const botC=()=>char(120,140,({blink})=>`<rect x="10" y="20" width="100" height="90" rx="20" fill="#ef4444"/><rect x="55" y="0" width="10" height="22" fill="#ef4444"/><rect x="28" y="50" width="22" height="12" fill="#111"/><rect x="70" y="50" width="22" height="12" fill="#111"/><rect x="40" y="82" width="40" height="8" fill="#111"/>`);
const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
// HOOK
{const C=clockC(),S=Array.from({length:12},()=>seatC()),T=label('10:00 AM','tok',48),Q=qmark(),G=label('SOLD OUT','tok',44);
const tt=W('hook','ten'),tg=W('hook','gone'),tw=W('hook','what');cue(tt,'ding');cue(tg,'down');cue(tw,'whoosh');
SCN('hook',(t,o)=>{const mm=kf(t,[[S0('hook'),58],[tt,60],[tg,62]]);cplace(C,t,540,620,{op:o,s:1.2,popT:S0('hook')-.3,hh:mm>=60?10:9,mm:mm%60,jumpT:tt,mood:t>tg?'o':'happy'});place(T,540,700,pop(t,tt),o);
 S.forEach((s,i)=>cplace(s,t,240+(i%4)*200,1000+Math.floor(i/4)*150,{op:o*(t>tg-1.2+i*.08?0:1),s:.45,mood:'happy'}));place(G,540,1150,pop(t,tg+.5),o);kk(t,880,1490,{op:o,s:.55,mood:t>tg?'o':'happy',jumpT:tw});place(Q,180,1350,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// OPEN
{const Cal=mk('<div class="card" style="font-size:34px;line-height:1.6;text-align:center"><span class="dim">ONE DAY BEFORE</span><br>Booking <span class="acc">Thu</span> → Journey Fri 🚆</div>'),A=label('AC classes · 10:00 AM','tok',36),N=label('Non-AC · 11:00 AM','pill',36),C1=clockC(),C2=clockC();
const td=W('open','day'),ta=W('open','ten'),tn=W('open','eleven');cue(td,'pop');cue(ta,'ding');cue(tn,'ding');
SCN('open',(t,o)=>{place(Cal,540,420,pop(t,td),o);cplace(C1,t,300,960,{op:o,popT:ta-.2,hh:10,mm:0,s:.9});cplace(C2,t,780,960,{op:o,popT:tn-.2,hh:11,mm:0,s:.9});place(A,300,1060,pop(t,ta),o);place(N,780,1060,pop(t,tn),o);kk(t,540,1480,{op:o,s:.55,mood:'grin'})})}
// RUSH
{const Sv=serverC(),U=Array.from({length:16},(_,i)=>userC(['#fdba74','#fcd34d','#f9a8d4','#a5b4fc'][i%4])),L=label('same second · huge spike','tok',36);
const tl=W('rush','log'),te=W('rush','exact'),tm=W('rush','massive');cue(tl,'scramble');cue(te,'up');cue(tm,'lock');
SCN('rush',(t,o)=>{const sw=t>tm;cplace(Sv,t,540+(sw?Math.sin(t*35)*4:0),760,{op:o,s:1.4,popT:S0('rush')-.3,mood:sw?'worry':'happy'});U.forEach((u,i)=>{const a=i/16*Math.PI*2;const r=520-300*eio(p(t,tl+i*.05,te+.5));cplace(u,t,540+Math.cos(a)*r*.8,1000+Math.sin(a)*r*.5,{op:o,s:.7,popT:tl-.3+i*.03,jumpT:te+(i%4)*.1,mood:'joy'})});place(L,540,360,pop(t,tm),o)})}
// QUEUE
{const Sv=serverC(),U=Array.from({length:6},(_,i)=>userC(['#fdba74','#fcd34d','#f9a8d4'][i%3])),B=botC(),X=mk('<div style="font-size:100px;color:#f87171;font-weight:900">✕</div>'),Cp=mk('<div class="card mono" style="font-size:44px;letter-spacing:8px;font-style:italic;text-decoration:line-through wavy rgba(255,255,255,.4)">7xK2p</div>'),Lv=label('captcha + login check'),Qd=label('queued → load spread out','tok',32);
const tq=W('queue','queued'),tc=W('queue','captcha'),tb=W('queue','bots'),ts=W('queue','spread');cue(tq,'pop');cue(tc,'tick');cue(tb,'lock');cue(ts,'ding');
SCN('queue',(t,o)=>{cplace(Sv,t,880,900,{op:o,s:1,mood:'happy'});U.forEach((u,i)=>{const step=t>ts?Math.floor((t-ts)*2):0;cplace(u,t,140+i*120+Math.min(step,1)*20,900,{op:o,s:.6,popT:tq-.3+i*.06,mood:'happy'})});place(Cp,540,520,pop(t,tc),o);place(Lv,540,640,pop(t,tc),o);cplace(B,t,300,1300,{op:o*p(t,tb-.3,tb),s:.9,bob:0});place(X,300,1240,pop(t,tb+.3),o);place(Qd,640,1360,pop(t,ts),o)})}
// SEAT
{const Co=mk(`<div style="width:900px;height:360px;border-radius:40px;background:#1f2937;border:5px solid #f97316;display:grid;grid-template-columns:repeat(8,1fr);gap:14px;padding:30px">${Array.from({length:16},(_,i)=>`<div class="st" style="border-radius:14px;background:${i%3==0?'#f97316':'#374151'}"></div>`).join('')}</div>`),S=seatC(),H=label('reserved while you pay ⏳','tok',34),Lv=label('live seat count: <span class="mono" id="sc"></span>');
const tc=W('seat','checks'),tl=W('seat','live'),tr=W('seat','reserves');cue(tc,'beep');cue(tr,'lock');
SCN('seat',(t,o)=>{place(Co,540,760,1,o);place(Lv,540,420,pop(t,tl),o);$('sc').textContent=t>tr?'5 → 4':'5';cplace(S,t,540,1280,{op:o,popT:tr,s:1,jumpT:tr+.2,mood:'joy'});place(H,540,1360,pop(t,tr+.3),o);kk(t,160,1490,{op:o,s:.5,mood:'grin'})})}
// PAY
{const Cd=cardC(),S=seatC(),X=label('✕ payment failed','pill',36),Tm=label('⏱ timed out'),Nx=userC('#fcd34d'),Bk=label('seat back for the next person','tok',32);
const tf=W('pay','fails'),tt=W('pay','times'),tb=W('pay','booked'),tg=W('pay','goes');cue(tf,'down');cue(tt,'tick');cue(tg,'whoosh');
SCN('pay',(t,o)=>{cplace(Cd,t,300,780,{op:o,s:1.1,popT:S0('pay')-.3,mood:t>tf?'sad':'happy',r:t>tf?Math.sin(t*20)*3*(1-p(t,tf+.6,tf+1)):0});place(X,300,880,pop(t,tf),o);place(Tm,300,980,pop(t,tt),o);const u=eio(p(t,tg,tg+1));cplace(S,t,760-0*u,780+420*u,{op:o,s:.8,mood:t>tg?'joy':'happy'});cplace(Nx,t,760,1440,{op:o*p(t,tg,tg+.3),s:1,mood:'joy',jumpT:tg+1});place(Bk,540,400,pop(t,tg),o)})}
// QUOTA
{const Pi=mk('<div id="pie" style="width:460px;height:460px;border-radius:230px"></div>'),Ls=label('Tatkal quota · small share','tok',34),D=Array.from({length:20},(_,i)=>userC(['#fdba74','#fcd34d','#f9a8d4','#a5b4fc'][i%4])),M=label('sells out in minutes ⚡','tok',36);
const ts=W('quota','small'),td=W('quota','demand'),tm=W('quota','minutes');cue(ts,'pop');cue(td,'scramble');cue(tm,'down');
SCN('quota',(t,o)=>{const a=eio(p(t,ts,ts+.6))*45;$('pie').style.background=`conic-gradient(#f97316 0 ${a}deg,#374151 ${a}deg 360deg)`;place(Pi,540,700,pop(t,S0('quota')-.3),o);place(Ls,540,380,pop(t,ts),o);D.forEach((d,i)=>cplace(d,t,120+(i%10)*92,1150+Math.floor(i/10)*130,{op:o,s:.55,popT:td+i*.04,mood:t>tm?'sad':'happy'}));place(M,540,1430,pop(t,tm),o)})}
charOutro([[clockC(),.6],[serverC(),.55],[seatC(),.6],[cardC(),.6]],'A race','for a few seats.');
