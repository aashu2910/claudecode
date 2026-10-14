const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const indoorC=()=>char(460,180,({blink,mood='happy'})=>{const g=gid();return `<defs>${grad(g,'#ffffff','#cbd5e1')}</defs><rect x="10" y="10" width="440" height="140" rx="36" fill="url(#${g})"/><rect x="40" y="120" width="380" height="14" rx="7" fill="#94a3b8"/>${face(230,70,.8,{blink,mood})}`});
const outC=()=>char(360,300,({t,blink,mood='happy',spin=0})=>`<rect x="10" y="10" width="340" height="280" rx="24" fill="#d1d5db"/><circle cx="150" cy="150" r="110" fill="#374151"/><g transform="rotate(${spin} 150 150)">${[0,120,240].map(a=>`<ellipse cx="150" cy="90" rx="22" ry="60" fill="#9ca3af" transform="rotate(${a} 150 150)"/>`).join('')}</g><g stroke="#6b7280" stroke-width="6">${[0,1,2,3,4].map(i=>`<line x1="280" y1="${50+i*45}" x2="330" y2="${50+i*45}"/>`).join('')}</g>`);
const air=(c)=>Array.from({length:5},()=>mk(`<div style="width:120px;height:10px;border-radius:5px;background:${c};opacity:.8"></div>`));
// HOOK
{const I=indoorC(),O=outC(),Cw=air('#67e8f9'),Hw=air('#f87171'),L1=label('❄️ cold inside','pill',30),L2=label('🔥 hot outside','tok',30),Q=qmark();
const tc=W('hook','cold'),th=W('hook','hot'),tw=W('hook','why');cue(tc,'shimmer');cue(th,'up');cue(tw,'whoosh');
SCN('hook',(t,o)=>{cplace(I,t,540,560,{op:o,s:1.2,popT:S0('hook')-.3,mood:'happy'});Cw.forEach((w,i)=>place(w,380+i*80,640+((t*120+i*30)%160),1,o*p(t,tc-.3,tc)));place(L1,540,380,pop(t,tc),o);cplace(O,t,400,1320,{op:o,s:1,popT:th-.6,spin:t*500});Hw.forEach((w,i)=>place(w,700+((t*300+i*80)%300),1100+i*40,1,o*p(t,th,th+.3)));place(L2,760,1340,pop(t,th),o);kk(t,880,1490,{op:o,s:.5,mood:t>tw?'o':'happy',jumpT:tw});place(Q,880,900,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// MOVE
{const R=mk('<div style="width:520px;height:520px;border-radius:30px;border:5px solid #e5e7eb;display:flex;align-items:flex-end;justify-content:center;padding:16px;font-weight:800;font-size:30px">your room</div>'),H=Array.from({length:8},()=>mk('<div style="width:24px;height:24px;border-radius:12px;background:#f87171;box-shadow:0 0 12px #f87171"></div>')),L1=label('✕ creates cold','pill',30),L2=label('✓ moves heat outside','tok',34);
const td=W('move','doesn'),tp=W('move','pulls'),tdu=W('move','dumps');cue(td,'lock');cue(tp,'whoosh');
SCN('move',(t,o)=>{place(R,400,850,1,o);H.forEach((h,i)=>{const u=t>tp?((t-tp)*.4+i/8)%1:0;place(h,250+(i%4)*90+u*700,720+Math.floor(i/4)*150,1,o*(1-p(u,.85,1)))});place(L1,540,380,pop(t,td),o);place(L2,540,490,pop(t,tp),o)})}
// INDOOR
{const I=indoorC(),Co=mk(`<svg width="700" height="200"><path d="M20 30 H680 V80 H20 V130 H680 V180" fill="none" stroke="#06b6d4" stroke-width="14" stroke-linecap="round"/></svg>`),Hw=air('#f87171'),Cw=air('#67e8f9'),L=label('refrigerant evaporates → soaks up heat','tok',30),Lc=label('cold coils','pill',30);
const tb=W('indoor','blown'),tc=W('indoor','coils'),te=W('indoor','evaporates');cue(tb,'whoosh');cue(te,'shimmer');
SCN('indoor',(t,o)=>{cplace(I,t,540,500,{op:o,s:1,mood:'grin'});place(Co,540,780,pop(t,tc),o);place(Lc,540,660,pop(t,tc),o);Hw.forEach((w,i)=>place(w,100+((t*250+i*60)%300),720+i*25,1,o*p(t,tb,tb+.3)));Cw.forEach((w,i)=>place(w,700+((t*250+i*60)%300),720+i*25,1,o*p(t,te,te+.3)));place(L,540,1060,pop(t,te),o);kk(t,170,1490,{op:o,s:.5})})}
// DRY
{const I=indoorC(),D=[0,1,2,3].map(()=>buddy('drop','#cffafe','#06b6d4','',125,.7)),Pp=mk('<div style="width:20px;height:400px;background:#9ca3af;border-radius:10px"></div>'),L=label('moisture condenses on cold coils','tok',30);
const tm=W('dry','moisture'),tw=W('dry','water'),tp=W('dry','pipe');cue(tm,'tick');cue(tw,'pop');
SCN('dry',(t,o)=>{cplace(I,t,540,520,{op:o,s:1,mood:'happy'});place(Pp,860,760,1,o*p(t,tp-.4,tp));D.forEach((d,i)=>{const u=((t-tw)*.5+i/4)%1;cplace(d,t,860,600+u*600,{op:o*(t>tw?1:0),s:.25,mood:'joy',bob:0})});place(L,540,800,pop(t,tm),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// OUTDOOR
{const O=outC(),Cp=node('chip','Compressor'),Hw=air('#f87171'),L1=label('squeezed → HOT','tok',34),L2=label('fan blows heat away','pill',30);
const ts=W('outdoor','squeezes'),th=W('outdoor','hot'),tf=W('outdoor','fan');cue(ts,'lock');cue(th,'up');cue(tf,'whoosh');
SCN('outdoor',(t,o)=>{place(Cp,300,520,pop(t,ts-.4),o);glow(Cp,t>ts);place(L1,700,520,pop(t,th),o);cplace(O,t,420,1250,{op:o,s:1.2,spin:t>tf?t*600:t*60});Hw.forEach((w,i)=>place(w,780+((t*300+i*80)%280),980+i*40,1,o*p(t,tf,tf+.3)));place(L2,760,1350,pop(t,tf),o)})}
// INVERTER
{const G=mk(`<svg width="860" height="440"><text x="0" y="40" fill="#aaa" font-size="28" font-family="Inter" font-weight="700">power use</text><path id="nv" fill="none" stroke="#f87171" stroke-width="6"/><path id="iv" fill="none" stroke="#06b6d4" stroke-width="8"/></svg>`),L1=label('old: full ON / OFF','pill',30),L2=label('inverter: speed adjusts → less power','tok',30);
const tc=W('inverter','changes'),tl=W('inverter','less');cue(tc,'tick');cue(tl,'ding');
SCN('inverter',(t,o)=>{let a='',b='';for(let x=0;x<=860;x+=5){a+=(x?'L':'M')+x+' '+(Math.floor(x/120)%2?380:100);b+=(x?'L':'M')+x+' '+(x<150?100+x*1.2:290+15*Math.sin(x*.05))}G.querySelector('#nv').setAttribute('d',a);G.querySelector('#iv').setAttribute('d',b);G.querySelector('#iv').style.opacity=p(t,tc,tc+.4);place(G,540,780,1,o);place(L1,540,1080,1,o);place(L2,540,1190,pop(t,tc),o);kk(t,170,1490,{op:o,s:.5,mood:t>tl?'grin':'happy'})})}
// TEMP
{const T=mk('<div class="big" style="font-size:180px"><span class="acc" id="tc"></span>°C</div>'),I=indoorC(),L=label('India · BEE default setting','tok',32),Bl=label('lower = more electricity ⚡💸','pill',30);
const te=W('temp','every'),tb=W('temp','bureau'),tt=W('temp','twenty');cue(te,'down');cue(tt,'ding');
SCN('temp',(t,o)=>{const v=t<tt?Math.round(kf(t,[[te,22],[tb,18]])):24;$('tc').textContent=v;place(T,540,560,1,o);place(Bl,540,760,pop(t,te),o);place(L,540,880,pop(t,tb),o);cplace(I,t,540,1250,{op:o,s:1,mood:t>tt?'joy':'worry'})})}
charOutro([[indoorC(),.35],[outC(),.4]],'Cool,','by moving heat.');
