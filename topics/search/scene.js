const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const spider=()=>buddy('circle','#e0f2fe','#0284c7',`<g stroke="#0c4a6e" stroke-width="7" stroke-linecap="round">${[-1,1].map(s=>[30,60,90].map(y=>`<line x1="${100+s*70}" y1="${y+40}" x2="${100+s*110}" y2="${y+20}"/>`).join('')).join('')}</g>`,95,.8);
const bar=()=>mk('<div class="card" style="width:820px;font-size:36px;display:flex;gap:16px;align-items:center;border-radius:60px"><span>🔍</span><span id="q"></span></div>');
// HOOK
{const B=bar(),R=[0,1,2].map(i=>mk(`<div class="card" style="width:820px;font-size:28px"><span class="acc">result ${i+1}</span> · example.com</div>`)),T=label('0.5 s','tok',40),Q=qmark(),Q0='how do rainbows form?';
const tt=W('hook','type'),th=W('hook','half'),tw=W('hook','how');cue(tt,'tick');cue(th,'ding');cue(tw,'whoosh');
SCN('hook',(t,o)=>{$('q').textContent=Q0.slice(0,Math.floor(Math.max(0,t-tt)*14));place(B,540,480,pop(t,S0('hook')-.3),o);R.forEach((r,i)=>place(r,540,680+i*130,pop(t,th+i*.12),o));place(T,860,360,pop(t,th),o);kk(t,880,1490,{op:o,s:.55,mood:t>tw?'o':'happy',jumpT:tw});place(Q,180,1300,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// CRAWL
{const N=[[200,500],[540,420],[880,520],[300,860],[760,900],[540,1200],[180,1220],[900,1240]],Pg=N.map(()=>mk('<div style="width:110px;height:140px;border-radius:12px;background:#e2e8f0;border:4px solid #38bdf8"></div>')),L=[[0,1],[1,2],[1,3],[2,4],[3,5],[4,5],[5,6],[5,7]].map(([a,b])=>edge([N[a],N[b]])),S=spider(),Lb=label('crawlers follow links 🕷️','tok',32);
const tc=W('crawl','crawlers'),tf=W('crawl','follow');cue(tc,'pop');cue(tf,'scramble');
SCN('crawl',(t,o)=>{N.forEach((n,i)=>place(Pg[i],n[0],n[1],pop(t,tc-.3+i*.18),o));L.forEach((e,i)=>drawEdge(e,t,tf+i*.25,o,true));const k=Math.min(7,Math.floor(Math.max(0,t-tf)/.5));cplace(S,t,N[k][0],N[k][1]+30,{op:o,s:.45,mood:'joy',popT:tc});place(Lb,540,360,pop(t,tc),o)})}
// INDEX
{const Bk=mk('<div style="font-size:120px">📖</div>'),Rows=[['rainbow','page 12, 87, 403…'],['light','page 3, 12, 99…'],['prism','page 12, 56…']].map(([a,b])=>mk(`<div class="card mono" style="width:760px;display:flex;justify-content:space-between;font-size:30px"><span class="acc">${a}</span><span>→ ${b}</span></div>`)),L=label('giant index','tok',36);
const tg=W('index','giant'),tb=W('index','book'),tw=W('index','word');cue(tg,'pop');cue(tw,'tick');
SCN('index',(t,o)=>{place(Bk,540,420,pop(t,tb),o);place(L,540,560,pop(t,tg),o);Rows.forEach((r,i)=>place(r,540,760+i*150,pop(t,tw+i*.3),o));kk(t,170,1490,{op:o,s:.5})})}
// UNDERSTAND
{const B=mk('<div class="card" style="width:820px;font-size:36px;border-radius:60px">🔍 <span id="uq"></span></div>'),C=['✓ spelling fixed','✓ "form" ≈ "made"','✓ context: science'].map(s=>label(s,'pill',30)),Br=node('brain','Understanding');
const tf=W('understand','fixes'),ts=W('understand','synonyms'),tc=W('understand','context');[tf,ts,tc].forEach(x=>cue(x,'tick'));
SCN('understand',(t,o)=>{$('uq').textContent=t<tf?'how do rainbws form':'how do rainbows form';place(B,540,420,1,o);place(Br,540,700,pop(t,S0('understand')),o);glow(Br,t>tf);[tf,ts,tc].forEach((x,i)=>place(C[i],540,960+i*110,pop(t,x),o))})}
// MATCH
{const I=mk('<div class="card mono" style="font-size:30px;width:700px">rainbow → <span class="acc">12, 87, 403, 1290…</span></div>'),P=Array.from({length:8},()=>mk('<div style="width:90px;height:116px;border-radius:10px;background:#e2e8f0;border:4px solid #38bdf8"></div>')),N=label('no re-reading the whole web','pill',30);
const tl=W('match','looks'),tp=W('match','pulls'),tw=W('match','without');cue(tl,'beep');cue(tp,'whoosh');
SCN('match',(t,o)=>{place(I,540,420,pop(t,tl),o);P.forEach((x,i)=>{const u=eio(p(t,tp+i*.08,tp+i*.08+.6));place(x,540+(i-3.5)*110,560+u*300,1,o*(t>tp+i*.08?1:0))});place(N,540,1150,pop(t,tw),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// RANK
{const Sg=['relevance','quality','freshness','location','usefulness'].map(s=>label(s,'pill',28)),R=[0,1,2,3].map(i=>mk(`<div class="card" style="width:640px;font-size:30px"><span class="acc">#${i+1}</span> page ${[87,12,403,1290][i]}</div>`)),L=label('hundreds of signals','tok',34);
const th=W('rank','hundreds'),tr=W('rank','relevance');cue(th,'scramble');cue(tr,'tick');
SCN('rank',(t,o)=>{place(L,540,360,pop(t,th),o);Sg.forEach((s,i)=>place(s,200+(i%3)*340,480+Math.floor(i/3)*90,pop(t,tr+i*.35),o));const u=eio(p(t,tr+1,tr+2.5));R.forEach((r,i)=>{const from=[2,0,3,1][i];place(r,540,780+(from*(1-u)+i*u)*130,pop(t,th),o)})})}
// SERVE
{const DC=Array.from({length:6},()=>node('server','',130)),T=label('⚡ ~0.5 seconds','tok',40),L=label('split across many machines at once','pill',30);
const td=W('serve','data'),ts=W('serve','split'),th=W('serve','half');cue(td,'pop');cue(ts,'scramble');cue(th,'ding');
SCN('serve',(t,o)=>{DC.forEach((d,i)=>{place(d,220+(i%3)*320,640+Math.floor(i/3)*240,pop(t,td+i*.1),o);glow(d,t>ts&&Math.floor(t*8+i)%3==0)});place(L,540,1100,pop(t,ts),o);place(T,540,400,pop(t,th),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
charOutro([[spider(),.6],[buddy('rect','#e0f2fe','#38bdf8','',95,.8),.55]],'A library at','your fingertips.');
