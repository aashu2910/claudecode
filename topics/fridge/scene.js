const fridgeC=()=>char(220,360,({blink,mood='happy',look=[0,0]})=>{const g=gid();return `<defs>${grad(g,'#ffffff','#cbd5e1')}</defs><rect x="10" y="0" width="200" height="350" rx="30" fill="url(#${g})"/><line x1="10" y1="120" x2="210" y2="120" stroke="#94a3b8" stroke-width="5"/><rect x="170" y="40" width="10" height="50" rx="5" fill="#94a3b8"/><rect x="170" y="150" width="10" height="70" rx="5" fill="#94a3b8"/>${face(110,220,1,{blink,mood,look})}`});
const refC=()=>char(200,200,({blink,mood='happy',look=[0,0],col='#38bdf8',gas=0,t})=>{const g=gid();const c2=col;const sh=gas?`<circle cx="60" cy="110" r="60" fill="url(#${g})"/><circle cx="140" cy="110" r="60" fill="url(#${g})"/><circle cx="100" cy="70" r="65" fill="url(#${g})"/><circle cx="100" cy="140" r="55" fill="url(#${g})"/>`:`<path d="M100 5 C100 5 180 105 180 140 A80 60 0 0 1 20 140 C20 105 100 5 100 5Z" fill="url(#${g})"/>`;return `<defs>${grad(g,'#ffffff',c2)}</defs>${sh}${face(100,110,.9,{blink,mood,look})}`});
const compC=()=>buddy('rect','#9ca3af','#374151',`<circle cx="40" cy="45" r="10" fill="#1f2937"/><circle cx="160" cy="45" r="10" fill="#1f2937"/>`,105,.9);
const coilsSVG=(c)=>`<svg width="300" height="420" viewBox="0 0 300 420"><path d="M20 20 H280 V80 H20 V140 H280 V200 H20 V260 H280 V320 H20 V380 H280" fill="none" stroke="${c}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const heatDots=(n)=>Array.from({length:n},()=>mk('<div style="width:22px;height:22px;border-radius:11px;background:#f87171;box-shadow:0 0 14px #f87171"></div>'));
const waves=()=>mk('<div style="font-size:70px;color:#f87171">〰️</div>');
// HOOK
{const F=fridgeC(),Hw=[0,1,2].map(()=>mk('<div style="width:14px;height:120px;border-radius:7px;background:linear-gradient(#f8717100,#f87171,#f8717100)"></div>')),Ck=label('❄️ cold inside','pill',34),Wm=label('🔥 warm behind','tok',34);
const tc=W('hook','cold'),th=W('hook','hand'),tw=W('hook','warm'),ts=W('hook','secret');cue(tc,'shimmer');cue(tw,'up');cue(ts,'ding');
SCN('hook',(t,o)=>{cplace(F,t,440,1200,{op:o,s:1.6,popT:S0('hook')-.3,mood:t>ts?'grin':'happy'});place(Ck,380,380,pop(t,tc),o);Hw.forEach((h,i)=>place(h,720+i*50,700-((t*120+i*40)%160),1,o*p(t,tw-.3,tw)));place(Wm,780,560,pop(t,tw),o);kk(t,860,1480,{op:o,s:.6,popT:th-.3,mood:t>tw?'o':'happy',look:[-1,0],jumpT:tw})})}
// IDEA
{const F=fridgeC(),H=heatDots(8),L1=label('❌ makes cold'),L2=label('✅ moves heat out','tok',36),Kt=label('your kitchen 🏠');
const td=W('idea','doesn'),tm=W('idea','moves'),tk=W('idea','kitchen');cue(td,'lock');cue(tm,'whoosh');cue(tk,'pop');
SCN('idea',(t,o)=>{cplace(F,t,380,1250,{op:o,s:1.6,mood:t>tm?'joy':'happy'});H.forEach((h,i)=>{const u=((t-tm)*.4+i/8)%1;const x=380+u*600,y=900+Math.sin(u*6+i)*80+(i%3)*40;place(h,x,y,1,o*(t>tm?1:0)*(1-p(u,.85,1)))});place(L1,540,360,pop(t,td),o);place(L2,540,470,pop(t,tm),o);place(Kt,860,1150,pop(t,tk),o)})}
// EVAP
{const R=refC(),Pp=mk(coilsSVG('#38bdf8')),H=heatDots(6),Fd=label('🥛🍎🧀','pill',50),L=label('boils at a very low temperature'),S=label('evaporating → soaks up heat','tok',32);
const tr=W('evap','refrigerant'),tb=W('evap','boils'),te=W('evap','evaporates'),ts=W('evap','soaks');cue(tr,'pop');cue(tb,'tick');cue(te,'whoosh');cue(ts,'shimmer');
SCN('evap',(t,o)=>{place(Pp,700,840,1,o*.8);const u=p(t,te,te+1);cplace(R,t,560,1100,{op:o,popT:tr-.2,s:1.2,gas:u>.5?1:0,col:'#38bdf8',mood:u>.5?'joy':'happy',jumpT:te});place(Fd,240,800,1,o);
 H.forEach((h,i)=>{const v=p(t,ts+i*.12,ts+i*.12+1);place(h,240+(560-240)*eio(v),800+(950-800)*eio(v)+Math.sin(i)*30,1,o*(v>0&&v<1?1:0))});place(L,540,360,pop(t,tb),o);place(S,540,480,pop(t,ts),o)})}
// COMP
{const C=compC(),R=refC(),Hm=label('mmmmm 🎵','pill',30),Hot=label('squeezed → HOT 🔥','tok',36),Th=mk('<div class="card" style="font-size:30px">hotter than your kitchen</div>');
const tc=W('comp','compressor'),th=W('comp','humming'),ts=W('comp','squeezes'),tht=W('comp','hot');cue(tc,'pop');cue(th,'scramble');cue(ts,'lock');cue(tht,'up');
SCN('comp',(t,o)=>{const hum=t>th?Math.sin(t*40)*3:0;cplace(C,t,540+hum,1250,{op:o,popT:tc-.2,s:1.5,mood:t>ts?'grin':'happy'});place(Hm,830,880,pop(t,th),o);const sq=eio(p(t,ts,ts+.6));const hot=p(t,ts,tht+.3);
 cplace(R,t,540,820,{op:o,s:1.1*(1-.25*sq),gas:1,col:hot>.5?'#ef4444':'#38bdf8',mood:hot>.5?'worry':'happy',r:sq*Math.sin(t*20)*3});place(Hot,540,380,pop(t,tht),o);place(Th,540,500,pop(t,tht+.4),o);kk(t,180,1480,{op:o,s:.55,mood:'o'})})}
// COND
{const Cl=mk(coilsSVG('#ef4444')),R=refC(),Wv=[0,1,2,3].map(()=>mk('<div style="width:14px;height:140px;border-radius:7px;background:linear-gradient(#f8717100,#f87171,#f8717100)"></div>')),L=label('coils at the back','tok',34),Lq=label('gas → liquid');
const tc=W('cond','coils'),te=W('cond','escape'),tco=W('cond','cools'),tl=W('cond','liquid');cue(tc,'pop');cue(te,'whoosh');cue(tco,'down');cue(tl,'ding');
SCN('cond',(t,o)=>{const c=p(t,tco,tl+.5);Cl.querySelector('path').setAttribute('stroke',`rgb(${Math.round(239-120*c)},${Math.round(68+60*c)},${Math.round(68+100*c)})`);place(Cl,420,840,1,o);Wv.forEach((w,i)=>place(w,700+i*70,800-((t*150+i*50)%220),1,o*p(t,te,te+.3)*(1-c*.6)));place(L,420,370,pop(t,tc),o);
 cplace(R,t,840,1300,{op:o,s:1,gas:t<tl?1:0,col:c>.5?'#fb923c':'#ef4444',mood:t>tl?'joy':'worry',jumpT:tl});place(Lq,840,1360,pop(t,tl),o)})}
// VALVE
{const V=mk('<div style="width:600px;height:200px;position:relative"><div style="position:absolute;left:0;top:0;width:240px;height:200px;background:#475569;border-radius:30px 0 0 30px"></div><div style="position:absolute;left:240px;top:80px;width:120px;height:40px;background:#475569"></div><div style="position:absolute;left:360px;top:0;width:240px;height:200px;background:#475569;border-radius:0 30px 30px 0"></div></div>'),R=refC(),Ic=[0,1,2,3,4].map(()=>mk('<div style="font-size:50px">❄️</div>')),L=label('tiny valve'),Pd=label('pressure drops → icy cold','tok',34);
const tp=W('valve','passes'),td=W('valve','drops'),ti=W('valve','icy');cue(tp,'whoosh');cue(td,'down');cue(ti,'shimmer');
SCN('valve',(t,o)=>{place(V,540,820,1,o);const u=eio(p(t,tp,td));const x=180+u*720;const sq=x>420&&x<660?.4:1;cplace(R,t,x,900,{op:o,s:.7,col:t>td?'#7dd3fc':'#fb923c',mood:sq<1?'o':(t>ti?'joy':'happy'),...(sq<1?{s:.7}:{})});R.style.transform+=` scaleY(${sq})`;
 Ic.forEach((c,i)=>place(c,800+Math.cos(i*1.3+t)*130,820+Math.sin(i*1.3+t)*130,pop(t,ti+i*.08),o));place(L,540,620,pop(t,tp),o);place(Pd,540,380,pop(t,td),o);kk(t,170,1480,{op:o,s:.55,mood:t>ti?'grin':'happy'})})}
// THERMO
{const Th=mk('<div class="big" style="font-size:130px"><span class="acc">3–5</span>°C</div>'),C=compC(),Sw=mk('<div class="tok" style="font-size:44px" id="sw">ON</div>'),F=fridgeC(),L=label('thermostat');
const ts=W('thermo','switches'),th=W('thermo','hold'),tt=W('thermo','three');cue(ts,'tick');cue(ts+1.2,'tick');cue(tt,'ding');
SCN('thermo',(t,o)=>{const on=t<ts||Math.floor((t-ts)/1.2)%2==0;$('sw').textContent=on?'ON':'OFF';$('sw').style.opacity=on?1:.5;place(Sw,760,800,pop(t,ts),o);cplace(C,t,760+(on?Math.sin(t*40)*3:0),1220,{op:o,s:1.1,mood:on?'grin':'happy'});cplace(F,t,300,1320,{op:o,s:1.3,mood:'joy'});place(Th,540,420,pop(t,tt),o);place(L,760,680,pop(t,ts),o)})}
charOutro([[fridgeC(),.45],[refC(),.7],[compC(),.65],[refC(),.7]],'Heat out,','cold in.');
