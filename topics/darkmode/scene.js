const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=(dark)=>buddy('tall',dark?'#374151':'#f8fafc',dark?'#030712':'#cbd5e1','',80,.9);
const grid=(n=8)=>mk(`<div style="display:grid;grid-template-columns:repeat(${n},1fr);gap:8px;width:640px">${Array(n*n).fill('<div class="px" style="height:70px;border-radius:8px"></div>').join('')}</div>`);
// HOOK
{const A=phoneC(false),B=phoneC(true),L=[label('🔋 saves battery?','pill',32),label('…it depends','tok',36)],Q=qmark();
const ts=W('hook','saves'),td=W('hook','depends');cue(ts,'pop');cue(td,'whoosh');
SCN('hook',(t,o)=>{cplace(A,t,330,1150,{op:o,s:1.4,popT:S0('hook')-.3,mood:'happy'});cplace(B,t,750,1150,{op:o,s:1.4,popT:S0('hook'),mood:'happy'});place(L[0],540,420,pop(t,ts),o);place(L[1],540,560,pop(t,td),o);place(Q,540,760,pop(t,td),o*p(t,td,td+.1),Math.sin(t*3)*8)})}
// OLED
{const G=grid(),L=label('OLED: each pixel makes its own light','tok',30),Of=label('black = OFF → ~no power','pill',32);
const te=W('oled','every'),tb=W('oled','black');cue(te,'shimmer');cue(tb,'down');
SCN('oled',(t,o)=>{G.querySelectorAll('.px').forEach((x,i)=>{const r=Math.floor(i/8),c=i%8;const dark=t>tb&&(r+c)%3!=0;x.style.background=dark?'#000':'#a5b4fc';x.style.boxShadow=dark?'none':'0 0 14px #a5b4fc'});place(G,540,820,1,o);place(L,540,420,pop(t,te),o);place(Of,540,1200,pop(t,tb),o)})}
// LCD
{const Bl=mk('<div style="width:680px;height:680px;border-radius:20px;background:#fef9c3;box-shadow:0 0 60px #fef9c3"></div>'),G=grid(),L=label('LCD: one backlight, always on','tok',32),Bk=label('black just blocks it → still uses power','pill',28);
const tb=W('lcd','backlight'),tk=W('lcd','block');cue(tb,'pop');cue(tk,'tick');
SCN('lcd',(t,o)=>{place(Bl,560,840,1,o*p(t,tb,tb+.4));G.querySelectorAll('.px').forEach((x,i)=>{x.style.background=t>tk?'rgba(0,0,0,.85)':'rgba(165,180,252,.6)'});place(G,540,820,1,o);place(L,540,400,pop(t,tb),o);place(Bk,540,1240,pop(t,tk),o)})}
// BRIGHT
{const Bars=[['high brightness','big saving','#a5b4fc',80],['normal indoor','small saving','#6366f1',20]].map(([a,b,c,w])=>mk(`<div style="width:820px"><div style="font-weight:800;font-size:30px;margin-bottom:8px">${a} → <span class="acc">${b}</span></div><div style="height:60px;border-radius:30px;background:#1f2937;overflow:hidden"><div class="bf" data-w="${w}" style="height:100%;background:${c}"></div></div></div>`)),L=label('OLED phones · studies','tok',32);
const th=W('bright','high'),tn=W('bright','normal');cue(th,'up');cue(tn,'down');
SCN('bright',(t,o)=>{Bars.forEach((b,i)=>{const f=b.querySelector('.bf');f.style.width=(+f.dataset.w*eio(p(t,[th,tn][i],[th,tn][i]+.8)))+'%';place(b,540,700+i*240,pop(t,[th,tn][i]-.3),o)});place(L,540,420,pop(t,S0('bright')),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// CONTENT
{const A=mk('<div style="width:320px;height:560px;border-radius:30px;background:#000;border:6px solid #4b5563;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:30px">dark chat ✓</div>'),B=mk('<div style="width:320px;height:560px;border-radius:30px;background:linear-gradient(135deg,#f59e0b,#ec4899,#3b82f6);border:6px solid #4b5563;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:30px">bright video</div>'),L=label('helps only where it\'s actually dark','tok',30);
const th=W('content','helps'),tp=W('content','photos');cue(th,'tick');cue(tp,'tick');
SCN('content',(t,o)=>{place(A,300,850,pop(t,th),o);place(B,780,850,pop(t,tp),o);place(L,540,420,pop(t,th),o)})}
// CHECK
{const R=[['OLED / AMOLED','many flagships + mid-range','tok'],['LCD','many budget phones','pill']].map(([a,b,c])=>mk(`<div class="card" style="width:760px;font-size:32px"><span class="acc">${a}</span><br><span class="dim">${b}</span></div>`)),P=phoneC(false);
const tf=W('check','flagship'),tb=W('check','budget');cue(tf,'pop');cue(tb,'pop');
SCN('check',(t,o)=>{place(R[0],540,560,pop(t,tf),o);place(R[1],540,780,pop(t,tb),o);cplace(P,t,540,1300,{op:o,s:1,mood:'joy'})})}
// EYES
{const M=mk('<div style="font-size:150px">🌙</div>'),L=label('easier on the eyes at night 😌','tok',32),C=label('pick what feels comfortable','pill',30);
const tn=W('eyes','night'),tp=W('eyes','pick');cue(tn,'shimmer');cue(tp,'ding');
SCN('eyes',(t,o)=>{place(M,540,600,pop(t,S0('eyes')),o);place(L,540,860,pop(t,tn),o);place(C,540,980,pop(t,tp),o);kk(t,540,1450,{op:o,s:.7,mood:'grin',jumpT:tp})})}
charOutro([[phoneC(false),.6],[phoneC(true),.6]],'It','depends.');
