const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const cidr=()=>node('db','UIDAI CIDR');
// HOOK
{const S=node('bank','Bank / SIM shop'),P=phoneC(),O=label('OTP: 4 8 2 9 1 3','tok',36),V=label('✓ verified','pill',38),Q=qmark();
const ta=W('hook','asks'),to=W('hook','otp'),tv=W('hook','verified'),tw=W('hook','what');cue(to,'beep');cue(tv,'ding');cue(tw,'whoosh');
SCN('hook',(t,o)=>{place(S,280,560,pop(t,ta-.3),o);cplace(P,t,800,820,{op:o,s:1.1,mood:t>tv?'joy':'happy'});place(O,780,420,pop(t,to),o);place(V,280,800,pop(t,tv),o);kk(t,880,1490,{op:o,s:.5,mood:t>tw?'o':'happy',jumpT:tw});place(Q,180,1300,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// REQUEST
{const S=node('bank','Registered service'),C=cidr(),e=edge([[280,800],[800,800]]),T=label('XXXX XXXX 1234','tok',30);
const tr=W('request','registered'),ts=W('request','sends'),tc=W('request','central');cue(tr,'pop');cue(ts,'whoosh');cue(tc,'pop');
SCN('request',(t,o)=>{place(S,280,800,pop(t,tr-.2),o);place(C,800,800,pop(t,tc-.3),o);glow(C,t>tc);drawEdge(e,t,ts,o,true);place(T,280+520*eio(p(t,ts,tc+.3)),660,pop(t,ts),o);kk(t,170,1490,{op:o,s:.5})})}
// OTP
{const C=cidr(),P=phoneC(),e=edge([[540,560],[540,820]]),O=label('OTP · valid for a few minutes','tok',30),B=[label('👆 fingerprint','pill',30),label('👁️ iris','pill',30)];
const to=W('otp','one'),tl=W('otp','linked'),tf=W('otp','fingerprint'),ti=W('otp','iris');cue(to,'beep');cue(tf,'tick');cue(ti,'tick');
SCN('otp',(t,o)=>{place(C,540,460,1,o);drawEdge(e,t,to,o,true);cplace(P,t,540,1120,{op:o,s:1,mood:'joy'});place(O,540,1200,pop(t,tl),o);place(B[0],300,1350,pop(t,tf),o);place(B[1],780,1350,pop(t,ti),o)})}
// MATCH
{const C=cidr(),A=mk('<div class="card mono" style="font-size:32px">entered: 482913<br>expected: 482913 <span class="acc">✓</span></div>'),Y=label('reply: YES ✓ / NO','tok',36);
const tc=W('match','checks'),ty=W('match','yes');cue(tc,'scramble');cue(ty,'ding');
SCN('match',(t,o)=>{place(C,540,420,1,o);glow(C,t>tc);place(A,540,700,pop(t,tc),o);place(Y,540,950,pop(t,ty),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// EKYC
{const Cd=mk('<div class="card" style="font-size:30px;width:600px;line-height:1.6"><span class="dim">eKYC RESPONSE</span><br>👤 Name · 🏠 Address<br>🎂 Date of birth · 📷 Photo<br><span class="acc">🔏 digitally signed</span></div>'),Cs=label('🙋 with your consent','pill',32);
const tc=W('ekyc','consent'),ts=W('ekyc','signed');cue(tc,'pop');cue(ts,'lock');
SCN('ekyc',(t,o)=>{place(Cs,540,420,pop(t,tc),o);place(Cd,540,760,pop(t,tc+.4),o);kk(t,170,1490,{op:o,s:.5,mood:t>ts?'grin':'happy'})})}
// VID
{const R=mk('<div class="card mono" style="font-size:36px">Aadhaar: XXXX XXXX 1234</div>'),V=mk('<div class="card mono on" style="font-size:34px">VID: 9183 4472 0019 5521</div>'),L=label('share the VID, not the real number','tok',30);
const tv=W('vid','virtual'),ts=W('vid','share');cue(tv,'pop');cue(ts,'ding');
SCN('vid',(t,o)=>{place(R,540,560,1,o*(1-.6*p(t,tv,tv+.5)));place(V,540,760,pop(t,tv),o);place(L,540,960,pop(t,ts),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// SAFE
{const P=phoneC(),C=bubble('Sir, tell me your OTP… 📞',30),X=mk('<div style="font-size:140px;font-weight:900;color:#f87171">✕</div>'),L=label('only YOU start the process','tok',34);
const tn=W('safe','never'),tc=W('safe','calls'),tr=W('safe','real');cue(tn,'lock');cue(tr,'ding');
SCN('safe',(t,o)=>{place(C,540,460,pop(t,tc-.5),o);place(X,540,470,pop(t,tn+.6),o);cplace(P,t,540,1150,{op:o,s:1.2,mood:'flat'});place(L,540,1300,pop(t,tr),o)})}
charOutro([[phoneC(),.6],[buddy('rect','#ffedd5','#fb923c','',95,.8),.55]],'Verified','in seconds.');
