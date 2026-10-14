const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const carC=()=>char(420,220,({blink,mood='happy'})=>{const g=gid();return `<defs>${grad(g,'#fecaca','#dc2626')}</defs><path d="M20 150 L40 90 Q60 50 120 45 L280 45 Q340 50 370 90 L400 150 Z" fill="url(#${g})"/><rect x="10" y="140" width="400" height="40" rx="18" fill="url(#${g})"/><circle cx="100" cy="185" r="32" fill="#1f2937"/><circle cx="320" cy="185" r="32" fill="#1f2937"/><path d="M120 60 L280 60 L320 100 L90 100Z" fill="#0f172a" opacity=".6"/>${face(210,130,.7,{blink,mood})}`});
const wheel=()=>mk('<svg width="220" height="220" viewBox="0 0 220 220"><circle cx="110" cy="110" r="100" fill="#1f2937"/><circle cx="110" cy="110" r="50" fill="#6b7280"/><g class="sp">'+[0,60,120].map(a=>`<rect x="104" y="20" width="12" height="180" fill="#9ca3af" transform="rotate(${a} 110 110)"/>`).join('')+'</g></svg>');
// HOOK
{const C1=carC(),C2=carC(),O=mk('<div style="font-size:110px">🐄</div>'),L1=label('no ABS: skids straight ✕','pill',28),L2=label('ABS: steers around ✓','tok',30),Q=qmark();
const ts=W('hook','slam'),tk=W('hook','skid'),ta=W('hook','abs'),th=W('hook','how');cue(ts,'lock');cue(tk,'down');cue(ta,'whoosh');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(O,540,380,1,o);cplace(C1,t,300,kf(t,[[ts,1300],[tk+1,560]]),{op:o*(1-p(t,ta-.3,ta)),s:.7,r:-90,mood:t>tk?'o':'happy'});place(L1,300,1450,pop(t,tk),o*(1-p(t,ta-.3,ta)));const u=p(t,ta,th);cplace(C2,t,700+Math.sin(u*Math.PI)*120,kf(t,[[ta,1300],[th,560]]),{op:o*p(t,ta-.3,ta),s:.7,r:-90+Math.sin(u*Math.PI)*25,mood:'joy'});place(L2,700,1450,pop(t,ta),o);place(Q,880,900,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// LOCK
{const W1=wheel(),Sk=Array.from({length:6},()=>mk('<div style="width:40px;height:12px;border-radius:6px;background:#78716c"></div>')),L=[label('wheel stopped, car moving → skid','tok',30),label('less grip · no steering ✕','pill',30)];
const ts=W('lock','stops'),tk=W('lock','skids'),tg=W('lock','grip');cue(ts,'lock');cue(tk,'down');
SCN('lock',(t,o)=>{W1.querySelector('.sp').setAttribute('transform',`rotate(${t<ts?t*400:ts*400} 110 110)`);place(W1,540,800,1,o);Sk.forEach((s,i)=>place(s,540-((t-tk)*400+i*60)%380-120,920,1,o*(t>tk?1:0)));place(L[0],540,420,pop(t,tk),o);place(L[1],540,1150,pop(t,tg),o)})}
// SENSORS
{const C=carC(),S=[[220,1000],[860,1000],[220,700],[860,700]].map(()=>node('chip','',110)),U=node('brain','ABS unit',150),Sp=label('wheel speeds: 52 · 52 · 51 · 52','tok',30);
const ts=W('sensors','sensor'),tc=W('sensors','control');cue(ts,'pop');cue(tc,'beep');
SCN('sensors',(t,o)=>{cplace(C,t,540,1000,{op:o,s:1.3,mood:'happy',r:-90});[[220,1050],[860,1050],[220,650],[860,650]].forEach((q,i)=>{place(S[i],q[0],q[1],pop(t,ts+i*.1),o);glow(S[i],t>tc&&Math.floor(t*6+i)%2==0)});place(U,540,420,pop(t,tc),o);glow(U,t>tc);place(Sp,540,1350,pop(t,tc+.4),o)})}
// DETECT
{const R=['FL 52','FR 52','RL 51','RR 31 ⚠'].map((s,i)=>mk(`<div class="card mono" style="width:300px;text-align:center;font-size:36px;${i==3?'border-color:#ef4444':''}">${s}</div>`)),L=label('one wheel slowing too fast → about to lock','tok',28);
const ts=W('detect','slows'),tl=W('detect','lock');cue(ts,'beep');cue(tl,'beep');
SCN('detect',(t,o)=>{R.forEach((r,i)=>place(r,330+(i%2)*420,640+Math.floor(i/2)*180,1,o*(i==3?p(t,ts-.3,ts):1)));place(L,540,1060,pop(t,tl),o);kk(t,540,1450,{op:o,s:.6,mood:t>tl?'o':'happy'})})}
// PULSE
{const B=mk('<div style="width:700px;height:60px;border-radius:30px;background:#1f2937;overflow:hidden"><div id="bp" style="height:100%;background:#ef4444"></div></div>'),W1=wheel(),L=[label('release → reapply → release…','tok',30),label('many times a second','pill',30)];
const tr=W('pulse','releases'),tm=W('pulse','many');cue(tr,'scramble');cue(tm,'tick');
SCN('pulse',(t,o)=>{const on=t>tr?(Math.floor(t*12)%2):1;$('bp').style.width=(on?85:30)+'%';place(B,540,560,1,o);W1.querySelector('.sp').setAttribute('transform',`rotate(${t*300} 110 110)`);place(W1,540,880,1,o);place(L[0],540,420,pop(t,tr),o);place(L[1],540,1120,pop(t,tm),o)})}
// STEER
{const C=carC(),O=mk('<div style="font-size:100px">🚧</div>'),Pd=label('🦶 pedal buzzes → normal, keep pressing','pill',28),St=label('wheels rolling → you can steer ✓','tok',30);
const ts=W('steer','steer'),tp=W('steer','pedal'),tk=W('steer','keep');cue(ts,'whoosh');cue(tp,'scramble');cue(tk,'ding');
SCN('steer',(t,o)=>{place(O,540,560,1,o);const u=p(t,ts-.5,tp+.5);cplace(C,t,540+Math.sin(u*Math.PI)*260,1300-u*800,{op:o,s:.7,r:-90+Math.sin(u*Math.PI)*20,mood:'joy'});place(St,540,400,pop(t,ts),o);place(Pd,540,1430,pop(t,tp),o)})}
// INDIA
{const C=label('🚗 new cars: standard','pill',32),M=label('🏍️ motorcycles >125 cc: required since 2019','tok',30),Y=mk('<div class="big" style="font-size:140px"><span class="acc">2019</span></div>');
const tc=W('india','cars'),tm=W('india','motorcycles');cue(tc,'tick');cue(tm,'ding');
SCN('india',(t,o)=>{place(Y,540,560,pop(t,tm-.6),o);place(C,540,800,pop(t,tc),o);place(M,540,930,pop(t,tm),o);kk(t,540,1400,{op:o,s:.6,mood:'grin'})})}
charOutro([[carC(),.4],[buddy('circle','#fecaca','#ef4444','',95,.8),.55]],'Braking','without skidding.');
