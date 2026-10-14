const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827',`<circle cx="100" cy="30" r="14" fill="#818cf8"/>`,90,.85);
const photo=(id,b=.15)=>mk(`<div id="${id}" style="width:560px;height:400px;border-radius:20px;border:5px solid #818cf8;overflow:hidden;position:relative;background:#0b1026"><div style="position:absolute;left:60px;bottom:0;width:150px;height:220px;background:#7c3aed"></div><div style="position:absolute;left:250px;bottom:0;width:180px;height:150px;background:#0ea5e9"></div><div style="position:absolute;right:50px;top:50px;width:70px;height:70px;border-radius:35px;background:#fde047"></div></div>`);
// HOOK
{const P=phoneC(),Ph=photo('hp'),T=label('hold still… 3 s','pill',32),Q=qmark();
const th=W('hook','hold'),ts=W('hook','surprisingly'),tw=W('hook','how');cue(th,'tick');cue(ts,'ding');cue(tw,'whoosh');
SCN('hook',(t,o)=>{$('hp').style.filter=`brightness(${.25+.85*eio(p(t,th,ts))})`;place(Ph,540,640,1,o);place(T,540,900,pop(t,th),o);cplace(P,t,540,1300,{op:o,s:1.1,popT:S0('hook')-.3,mood:t>ts?'joy':'happy'});place(Q,860,1150,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// PROBLEM
{const S=mk('<div style="width:120px;height:90px;border-radius:8px;background:#312e81;border:4px solid #818cf8"></div>'),L=[label('tiny sensor → little light','pill',30),label('long exposure + shaky hands = blur','tok',30)],B=photo('pb');
const tt=W('problem','tiny'),tl=W('problem','long'),tb=W('problem','blurry');cue(tt,'pop');cue(tb,'down');
SCN('problem',(t,o)=>{place(S,540,450,pop(t,tt),o);place(L[0],540,580,pop(t,tt),o);$('pb').style.filter=`blur(${8*p(t,tb-.3,tb)}px) brightness(.6)`;place(B,540,900+Math.sin(t*20)*4*p(t,tl,tl+.3),1,o*p(t,tl,tl+.3));place(L[1],540,1200,pop(t,tb),o)})}
// BURST
{const F=Array.from({length:12},(_,i)=>mk(`<div style="width:180px;height:130px;border-radius:10px;border:3px solid #818cf8;background:#0b1026;opacity:.9"></div>`)),N=mk('<div class="big" style="font-size:100px"><span class="acc" id="bn">0</span> shots</div>');
const tm=W('burst','many'),td=W('burst','dozen');cue(tm,'scramble');
SCN('burst',(t,o)=>{const n=Math.min(12,Math.max(0,Math.floor((t-tm)*5)));$('bn').textContent=n;F.forEach((f,i)=>place(f,200+(i%4)*230,700+Math.floor(i/4)*160,pop(t,tm+i*.2),o*(i<n?1:0),(i%3-1)*4));place(N,540,420,1,o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// ALIGN
{const F=[0,1,2].map(()=>mk('<div style="width:440px;height:310px;border-radius:14px;border:4px solid #818cf8;background:rgba(129,140,248,.12)"></div>')),L=label('frames aligned · hand shake corrected','tok',30);
const tl=W('align','lines'),tc=W('align','correcting');cue(tl,'whoosh');cue(tc,'ding');
SCN('align',(t,o)=>{const u=eio(p(t,tl,tc+.5));F.forEach((f,i)=>place(f,540+(i-1)*90*(1-u),820+(i-1)*-60*(1-u),1,o,(i-1)*6*(1-u)));place(L,540,1200,pop(t,tc),o)})}
// MERGE
{const A=photo('ma'),Nz=Array.from({length:40},()=>mk('<div style="width:8px;height:8px;border-radius:4px;background:#fff"></div>')),L=[label('details repeat ✓','pill',30),label('noise is random → averages away','tok',30)];
const tb=W('merge','blends'),tr=W('merge','repeat'),tn=W('merge','noise'),ta=W('merge','averaging');cue(tb,'shimmer');cue(ta,'ding');
SCN('merge',(t,o)=>{$('ma').style.filter=`brightness(${.5+.3*p(t,ta,ta+1)})`;place(A,540,760,1,o);const k=1-p(t,ta,ta+1.2);Nz.forEach((n,i)=>place(n,280+((i*97+Math.floor(t*10)*13)%520),580+((i*53+Math.floor(t*10)*7)%380),1,o*k*.7));place(L[0],540,1060,pop(t,tr),o);place(L[1],540,1170,pop(t,tn),o)})}
// TONE
{const P=photo('tp'),C=['🌑 shadows ↑','💡 lights kept','🎨 colours fixed'].map(s=>label(s,'pill',30)),Ai=label('often with AI','tok',30);
const ts=W('tone','shadows'),tl=W('tone','lights'),tc=W('tone','colours'),ta=W('tone','ai');[ts,tl,tc].forEach(x=>cue(x,'tick'));cue(ta,'shimmer');
SCN('tone',(t,o)=>{$('tp').style.filter=`brightness(${.6+.5*p(t,ts,tc)}) saturate(${1+.5*p(t,tc,tc+.5)})`;place(P,540,700,1,o);[ts,tl,tc].forEach((x,i)=>place(C[i],220+i*320,1000,pop(t,x),o));place(Ai,540,1130,pop(t,ta),o)})}
// TIP
{const P=phoneC(),W1=mk('<div style="width:40px;height:500px;background:#4b5563;border-radius:10px"></div>'),L=[label('hold still 🙏','tok',34),label('lean on something → sharper','pill',30)];
const th=W('tip','hold'),tl=W('tip','lean');cue(th,'tick');cue(tl,'ding');
SCN('tip',(t,o)=>{place(W1,300,950,pop(t,tl),o);cplace(P,t,520,1150,{op:o,s:1.3,mood:'grin',r:t<tl?Math.sin(t*15)*3:0});place(L[0],540,420,pop(t,th),o);place(L[1],540,540,pop(t,tl),o)})}
charOutro([[phoneC(),.6],[buddy('circle','#e0e7ff','#818cf8','',95,.8),.55]],'Seeing','in the dark.');
