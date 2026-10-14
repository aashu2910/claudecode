const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const wmC=()=>char(400,460,({blink,mood='happy',spin=0,wet=1})=>`<rect x="10" y="10" width="380" height="440" rx="40" fill="#f1f5f9"/><rect x="30" y="30" width="340" height="60" rx="14" fill="#e2e8f0"/><circle cx="200" cy="280" r="140" fill="#cbd5e1"/><circle cx="200" cy="280" r="115" fill="#0f172a"/><g transform="rotate(${spin} 200 280)"><path d="M120 300 Q160 220 230 250 Q290 280 260 340 Q190 380 140 350Z" fill="#14b8a6" opacity=".9"/><path d="M180 200 Q240 190 270 230" stroke="#f472b6" stroke-width="22" fill="none" stroke-linecap="round"/></g><rect x="85" y="${395-115*2*wet*0+0}" width="0" height="0"/>${face(200,60,.5,{blink,mood,cheek:false})}`);
const drumEl=()=>mk(`<svg width="560" height="560" viewBox="0 0 560 560"><circle cx="280" cy="280" r="260" fill="#1e293b" stroke="#94a3b8" stroke-width="10"/><g id="dh"></g><g id="cl"></g></svg>`);
function drawDrum(D,ang,holes=1){let h='';for(let i=0;i<24;i++){const a=i*15+ang;const r=a*Math.PI/180;h+=`<circle cx="${280+250*Math.cos(r)}" cy="${280+250*Math.sin(r)}" r="7" fill="#0b0a0d"/>`}D.querySelector('#dh').innerHTML=holes?h:'';let c='';for(let i=0;i<5;i++){const r=(i*72+ang)*Math.PI/180;c+=`<ellipse cx="${280+190*Math.cos(r)}" cy="${280+190*Math.sin(r)}" rx="60" ry="34" fill="${['#14b8a6','#f472b6','#facc15','#60a5fa','#a78bfa'][i]}" transform="rotate(${i*72+ang+90} ${280+190*Math.cos(r)} ${280+190*Math.sin(r)})"/>`}D.querySelector('#cl').innerHTML=c}
const drops=n=>Array.from({length:n},()=>mk('<div style="width:20px;height:28px;border-radius:50% 50% 50% 50%/60% 60% 40% 40%;background:#67e8f9"></div>'));
// HOOK
{const W1=wmC(),L1=label('💧 soaking wet','pill',32),L2=label('😌 just damp','tok',34),Q=qmark();
const ts=W('hook','soaking'),tsp=W('hook','spin'),tw=W('hook','where');cue(ts,'pop');cue(tsp,'whoosh');cue(tw,'whoosh');
SCN('hook',(t,o)=>{cplace(W1,t,540,1300,{op:o,s:1.6,popT:S0('hook')-.3,spin:t>tsp?(t-tsp)*900:0,mood:t>tsp?'grin':'happy'});place(L1,540,380,pop(t,ts),o);place(L2,540,500,pop(t,tsp+.6),o);kk(t,880,1490,{op:o,s:.5,mood:t>tw?'o':'happy',jumpT:tw});place(Q,180,1350,pop(t,tw),o*p(t,tw,tw+.1),Math.sin(t*3)*8)})}
// DRAIN
{const D=drumEl(),Wl=mk('<div id="wl" style="width:500px;border-radius:0 0 250px 250px;background:rgba(103,232,249,.45)"></div>'),P=node('wave','Drain pump',140),L=label('clothes still soaked 💧','pill',30);
const tp=W('drain','pumps'),ts=W('drain','still');cue(tp,'down');cue(ts,'tick');
SCN('drain',(t,o)=>{drawDrum(D,0);place(D,540,760,1,o);const h=250*(1-eio(p(t,tp,tp+1.5)));$('wl').style.height=h+'px';place(Wl,540,1010-h/2,1,o*(h>2?1:0));place(P,540,1260,pop(t,tp),o);glow(P,t>tp);place(L,540,400,pop(t,ts),o)})}
// SPIN
{const D=drumEl(),R=mk('<div class="big" style="font-size:110px"><span class="acc" id="rpm">0</span><span style="font-size:44px"> rpm</span></div>'),F=label('many front loaders: 1000+','pill',30);
const ts=W('spin','speeds'),tt=W('spin','thousand');cue(ts,'up');cue(tt,'ding');
SCN('spin',(t,o)=>{const v=1200*eio(p(t,ts,tt+.5));$('rpm').textContent=Math.round(v);drawDrum(D,((t-ts)>0?(t-ts)*(t-ts)*200:0)%360);place(D,540,900,1,o);place(R,540,440,1,o);place(F,540,1290,pop(t,tt),o)})}
// INERTIA
{const C=mk('<div style="width:500px;height:500px;border-radius:250px;border:5px dashed rgba(255,255,255,.3)"></div>'),B=buddy('circle','#ccfbf1','#14b8a6','',95,.9),A=mk('<div style="font-size:90px;font-weight:900;color:#14b8a6">→</div>'),L=label('inertia: keep going straight','tok',34);
const tc=W('inertia','circle'),tf=W('inertia','fly'),ti=W('inertia','inertia');cue(tf,'whoosh');cue(ti,'ding');
SCN('inertia',(t,o)=>{place(C,540,820,1,o);let x,y;if(t<tf){const a=(t-tc)*3;x=540+250*Math.cos(a);y=820+250*Math.sin(a)}else{const a=(tf-tc)*3;const d=(t-tf)*500;x=540+250*Math.cos(a)-Math.sin(a)*d;y=820+250*Math.sin(a)+Math.cos(a)*d}cplace(B,t,x,y+50,{op:o,s:.5,mood:t>tf?'joy':'happy',bob:0});place(L,540,400,pop(t,ti),o)})}
// HOLES
{const D=drumEl(),Ds=drops(16),L1=label('wall holds clothes in','pill',30),L2=label('water slips through the holes 💧','tok',32);
const th=W('holes','holds'),tw=W('holes','water'),tdr=W('holes','drains');cue(th,'tick');cue(tw,'whoosh');
SCN('holes',(t,o)=>{const ang=t*400%360;drawDrum(D,ang);place(D,540,860,1,o);Ds.forEach((d,i)=>{const a=(i*22.5)*Math.PI/180;const u=((t-tw)*.9+i/16)%1;place(d,540+(250+u*200)*Math.cos(a),860+(250+u*200)*Math.sin(a),1,o*(t>tw?1-u:0),i*22.5+90)});place(L1,540,380,pop(t,th),o);place(L2,540,1420,pop(t,tw),o)})}
// FORCE
{const G=mk('<div class="big" style="font-size:140px">≈ <span class="acc">100s</span> × g</div>'),Cl=buddy('rect','#ccfbf1','#14b8a6','',95,.9),Ds=drops(8),L=label('water squeezed out','pill',32);
const th=W('force','hundreds'),ts=W('force','squeezing');cue(th,'up');cue(ts,'whoosh');
SCN('force',(t,o)=>{place(G,540,480,pop(t,th),o);const sq=eio(p(t,ts-.3,ts+.5));cplace(Cl,t,540,1100,{op:o,s:1.3,mood:t>ts?'worry':'happy'});Cl.style.transform+=` scaleY(${1-.3*sq})`;Ds.forEach((d,i)=>{const u=((t-ts)*1.2+i/8)%1;place(d,540+Math.cos(i*.8)*(150+u*300),950+Math.sin(i*.8)*(100+u*200),1,o*(t>ts?1-u:0))});place(L,540,1300,pop(t,ts),o)})}
// BALANCE
{const W1=wmC(),S=node('chip','Sensor',140),L1=label('⚠ wobble detected','pill',30),L2=label('slow down → spread clothes → spin again','tok',28);
const tb=W('balance','bunch'),tw=W('balance','wobbles'),ts=W('balance','sensors'),tsl=W('balance','slows');cue(tw,'scramble');cue(ts,'beep');cue(tsl,'down');
SCN('balance',(t,o)=>{const wob=t>tw&&t<tsl+.5?Math.sin(t*35)*10:0;cplace(W1,t,540+wob,1200,{op:o,s:1.3,mood:t>tw&&t<tsl?'worry':'grin',spin:t*(t>tsl?200:900),r:wob*.3});place(S,860,520,pop(t,ts),o);glow(S,t>ts);place(L1,400,420,pop(t,tw),o);place(L2,540,1420,pop(t,tsl),o)})}
charOutro([[wmC(),.45],[buddy('circle','#ccfbf1','#14b8a6','',95,.8),.55]],'Water out,','by physics.');
