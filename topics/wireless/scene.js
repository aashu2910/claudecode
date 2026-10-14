const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const pad=()=>mk('<div style="width:380px;height:80px;border-radius:40px;background:linear-gradient(#e5e7eb,#9ca3af)"></div>');
const coil=()=>mk(`<svg width="300" height="80" viewBox="0 0 300 80">${Array.from({length:5},(_,i)=>`<ellipse cx="150" cy="40" rx="${30+i*28}" ry="${8+i*6}" fill="none" stroke="#b45309" stroke-width="7"/>`).join('')}</svg>`);
const field=()=>Array.from({length:6},()=>mk('<div style="width:6px;height:120px;border-radius:3px;background:linear-gradient(transparent,#34d399,transparent)"></div>'));
// HOOK
{const P=phoneC(),Pd=pad(),B=label('⚡ charging','tok',34),N=label('🔌 no cable','pill',30),Q=qmark();
const tp=W('hook','place'),tc=W('hook','charging'),tw=W('hook','how');cue(tp,'pop');cue(tc,'ding');cue(tw,'whoosh');
SCN('hook',(t,o)=>{place(Pd,540,1200,1,o);cplace(P,t,540,kf(t,[[tp-.5,700],[tp+.3,1170]]),{op:o,s:1.1,r:0,mood:t>tc?'joy':'happy'});place(B,540,500,pop(t,tc),o);place(N,540,620,pop(t,tc+.4),o);place(Q,860,900,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// COIL
{const C=coil(),F=field(),L=[label('copper coil in the pad','pill',30),label('alternating current → changing magnetic field','tok',28)];
const tc=W('coil','coil'),ta=W('coil','alternating'),tm=W('coil','magnetic');cue(tc,'pop');cue(tm,'shimmer');
SCN('coil',(t,o)=>{place(C,540,1050,pop(t,tc),o,0);C.firstElementChild.style.transform=`scaleX(1.8) scaleY(1.8)`;F.forEach((f,i)=>place(f,390+i*60,820,1,o*p(t,tm,tm+.3)*(.5+.5*Math.sin(t*8+i))));place(L[0],540,1220,pop(t,tc),o);place(L[1],540,420,pop(t,ta),o)})}
// INDUCE
{const A=coil(),B=coil(),F=field(),Cur=Array.from({length:5},()=>mk('<div style="width:20px;height:20px;border-radius:10px;background:#fde047;box-shadow:0 0 12px #fde047"></div>')),L=label('electromagnetic induction ⚡','tok',34),Lb=[label('phone coil','pill',28),label('pad coil','pill',28)];
const tm=W('induce','matching'),ti=W('induce','induces'),te=W('induce','electromagnetic');cue(tm,'pop');cue(ti,'shimmer');cue(te,'ding');
SCN('induce',(t,o)=>{place(B,540,1100,1.6,o);place(A,540,620,1.6*pop(t,tm),o);F.forEach((f,i)=>place(f,390+i*60,860,1,o*(.5+.5*Math.sin(t*8+i))));Cur.forEach((c,i)=>{const a=((t-ti)*2+i*1.26);place(c,540+200*Math.cos(a),620+40*Math.sin(a),1,o*(t>ti?1:0))});place(Lb[0],540,520,pop(t,tm),o);place(Lb[1],540,1200,1,o);place(L,540,380,pop(t,te),o)})}
// CONVERT
{const Ac=mk('<svg width="260" height="120"><path class="w" fill="none" stroke="#34d399" stroke-width="7"/></svg>'),Dc=mk('<svg width="260" height="120"><line x1="0" y1="60" x2="260" y2="60" stroke="#34d399" stroke-width="7"/></svg>'),Ch=node('chip','Converter',150),B=buddy('tall','#d1fae5','#10b981','',90,.8),L=[label('AC','pill',28),label('DC','pill',28)];
const ta=W('convert','alternating'),tc=W('convert','converts'),tb=W('convert','battery');cue(tc,'scramble');cue(tb,'ding');
SCN('convert',(t,o)=>{let d='';for(let x=0;x<=260;x+=5)d+=(x?'L':'M')+x+' '+(60-40*Math.sin(x*.06-t*6));Ac.querySelector('.w').setAttribute('d',d);place(Ac,170,640,1,o);place(L[0],170,560,pop(t,ta),o);place(Ch,540,660,pop(t,tc-.3),o);glow(Ch,t>tc);place(Dc,910,640,1,o*p(t,tc,tc+.3));place(L[1],910,560,pop(t,tc),o);cplace(B,t,540,1300,{op:o,s:.9,popT:tb-.3,mood:'joy'})})}
// TALK
{const P=phoneC(),Pd=pad(),B1=bubble('Send 15 W please',30),B2=bubble('OK! No metal detected ✓',30),Q=label('Qi standard','tok',34);
const tq=W('talk','qi'),tc=W('talk','communicate'),ts=W('talk','spotting');cue(tq,'pop');cue(tc,'beep');cue(ts,'tick');
SCN('talk',(t,o)=>{place(Pd,540,1200,1,o);cplace(P,t,540,1170,{op:o,s:1.1,mood:'joy'});place(Q,540,400,pop(t,tq),o);place(B1,760,620,pop(t,tc),o);place(B2,330,800,pop(t,ts),o)})}
// ALIGN
{const P=phoneC(),Pd=pad(),M=mk('<div style="font-size:100px">🧲</div>'),L=label('coils must line up → magnets snap it into place','tok',28);
const tl=W('align','line'),tm=W('align','magnets');cue(tl,'tick');cue(tm,'lock');
SCN('align',(t,o)=>{place(Pd,540,1200,1,o);cplace(P,t,kf(t,[[tl,360],[tm,360],[tm+.4,540]]),1170,{op:o,s:1.1,mood:t>tm+.4?'joy':'worry'});place(M,540,700,pop(t,tm),o);place(L,540,420,pop(t,tl),o)})}
// TRADEOFF
{const H=label('🔥 some energy lost as heat','pill',30),S=label('usually slower than a cable 🐢','tok',30),C=label('✓ super convenient','pill',30);
const tc=W('tradeoff','convenient'),th=W('tradeoff','heat'),ts=W('tradeoff','slower');cue(tc,'ding');cue(th,'up');cue(ts,'down');
SCN('tradeoff',(t,o)=>{place(C,540,500,pop(t,tc),o);place(H,540,640,pop(t,th),o);place(S,540,780,pop(t,ts),o);kk(t,540,1300,{op:o,s:.7,mood:'grin'})})}
charOutro([[phoneC(),.6],[buddy('wide','#e5e7eb','#9ca3af','',110,.7),.6]],'Power through','the air.');
