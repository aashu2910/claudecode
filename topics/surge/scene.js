let seed=3;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
const HEX=[];for(let r=0;r<6;r++)for(let c=0;c<5;c++)HEX.push([200+c*170+(r%2)*85,520+r*148]);const HZ=12;
const hexEl=()=>mk('<svg width="190" height="190" viewBox="0 0 100 100"><polygon points="50,2 93,26 93,74 50,98 7,74 7,26" stroke-width="3"/></svg>');
function hexes(H,t,o,t0,heat){H.forEach((h,i)=>{const pl=h.querySelector('polygon');const v=heat(i);pl.setAttribute('fill',`color-mix(in srgb,${ACC} ${Math.round(v*60)}%,rgba(255,255,255,.04))`);pl.setAttribute('stroke',i==HZ&&v>.3?ACC:'rgba(255,255,255,.2)');place(h,HEX[i][0],HEX[i][1],pop(t,t0+i*.02),o)})}
const dots=(n,c,r)=>Array.from({length:n},()=>mk(`<div style="width:${r}px;height:${r}px;border-radius:${c=='car'?'6px':r/2+'px'};background:${c=='car'?'#fff':ACC};box-shadow:0 0 10px ${c=='car'?'#fff':ACC}"></div>`));
const PD=Array.from({length:22},()=>[rnd()*150-75,rnd()*130-65,rnd()*6]),CD=Array.from({length:8},()=>[rnd()*700-350,rnd()*700-350,rnd()*6]);
// HOOK
{const P=mk(`<div class="phone" style="height:640px"><div style="position:absolute;top:50px;width:100%;text-align:center;font-size:30px;color:#aaa;font-weight:600">Choose a ride</div><div class="card" style="position:absolute;top:140px;left:30px;right:30px;display:flex;justify-content:space-between"><span>Cab</span><span class="mono" id="hp"></span></div><div id="hs" class="pill" style="position:absolute;top:290px;left:30px">fares are higher</div></div>`),R=Array.from({length:30},()=>mk('<div style="width:4px;height:50px;background:rgba(200,220,255,.5);border-radius:2px"></div>')),Q=mk('<div style="font-size:150px;font-weight:900" class="acc">?</div>');
const tr=W('hook','raining'),tc=W('hook','costs'),tb=W('hook','but');cue(tr,'whoosh');cue(tc,'up');cue(tb,'whoosh');
SCN('hook',(t,o)=>{R.forEach((d,i)=>place(d,(i*137)%1080,((t*900+i*211)%1500)+200,1,o*p(t,tr-.3,tr)*.8,15));place(P,540,900,pop(t,S0('hook')),o);const v=180+(340-180)*eio(p(t,tc,tc+.8));$('hp').textContent='₹'+Math.round(v);$('hs').style.opacity=t>tc?1:0;place(Q,880,600,pop(t,tb),o*p(t,tb,tb+.1),Math.sin(t*3)*8)})}
// ZONES
{const H=HEX.map(hexEl),Lb=mk('<div class="card on" style="font-size:32px">each zone · watched live</div>');const ts=W('zones','split'),tw=W('zones','watched');cue(ts,'scramble');cue(tw,'beep');
SCN('zones',(t,o)=>{hexes(H,t,o,ts,i=>t>tw?.15+.15*Math.sin(t*3+i):0);place(Lb,540,1420,pop(t,tw),o)})}
// DEMAND
{const H=HEX.map(hexEl),P=dots(22,'p',22),C=mk('<div class="card" style="font-size:34px">requests: <span class="acc mono" id="dq"></span></div>');const td=W('demand','demand'),to=W('demand','opening'),tr=W('demand','requesting');cue(to,'pop');cue(tr,'pop');
SCN('demand',(t,o)=>{hexes(H,t,o,S0('demand')-1,i=>i==HZ?.25:0);P.forEach((d,i)=>{const [x,y,ph]=PD[i];place(d,HEX[HZ][0]+x,HEX[HZ][1]+y+Math.sin(t*2+ph)*4,pop(t,to+i*.06),o)});$('dq').textContent=Math.min(22,Math.max(0,Math.floor((t-to)/.06)));place(C,540,1420,pop(t,td),o)})}
// SUPPLY
{const H=HEX.map(hexEl),P=dots(22,'p',22),Cr=dots(8,'car',30),Bl=mk('<div style="display:flex;gap:30px;align-items:center;font-size:36px;font-weight:800"><span class="acc">22 riders</span><span>vs</span><span>3 drivers</span></div>'),Ev=['Rain','Office rush','Concert'].map(e=>mk(`<div class="pill">${e}</div>`));
const ts=W('supply','supply'),tf=W('supply','free'),tev=[W('supply','rain'),W('supply','office'),W('supply','concert')],tfl=W('supply','flip');cue(tf,'pop');tev.forEach(x=>cue(x,'tick'));cue(tfl,'whoosh');
SCN('supply',(t,o)=>{hexes(H,t,o,S0('supply')-1,i=>i==HZ?.25:0);P.forEach((d,i)=>{const [x,y,ph]=PD[i];place(d,HEX[HZ][0]+x,HEX[HZ][1]+y+Math.sin(t*2+ph)*4,1,o)});Cr.forEach((d,i)=>{const [x,y]=CD[i];const near=i<3;place(d,HEX[HZ][0]+x*(near?.25:1),HEX[HZ][1]+y*(near?.25:1),pop(t,tf+i*.08),o)});
 tev.forEach((x,i)=>place(Ev[i],250+i*290,380,pop(t,x),o));place(Bl,540,1430,pop(t,tfl),o)})}
// MULT
{const H=HEX.map(hexEl),G=mk('<div class="big" style="font-size:150px"><span class="acc" id="mm"></span></div>'),A=node('brain','Algorithm',150),Ra=mk('<div class="card" style="font-size:32px">requests ≫ drivers</div>');
const tr=W('mult','requests'),ta=W('mult','algorithm'),tm=W('mult','multiplier'),tf=W('mult','five');cue(ta,'scramble');cue(tf,'ding');
SCN('mult',(t,o)=>{hexes(H,t,o,S0('mult')-1,i=>i==HZ?.25+.75*eio(p(t,tm,tf+.3)):(Math.hypot(HEX[i][0]-HEX[HZ][0],HEX[i][1]-HEX[HZ][1])<200?.25*p(t,tm,tf):0));place(Ra,540,380,pop(t,tr),o);place(A,880,380,pop(t,ta),o*.0+o*(t>ta?1:0));glow(A,t>ta);
 const v=1+.5*eio(p(t,tm,tf+.3));$('mm').textContent=v.toFixed(1)+'×';place(G,HEX[HZ][0],HEX[HZ][1],pop(t,tm)*.55,o)})}
// FARE
{const E=[['Base','₹50'],['Distance','₹15/km'],['Time','₹2/min']].map(([a,b])=>mk(`<div class="card" style="width:280px;text-align:center"><div class="dim">${a.toUpperCase()}</div>${b}</div>`)),Nm=mk('<div class="card" style="font-size:40px">normal fare <span class="mono">₹180</span></div>'),X=mk('<div class="big" style="font-size:64px">× <span class="acc">1.5</span> = <span class="acc mono">₹270</span></div>'),Cap=mk('<div class="card on" style="font-size:32px;text-align:center"><span class="dim">INDIA · 2025 GUIDELINES</span><br>surge capped at <span class="acc">2× base fare</span></div>'),Eg=mk('<div class="dim">illustrative numbers</div>');
const tn=W('fare','normal'),td=W('fare','distance'),tt=W('fare','time'),ts=W('fare','scaled'),ti=W('fare','india');cue(td,'tick');cue(tt,'tick');cue(ts,'up');cue(ti,'lock');
SCN('fare',(t,o)=>{[tn,td,tt].forEach((x,i)=>place(E[i],210+i*330,420,pop(t,x),o));place(Nm,540,640,pop(t,tt+.3),o);place(X,540,840,pop(t,ts),o);place(Eg,540,940,1,o*p(t,ts,ts+.3));place(Cap,540,1250,pop(t,ti),o)})}
// BALANCE
{const H=HEX.map(hexEl),P=dots(22,'p',22),Cr=dots(8,'car',30),G=mk('<div class="big" style="font-size:80px"><span class="acc" id="bm"></span></div>'),Wt=mk('<div class="pill">some riders wait</div>');
const tp=W('balance','pull'),tw=W('balance','wait'),tb=W('balance','balance'),td=W('balance','drops');cue(tp,'whoosh');cue(tw,'tick');cue(td,'down');
SCN('balance',(t,o)=>{const m=eio(p(t,tp,tb));hexes(H,t,o,S0('balance')-1,i=>i==HZ?1-.8*eio(p(t,tb,td+.5)):0);P.forEach((d,i)=>{const [x,y,ph]=PD[i];place(d,HEX[HZ][0]+x,HEX[HZ][1]+y,1,o*(i<14||t<tw?1:1-p(t,tw,tw+.6)))});
 Cr.forEach((d,i)=>{const [x,y]=CD[i];const f=i<3?.25:1-.75*m;place(d,HEX[HZ][0]+x*f,HEX[HZ][1]+y*f,1,o)});$('bm').textContent=(1.5-.5*eio(p(t,tb,td+.5))).toFixed(1)+'×';place(G,540,380,1,o);place(Wt,540,1430,pop(t,tw),o)})}
outro([['user','Riders'],['car','Drivers'],['grid','Zone'],['chart','Multiplier']],'Not random.','Price as a signal.');
