const faceC=()=>char(260,300,({blink,mood='happy',look=[0,0]})=>{const g=gid();return `<defs>${grad(g,'#ffe4cc','#e0a77a')}</defs><ellipse cx="130" cy="160" rx="115" ry="135" fill="url(#${g})"/><path d="M20 120 Q40 10 130 18 Q225 10 240 120 Q200 60 130 70 Q60 60 20 120Z" fill="#3b2314"/><path d="M130 150 Q118 190 130 200" stroke="#c98a5f" stroke-width="6" fill="none" stroke-linecap="round"/>${face(130,140,1.1,{blink,mood,look,gap:26})}`});
const phoneC=()=>buddy('tall','#4b5563','#111827',`<rect x="80" y="8" width="40" height="10" rx="5" fill="#000"/>`,80,.9),chipC=()=>buddy('rect','#475569','#0f172a','',95,.9),lockC=()=>buddy('rect','#fbcfe8','#db2777',`<path d="M70 30V10a30 30 0 0160 0v20" stroke="#fbcfe8" stroke-width="14" fill="none" transform="translate(0 -6)"/>`,110,.8),camC=()=>buddy('circle','#475569','#0f172a',`<circle cx="100" cy="100" r="50" fill="#1e1b4b" stroke="#f9a8d4" stroke-width="8"/>`,100,.7),projC=()=>buddy('rect','#fce7f3','#be185d','',95,.9);
const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
// dot field helper
const DOTS=[];for(let j=0;j<14;j++)for(let i=0;i<12;i++)DOTS.push([i,j]);const dotEls=()=>DOTS.map(()=>mk('<div style="width:12px;height:12px;border-radius:6px;background:#f9a8d4;box-shadow:0 0 8px #f9a8d4"></div>'));
function drawDots(D,t,o,cx,cy,t0,warp){D.forEach((d,k)=>{const [i,j]=DOTS[k];let x=(i-5.5)*26,y=(j-6.5)*26;if(warp){const r=Math.hypot(x/120,y/140);const b=Math.max(0,1-r*r);x*=1+.25*b*warp;y*=1+.25*b*warp;x+=Math.sin(j*1.3)*4*warp}place(d,cx+x,cy+y,1,o*p(t,t0+k*.004,t0+k*.004+.2))})}
// HOOK
{const F=faceC(),P=phoneC(),Dk=mk('<div style="width:1080px;height:1920px;background:#000"></div>'),Q=qmark(),U=mk('<div style="font-size:90px">🔓</div>'),Mo=mk('<div style="font-size:90px">🌙</div>');
const tg=W('hook','glance'),tu=W('hook','unlocks'),th=W('hook','how');cue(tg,'whoosh');cue(tu,'unlock');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(Dk,540,960,1,o*.45);place(Mo,880,330,1,o);cplace(F,t,330,1000,{op:o,popT:S0('hook')-.3,look:[1,0],mood:t>tu?'joy':'happy'});cplace(P,t,800,1000,{op:o,s:1.2,popT:S0('hook'),mood:t>tu?'joy':'flat'});place(U,800,600,pop(t,tu),o);kk(t,540,1480,{op:o,s:.6,mood:t>th?'o':'happy',jumpT:th});place(Q,700,1250,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// DOTS
{const F=faceC(),Pr=projC(),D=dotEls(),e=edge([[860,520],[620,820]]),L=label('30,000+ infrared dots','tok',36),Inv=label('invisible to your eyes');
const tp=W('dots','projector'),ts=W('dots','shoots'),ti=W('dots','invisible');cue(tp,'pop');cue(ts,'scramble');cue(ti,'shimmer');
SCN('dots',(t,o)=>{cplace(F,t,440,1130,{op:o,s:1.4,mood:'happy',look:[1,-1]});cplace(Pr,t,860,560,{op:o,popT:tp,s:.7,jumpT:ts});drawEdge(e,t,ts,o,t>ts);drawDots(D,t,o,440,960,ts,0);place(L,540,360,pop(t,ts+.5),o);place(Inv,540,1420,pop(t,ti),o)})}
// IR
{const F=faceC(),Cm=camC(),D=dotEls(),L=label('dots shift on nose, cheeks, eyes'),Dk=label('🌙 infrared works in the dark','tok',32);
const tr=W('ir','reads'),tsh=W('ir','shift'),td=W('ir','dark');cue(tr,'beep');cue(tsh,'whoosh');cue(td,'ding');
SCN('ir',(t,o)=>{cplace(F,t,440,1130,{op:o,s:1.4,look:[1,-1]});drawDots(D,t,o,440,960,S0('ir')-1,eio(p(t,tsh,tsh+.8)));cplace(Cm,t,860,560,{op:o,popT:tr-.2,s:.7,mood:t>tr?'grin':'happy'});place(L,540,360,pop(t,tsh),o);place(Dk,540,1420,pop(t,td),o)})}
// MAP
{const M=mk(`<svg width="520" height="620" viewBox="0 0 520 620">${Array.from({length:12},(_,i)=>`<ellipse cx="${260+Math.sin(i*.6)*8}" cy="${310-i*6}" rx="${230-i*18}" ry="${290-i*20}" fill="none" stroke="hsl(${330-i*14},85%,${55+i*2}%)" stroke-width="5"/>`).join('')}<ellipse cx="260" cy="300" rx="22" ry="40" fill="#f9a8d4"/></svg>`),L=label('3D depth map','tok',38),Ph=mk('<div class="card" style="font-size:30px">not a flat photo ✕ 🖼️</div>');
const tb=W('map','builds'),tdp=W('map','depth'),tf=W('map','flat');cue(tb,'scramble');cue(tdp,'ding');cue(tf,'tick');
SCN('map',(t,o)=>{place(M,540,820,pop(t,tb),o,0);M.style.transform+=` scaleX(${.8+.2*Math.cos(t*1.5)})`;place(L,540,360,pop(t,tdp),o);place(Ph,540,1300,pop(t,tf),o);kk(t,170,1480,{op:o,s:.55,mood:'o'})})}
// MATH
{const Br=buddy('circle','#fbcfe8','#db2777','',95,.9),V1=mk('<div class="card mono" style="font-size:28px">now&nbsp;&nbsp; [0.12, −0.83, 0.44, …]</div>'),V2=mk('<div class="card mono on" style="font-size:28px">saved [0.11, −0.81, 0.46, …]</div>'),Lk=lockC(),Ok=label('✓ match','tok',40),Sc=label('secure chip');
const tn=W('math','neural'),tnum=W('math','numbers'),tc=W('math','compares'),ts=W('math','secure');cue(tn,'scramble');cue(tnum,'tick');cue(tc,'beep');cue(ts,'lock');
SCN('math',(t,o)=>{cplace(Br,t,540,560,{op:o,popT:tn-.2,s:.9,mood:t>tc?'grin':'happy',jumpT:tnum});place(V1,540,700,pop(t,tnum),o);place(V2,540,830,pop(t,tc),o);cplace(Lk,t,540,1260,{op:o,popT:ts-.2,s:.9});place(Sc,540,1320,pop(t,ts),o);place(Ok,840,980,pop(t,ts+.6),o)})}
// SPOOF
{const Pp=mk('<div style="width:300px;height:380px;background:#f5f5f4;padding:20px;border-radius:8px;transform:rotate(-4deg)"><div style="width:100%;height:100%;background:radial-gradient(circle at 50% 45%,#e0a77a 40%,#3b2314 41%,#3b2314 48%,#cbd5e1 49%)"></div></div>'),D=dotEls(),X=mk('<div style="font-size:160px;font-weight:900;color:#f87171">✕</div>'),Fl=label('flat → fail','tok',38),St=mk('<div class="card on" style="font-size:32px;text-align:center"><span class="dim">STRANGER MATCH (APPLE)</span><br>≈ 1 in <span class="acc">1,000,000</span></div>');
const tp=W('spoof','printed'),tf=W('spoof','fails'),ta=W('spoof','apple');cue(tp,'pop');cue(tf,'lock');cue(ta,'ding');
SCN('spoof',(t,o)=>{place(Pp,540,760,pop(t,tp-.3),o);drawDots(D,t,o,540,760,tp,0);place(X,540,760,pop(t,tf),o);place(Fl,540,1030,pop(t,tf),o);place(St,540,1300,pop(t,ta),o);kk(t,900,1480,{op:o,s:.55,mood:t>tf?'grin':'o'})})}
// BASIC
{const P=phoneC(),Cm=label('📷 front camera only'),D2=label('flat 2D match'),E=mk('<div class="card" style="font-size:30px">easier to fool · needs light ☀️</div>');
const tf=W('basic','front'),t2=W('basic','2d'),te=W('basic','easier');cue(tf,'pop');cue(t2,'tick');cue(te,'down');
SCN('basic',(t,o)=>{cplace(P,t,540,1100,{op:o,s:1.6,popT:S0('basic')-.3,mood:t>te?'worry':'happy'});place(Cm,540,380,pop(t,tf),o);place(D2,540,500,pop(t,t2),o);place(E,540,1300,pop(t,te),o);kk(t,170,1480,{op:o,s:.55,mood:'flat'})})}
charOutro([[projC(),.65],[camC(),.65],[faceC(),.55],[lockC(),.65]],'Your face,','as a key.');
