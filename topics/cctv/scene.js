const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const camC=()=>char(320,240,({blink,mood='happy',ir=0})=>{let l='';for(let i=0;i<10;i++){const a=i*36*Math.PI/180;l+=`<circle cx="${200+62*Math.cos(a)}" cy="${120+62*Math.sin(a)}" r="9" fill="${ir?'#7f1d1d':'#374151'}" style="filter:drop-shadow(0 0 ${ir*8}px #ef4444)"/>`}return `<rect x="10" y="40" width="300" height="160" rx="40" fill="#e5e7eb"/><circle cx="200" cy="120" r="80" fill="#111827"/>${l}<circle cx="200" cy="120" r="38" fill="#1e3a8a"/><circle cx="188" cy="108" r="10" fill="#fff" opacity=".6"/>${face(80,110,.55,{blink,mood,cheek:false})}`});
const scene=(id)=>mk(`<div id="${id}" style="width:700px;height:460px;border-radius:24px;border:5px solid #4ade80;overflow:hidden;position:relative;background:linear-gradient(#1e3a8a,#065f46)"><div style="position:absolute;left:80px;bottom:0;width:160px;height:260px;background:#b91c1c"></div><div style="position:absolute;left:300px;bottom:0;width:220px;height:180px;background:#ca8a04"></div><div style="position:absolute;right:60px;bottom:60px;width:90px;height:90px;border-radius:45px;background:#f472b6"></div></div>`);
// HOOK
{const C=camC(),S=scene('hs'),Q=qmark(),L=label('night → black & white?','pill',32);
const tn=W('hook','night'),tb=W('hook','black'),tw=W('hook','why');cue(tn,'down');cue(tb,'tick');cue(tw,'whoosh');
SCN('hook',(t,o)=>{cplace(C,t,540,560,{op:o,s:1.2,popT:S0('hook')-.3,ir:t>tn?1:0});const g=p(t,tb,tb+.6);$('hs').style.filter=`grayscale(${g}) brightness(${t>tn?.7+.3*g:1})`;place(S,540,960,1,o);place(L,540,1260,pop(t,tb),o);kk(t,880,1490,{op:o,s:.5,mood:t>tw?'o':'happy',jumpT:tw})})}
// LEDS
{const C=camC(),R=Array.from({length:6},()=>mk('<div style="width:14px;height:300px;border-radius:7px;background:linear-gradient(rgba(239,68,68,.6),transparent)"></div>')),L=label('infrared: invisible to our eyes 👁️✕','tok',30);
const tl=W('leds','leds'),ti=W('leds','infrared');cue(tl,'pop');cue(ti,'shimmer');
SCN('leds',(t,o)=>{cplace(C,t,540,760,{op:o,s:2,ir:t>tl?1:0,mood:'grin'});R.forEach((r,i)=>place(r,330+i*90,1000+((t*100+i*30)%60),1,o*p(t,ti,ti+.4)*.6));place(L,540,400,pop(t,ti),o)})}
// SENSOR
{const Sn=mk('<div style="width:320px;height:240px;border-radius:16px;background:linear-gradient(135deg,#1e1b4b,#4c1d95);border:5px solid #4ade80;display:grid;grid-template-columns:repeat(8,1fr);gap:4px;padding:16px">'+Array(32).fill('<div class="sp" style="border-radius:3px"></div>').join('')+'</div>'),L1=label('image sensor sees infrared ✓','tok',30),L2=label('lit… invisibly','pill',30);
const tp=W('sensor','pick'),tl=W('sensor','lit');cue(tp,'beep');cue(tl,'ding');
SCN('sensor',(t,o)=>{Sn.querySelectorAll('.sp').forEach((c,i)=>c.style.background=`rgba(229,231,235,${t>tp?.3+.7*Math.abs(Math.sin(i*1.7+t)):.08})`);place(Sn,540,760,pop(t,S0('sensor')-.3),o);place(L1,540,420,pop(t,tp),o);place(L2,540,1060,pop(t,tl),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// FILTER
{const Ln=mk('<div style="width:300px;height:300px;border-radius:150px;background:#111827;border:10px solid #9ca3af"></div>'),F=mk('<div style="width:300px;height:300px;border-radius:24px;background:rgba(239,68,68,.35);border:5px solid #f87171;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:30px">IR-cut filter</div>'),Ck=label('*click*','tok',40),L=label('day: blocks infrared → true colours','pill',28);
const tb=W('filter','blocks'),ts=W('filter','slides'),tc=W('filter','click');cue(ts,'whoosh');cue(tc,'lock');
SCN('filter',(t,o)=>{place(Ln,540,780,1,o);const u=eio(p(t,ts,ts+.6));place(F,540+u*380,780,pop(t,tb-.3),o);place(Ck,540,520,pop(t,tc),o);place(L,540,1100,pop(t,tb),o)})}
// BW
{const S=scene('bws'),L=label('infrared → no real colour info','tok',30),Bw=label('black & white = clearer','pill',30);
const tn=W('bw','colour'),ts=W('bw','switches');cue(tn,'tick');cue(ts,'down');
SCN('bw',(t,o)=>{$('bws').style.filter=`grayscale(${p(t,ts,ts+.8)})`;place(S,540,820,1,o);place(L,540,420,pop(t,tn),o);place(Bw,540,1150,pop(t,ts),o);kk(t,170,1490,{op:o,s:.5})})}
// AUTO
{const Ls=node('bolt','Light sensor'),M=mk('<div class="big" style="font-size:80px" id="am"></div>'),Sn=mk('<div id="sky" style="width:700px;height:240px;border-radius:24px"></div>');
const td=W('auto','dark'),tf=W('auto','flips');cue(td,'down');cue(tf,'lock');
SCN('auto',(t,o)=>{const n=p(t,td-.5,td+.5);$('sky').style.background=`linear-gradient(rgb(${Math.round(125-110*n)},${Math.round(211-190*n)},${Math.round(252-200*n)}),#065f46)`;place(Sn,540,520,1,o);place(Ls,540,860,pop(t,S0('auto')-.3),o);glow(Ls,t>td);$('am').innerHTML=t>tf?'🌙 <span class="acc">night mode</span>':'☀️ day mode';place(M,540,1150,1,o)})}
// LIMIT
{const C=camC(),Rg=mk('<div style="width:600px;height:400px;background:radial-gradient(ellipse at 0 50%,rgba(239,68,68,.35),transparent 70%)"></div>'),Gl=mk('<div style="width:30px;height:420px;background:rgba(186,230,253,.4);border:3px solid #bae6fd"></div>'),Gr=label('glass → glare ✨','pill',30),Rn=label('reach: often a few tens of metres','tok',30);
const tr=W('limit','reaches'),tg=W('limit','glass');cue(tr,'tick');cue(tg,'shimmer');
SCN('limit',(t,o)=>{cplace(C,t,260,880,{op:o,s:1,ir:1});place(Rg,640,780,1,o*p(t,tr,tr+.4));place(Rn,540,420,pop(t,tr),o);place(Gl,500,800,pop(t,tg),o);place(Gr,540,1150,pop(t,tg),o)})}
charOutro([[camC(),.45],[buddy('circle','#dcfce7','#4ade80','',95,.8),.55]],'Seeing','in the dark.');
