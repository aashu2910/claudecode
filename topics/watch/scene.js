const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const watchC=()=>char(260,340,({blink,mood='happy',bpm=''})=>`<rect x="80" y="0" width="100" height="340" rx="20" fill="#374151"/><rect x="20" y="70" width="220" height="200" rx="50" fill="#111827" stroke="#9ca3af" stroke-width="8"/><text x="130" y="200" font-size="40" font-weight="800" fill="#10b981" text-anchor="middle" font-family="Inter">${bpm}</text>${face(130,135,.6,{blink,mood,eye:'#10b981',cheek:false})}`);
const heartC=()=>buddy('circle','#fecaca','#ef4444','',100,.8);
const wave=()=>mk('<svg width="860" height="220"><path class="w" fill="none" stroke="#10b981" stroke-width="7"/></svg>');
function drawWave(el,t,amp=1,noise=0,L=860){let d='';for(let x=0;x<=L;x+=4){const ph=(x*.012-t*1.3)%(Math.PI*2);const b=Math.exp(-Math.pow(((x*.012-t*1.3)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-1,2)*6);d+=(x?'L':'M')+x+' '+(150-amp*90*b-noise*30*Math.sin(x*.09+t*7)).toFixed(1)}el.querySelector('.w').setAttribute('d',d)}
// HOOK
{const Wt=watchC(),H=heartC(),Q=qmark();
const th=W('hook','heart'),tl=W('hook','light'),tw=W('hook','how');cue(th,'beep');cue(tw,'whoosh');
SCN('hook',(t,o)=>{const b=t>th?Math.round(72+Math.sin(t)*2):'';cplace(Wt,t,540,1250,{op:o,s:1.6,popT:S0('hook')-.3,bpm:b?b+' bpm':'',mood:'happy'});cplace(H,t,540,600,{op:o,s:.8*(1+.12*Math.max(0,Math.sin(t*7.5))),popT:th,mood:'joy'});kk(t,880,1490,{op:o,s:.5,mood:t>tw?'o':'happy',jumpT:tw});place(Q,180,1300,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// LED
{const B=mk('<div style="width:420px;height:420px;border-radius:120px;background:#111827;border:8px solid #9ca3af;position:relative"><div class="g1" style="position:absolute;left:110px;top:170px;width:60px;height:60px;border-radius:30px;background:#10b981"></div><div class="g2" style="position:absolute;right:110px;top:170px;width:60px;height:60px;border-radius:30px;background:#10b981"></div><div style="position:absolute;left:180px;top:270px;width:60px;height:40px;border-radius:10px;background:#1e293b;border:3px solid #64748b"></div></div>'),L=label('green LEDs → into your skin','tok',32);
const tf=W('led','flip'),tg=W('led','green');cue(tf,'whoosh');cue(tg,'shimmer');
SCN('led',(t,o)=>{const on=t>tg;B.querySelectorAll('.g1,.g2').forEach(g=>g.style.boxShadow=on?`0 0 ${30+20*Math.sin(t*10)}px #10b981`:'none');place(B,540,780,pop(t,tf-.2),o,(1-p(t,tf,tf+.6))*180);place(L,540,1150,pop(t,tg),o);kk(t,170,1490,{op:o,s:.5})})}
// BLOOD
{const V=mk('<div style="width:860px;height:120px;border-radius:60px;background:linear-gradient(#991b1b,#ef4444,#991b1b)"></div>'),Rays=Array.from({length:6},()=>mk('<div style="width:14px;height:200px;border-radius:7px;background:linear-gradient(#10b981,transparent)"></div>')),L=label('red blood soaks up green light','tok',32),M=label('more blood → more absorbed','pill',30);
const tr=W('blood','red'),ta=W('blood','absorbs'),tm=W('blood','more');cue(tr,'pop');cue(ta,'shimmer');cue(tm,'tick');
SCN('blood',(t,o)=>{place(V,540,900,1,o);Rays.forEach((r,i)=>{const u=((t*.8)+i/6)%1;place(r,200+i*130,600+u*200,1,o*(1-u)*p(t,ta-.3,ta))});place(L,540,420,pop(t,ta),o);place(M,540,1150,pop(t,tm),o)})}
// BEAT
{const V=mk('<div id="vs" style="width:860px;border-radius:80px;background:linear-gradient(#991b1b,#ef4444,#991b1b)"></div>'),H=heartC(),Wv=wave(),L=label('absorbed light rises and falls','tok',30);
const th=W('beat','heartbeat'),ts=W('beat','swells'),tr=W('beat','rises');cue(th,'beep');cue(ts,'up');cue(tr,'tick');
SCN('beat',(t,o)=>{const pulse=Math.exp(-Math.pow(((t*1.3)%(2*Math.PI))-1,2)*6);$('vs').style.height=(110+70*pulse*(t>ts?1:.3))+'px';place(V,540,820,1,o);cplace(H,t,540,560,{op:o,s:.6*(1+.15*pulse),mood:'joy'});drawWave(Wv,t,1);place(Wv,540,1150,1,o*p(t,tr,tr+.3));place(L,540,1330,pop(t,tr),o)})}
// SENSOR
{const Sn=node('cam','Light sensor'),Wv=wave(),L=label('one bump = one beat','tok',34);
const tm=W('sensor','measures'),tw=W('sensor','wave'),tb=W('sensor','bump');cue(tm,'beep');cue(tb,'ding');
SCN('sensor',(t,o)=>{place(Sn,540,460,pop(t,tm-.3),o);glow(Sn,t>tm);drawWave(Wv,t,1);place(Wv,540,820,1,o*p(t,tw,tw+.3));place(L,540,1080,pop(t,tb),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// COUNT
{const Wv=wave(),C=mk('<div class="big" style="font-size:130px"><span class="acc" id="bp">0</span><span style="font-size:50px"> bpm</span></div>'),M=label('motion sensor filters wrist movement','pill',28);
const tc=W('count','counts'),tm=W('count','motion'),tf=W('count','filter');cue(tc,'scramble');cue(tf,'ding');
SCN('count',(t,o)=>{const n=t>tm&&t<tf+.8?1-p(t,tf,tf+.8):0;drawWave(Wv,t,1,n);place(Wv,540,1000,1,o);$('bp').textContent=Math.round(72*eio(p(t,tc,tc+1.2)));place(C,540,560,1,o);place(M,540,1250,pop(t,tm),o)})}
// LIMITS
{const Wt=watchC(),Ls=['loose strap','tattoos','hard workouts'].map(s=>label('⚠ '+s,'pill',30)),Ch=label('chest straps: usually more accurate','tok',30);
const ts=[W('limits','loose'),W('limits','tattoos'),W('limits','hard')],tc=W('limits','chest');ts.forEach(x=>cue(x,'tick'));cue(tc,'ding');
SCN('limits',(t,o)=>{cplace(Wt,t,540,1000,{op:o,s:1,mood:t>ts[0]?'worry':'happy',bpm:'?',r:t>ts[0]&&t<tc?Math.sin(t*20)*4:0});ts.forEach((x,i)=>place(Ls[i],540,380+i*100,pop(t,x),o));place(Ch,540,1180,pop(t,tc),o)})}
charOutro([[watchC(),.45],[heartC(),.6]],'Your pulse,','in green.');
