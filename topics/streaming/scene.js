const phoneC=()=>buddy('tall','#4b5563','#111827',`<rect x="58" y="20" width="84" height="60" rx="8" fill="#ef4444" opacity=".8"/><path d="M92 38 l18 12 l-18 12z" fill="#fff"/>`,120,.8);
const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const Q5=['144p','360p','720p','1080p','4K'];
// HOOK
{const P=phoneC(),Sp=mk('<div style="width:120px;height:120px;border-radius:60px;border:10px solid rgba(255,255,255,.2);border-top-color:#ef4444"></div>'),X=label('no endless buffering 🙂','tok',34),Q=qmark(),Wf=label('📶 shaky network','pill',30);
const tp=W('hook','play'),ts=W('hook','shaky'),tw=W('hook','why');cue(tp,'pop');cue(ts,'down');cue(tw,'whoosh');
SCN('hook',(t,o)=>{cplace(P,t,540,1250,{op:o,s:2,popT:S0('hook')-.3,mood:t>tp+.6?'joy':'happy'});place(Sp,540,520,1,o*win(t,tp,tp+.8,.15),t*400);place(Wf,540,400,pop(t,ts),o);place(X,540,650,pop(t,tw-.3),o);kk(t,880,1490,{op:o,s:.55,mood:t>tw?'o':'happy',jumpT:tw});place(Q,180,1350,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// VERSIONS
{const Src=label('🎬 original video','tok',34),V=Q5.map((q,i)=>mk(`<div class="card" style="width:${300+i*80}px;text-align:center;font-size:34px">${q}</div>`)),Cp=label('compressed','pill',30);
const tc=W('versions','compressed'),ts=W('versions','several'),tk=W('versions','4k');cue(tc,'lock');cue(ts,'scramble');cue(tk,'ding');
SCN('versions',(t,o)=>{place(Src,540,380,pop(t,S0('versions')-.3),o);place(Cp,540,490,pop(t,tc),o);V.forEach((v,i)=>place(v,540,640+i*150,pop(t,ts+i*.3),o));kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// CHUNKS
{const Bar=Array.from({length:10},(_,i)=>mk(`<div style="width:80px;height:120px;border-radius:12px;background:${i%2?'#ef4444':'#b91c1c'};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px">${i*4}s</div>`)),L=label('a few seconds each ✂️','tok',34);
const tc=W('chunks','cut'),tf=W('chunks','few');cue(tc,'tick');cue(tf,'ding');
SCN('chunks',(t,o)=>{const sp=eio(p(t,tc,tc+.8));Bar.forEach((b,i)=>place(b,540+(i-4.5)*(80+sp*16),800,1,o));place(L,540,1050,pop(t,tf),o);kk(t,170,1490,{op:o,s:.5,mood:'happy'})})}
// CDN
{const Or=node('server','Origin · far away'),Ed=node('server','CDN · near you'),P=phoneC(),e1=edge([[540,480],[540,800]]),e2=edge([[540,980],[540,1180]]),Gl=mk('<div style="font-size:90px">🌍</div>');
const tc=W('cdn','copies'),tcd=W('cdn','cdn'),tw=W('cdn','world');cue(tc,'whoosh');cue(tcd,'pop');cue(tw,'ding');
SCN('cdn',(t,o)=>{place(Or,540,420,pop(t,S0('cdn')-.3),o);place(Gl,800,420,pop(t,tw),o);drawEdge(e1,t,tc,o*.6,t>tc&&t<tcd);place(Ed,540,880,pop(t,tcd-.2),o);glow(Ed,t>tcd);drawEdge(e2,t,tcd,o,t>tcd);cplace(P,t,540,1460,{op:o,s:.85,mood:t>tcd?'joy':'happy'})})}
// BUFFER
{const Bar=mk('<div style="width:860px;height:40px;border-radius:20px;background:#3f3f46;position:relative;overflow:hidden"><div id="bb" style="position:absolute;left:0;top:0;height:100%;background:rgba(239,68,68,.45)"></div><div id="bp" style="position:absolute;left:0;top:0;height:100%;background:#ef4444"></div></div>'),Ph=mk('<div style="width:28px;height:28px;border-radius:14px;background:#fff"></div>'),L1=label('watching','pill',30),L2=label('downloaded ahead','tok',30),Hc=label('📶 hiccup → still playing ✓','pill',30);
const td=W('buffer','downloads'),th=W('buffer','hiccups');cue(td,'whoosh');cue(th,'tick');
SCN('buffer',(t,o)=>{const pl=10+(t-S0('buffer'))*5,bf=pl+(t>td?Math.min(30,(t-td)*12):5);$('bp').style.width=pl+'%';$('bb').style.width=(t>th&&t<th+1.2?bf-8:bf)+'%';place(Bar,540,760,1,o);place(Ph,90+pl*8.6,760,1,o);place(L1,300,660,1,o);place(L2,700,870,pop(t,td),o);place(Hc,540,1080,pop(t,th),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// ADAPT
{const Sp=label('speed: <span class="mono" id="ns"></span>','tok',34),Ch=Array.from({length:6},()=>mk('<div class="card" style="width:130px;text-align:center;font-size:26px;padding:16px 6px"></div>')),Np=label('lower quality > pausing','pill',32);
const tm=W('adapt','measuring'),tsl=W('adapt','slows'),tl=W('adapt','lower');cue(tsl,'down');cue(tl,'tick');
SCN('adapt',(t,o)=>{const slow=t>tsl;$('ns').textContent=slow?'2 Mbps 🐢':'25 Mbps ⚡';place(Sp,540,420,pop(t,tm),o);Ch.forEach((c,i)=>{const lo=slow&&i>=3;c.firstElementChild.textContent=lo?'480p':'1080p';c.firstElementChild.style.borderColor=lo?'#fbbf24':ACC;place(c,140+i*160,820,pop(t,tm+i*.15),o)});place(Np,540,1080,pop(t,tl),o);kk(t,170,1490,{op:o,s:.5,mood:slow?'o':'happy'})})}
// DECODE
{const Ck=mk('<div style="width:180px;height:130px;border-radius:16px;background:#ef4444;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:30px">chunk</div>'),Cp=node('chip','Video decoder'),Fr=Array.from({length:8},(_,i)=>mk(`<div style="width:90px;height:150px;border-radius:10px;background:linear-gradient(${i*40}deg,#7f1d1d,#ef4444);border:3px solid #fff"></div>`)),L=label('dozens of frames / second','tok',32),P=phoneC();
const td=W('decode','decodes'),tf=W('decode','frames');cue(td,'scramble');cue(tf,'shimmer');
SCN('decode',(t,o)=>{place(Ck,200,560,pop(t,S0('decode')-.3),o);place(Cp,540,560,pop(t,td-.2),o);glow(Cp,t>td);Fr.forEach((f,i)=>{const u=((t-tf)*.6+i/8)%1;place(f,600+u*500,860,1,o*(t>tf?1:0))});place(L,540,1080,pop(t,tf),o);cplace(P,t,540,1460,{op:o,s:.8,mood:'joy'})})}
charOutro([[phoneC(),.6],[buddy('rect','#fecaca','#ef4444','',95,.8),.55],[buddy('tall','#94a3b8','#334155','',90,.8),.5]],'Smooth','by design.');
