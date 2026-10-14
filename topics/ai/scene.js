const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const tk=(s,c)=>mk(`<div style="padding:12px 20px;border-radius:14px;background:${c||'rgba(232,121,249,.2)'};border:3px solid #e879f9;font-weight:800;font-size:34px">${s}</div>`);
// HOOK
{const Q1=mk('<div class="card" style="font-size:32px;width:720px">🙋 Why is the sky blue?</div>'),A1=mk('<div class="card on" style="font-size:30px;width:720px" id="ha"></div>'),Q=qmark(),Ans='Sunlight scatters off air molecules, and blue light scatters the most…';
const ta=W('hook','ask'),tw=W('hook','writes'),th=W('hook','what');cue(ta,'pop');cue(tw,'scramble');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(Q1,540,440,pop(t,ta),o);A1.firstElementChild.textContent='🤖 '+Ans.slice(0,Math.max(0,Math.floor((t-tw)*22)));place(A1,540,700,1,o*p(t,tw,tw+.2));kk(t,880,1490,{op:o,s:.55,mood:t>th?'o':'happy',jumpT:th});place(Q,180,1300,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// TOKENS
{const Ws=['Why',' is',' the',' sky',' bl','ue','?'],T=Ws.map(w=>tk(w)),N=Ws.map((_,i)=>label(String([10445,382,279,13180,1529,361,30][i]),'pill',24)),L=label('tokens → numbers','tok',34);
const ts=W('tokens','split'),tn=W('tokens','numbers');cue(ts,'scramble');cue(tn,'tick');
SCN('tokens',(t,o)=>{const sp=eio(p(t,ts,ts+.6));T.forEach((x,i)=>place(x,540+(i-3)*(100+40*sp),640,pop(t,S0('tokens')-.3+i*.05),o));N.forEach((n,i)=>place(n,540+(i-3)*140,800,pop(t,tn+i*.08),o));place(L,540,420,pop(t,ts),o);kk(t,170,1490,{op:o,s:.5})})}
// TRAIN
{const Bk=Array.from({length:10},()=>mk('<div style="font-size:70px">📚</div>')),S=mk('<div class="card" style="font-size:32px">The cat sat on the <span class="acc">___</span> → <span class="acc" id="tg"></span></div>'),C=label('repeat × billions','tok',34);
const th=W('train','huge'),tp=W('train','predict'),tb=W('train','billions');cue(th,'scramble');cue(tp,'tick');cue(tb,'ding');
SCN('train',(t,o)=>{Bk.forEach((b,i)=>place(b,140+(i%5)*200,460+Math.floor(i/5)*130,pop(t,th+i*.06),o));$('tg').textContent=t>tp+.6?'mat ✓':'?';place(S,540,860,pop(t,tp),o);place(C,540,1060,pop(t,tb),o);kk(t,170,1490,{op:o,s:.5,mood:'o'})})}
// NETWORK
{const L=[4,6,6,4],X=[200,420,660,880],Nd=[],Ed=[];L.forEach((n,li)=>{for(let k=0;k<n;k++)Nd.push([X[li],820+(k-(n-1)/2)*110,li])});for(let a=0;a<Nd.length;a++)for(let b=0;b<Nd.length;b++)if(Nd[b][2]==Nd[a][2]+1&&Math.random()<.5)Ed.push(edge([Nd[a].slice(0,2),Nd[b].slice(0,2)]));const Ns=Nd.map(()=>mk('<div style="width:44px;height:44px;border-radius:22px;background:#e879f9"></div>')),Lb=label('billions of parameters','tok',34);
const tn=W('network','neural'),tp=W('network','parameters');cue(tn,'pop');cue(tp,'scramble');
SCN('network',(t,o)=>{Ed.forEach((e,i)=>drawEdge(e,t,tn+i*.01,o*.6,t>tp&&(Math.floor(t*6)+i)%5==0));Nd.forEach((n,i)=>place(Ns[i],n[0],n[1],pop(t,tn-.3+i*.03),o));place(Lb,540,400,pop(t,tp),o)})}
// NEXT
{const S=['Sunlight',' scatters',' off',' air',' molecules'],T=S.map(w=>tk(w)),P=mk('<div class="card" style="font-size:28px;width:520px"><span class="dim">NEXT TOKEN ODDS</span><br><span class="acc">off 71%</span> · from 12% · in 6%</div>'),L=label('one token at a time','tok',34);
const tp=W('next','predicts'),ta=W('next','adds'),tw=W('next','word');cue(tp,'tick');cue(ta,'pop');
SCN('next',(t,o)=>{T.forEach((x,i)=>place(x,120+[0,180,380,470,560][i]+[90,110,40,50,130][i],1000,pop(t,tp+i*.6),o));place(P,540,700,pop(t,tp),o);place(L,540,420,pop(t,tw-.4),o);kk(t,170,1490,{op:o,s:.5,mood:'grin'})})}
// TUNE
{const A=mk('<div class="card" style="width:400px;font-size:28px">answer A 👍</div>'),B=mk('<div class="card" style="width:400px;font-size:28px">answer B 👎</div>'),U=buddy('circle','#fae8ff','#e879f9','',95,.8),L=label('human feedback → more helpful, safer','tok',30);
const th=W('tune','human'),ts=W('tune','safer');cue(th,'pop');cue(ts,'ding');
SCN('tune',(t,o)=>{place(A,540,600,pop(t,th),o);place(B,540,740,pop(t,th+.3),o);cplace(U,t,540,1150,{op:o,s:.9,popT:S0('tune')-.3,mood:t>ts?'joy':'happy'});place(L,540,1300,pop(t,ts),o)})}
// WRONG
{const W1=mk('<div class="card" style="font-size:30px;width:760px">🤖 "The Eiffel Tower is in Rome." <span style="color:#f87171">✕</span></div>'),L=label('sounds right ≠ is right','tok',34),C=label('✅ double-check facts that matter','pill',32);
const tc=W('wrong','confidently'),td=W('wrong','double');cue(tc,'lock');cue(td,'ding');
SCN('wrong',(t,o)=>{place(W1,540,560,pop(t,tc-.4),o);place(L,540,760,pop(t,tc),o);place(C,540,900,pop(t,td),o);kk(t,540,1300,{op:o,s:.8,mood:t>td?'grin':'o'})})}
charOutro([[buddy('circle','#fae8ff','#e879f9','',95,.8),.55],[buddy('rect','#f5d0fe','#c026d3','',95,.8),.55]],'Patterns,','not magic.');
