const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const mouseC=()=>char(220,320,({blink,mood='happy'})=>`<rect x="10" y="10" width="200" height="300" rx="100" fill="#f1f5f9"/><line x1="110" y1="10" x2="110" y2="120" stroke="#cbd5e1" stroke-width="5"/><rect x="100" y="50" width="20" height="40" rx="10" fill="#f472b6"/>${face(110,190,.8,{blink,mood})}`);
const tex=(id)=>mk(`<div id="${id}" style="width:240px;height:240px;border-radius:16px;border:4px solid #f472b6;overflow:hidden;position:relative;background:#78716c">${Array.from({length:30},(_,i)=>`<div style="position:absolute;left:${(i*53)%220}px;top:${(i*37)%220}px;width:${10+i%3*6}px;height:${10+i%3*6}px;border-radius:50%;background:#44403c"></div>`).join('')}</div>`);
// HOOK
{const M=mouseC(),C=mk('<div style="font-size:70px">🖱️</div>'),Sc=mk('<div style="width:700px;height:400px;border-radius:20px;border:6px solid #4b5563;background:#0f172a"></div>'),Cu=mk('<div style="font-size:60px">➤</div>'),N=label('no ball inside','pill',30),Q=qmark();
const tm=W('hook','move'),tg=W('hook','glides'),tb=W('hook','ball'),tk=W('hook','know');cue(tm,'tick');cue(tg,'whoosh');cue(tk,'whoosh');
SCN('hook',(t,o)=>{place(Sc,540,600,1,o);const u=Math.sin(Math.max(0,t-tm)*1.5);place(Cu,540+u*250,600,1,o,-45);cplace(M,t,540+u*60,1300,{op:o,s:.9,mood:'grin'});place(N,540,920,pop(t,tb),o);place(Q,880,1200,pop(t,tk),o*p(t,tk,tk+.1),Math.sin(t*3)*8)})}
// LIGHT
{const B=mk('<div style="width:300px;height:460px;border-radius:150px;background:#1f2937;border:6px solid #9ca3af;position:relative"><div style="position:absolute;left:110px;top:200px;width:30px;height:30px;border-radius:15px;background:#ef4444;box-shadow:0 0 30px #ef4444"></div><div style="position:absolute;left:160px;top:200px;width:30px;height:30px;border-radius:6px;background:#111;border:3px solid #f472b6"></div></div>'),L=label('red or infrared light','tok',32);
const tf=W('light','flip'),tl=W('light','light');cue(tf,'whoosh');cue(tl,'pop');
SCN('light',(t,o)=>{place(B,540,820,pop(t,tf-.2),o,(1-p(t,tf,tf+.6))*180);place(L,540,400,pop(t,tl),o)})}
// CAMERA
{const T=tex('ct'),N=mk('<div class="big" style="font-size:90px"><span class="acc">1000s</span> / sec</div>'),L=label('tiny low-res camera','pill',30);
const tc=W('camera','camera'),tt=W('camera','thousands');cue(tc,'pop');cue(tt,'scramble');
SCN('camera',(t,o)=>{place(T,540,820,pop(t,tc),o);T.firstElementChild.style.opacity=t>tt&&Math.floor(t*20)%2?.85:1;place(N,540,450,pop(t,tt),o);place(L,540,1080,pop(t,tc),o)})}
// COMPARE
{const A=tex('c1'),B=tex('c2'),Ar=mk('<div style="font-size:90px;font-weight:900" class="acc">→</div>'),L=label('texture shifted → direction + distance','tok',30);
const tc=W('compare','compares'),ts=W('compare','shift');cue(tc,'scramble');cue(ts,'ding');
SCN('compare',(t,o)=>{place(A,280,800,1,o);place(B,800,800,1,o);B.firstElementChild.style.backgroundPosition='0 0';[...B.firstElementChild.children].forEach(c=>c.style.transform=`translate(${t>ts?30:0}px,${t>ts?-10:0}px)`);place(Ar,540,800,pop(t,tc),o);place(L,540,1100,pop(t,ts),o)})}
// SEND
{const M=mouseC(),Cu=mk('<div style="font-size:60px">➤</div>'),Sc=mk('<div style="width:600px;height:340px;border-radius:20px;border:6px solid #4b5563;background:#0f172a"></div>'),e=edge([[540,1080],[540,800]]),L=label('Δx, Δy → cursor moves','tok',30);
const ts=W('send','sends'),tc=W('send','cursor');cue(ts,'beep');cue(tc,'whoosh');
SCN('send',(t,o)=>{place(Sc,540,560,1,o);place(Cu,540+Math.sin(t*2)*200,560+Math.cos(t*1.6)*100,1,o,-45);drawEdge(e,t,ts,o,true);cplace(M,t,540,1400,{op:o,s:.8,mood:'grin'});place(L,540,940,pop(t,tc),o)})}
// DPI
{const A=mk('<div class="card" style="width:420px;font-size:32px;text-align:center">800 DPI → 🐢</div>'),B=mk('<div class="card on" style="width:420px;font-size:32px;text-align:center">3200 DPI → ⚡</div>'),L=label('dots moved per inch of mouse movement','pill',28);
const td=W('dpi','dpi'),th=W('dpi','higher');cue(td,'pop');cue(th,'up');
SCN('dpi',(t,o)=>{place(L,540,420,pop(t,td),o);place(A,540,680,pop(t,td+.4),o);place(B,540,880,pop(t,th),o);kk(t,540,1300,{op:o,s:.6,mood:'grin'})})}
// GLASS
{const G=mk('<div style="width:500px;height:300px;border-radius:20px;background:linear-gradient(135deg,rgba(255,255,255,.35),rgba(255,255,255,.05));border:4px solid #e5e7eb"></div>'),M=mouseC(),P=mk('<div style="width:520px;height:320px;border-radius:24px;background:#1f2937;border:4px solid #f472b6"></div>'),L=[label('glass: almost no texture → struggles','pill',28),label('mouse pad fixes it ✓','tok',30)];
const tg=W('glass','glass'),tp=W('glass','pad');cue(tg,'down');cue(tp,'ding');
SCN('glass',(t,o)=>{const pad=t>tp;place(pad?P:G,540,950,1,o);place(pad?G:P,540,950,1,0);cplace(M,t,540,1050,{op:o,s:.7,mood:pad?'joy':'worry'});place(L[0],540,420,pop(t,tg),o);place(L[1],540,540,pop(t,tp),o)})}
charOutro([[mouseC(),.5],[buddy('circle','#fce7f3','#f472b6','',95,.8),.55]],'Tracking','every move.');
