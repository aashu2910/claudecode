const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9);
const key=(c)=>mk(`<div style="font-size:80px;filter:drop-shadow(0 0 10px ${c})">🔑</div>`);
const msg=(id)=>mk(`<div class="card mono" style="font-size:30px" id="${id}"></div>`);
const scr=s=>s.split('').map((ch,i)=>ch==' '?' ':'#$%&@!*?'[(i*7+Math.floor(Date.now()/100))%8]).join('');
// HOOK
{const B=mk('<div class="card on" style="font-size:30px">🔒 Messages are end-to-end encrypted</div>'),Q=qmark(),P=phoneC();
const te=W('hook','end'),tn=W('hook','not'),th=W('hook','how');cue(te,'lock');cue(th,'whoosh');
SCN('hook',(t,o)=>{place(B,540,500,pop(t,te),o);cplace(P,t,540,1200,{op:o,s:1.5,popT:S0('hook')-.3,mood:'grin'});place(Q,860,850,pop(t,th),o*p(t,th,th+.1),Math.sin(t*3)*8)})}
// KEYS
{const P=phoneC(),Pu=key('#2dd4bf'),Pr=key('#f87171'),L=[label('public key · share it','tok',30),label('private key · never leaves','pill',30)];
const tp=W('keys','public'),tv=W('keys','private');cue(tp,'pop');cue(tv,'lock');
SCN('keys',(t,o)=>{cplace(P,t,540,1250,{op:o,s:1.1,mood:'grin'});place(Pu,300,640,pop(t,tp),o);place(L[0],300,780,pop(t,tp),o);place(Pr,780,640,pop(t,tv),o);place(L[1],780,780,pop(t,tv),o)})}
// LOCK
{const M=msg('lm'),Pu=key('#2dd4bf'),L=label("scrambled with your friend's public key",'tok',28);
const ts=W('lock','scrambles'),to=W('lock','only');cue(ts,'scramble');cue(to,'lock');
SCN('lock',(t,o)=>{const txt='See you at 7 🎉';$('lm').textContent=t>ts?txt.split('').map((c,i)=>c==' '?' ':'#$%&@!*?'[(i*7+Math.floor(t*10))%8]).join(''):txt;place(M,540,750,1,o);place(Pu,540,560,pop(t,ts-.3),o);place(L,540,960,pop(t,ts),o)})}
// SERVER
{const S=node('server','App server'),M=msg('sm'),L=label('gibberish — even to the company','tok',30),e=edge([[200,800],[880,800]]);
const tp=W('server','passes'),tg=W('server','gibberish');cue(tp,'whoosh');cue(tg,'tick');
SCN('server',(t,o)=>{place(S,540,560,1,o);drawEdge(e,t,tp,o,true);$('sm').textContent='Xq#9!@zP$&k*';place(M,200+680*p(t,tp,tp+2),800,1,o);place(L,540,1050,pop(t,tg),o)})}
// UNLOCK
{const P=phoneC(),Pr=key('#f87171'),M=msg('um'),L=label('readable only on their phone','tok',30);
const tp=W('unlock','private'),td=W('unlock','decrypt'),ta=W('unlock','appears');cue(td,'unlock');cue(ta,'ding');
SCN('unlock',(t,o)=>{$('um').textContent=t>ta?'See you at 7 🎉':'Xq#9!@zP$&k*';place(M,540,620,1,o);place(Pr,540,460,pop(t,tp),o);cplace(P,t,540,1250,{op:o,s:1.1,mood:t>ta?'joy':'happy'});place(L,540,820,pop(t,ta),o)})}
// ROTATE
{const Ks=Array.from({length:4},()=>key('#2dd4bf')),L=label('keys keep changing → old messages stay safe','tok',28);
const tc=W('rotate','changing'),ts=W('rotate','safe');cue(tc,'scramble');cue(ts,'ding');
SCN('rotate',(t,o)=>{const k=Math.floor(Math.max(0,t-tc)*2)%4;Ks.forEach((x,i)=>place(x,260+i*190,780,i==k?1.3:.8,o*(t>tc?(i==k?1:.35):0)));place(L,540,1050,pop(t,ts),o)})}
// CAREFUL
{const R=['☁️ unencrypted cloud backups','👀 someone reading over your shoulder'].map(s=>label(s,'pill',30)),L=label('protects messages in transit','tok',30);
const tp=W('careful','protects'),tb=W('careful','backups'),ts=W('careful','shoulder');cue(tp,'lock');cue(tb,'tick');cue(ts,'tick');
SCN('careful',(t,o)=>{place(L,540,450,pop(t,tp),o);place(R[0],540,650,pop(t,tb),o);place(R[1],540,780,pop(t,ts),o);kk(t,540,1300,{op:o,s:.6,mood:'o'})})}
charOutro([[phoneC(),.6],[buddy('circle','#ccfbf1','#2dd4bf','',95,.8),.55]],'Only you two','can read it.');
