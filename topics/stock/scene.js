const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const chart=()=>mk('<svg width="860" height="360"><path class="ln" fill="none" stroke="#22c55e" stroke-width="7"/></svg>');
function drawChart(c,t,t0,bias=0){let d='',y=200;for(let x=0;x<=860;x+=10){const tt=t0+x/860*6;if(tt>t)break;y+=Math.sin(tt*7.3)*8+Math.cos(tt*3.1)*6-bias*2;y=Math.max(30,Math.min(330,y));d+=(x?'L':'M')+x+' '+y.toFixed(1)}c.querySelector('.ln').setAttribute('d',d)}
// HOOK
{const P=phoneC(),C=chart(),Pr=mk('<div class="big" style="font-size:100px">₹<span class="acc mono" id="pp"></span></div>'),Q=qmark();
const tc=W('hook','changing'),tw=W('hook','who');cue(tc,'scramble');cue(tw,'whoosh');
SCN('hook',(t,o)=>{$('pp').textContent=(1450+Math.sin(t*7)*4+Math.cos(t*13)*2).toFixed(2);place(Pr,540,420,1,o);drawChart(C,t,S0('hook')-1);place(C,540,780,1,o);cplace(P,t,540,1300,{op:o,s:1,mood:'o'});place(Q,860,1150,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// EXCHANGE
{const P=phoneC(),Br=node('server','Broker'),Ex=node('bank','NSE / BSE'),e=edge([[200,900],[540,900],[880,900]]),O=label('BUY 10 @ ₹1,450','tok',30);
const te=W('exchange','exchanges'),tb=W('exchange','broker'),ts=W('exchange','sends');cue(te,'pop');cue(ts,'whoosh');
SCN('exchange',(t,o)=>{cplace(P,t,200,1000,{op:o,s:.8,mood:'happy'});place(Br,540,900,pop(t,tb),o);place(Ex,880,900,pop(t,te),o);drawEdge(e,t,ts,o,true);place(O,200+680*eio(p(t,ts,ts+1.5)),720,pop(t,ts),o)})}
// BOOK
{const B=[['1,450.50',120],['1,450.25',300],['1,450.00',80]].map(([p0,q])=>mk(`<div class="card mono" style="width:400px;display:flex;justify-content:space-between;font-size:30px;border-color:#22c55e"><span class="acc">${p0}</span><span>${q}</span></div>`)),S=[['1,451.00',90],['1,451.25',210],['1,451.50',60]].map(([p0,q])=>mk(`<div class="card mono" style="width:400px;display:flex;justify-content:space-between;font-size:30px;border-color:#f87171"><span style="color:#f87171">${p0}</span><span>${q}</span></div>`)),Lb=label('BUYERS · bids','tok',28),Ls=label('SELLERS · asks','pill',28);
const tb=W('book','buyers'),ts=W('book','sellers');cue(tb,'tick');cue(ts,'tick');
SCN('book',(t,o)=>{place(Lb,280,520,pop(t,tb),o);place(Ls,800,520,pop(t,ts),o);B.forEach((x,i)=>place(x,280,640+i*120,pop(t,tb+i*.15),o));S.forEach((x,i)=>place(x,800,640+i*120,pop(t,ts+i*.15),o));kk(t,540,1450,{op:o,s:.55})})}
// MATCH
{const Bu=mk('<div class="card mono" style="font-size:32px;border-color:#22c55e">BUY @ <span class="acc">1,451.00</span></div>'),Se=mk('<div class="card mono" style="font-size:32px;border-color:#f87171">SELL @ <span style="color:#f87171">1,451.00</span></div>'),T=label('⚡ MATCHED → trade','tok',40),M=node('chip','Matching engine');
const tm=W('match','meets'),tc=W('match','matches'),tt=W('match','trade');cue(tm,'whoosh');cue(tc,'lock');cue(tt,'ding');
SCN('match',(t,o)=>{const u=eio(p(t,tm,tc));place(Bu,200+(340-200)*u,800,1,o);place(Se,880-(880-740)*u,800,1,o);place(M,540,500,pop(t,tm-.3),o);glow(M,t>tc);place(T,540,1050,pop(t,tt),o)})}
// LTP
{const Pr=mk('<div class="big" style="font-size:110px">₹<span class="acc mono" id="lp"></span></div>'),L=label('= last traded price','tok',34),Tr=Array.from({length:5},()=>mk('<div class="card mono" style="font-size:26px;padding:12px 20px"></div>'));
const tl=W('ltp','last'),tn=W('ltp','nudge');cue(tl,'ding');cue(tn,'tick');
SCN('ltp',(t,o)=>{const k=Math.floor(Math.max(0,t-tl)*2);const pr=1451+((k*37)%7-3)*.25;$('lp').textContent=pr.toFixed(2);place(Pr,540,560,1,o);place(L,540,720,pop(t,tl),o);Tr.forEach((x,i)=>{x.firstElementChild.textContent=`trade @ ${(1451+(((k-i)*37)%7-3)*.25).toFixed(2)}`;place(x,540,920+i*90,1,o*(t>tl+i*.3?1-i*.15:0))})})}
// NEWS
{const C=chart(),G=label('📰 good news → more buyers ↑','tok',30),B=label('📰 bad news → more sellers ↓','pill',30),S=label('supply & demand, every second','pill',30);
const tg=W('news','good'),tb=W('news','bad'),ts=W('news','supply');cue(tg,'up');cue(tb,'down');cue(ts,'ding');
SCN('news',(t,o)=>{const bias=t<tb?(t>tg?3:0):-3;drawChart(C,t,S0('news')-1,bias);C.querySelector('.ln').setAttribute('stroke',bias<0?'#f87171':ACC);place(C,540,820,1,o);place(G,540,400,pop(t,tg),o);place(B,540,500,pop(t,tb),o);place(S,540,1150,pop(t,ts),o)})}
// SETTLE
{const D=['Mon · trade','Tue · settled ✓'].map((s,i)=>label(s,i?'tok':'pill',34)),Sh=mk('<div style="font-size:90px">📄</div>'),M=mk('<div style="font-size:90px">💰</div>'),L=label('T+1 settlement','tok',36);
const tc=W('settle','change'),to=W('settle','one'),tt=W('settle','t');cue(tc,'whoosh');cue(tt,'ding');
SCN('settle',(t,o)=>{place(D[0],300,500,pop(t,S0('settle')),o);place(D[1],780,500,pop(t,to),o);const u=eio(p(t,tc,tc+1.2));place(Sh,240+600*u,820,1,o);place(M,840-600*u,960,1,o);place(L,540,1200,pop(t,tt),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
charOutro([[phoneC(),.6],[buddy('rect','#dcfce7','#22c55e','',95,.8),.55]],'A crowd','setting a number.');
