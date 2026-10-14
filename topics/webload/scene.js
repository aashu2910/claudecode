const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const bar=(id)=>mk(`<div class="card" style="width:820px;font-size:34px;border-radius:50px">🔒 <span id="${id}"></span></div>`);
const brC=()=>buddy('rect','#cffafe','#0891b2',`<rect x="10" y="20" width="180" height="30" rx="8" fill="#0e7490"/>`,110,.75);
// HOOK
{const B=bar('hu'),Pg=mk('<div style="width:700px;height:500px;border-radius:20px;background:#f8fafc;padding:30px"><div style="height:60px;background:#22d3ee;border-radius:10px"></div><div style="height:24px;background:#cbd5e1;margin:30px 0 14px;width:70%"></div><div style="height:24px;background:#cbd5e1;margin:14px 0"></div><div style="height:180px;background:#e2e8f0;border-radius:10px;margin-top:20px"></div></div>'),T=label('~1 second','tok',34);
const tt=W('hook','type'),te=W('hook','enter'),tp=W('hook','appears'),tl=W('hook','lot');cue(te,'tick');cue(tp,'ding');cue(tl,'whoosh');
SCN('hook',(t,o)=>{$('hu').textContent='example.com'.slice(0,Math.floor(Math.max(0,t-tt)*10));place(B,540,400,1,o);place(Pg,540,880,pop(t,tp),o);place(T,540,1250,pop(t,tl),o)})}
// DNS
{const N=mk('<div class="card mono" style="font-size:40px">example.com</div>'),Ip=mk('<div class="card mono on" style="font-size:40px">93.184.215.34</div>'),D=node('db','DNS · phone book',150),Ar=mk('<div style="font-size:70px;color:#22d3ee;font-weight:900">↓</div>');
const ti=W('dns','ip'),td=W('dns','dns'),tn=W('dns','number');cue(ti,'tick');cue(td,'pop');cue(tn,'ding');
SCN('dns',(t,o)=>{place(N,540,420,1,o);place(D,540,700,pop(t,td),o);glow(D,t>td);place(Ar,540,900,pop(t,tn),o);place(Ip,540,1050,pop(t,tn),o)})}
// CHAIN
{const S=[['Root servers','🌐'],['.com servers','🏷️'],["Site's name server",'✅']].map(([a,b])=>mk(`<div class="card" style="width:600px;font-size:32px">${b} ${a}</div>`)),E=[edge([[540,560],[540,700]]),edge([[540,780],[540,920]])],L=label('saved nearby? then skip all this ⚡','pill',28);
const tr=W('chain','root'),tc=W('chain','com'),to=W('chain','own'),ts=W('chain','saved');cue(tr,'tick');cue(tc,'tick');cue(to,'ding');
SCN('chain',(t,o)=>{[tr,tc,to].forEach((x,i)=>place(S[i],540,500+i*220,pop(t,x),o));drawEdge(E[0],t,tc-.3,o,true);drawEdge(E[1],t,to-.3,o,true);place(L,540,1250,pop(t,ts),o)})}
// CONNECT
{const B=brC(),S=node('server','93.184.215.34',150),e=edge([[300,900],[800,900]]),Lk=mk('<div style="font-size:110px">🔒</div>'),L=label('encryption keys agreed → padlock','tok',30);
const tc=W('connect','connects'),ta=W('connect','agree'),tp=W('connect','padlock');cue(tc,'whoosh');cue(ta,'scramble');cue(tp,'lock');
SCN('connect',(t,o)=>{cplace(B,t,300,1000,{op:o,s:.9,mood:'grin'});place(S,800,900,1,o);drawEdge(e,t,tc,o,true);place(Lk,540,700,pop(t,tp),o);place(L,540,1150,pop(t,ta),o)})}
// REQUEST
{const B=brC(),S=node('server','Server',150),A=label('GET /','tok',32),H=mk('<div class="card mono" style="font-size:26px;line-height:1.5">&lt;html&gt;<br>&nbsp;&lt;h1&gt;Hello&lt;/h1&gt;<br>&lt;/html&gt;</div>'),e=edge([[300,900],[800,900]]);
const ta=W('request','asks'),th=W('request','html');cue(ta,'whoosh');cue(th,'pop');
SCN('request',(t,o)=>{cplace(B,t,300,1000,{op:o,s:.9});place(S,800,900,1,o);drawEdge(e,t,ta,o,true);place(A,300+500*eio(p(t,ta,ta+.8)),760,pop(t,ta),o);place(H,540,1250,pop(t,th),o)})}
// ASSETS
{const As=['🖼️ images','🎨 styles','⚙️ scripts'].map(s=>label(s,'pill',32)),C=node('server','CDN · nearby',140),L=label('often from a nearby CDN','tok',30);
const tl=W('assets','lists'),tf=W('assets','fetches'),tc=W('assets','cdn');cue(tl,'tick');cue(tf,'whoosh');cue(tc,'pop');
SCN('assets',(t,o)=>{As.forEach((a,i)=>place(a,240+i*300,560,pop(t,tl+i*.2),o));place(C,540,900,pop(t,tc),o);glow(C,t>tc);place(L,540,1150,pop(t,tc),o)})}
// RENDER
{const Pg=mk('<div style="width:700px;height:540px;border-radius:20px;background:#f8fafc;padding:30px;overflow:hidden" id="rp"><div style="height:60px;background:#22d3ee;border-radius:10px"></div><div style="height:24px;background:#cbd5e1;margin:30px 0 14px;width:70%"></div><div style="height:24px;background:#cbd5e1;margin:14px 0"></div><div style="height:200px;background:#e2e8f0;border-radius:10px;margin-top:20px"></div></div>'),L=label('laid out + painted · often < 1 s','tok',30);
const tl=W('render','lays'),tp=W('render','paints');cue(tl,'scramble');cue(tp,'ding');
SCN('render',(t,o)=>{$('rp').style.clipPath=`inset(0 0 ${100-100*p(t,tl,tp+.5)}% 0)`;place(Pg,540,800,1,o);place(L,540,1200,pop(t,tp),o)})}
charOutro([[brC(),.6],[buddy('circle','#cffafe','#22d3ee','',95,.8),.55]],'A page','in a second.');
