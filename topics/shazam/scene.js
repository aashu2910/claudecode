let sd=5;const rnd=()=>(sd=(sd*16807)%2147483647)/2147483647;
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9),micC=()=>buddy('tall','#fecdd3','#e11d48',`<g stroke="#9f1239" stroke-width="5" opacity=".5">${[30,55,80].map(y=>`<line x1="55" y1="${y}" x2="145" y2="${y}"/>`).join('')}</g>`,130,.8),dbC=()=>char(220,240,({blink,mood='happy'})=>{const g=gid();return `<defs>${grad(g,'#fecdd3','#be123c')}</defs><rect x="20" y="40" width="180" height="170" fill="url(#${g})"/><ellipse cx="110" cy="210" rx="90" ry="28" fill="url(#${g})"/><ellipse cx="110" cy="40" rx="90" ry="28" fill="#fda4af"/>${face(110,130,.9,{blink,mood})}`});
const starC=()=>char(100,100,({t,blink})=>`<path d="M50 4 L62 38 L96 40 L68 60 L78 94 L50 74 L22 94 L32 60 L4 40 L38 38Z" fill="#fde68a" style="filter:drop-shadow(0 0 12px #fb7185)"/>${face(50,52,.35,{blink,mood:'joy',cheek:false})}`);
const noteC=()=>char(140,200,({blink,mood='joy'})=>{const g=gid();return `<defs>${grad(g,'#fecdd3','#fb7185')}</defs><rect x="96" y="10" width="16" height="150" rx="8" fill="#fb7185"/><path d="M104 10 Q150 30 135 80" stroke="#fb7185" stroke-width="14" fill="none" stroke-linecap="round"/><ellipse cx="70" cy="160" rx="55" ry="42" fill="url(#${g})"/>${face(70,152,.6,{blink,mood})}`});
const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
// spectrogram grid
const GX=24,GY=16,SP=[];for(let i=0;i<GX;i++)for(let j=0;j<GY;j++)SP.push(rnd()*.55+(Math.abs(j-(6+3*Math.sin(i*.7)))<1?.5:0)+(Math.abs(j-(11+2*Math.cos(i*.5)))<.8?.4:0));
const PK=[[2,7],[5,10],[7,5],[9,12],[12,6],[14,11],[17,4],[19,9],[21,13]];
const specEl=()=>mk(`<div style="width:${GX*36}px;height:${GY*36}px;display:grid;grid-template-columns:repeat(${GX},1fr);grid-auto-flow:column;grid-template-rows:repeat(${GY},1fr);gap:2px">${SP.map(()=>'<div></div>').join('')}</div>`);
function paintSpec(el,t,t0,dim){[...el.firstElementChild.children].forEach((c,k)=>{const i=Math.floor(k/GY),j=GY-1-(k%GY);const v=SP[k]*p(t,t0+i*.05,t0+i*.05+.2);c.style.background=`rgba(251,113,133,${Math.min(1,v)*(1-dim*.75)})`})}
// HOOK
{const P=phoneC(),N=noteC(),Bl=['bla bla','☕ clink','haha'].map(s=>label(s,'pill',28)),Res=mk('<div class="card on" style="font-size:32px"><span class="dim">FOUND IN 4 s</span><br>🎵 Song name · Artist</div>'),Q=qmark(),Bt=mk('<div style="width:140px;height:140px;border-radius:70px;background:#fb7185;box-shadow:0 0 50px #fb7185"></div>');
const tp=W('hook','plays'),tt=W('hook','tap'),tk=W('hook','know'),th=W('hook','how');cue(tp,'shimmer');cue(tt,'pop');cue(tk,'ding');cue(th,'whoosh');
SCN('hook',(t,o)=>{cplace(N,t,200+Math.sin(t*2)*30,700,{op:o,s:.9,popT:tp-.2,r:Math.sin(t*3)*10});Bl.forEach((b,i)=>place(b,[760,860,680][i],[480,680,820][i]+Math.sin(t*2+i)*10,pop(t,S0('hook')+i*.3),o));cplace(P,t,540,1300,{op:o,s:1.6,popT:S0('hook')-.2,mood:t>tk?'joy':'happy'});place(Bt,540,1130,1+.15*win(t,tt,tt+.4,.15),o*p(t,tt-.3,tt));place(Res,540,420,pop(t,tk),o);kk(t,880,1490,{op:o,s:.55,mood:t>th?'o':'happy',jumpT:th})})}
// LISTEN
{const M=micC(),Wv=mk('<svg width="860" height="260"><path id="lw" fill="none" stroke="#fb7185" stroke-width="6"/></svg>'),Tm=label('recording · <span class="mono" id="lt"></span>','tok',34),Ns=label('noise and all 🗣️');
const tr=W('listen','records'),tn=W('listen','noise');cue(tr,'beep');cue(tn,'scramble');
SCN('listen',(t,o)=>{cplace(M,t,540,1350,{op:o,s:1.1,popT:S0('listen')-.3,mood:'grin'});let d='';const L=Math.min(860,(t-tr)*300);for(let x=0;x<=L;x+=5){const y=130-(50*Math.sin(x*.07)+30*Math.sin(x*.21)+20*(Math.sin(x*1.3+t*20)))*(.6+.4*Math.sin(x*.01));d+=(x?'L':'M')+x+' '+y.toFixed(0)}Wv.querySelector('#lw').setAttribute('d',d);place(Wv,540,750,1,o*(t>tr?1:0));$('lt').textContent=Math.min(5,Math.max(0,t-tr)).toFixed(1)+' s';place(Tm,540,420,pop(t,tr),o);place(Ns,540,980,pop(t,tn),o)})}
// SPEC
{const S=specEl(),Ax=label('time →','pill',26),Ay=label('frequency ↑','pill',26),L=label('spectrogram','tok',38);
const tt=W('spec','turns'),ts=W('spec','spectrogram'),tm=W('spec','map');cue(tt,'scramble');cue(ts,'pop');
SCN('spec',(t,o)=>{paintSpec(S,t,tt,0);place(S,540,820,1,o);place(Ax,860,1140,pop(t,tm),o);place(Ay,200,500,pop(t,tm),o);place(L,540,380,pop(t,ts),o);kk(t,170,1490,{op:o,s:.55,mood:'o'})})}
// PEAKS
{const S=specEl(),St=PK.map(()=>starC()),L=label('strongest peaks only ✨','tok',34),Ch=label('chatter ignored 🙉');
const tk=W('peaks','keeps'),ts=W('peaks','stars'),tc=W('peaks','chatter');cue(ts,'shimmer');cue(tc,'down');
SCN('peaks',(t,o)=>{paintSpec(S,t,S0('peaks')-5,p(t,tk,ts));place(S,540,820,1,o);PK.forEach(([i,j],k)=>cplace(St[k],t,540-GX*18+i*36+18,820-GY*18+(GY-1-j)*36+18+40,{op:o,s:.6,popT:ts-.4+k*.08,bob:2}));place(L,540,380,pop(t,tk),o);place(Ch,540,1260,pop(t,tc),o)})}
// HASH
{const St=PK.map(()=>starC()),pr=[[0,1],[2,3],[4,5],[6,7]],E=pr.map(([a,b])=>edge([[0,0],[0,0]])),H=label('<span class="mono">620 Hz + 880 Hz + 0.3 s → #A91F</span>','tok',28),Fp=mk('<div class="card on mono" style="font-size:30px">#A91F #3C07 #F2B8 #77D1 …</div>');
const pos=k=>{const [i,j]=PK[k];return[540-GX*18+i*36+18,820-GY*18+(GY-1-j)*36+18]};
const tp=W('hash','pairs'),tg=W('hash','gap'),th=W('hash','hashes'),tf=W('hash','fingerprint');cue(tp,'tick');cue(th,'scramble');cue(tf,'ding');
SCN('hash',(t,o)=>{PK.forEach((_,k)=>{const [x,y]=pos(k);cplace(St[k],t,x,y+40,{op:o,s:.6,bob:2})});pr.forEach(([a,b],k)=>{E[k].pts=[pos(a),pos(b)];E[k].tot=Math.hypot(pos(a)[0]-pos(b)[0],pos(a)[1]-pos(b)[1]);drawEdge(E[k],t,tp+k*.25,o,true)});place(H,540,380,pop(t,tg),o);place(Fp,540,1250,pop(t,tf),o)})}
// MATCH
{const D=dbC(),Mg=mk('<div style="font-size:120px">🔍</div>'),Hs=Array.from({length:12},(_,i)=>label(['#A91F','#3C07','#F2B8','#77D1','#90AA','#1B2C'][i%6],'pill',24)),L=label('millions of songs, fingerprinted','tok',32);
const ts=W('match','searched'),td=W('match','database');cue(ts,'whoosh');cue(td,'pop');
SCN('match',(t,o)=>{cplace(D,t,540,1250,{op:o,s:1.4,popT:td-.4,mood:t>ts+1?'grin':'happy'});place(Mg,540+Math.sin(t*3)*200,850+Math.cos(t*2.3)*60,pop(t,ts),o);Hs.forEach((h,i)=>{const u=((t-ts)*.5+i/12)%1;place(h,540+Math.cos(i*2.1)*360*(1-u),500+u*450,1,o*(t>ts?1-u:0))});place(L,540,380,pop(t,td),o)})}
// ALIGN
{const Gr=mk('<div style="width:840px;height:520px;border-left:4px solid rgba(255,255,255,.4);border-bottom:4px solid rgba(255,255,255,.4)"></div>'),Dots=Array.from({length:30},(_,k)=>mk(`<div style="width:22px;height:22px;border-radius:11px;background:${k<12?'#fb7185':'rgba(255,255,255,.45)'}"></div>`)),DP=Dots.map((_,k)=>k<12?[640,1150-k*38]:[180+rnd()*740,700+rnd()*440]),W1=mk('<div class="card on" style="font-size:34px">🎵 Song name · Artist ✓</div>'),N=noteC(),Ax=label('time offset →','pill',26);
const tl=W('align','line'),tw=W('align','wins'),ta=W('align','answer');cue(tl,'scramble');cue(tw,'ding');cue(ta,'shimmer');
SCN('align',(t,o)=>{place(Gr,540,920,1,o);Dots.forEach((d,k)=>place(d,DP[k][0],DP[k][1],pop(t,tl-.5+k*.04)*(k<12&&t>tw?1.3:1),o*(k>=12&&t>tw?.4:1)));place(Ax,800,1230,1,o);place(W1,540,450,pop(t,tw),o);cplace(N,t,880,640,{op:o,s:.7,popT:ta,jumpT:ta+.2});kk(t,170,1490,{op:o,s:.55,mood:t>tw?'grin':'happy',jumpT:tw})})}
charOutro([[micC(),.6],[starC(),1.2],[dbC(),.55],[noteC(),.75]],'Music,','as a fingerprint.');
