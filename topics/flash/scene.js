const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const chipC=()=>buddy('rect','#fbcfe8','#be185d',`<g stroke="#9d174d" stroke-width="7">${[40,80,120,160].map(x=>`<line x1="${x}" y1="0" x2="${x}" y2="20"/><line x1="${x}" y1="190" x2="${x}" y2="210"/>`).join('')}</g>`,95,.85);
const grid=(n,id)=>mk(`<div id="${id}" style="display:grid;grid-template-columns:repeat(${n},1fr);gap:6px;width:${n*62}px">${Array(n*n).fill('<div class="c" style="height:56px;border-radius:8px;background:#3f1d2e;border:2px solid #f472b6"></div>').join('')}</div>`);
// HOOK
{const C=chipC(),S=mk('<div style="font-size:90px">📮</div>'),Ph=Array.from({length:10},()=>mk('<div style="width:80px;height:80px;border-radius:12px;background:linear-gradient(135deg,#f472b6,#60a5fa)"></div>')),Q=qmark();
const tt=W('hook','thousands'),ts=W('hook','stamp'),tw=W('hook','where');cue(tt,'scramble');cue(ts,'pop');cue(tw,'whoosh');
SCN('hook',(t,o)=>{Ph.forEach((x,i)=>{const u=eio(p(t,tt+i*.1,tt+i*.1+.8));place(x,(140+(i%5)*200)*(1-u)+540*u,(420+Math.floor(i/5)*120)*(1-u)+900*u,1-.8*u,o*(1-p(u,.9,1)))});cplace(C,t,540,1000,{op:o,s:1.1,popT:S0('hook')-.3,mood:'grin'});place(S,840,900,pop(t,ts),o);kk(t,180,1490,{op:o,s:.5,mood:t>tw?'o':'happy',jumpT:tw})})}
// CELLS
{const G=grid(8,'cg'),L=label('flash memory: billions of tiny cells','tok',30);
const tf=W('cells','flash'),tt=W('cells','trap');cue(tf,'pop');cue(tt,'shimmer');
SCN('cells',(t,o)=>{$('cg').querySelectorAll('.c').forEach((c,i)=>c.style.background=t>tt&&(i*7)%3==0?'#f472b6':'#3f1d2e');place(G,540,820,pop(t,tf-.3),o);place(L,540,400,pop(t,tf),o)})}
// BITS
{const A=mk('<div class="card mono" style="font-size:40px;text-align:center">⚡ charge → <span class="acc">1</span></div>'),B=mk('<div class="card mono" style="font-size:40px;text-align:center">○ empty → <span class="acc">0</span></div>'),Off=label('🔌 stays even when switched off','tok',32);
const to=W('bits','one'),tz=W('bits','zero'),ts=W('bits','stays');cue(to,'tick');cue(tz,'tick');cue(ts,'ding');
SCN('bits',(t,o)=>{place(A,540,600,pop(t,to),o);place(B,540,780,pop(t,tz),o);place(Off,540,1000,pop(t,ts),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// LEVELS
{const Lv=Array.from({length:8},(_,i)=>mk(`<div style="width:90px;border-radius:10px;background:#f472b6;opacity:${.2+i*.1}"></div>`)),L=[label('several bits per cell','tok',32),label('8 charge levels = 3 bits','pill',30)];
const ts=W('levels','several'),td=W('levels','different'),tm=W('levels','more');cue(ts,'pop');cue(td,'scramble');cue(tm,'ding');
SCN('levels',(t,o)=>{Lv.forEach((l,i)=>{const h=40+i*40;l.firstElementChild.style.height=h+'px';place(l,180+i*103,1050-h/2,pop(t,td+i*.08),o)});place(L[0],540,420,pop(t,ts),o);place(L[1],540,1200,pop(t,tm),o)})}
// PHOTO
{const P=mk('<div style="width:300px;height:220px;border-radius:16px;background:linear-gradient(135deg,#f472b6,#60a5fa)"></div>'),M=label('compressed → ~a few MB','tok',32),B=mk('<div class="mono acc" style="font-size:30px;width:860px;word-break:break-all;text-align:center" id="pb"></div>');
const tc=W('photo','compressed'),tm=W('photo','millions');cue(tc,'lock');cue(tm,'scramble');
SCN('photo',(t,o)=>{place(P,540,520,pop(t,S0('photo')-.3),o,0);place(M,540,720,pop(t,tc),o);let s='';for(let i=0;i<120;i++)s+=((i*7+Math.floor(t*12))%3==0)?'1':'0';B.firstElementChild.textContent=s;place(B,540,980,1,o*p(t,tm,tm+.3))})}
// CONTROLLER
{const C=chipC(),G=grid(6,'wg'),L=[label('cells wear out with use','pill',30),label('wear levelling: writes spread evenly','tok',30)];
const tw=W('controller','wear'),tc=W('controller','controller'),tl=W('controller','levelling');cue(tw,'down');cue(tc,'pop');cue(tl,'ding');
SCN('controller',(t,o)=>{cplace(C,t,540,560,{op:o,s:.8,popT:tc-.3,mood:'grin'});const k=Math.floor(t*6);$('wg').querySelectorAll('.c').forEach((c,i)=>c.style.background=t>tl&&(i+k)%7==0?'#f472b6':'#3f1d2e');place(G,540,920,1,o);place(L[0],540,380,pop(t,tw),o);place(L[1],540,1220,pop(t,tl),o)})}
// SPACE
{const S=mk('<div class="big" style="font-size:120px"><span class="acc">128</span> GB</div>'),P=label('≈ tens of thousands of photos 📸','tok',34);
const to=W('space','one'),tt=W('space','tens');cue(to,'pop');cue(tt,'ding');
SCN('space',(t,o)=>{place(S,540,620,pop(t,to),o);place(P,540,820,pop(t,tt),o);kk(t,540,1400,{op:o,s:.65,mood:'grin',jumpT:tt})})}
charOutro([[chipC(),.6],[buddy('rect','#fce7f3','#f472b6','',95,.8),.55]],'Memories','in a chip.');
