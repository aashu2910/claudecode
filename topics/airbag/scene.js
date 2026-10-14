const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const bagC=()=>char(300,300,({blink,mood='happy'})=>{const g=gid();return `<defs>${grad(g,'#ffffff','#e2e8f0')}</defs><circle cx="150" cy="150" r="140" fill="url(#${g})"/>${face(150,140,1.1,{blink,mood})}`});
const ms=()=>mk('<div class="big" style="font-size:100px"><span class="acc" id="ms">0</span><span style="font-size:44px"> ms</span></div>');
// HOOK
{const B=bagC(),Bl=label('👁️ a blink ≈ 100+ ms','pill',30),Q=qmark(),Wh=mk('<div style="width:300px;height:300px;border-radius:150px;background:#374151;border:20px solid #111"></div>');
const tc=W('hook','crash'),tf=W('hook','fills'),th=W('hook','how');cue(tc,'lock');cue(tf,'whoosh');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(Wh,540,900,1,o);cplace(B,t,540,1050,{op:o*p(t,tf-.1,tf),s:.2+1.2*eio(p(t,tf,tf+.25)),mood:'o'});place(Bl,540,420,pop(t,tf+.5),o);kk(t,880,1490,{op:o,s:.5,mood:t>th?'o':'happy',jumpT:th});place(Q,180,1350,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// SENSOR
{const Ac=node('chip','Accelerometer'),Sp=mk('<div class="big" style="font-size:100px"><span class="acc" id="sp"></span><span style="font-size:44px"> km/h</span></div>'),G=mk('<svg width="860" height="260"><path id="sg" fill="none" stroke="#f43f5e" stroke-width="7"/></svg>'),L=label('sudden, violent drop in speed','tok',32);
const ts=W('sensor','sensors'),tc=W('sensor','crash'),td=W('sensor','drop');cue(ts,'pop');cue(tc,'lock');
SCN('sensor',(t,o)=>{place(Ac,540,400,pop(t,ts-.2),o);glow(Ac,t>tc);const v=t<tc?60:60*(1-eio(p(t,tc,tc+.25)));$('sp').textContent=Math.round(v);place(Sp,540,640,1,o);let d='';for(let x=0;x<=860;x+=5){const tt=S0('sensor')+x/860*(S1('sensor')-S0('sensor'));if(tt>t)break;const y=tt<tc?60:60*(1-eio(p(tt,tc,tc+.25)));d+=(x?'L':'M')+x+' '+(240-y*3.5)}G.querySelector('#sg').setAttribute('d',d);place(G,540,930,1,o);place(L,540,1180,pop(t,td),o)})}
// DECIDE
{const Cu=node('brain','Control unit'),M=ms(),Ck=['crash pulse strength ✓','direction ✓','seat occupied ✓'].map(s=>label(s,'pill',28)),Y=label('DEPLOY','tok',44);
const tc=W('decide','checks'),tm=W('decide','milliseconds'),ts=W('decide','serious');cue(tc,'scramble');cue(ts,'beep');
SCN('decide',(t,o)=>{place(Cu,540,420,pop(t,S0('decide')-.3),o);glow(Cu,t>tc);$('ms').textContent=Math.round(Math.min(15,Math.max(0,(t-tc)*6)));place(M,540,660,pop(t,tm),o);Ck.forEach((c,i)=>place(c,540,840+i*100,pop(t,tc+i*.3),o));place(Y,540,1230,pop(t,ts+.4),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// IGNITE
{const Inf=mk('<div style="width:420px;height:180px;border-radius:40px;background:#4b5563;border:6px solid #9ca3af;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:32px">inflator</div>'),Sp=Array.from({length:10},()=>mk('<div style="width:20px;height:20px;border-radius:10px;background:#fde047;box-shadow:0 0 16px #f97316"></div>')),L=label('tiny igniter → fast chemical reaction','tok',30);
const tf=W('ignite','fires'),tc=W('ignite','chemical');cue(tf,'lock');cue(tc,'scramble');
SCN('ignite',(t,o)=>{place(Inf,540,800,1,o,t>tf?Math.sin(t*40)*1.5:0);Sp.forEach((s,i)=>{const u=((t-tf)*1.5+i/10)%1;const a=i*.63;place(s,540+Math.cos(a)*u*300,800+Math.sin(a)*u*200,1,o*(t>tf?1-u:0))});place(L,540,420,pop(t,tf),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// GAS
{const B=bagC(),N=Array.from({length:12},()=>mk('<div style="width:40px;height:40px;border-radius:20px;background:#bfdbfe;color:#1e3a8a;font-weight:900;font-size:18px;display:flex;align-items:center;justify-content:center">N₂</div>')),M=ms(),L=label('mostly nitrogen gas','pill',30);
const tg=W('gas','gas'),tb=W('gas','blasts'),tt=W('gas','thirty');cue(tb,'whoosh');cue(tt,'ding');
SCN('gas',(t,o)=>{N.forEach((n,i)=>{const u=((t-tg)*.8+i/12)%1;place(n,540+Math.cos(i*.52)*u*360,1000+Math.sin(i*.52)*u*260,1,o*(t>tg&&t<tb+.5?1-u:0))});cplace(B,t,540,1250,{op:o*p(t,tb-.1,tb),s:.2+1.3*eio(p(t,tb,tb+.35)),mood:'joy'});$('ms').textContent=Math.round(Math.min(30,Math.max(0,(t-tb)*60)));place(M,540,420,pop(t,tt-.3),o);place(L,540,560,pop(t,tg),o)})}
// DEFLATE
{const B=bagC(),V=[0,1].map(()=>mk('<div style="width:30px;height:30px;border-radius:15px;background:#111;border:4px solid #f43f5e"></div>')),Pf=Array.from({length:6},()=>mk('<div style="width:60px;height:20px;border-radius:10px;background:rgba(255,255,255,.5)"></div>')),L=label('cushion, not bounce','tok',34),Vl=label('vents','pill',28);
const tv=W('deflate','vents'),th=W('deflate','hit'),tc=W('deflate','cushions');cue(tv,'pop');cue(th,'down');cue(tc,'ding');
SCN('deflate',(t,o)=>{const d=eio(p(t,th,th+1.5));cplace(B,t,540,1150,{op:o,s:1.5-.6*d,mood:t>tc?'joy':'happy'});V.forEach((v,i)=>place(v,i?760:320,950,1,o*p(t,tv,tv+.3)));Pf.forEach((x,i)=>{const u=((t-th)*1.2+i/6)%1;place(x,(i%2?780:300)+(i%2?1:-1)*u*150,950,1,o*(t>th?1-u:0))});place(Vl,540,560,pop(t,tv),o);place(L,540,420,pop(t,tc),o)})}
// BELT
{const Bt=mk('<div style="width:40px;height:520px;background:#1f2937;border:4px solid #f43f5e;border-radius:10px"></div>'),B=bagC(),L1=label('airbag + seatbelt = team','tok',34),L2=label('⚠ no belt → the bag can hurt you','pill',30);
const tw=W('belt','work'),tb=W('belt','without');cue(tw,'ding');cue(tb,'lock');
SCN('belt',(t,o)=>{place(Bt,540,880,pop(t,tw-.3),o,30);cplace(B,t,540,1300,{op:o,s:.8,mood:t>tb?'worry':'joy'});place(L1,540,400,pop(t,tw),o);place(L2,540,520,pop(t,tb),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
charOutro([[bagC(),.5],[buddy('rect','#fecdd3','#f43f5e','',95,.8),.55]],'Faster than','a blink.');
