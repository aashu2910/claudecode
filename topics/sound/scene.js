const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const burst=()=>mk(`<svg width="400" height="400" viewBox="0 0 400 400">${Array.from({length:16},(_,i)=>`<line x1="200" y1="200" x2="${200+180*Math.cos(i*Math.PI/8)}" y2="${200+180*Math.sin(i*Math.PI/8)}" stroke="${['#fb7185','#fde047','#60a5fa','#a3e635'][i%4]}" stroke-width="8" stroke-linecap="round"/>`).join('')}</svg>`);
const rings=n=>Array.from({length:n},()=>mk('<div style="width:200px;height:200px;border-radius:100px;border:6px solid #fb7185"></div>'));
// HOOK
{const B=burst(),R=rings(3),Fl=label('⚡ flash first','tok',34),Bm=label('💥 BOOM… later','pill',34),Q=qmark();
const tb=W('hook','bursts'),th=W('hook','hear'),tw=W('hook','why');cue(tb,'shimmer');cue(th+.3,'lock');cue(tw,'whoosh');
SCN('hook',(t,o)=>{place(B,540,560,eio(p(t,tb,tb+.4)),o*(1-p(t,tb+1.5,tb+2.5)));place(Fl,300,880,pop(t,tb+.2),o);place(Bm,780,880,pop(t,th+.3),o);R.forEach((r,i)=>{const ph=((t-th)*.6+i/3)%1;place(r,540,560,.5+ph*4,o*(t>th?1-ph:0))});kk(t,540,1480,{op:o,s:.6,look:[0,-1],mood:t>tw?'o':'happy',jumpT:th+.3});place(Q,880,1300,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// BLAST
{const G=mk('<div style="width:160px;height:160px;border-radius:80px;background:radial-gradient(#fde047,#fb7185)"></div>'),A=Array.from({length:12},()=>mk('<div style="width:26px;height:26px;border-radius:13px;background:#94a3b8"></div>')),L=label('hot gas expands violently','tok',32);
const th=W('blast','heats'),te=W('blast','expands'),ts=W('blast','shoving');cue(th,'up');cue(te,'lock');
SCN('blast',(t,o)=>{const e=eio(p(t,te,te+.6));place(G,540,800,.6+2.2*e,o*(1-.4*e));A.forEach((a,i)=>{const ang=i*Math.PI/6;const r=220+e*260;place(a,540+Math.cos(ang)*r,800+Math.sin(ang)*r,1,o)});place(L,540,380,pop(t,te),o)})}
// WAVE
{const Pts=Array.from({length:60},()=>mk('<div style="width:14px;height:14px;border-radius:7px;background:#e2e8f0"></div>')),R=rings(3),L=label('a pressure wave = sound','tok',34);
const ts=W('wave','squeezes'),tp=W('wave','pressure'),tsd=W('wave','sound');cue(ts,'tick');cue(tp,'whoosh');cue(tsd,'ding');
SCN('wave',(t,o)=>{Pts.forEach((d,i)=>{const col=i%12,row=Math.floor(i/12);const x0=120+col*75;const dx=t>ts?18*Math.sin(x0*.02-(t-ts)*6):0;place(d,x0+dx,560+row*60,1,o)});R.forEach((r,i)=>{const ph=((t-tp)*.5+i/3)%1;place(r,540,1130,.3+ph*3,o*(t>tp?1-ph:0))});place(L,540,400,pop(t,tsd),o)})}
// SPEED
{const Sp=mk('<div class="big" style="font-size:110px"><span class="acc">~340</span><span style="font-size:44px"> m/s</span></div>'),Bar=[mk('<div style="width:860px;height:30px;border-radius:15px;background:#1f2937;overflow:hidden"><div id="sb1" style="height:100%;background:#fb7185"></div></div>'),mk('<div style="width:860px;height:30px;border-radius:15px;background:#1f2937;overflow:hidden"><div id="sb2" style="height:100%;background:#fde047"></div></div>')],L=[label('🔊 sound','pill',30),label('💡 light ~300,000 km/s','tok',30)];
const tt=W('speed','travels'),tl=W('speed','light');cue(tt,'whoosh');cue(tl,'shimmer');
SCN('speed',(t,o)=>{place(Sp,540,440,pop(t,tt),o);$('sb1').style.width=Math.min(100,(t-tt)*12)+'%';$('sb2').style.width=t>tl?'100%':'0%';place(Bar[0],540,760,1,o);place(L[0],220,700,1,o);place(Bar[1],540,940,1,o*p(t,tl,tl+.2));place(L[1],540,880,pop(t,tl),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// FLASH
{const T=mk('<div class="big" style="font-size:120px"><span class="acc" id="ct">0</span> s</div>'),M=mk('<div class="card mono" style="font-size:34px">3 s × 340 m ≈ <span class="acc">1 km away</span></div>'),B=burst();
const tc=W('flash','count'),tm=W('flash','multiply');cue(tc,'tick');cue(tc+1,'tick');cue(tc+2,'tick');cue(tm,'ding');
SCN('flash',(t,o)=>{place(B,540,440,.5,o*win(t,S0('flash')-.3,S0('flash')+.6,.1));$('ct').textContent=Math.min(3,Math.max(0,Math.floor(t-tc)));place(T,540,760,pop(t,tc),o);place(M,540,1020,pop(t,tm),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// FADE
{const R=rings(4),Bd=mk('<div style="width:180px;height:500px;background:#334155;border-radius:10px"></div>'),E=label('echo ↩','pill',32),L=label('spreads out → gets weaker','tok',32);
const ts=W('fade','spreads'),te=W('fade','echo');cue(ts,'down');cue(te,'whoosh');
SCN('fade',(t,o)=>{R.forEach((r,i)=>{const ph=((t-ts)*.4+i/4)%1;r.firstElementChild.style.borderWidth=Math.max(1,8*(1-ph))+'px';place(r,300,900,.3+ph*3.5,o*(1-ph))});place(Bd,900,950,pop(t,te-.5),o);place(E,760,700,pop(t,te),o);place(L,540,400,pop(t,ts),o)})}
// EAR
{const Ear=buddy('circle','#fde2d4','#f9a8a8','',95,.9),EL=label('eardrum','pill',28),D=mk('<div style="width:14px;height:200px;border-radius:7px;background:#fb7185"></div>'),W1=label('⚠ very loud up close → hearing damage','tok',30),Ds=label('keep your distance 🧍↔️🎆','pill',30);
const tv=W('ear','vibrates'),td=W('ear','damage'),tk=W('ear','distance');cue(tv,'tick');cue(td,'lock');cue(tk,'ding');
SCN('ear',(t,o)=>{cplace(Ear,t,400,1000,{op:o,s:1.4,popT:S0('ear')-.3,mood:t>td?'worry':'happy'});place(D,720,800,1,o*p(t,tv,tv+.3));place(EL,720,560,pop(t,tv),o);D.style.transform+=` translateX(${t>tv?Math.sin(t*30)*10:0}px)`;place(W1,540,1200,pop(t,td),o);place(Ds,540,1330,pop(t,tk),o)})}
charOutro([[buddy('circle','#ffe4e6','#fb7185','',95,.8),.55],[buddy('circle','#fde2d4','#f9a8a8','',95,.8),.55]],'Sound','on the move.');
