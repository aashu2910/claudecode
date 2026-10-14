const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const germ=(c='#f87171')=>mk(`<svg width="140" height="140" viewBox="0 0 140 140">${Array.from({length:8},(_,i)=>{const a=i*Math.PI/4;return `<line x1="70" y1="70" x2="${70+62*Math.cos(a)}" y2="${70+62*Math.sin(a)}" stroke="${c}" stroke-width="8"/><circle cx="${70+62*Math.cos(a)}" cy="${70+62*Math.sin(a)}" r="9" fill="${c}"/>`}).join('')}<circle cx="70" cy="70" r="40" fill="${c}"/></svg>`);
const cellC=(c1,c2)=>buddy('circle',c1,c2,'',95,.8);
const ab=()=>mk('<svg width="70" height="80" viewBox="0 0 70 80"><path d="M35 78 V40 L10 10 M35 40 L60 10" stroke="#34d399" stroke-width="10" stroke-linecap="round" fill="none"/></svg>');
// HOOK
{const S=mk('<div style="font-size:150px">💉</div>'),Y=label('today','pill',32),L=label('protected years later 🛡️','tok',34),Q=qmark();
const tj=W('hook','jab'),ty=W('hook','years'),tr=W('hook','remember');cue(tj,'pop');cue(ty,'shimmer');cue(tr,'whoosh');
SCN('hook',(t,o)=>{place(S,540,620,pop(t,tj),o,-30);place(Y,540,820,pop(t,tj),o);place(L,540,980,pop(t,ty),o);kk(t,540,1450,{op:o,s:.65,mood:t>tr?'o':'happy',jumpT:tr});place(Q,860,1250,pop(t,tr),o*p(t,tr,tr+.1),Math.sin(t*3)*8)})}
// ANTIGEN
{const G=[germ('#9ca3af'),germ('#9ca3af'),mk('<div style="font-size:90px">📜</div>')],L=['weakened / killed germ','a piece of it','instructions (e.g. mRNA)'].map(s=>label(s,'pill',28)),T=label('a harmless preview','tok',34);
const ts=W('antigen','harmless'),tw=W('antigen','weakened'),tp=W('antigen','piece'),ti=W('antigen','instructions');[tw,tp,ti].forEach(x=>cue(x,'pop'));
SCN('antigen',(t,o)=>{place(T,540,400,pop(t,ts),o);[tw,tp,ti].forEach((x,i)=>{place(G[i],200+i*340,760,pop(t,x)*(i==1?.6:1),o);place(L[i],200+i*340,920,pop(t,x),o)});kk(t,170,1490,{op:o,s:.5})})}
// DETECT
{const C=cellC('#ecfccb','#65a30d'),G=germ('#9ca3af'),A=label('🚨 alarm!','tok',38),Ag=label('antigen = unfamiliar shape','pill',30);
const ts=W('detect','spot'),ta=W('detect','antigen'),tal=W('detect','alarm');cue(ts,'beep');cue(tal,'shimmer');
SCN('detect',(t,o)=>{place(G,760,800,1,o,t*30);cplace(C,t,340,920,{op:o,s:1.2,popT:S0('detect')-.3,mood:t>tal?'o':'happy',look:[1,0],jumpT:tal});place(Ag,760,1000,pop(t,ta),o);place(A,540,420,pop(t,tal),o)})}
// ANTIBODY
{const B=cellC('#dbeafe','#3b82f6'),G=germ('#9ca3af'),Ab=Array.from({length:8},()=>ab()),L=label('Y-shaped antibodies lock on','tok',32);
const tb=W('antibody','b'),tm=W('antibody','making'),tl=W('antibody','lock');cue(tm,'scramble');cue(tl,'lock');
SCN('antibody',(t,o)=>{cplace(B,t,250,1000,{op:o,s:1,popT:tb-.2,mood:'grin'});place(G,780,760,1,o,t*20);Ab.forEach((a,i)=>{const u=eio(p(t,tm+i*.15,tl+i*.1));const ang=i*Math.PI/4;place(a,250+(780+Math.cos(ang)*110-250)*u,880+(760+Math.sin(ang)*110-880)*u,1,o*(t>tm+i*.15?1:0),u*(ang*180/Math.PI+90))});place(L,540,400,pop(t,tl),o)})}
// TCELLS
{const T1=cellC('#fae8ff','#c026d3'),T2=cellC('#fee2e2','#dc2626'),Inf=cellC('#e5e7eb','#6b7280'),L=[label('helper T: coordinate','pill',28),label('killer T: destroy infected cells','pill',28)];
const tj=W('tcells','t'),tc=W('tcells','coordinate'),td=W('tcells','destroy');cue(tj,'pop');cue(td,'lock');
SCN('tcells',(t,o)=>{cplace(T1,t,250,800,{op:o,s:.9,popT:tj,mood:'grin'});place(L[0],250,880,pop(t,tc),o);cplace(T2,t,700,1150,{op:o,s:.9,popT:td-.4,mood:'grin',jumpT:td});cplace(Inf,t,880,1150,{op:o*(1-p(t,td+.5,td+1)),s:.7,mood:'worry'});place(L[1],700,1230,pop(t,td),o)})}
// MEMORY
{const M=cellC('#d1fae5','#059669'),Cal=label('📅 often for years','pill',30),G=germ(),R=[label('1st time: slow','pill',28),label('next time: fast + strong ⚡','tok',30)];
const ts=W('memory','stay'),tr=W('memory','real'),tf=W('memory','faster');cue(ts,'shimmer');cue(tr,'beep');cue(tf,'up');
SCN('memory',(t,o)=>{cplace(M,t,540,820,{op:o,s:1.2,popT:S0('memory')-.3,mood:'grin',jumpT:tf});place(Cal,540,920,pop(t,ts),o);place(G,860,600,pop(t,tr),o*(1-p(t,tf+.5,tf+1)),t*30);place(R[0],540,1100,pop(t,tf),o);place(R[1],540,1210,pop(t,tf+.3),o)})}
// SIDE
{const A=label('💪 sore arm · 🤒 mild fever = training','pill',30),P=Array.from({length:12},(_,i)=>mk(`<div style="width:60px;height:60px;border-radius:30px;background:${i%4?'#34d399':'#9ca3af'}"></div>`)),G=germ(),L=label('many vaccinated → germ struggles to spread','tok',28);
const ts=W('side','sore'),tm=W('side','many');cue(ts,'tick');cue(tm,'shimmer');
SCN('side',(t,o)=>{place(A,540,420,pop(t,ts),o);P.forEach((x,i)=>place(x,240+(i%4)*200,780+Math.floor(i/4)*160,pop(t,tm+i*.04),o));place(G,540+Math.sin(t*2)*300,940,.5,o*p(t,tm,tm+.3),t*40);place(L,540,1300,pop(t,tm),o)})}
charOutro([[cellC('#dbeafe','#3b82f6'),.55],[cellC('#d1fae5','#059669'),.55]],"Your body's",'training drill.');
