const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
// HOOK
{const A=label('नमस्ते, आप कैसे हैं?','tok',40),B=label('こんにちは、お元気ですか？','tok',40),Ar=mk('<div style="font-size:90px">⬇️</div>'),Q=qmark();
const th=W('hook','hindi'),tj=W('hook','japanese'),td=W('hook','dictionary');cue(th,'pop');cue(tj,'whoosh');cue(td,'pop');
SCN('hook',(t,o)=>{place(A,540,500,pop(t,th),o);place(Ar,540,700,p(t,tj-.3,tj),o);place(B,540,900,pop(t,tj),o);kk(t,540,1330,{op:o,s:.6,mood:t>td?'grin':'happy'});place(Q,820,1200,pop(t,td),o*p(t,td,td+.1),Math.sin(t*3)*8)})}
// OLD
{const T=mk('<div class="card" style="font-size:34px;width:600px;line-height:1.7">word → word<br>phrase → phrase<br>…millions of rows</div>'),L=label('result: clumsy, word by word','pill',30);
const tw=W('old','swapped'),tc=W('old','clumsy');cue(tw,'scramble');cue(tc,'beep');
SCN('old',(t,o)=>{place(T,540,700,pop(t,tw),o);place(L,540,1020,pop(t,tc),o)})}
// TOKENS
{const toks=['How','are','you','?'],Tk=toks.map(s=>label(s,'tok',38)),N=toks.map((s,i)=>label('['+[0.2,0.7,0.1,0.9][i]+', …]','pill',24)),L=label('neural network','pill',30);
const tn=W('tokens','neural'),ts=W('tokens','split'),tu=W('tokens','numbers');cue(tn,'pop');cue(ts,'whoosh');cue(tu,'scramble');
SCN('tokens',(t,o)=>{place(L,540,420,pop(t,tn),o);Tk.forEach((k,i)=>place(k,240+i*200,760,pop(t,ts+i*.15),o));N.forEach((k,i)=>place(k,240+i*200,920,pop(t,tu+i*.15),o))})}
// MEANING
{const toks=['How','are','you','?'],Tk=toks.map(s=>label(s,'tok',38)),L=label('attention: every word ↔ every word','pill',28);
const tr=W('meaning','reads'),ta=W('meaning','attention');cue(tr,'pop');cue(ta,'ding');
const sv=mk('<svg width="900" height="300"><g id="att" stroke="#3b82f6" stroke-width="4" fill="none"></g></svg>');
SCN('meaning',(t,o)=>{Tk.forEach((k,i)=>place(k,240+i*200,700,pop(t,tr),o));let g='';if(t>ta)for(let i=0;i<4;i++)for(let j=i+1;j<4;j++){const x1=90+i*200,x2=90+j*200;g+=`<path d="M${x1} 20 Q${(x1+x2)/2} ${120+(j-i)*50} ${x2} 20" opacity="${p(t,ta+(i+j)*.1,ta+(i+j)*.1+.3)}"/>`}$('att').innerHTML=g;place(sv,540,870,1,o);place(L,540,1150,pop(t,ta+.5),o)})}
// GENERATE
{const out=['こんにちは','、','お元気','ですか','？'],O=out.map(s=>label(s,'tok',40)),L=label('pick most likely next piece','pill',30);
const tw=W('generate','writes'),tm=W('generate','likely');cue(tw,'tick');cue(tm,'ding');
SCN('generate',(t,o)=>{O.forEach((k,i)=>place(k,190+i*175,760,pop(t,tw+i*.45),o));place(L,540,1000,pop(t,tm),o)})}
// TRAIN
{const B=mk('<div style="font-size:160px">📚</div>'),L=label('millions of human-translated sentences','tok',28);
const tm=W('train','millions');cue(tm,'pop');
SCN('train',(t,o)=>{place(B,540,700,pop(t,tm-.3),o,Math.sin(t*2)*4);place(L,540,960,pop(t,tm),o);kk(t,540,1350,{op:o,s:.5,mood:'happy'})})}
// LIMITS
{const I=[label('🗣️ idioms','pill',30),label('😎 slang','pill',30),label('🌍 rare languages','pill',30)],L=label('double-check important stuff','tok',30);
const ti=W('limits','idioms'),ts=W('limits','slang'),tr=W('limits','rare'),td=W('limits','double');[ti,ts,tr].forEach(x=>cue(x,'pop'));cue(td,'ding');
SCN('limits',(t,o)=>{[ti,ts,tr].forEach((x,i)=>place(I[i],540,560+i*140,pop(t,x),o));place(L,540,1080,pop(t,td),o)})}
charOutro([[K,.6],[buddy('circle','#dbeafe','#3b82f6','',95,.8),.5]],'Split, understand,','generate.');
