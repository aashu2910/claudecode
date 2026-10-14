const trainC=()=>char(460,200,({blink,mood='happy'})=>{const g=gid();return `<defs>${grad(g,'#f5f3ff','#a78bfa')}</defs><rect x="10" y="20" width="440" height="150" rx="40" fill="url(#${g})"/><rect x="30" y="45" width="90" height="60" rx="14" fill="#1e1b4b"/>${[160,250,340].map(x=>`<rect x="${x}" y="45" width="60" height="110" rx="8" fill="#4c1d95" opacity=".55"/>`).join('')}<circle cx="80" cy="180" r="18" fill="#111"/><circle cx="380" cy="180" r="18" fill="#111"/>${face(75,72,.45,{blink,mood,cheek:false,eye:'#e9d5ff'})}`});
const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const track=()=>mk('<div style="width:1080px;height:24px;background:repeating-linear-gradient(90deg,#6b7280 0 20px,#374151 20px 60px);border-top:6px solid #9ca3af"></div>');
const balise=()=>mk('<div style="width:60px;height:22px;border-radius:6px;background:#facc15;box-shadow:0 0 18px #facc15"></div>');
// HOOK
{const T=trainC(),Tr=track(),G=[0,1,2].map(()=>mk('<div style="width:110px;height:200px;border-radius:12px;border:5px solid #a855f7;background:rgba(168,85,247,.12)"></div>')),Q=qmark(),Ok=label('lined up ✓','tok',36);
const tg=W('hook','glides'),tl=W('hook','lined'),th=W('hook','how');cue(tg,'whoosh');cue(tl,'ding');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(Tr,540,1120,1,o);G.forEach((g,i)=>place(g,390+i*90,800,1,o));cplace(T,t,kf(t,[[S0('hook')-.3,1400],[tl,540]]),1110,{op:o,s:1.3,mood:t>tl?'joy':'happy'});place(Ok,540,560,pop(t,tl),o);kk(t,180,1490,{op:o,s:.55,mood:t>th?'o':'happy',jumpT:th});place(Q,880,1350,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// WHERE
{const T=trainC(),Tr=track(),B=[0,1].map(()=>balise()),Od=label('wheel turns → distance: <span class="mono" id="od"></span>','tok',30),Sl=label('⚠ wheels can slip','pill',30),Bl=label('balise = position fix 📍','pill',30);
const tc=W('where','counts'),ts=W('where','slip'),tb=W('where','balises');cue(tc,'tick');cue(ts,'down');cue(tb,'ding');
SCN('where',(t,o)=>{place(Tr,540,1000,1,o);const x=kf(t,[[S0('where'),200],[S1('where'),880]]);cplace(T,t,x,990,{op:o,s:.9,mood:t>tb?'joy':'happy'});B.forEach((b,i)=>place(b,[420,760][i],1020,1,o*p(t,tb-.3,tb)));$('od').textContent=(1200+(t-S0('where'))*35).toFixed(0)+' m';place(Od,540,420,pop(t,tc),o);place(Sl,540,540,pop(t,ts),o);place(Bl,540,1200,pop(t,tb),o)})}
// TALK
{const T=trainC(),Cc=node('server','Control centre'),R=[0,1,2].map(()=>mk('<div style="width:180px;height:180px;border-radius:90px;border:5px solid #a855f7"></div>')),D=label('position + speed','tok',32),Cb=label('CBTC','pill',40);
const tcb=W('talk','cbtc'),tr=W('talk','radio'),tcc=W('talk','control');cue(tcb,'pop');cue(tr,'beep');
SCN('talk',(t,o)=>{cplace(T,t,320,1150,{op:o,s:1,mood:'happy'});place(Cc,820,560,pop(t,tcc-.4),o);glow(Cc,t>tcc);R.forEach((w,i)=>{const ph=((t*.8)+i/3)%1;place(w,320,1000,.4+ph*1.6,o*(t>tr?1-ph:0))});place(D,540,820,pop(t,tr),o);place(Cb,540,380,pop(t,tcb),o)})}
// GAP
{const Tr=track(),A=trainC(),B=trainC(),Z=mk('<div style="width:380px;height:80px;border-radius:16px;background:rgba(74,222,128,.2);border:4px dashed #4ade80;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:28px;color:#4ade80">safe to go</div>'),L=label('limit sent: <span class="mono">stop before 420 m</span>','tok',30);
const tw=W('gap','works'),ts=W('gap','sends'),ta=W('gap','apart');cue(tw,'scramble');cue(ts,'beep');cue(ta,'ding');
SCN('gap',(t,o)=>{place(Tr,540,1000,1,o);cplace(B,t,880,990,{op:o,s:.7,mood:'happy'});cplace(A,t,kf(t,[[S0('gap'),150],[ta,260]]),990,{op:o,s:.7,mood:'happy'});place(Z,500,860,pop(t,tw),o);place(L,540,500,pop(t,ts),o);kk(t,170,1490,{op:o,s:.5,mood:t>ta?'grin':'happy'})})}
// ATP
{const Sp=mk('<div class="big" style="font-size:110px"><span id="sp" class="acc"></span><span style="font-size:44px"> km/h</span></div>'),Lm=label('limit: 60','pill',34),Br=label('🛑 auto brakes!','tok',40),T=trainC();
const tf=W('atp','faster'),ta=W('atp','automatic'),tb=W('atp','brakes');cue(tf,'up');cue(tb,'lock');
SCN('atp',(t,o)=>{const v=t<tb?50+18*eio(p(t,tf-.5,tf+.5)):68-28*eio(p(t,tb,tb+1.2));$('sp').textContent=Math.round(v);$('sp').style.color=v>60?'#f87171':ACC;place(Sp,540,520,1,o);place(Lm,540,680,1,o);place(Br,540,880,pop(t,tb),o);cplace(T,t,540,1260,{op:o,s:1.1,mood:t>tb?'o':'happy',r:t>tb&&t<tb+.8?-2:0})})}
// ATO
{const Tr=track(),T=trainC(),B=[0,1,2].map(()=>balise()),Mk=mk('<div style="width:8px;height:180px;background:#4ade80;box-shadow:0 0 16px #4ade80"></div>'),Cv=mk('<svg width="700" height="260"><path d="M10 20 C300 20 400 240 690 240" stroke="#a855f7" stroke-width="8" fill="none"/><text x="20" y="60" fill="#aaa" font-size="26" font-family="Inter">speed</text></svg>'),L=label('stops on the mark ✓','tok',34);
const tc=W('ato','curve'),tb=W('ato','beacons'),tm=W('ato','mark');cue(tc,'down');cue(tb,'tick');cue(tm,'ding');
SCN('ato',(t,o)=>{place(Cv,540,520,pop(t,tc),o);place(Tr,540,1100,1,o);B.forEach((b,i)=>place(b,520+i*120,1120,1,o*p(t,tb-.3,tb)));place(Mk,760,1010,1,o*p(t,tm-.3,tm));cplace(T,t,kf(t,[[S0('ato')-.3,-100],[tm,540]]),1090,{op:o,s:1,mood:t>tm?'joy':'happy'});place(L,540,1300,pop(t,tm),o)})}
// DOORS
{const T=trainC(),Gs=[0,1,2].map(()=>mk('<div style="width:120px;height:240px;position:relative"><div class="l" style="position:absolute;left:0;top:0;width:60px;height:100%;background:rgba(168,85,247,.35);border:4px solid #a855f7"></div><div class="r" style="position:absolute;right:0;top:0;width:60px;height:100%;background:rgba(168,85,247,.35);border:4px solid #a855f7"></div></div>')),L=label('train doors + platform gates open together','tok',30);
const to=W('doors','open');cue(to,'unlock');
SCN('doors',(t,o)=>{cplace(T,t,540,1150,{op:o,s:1.4,mood:t>to?'joy':'happy'});const u=eio(p(t,to,to+.8));Gs.forEach((g,i)=>{g.querySelector('.l').style.transform=`translateX(${-u*50}px)`;g.querySelector('.r').style.transform=`translateX(${u*50}px)`;place(g,340+i*200,720,1,o)});place(L,540,400,pop(t,to),o);kk(t,170,1490,{op:o,s:.5,mood:'grin',wave:t>to?1:0})})}
charOutro([[trainC(),.4],[buddy('rect','#fef9c3','#facc15','',95,.8),.5],[buddy('tall','#94a3b8','#334155','',90,.8),.55]],'Stopping','on the dot.');
