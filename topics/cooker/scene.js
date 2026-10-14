const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const ckC=()=>char(360,340,({blink,mood='happy',lift=0})=>`<rect x="20" y="110" width="320" height="220" rx="40" fill="#d1d5db"/><rect x="10" y="90" width="340" height="40" rx="18" fill="#9ca3af"/><rect x="250" y="70" width="110" height="24" rx="10" fill="#1f2937"/><rect x="170" y="${40-lift*20}" width="20" height="50" rx="6" fill="#1f2937"/><circle cx="180" cy="${36-lift*20}" r="16" fill="#1f2937"/>${face(180,220,.9,{blink,mood})}`);
const thermo=()=>mk('<div class="big" style="font-size:120px"><span class="acc" id="tc">0</span>°C</div>');
const steam=n=>Array.from({length:n},()=>mk('<div style="width:40px;height:40px;border-radius:20px;background:rgba(255,255,255,.55)"></div>'));
// HOOK
{const C=ckC(),P=label('🍲 pot: ~1 hour','pill',32),W1=label('🔥 cooker: a few whistles','tok',34),S=steam(4),Q=qmark();
const th=W('hook','hour'),tw=W('hook','whistles'),tt=W('hook','trick');cue(tw,'whoosh');cue(tw+.4,'shimmer');cue(tt,'whoosh');
SCN('hook',(t,o)=>{cplace(C,t,540,1250,{op:o,s:1.5,popT:S0('hook')-.3,lift:t>tw?Math.abs(Math.sin(t*6)):0,mood:t>tw?'grin':'happy'});S.forEach((s,i)=>{const u=((t-tw)*.8+i/4)%1;place(s,540+Math.sin(i+t)*30,700-u*300,.5+u,o*(t>tw?1-u:0))});place(P,540,400,pop(t,th),o);place(W1,540,520,pop(t,tw),o);kk(t,880,1490,{op:o,s:.5,mood:t>tt?'o':'happy',jumpT:tt});place(Q,180,1350,pop(t,tt),o*p(t,tt,tt+.1),Math.sin(t*3)*8)})}
// BOIL
{const Pt=mk('<div style="width:420px;height:300px;border-radius:0 0 60px 60px;background:#9ca3af;position:relative;overflow:hidden"><div style="position:absolute;bottom:0;width:100%;height:70%;background:#38bdf8;opacity:.6"></div></div>'),T=thermo(),S=steam(6),L=label('stuck at ~100°C · extra heat → steam','tok',30);
const tb=W('boil','boils'),th=W('boil','hundred'),ts=W('boil','steam');cue(th,'ding');cue(ts,'whoosh');
SCN('boil',(t,o)=>{$('tc').textContent=Math.round(Math.min(100,25+(t-S0('boil'))*30));place(T,540,420,1,o);place(Pt,540,960,1,o);S.forEach((s,i)=>{const u=((t-ts)*.7+i/6)%1;place(s,420+i*45,780-u*250,.5+u,o*(t>th?1-u:0))});place(L,540,1250,pop(t,ts),o)})}
// SEAL
{const C=ckC(),G=label('rubber gasket 🔒','pill',32),Pr=mk('<div class="big" style="font-size:90px">pressure <span class="acc">↑</span></div>');
const tl=W('seal','locks'),tg=W('seal','gasket'),tr=W('seal','rises');cue(tl,'lock');cue(tr,'up');
SCN('seal',(t,o)=>{cplace(C,t,540,1150,{op:o,s:1.6,mood:t>tr?'worry':'happy',r:t>tr?Math.sin(t*20)*1.5:0});place(G,540,620,pop(t,tg),o);place(Pr,540,420,pop(t,tr),o)})}
// HOTTER
{const T=mk('<div class="big" style="font-size:120px"><span class="acc" id="tc2">100</span>°C</div>'),A=label('+1 atmosphere','tok',36),L=label('higher pressure → higher boiling point','pill',30);
const th=W('hotter','raises'),ta=W('hotter','atmosphere'),tt=W('hotter','twenty');cue(th,'up');cue(tt,'ding');
SCN('hotter',(t,o)=>{$('tc2').textContent=Math.round(100+20*eio(p(t,ta,tt+.3)));place(T,540,620,1,o);place(A,540,860,pop(t,ta),o);place(L,540,420,pop(t,th),o);kk(t,170,1490,{op:o,s:.5,mood:t>tt?'grin':'o'})})}
// FASTER
{const D=buddy('circle','#fef3c7','#f59e0b','',95,.9),Ar=Array.from({length:8},()=>mk('<div style="font-size:60px;color:#ef4444;font-weight:900">→</div>')),L=label('heat pushed in faster → soft sooner','tok',30);
const tp=W('faster','push'),tf=W('faster','fraction');cue(tp,'whoosh');cue(tf,'ding');
SCN('faster',(t,o)=>{cplace(D,t,540,950,{op:o,s:1.4,mood:t>tf?'joy':'happy'});Ar.forEach((a,i)=>{const ang=i*Math.PI/4;const r=380-((t-tp)*200+i*20)%160;place(a,540+Math.cos(ang)*r,820+Math.sin(ang)*r,1,o*(t>tp?1:0),ang*180/Math.PI+180)});place(L,540,1300,pop(t,tf),o)})}
// WHISTLE
{const C=ckC(),S=steam(5),Wh=label('WHEEE! 🎶','tok',40),L=label('weight lifts → steam out → pressure steady','pill',28);
const tl=W('whistle','lifts'),tw=W('whistle','whistle'),ts=W('whistle','steady');cue(tw,'shimmer');cue(ts,'ding');
SCN('whistle',(t,o)=>{const lift=t>tl?Math.abs(Math.sin(t*5)):0;cplace(C,t,540,1250,{op:o,s:1.6,lift,mood:'grin'});S.forEach((s,i)=>{const u=((t-tl)*.9+i/5)%1;place(s,540+Math.sin(i*2+t)*40,640-u*250,.5+u,o*(t>tl?1-u:0))});place(Wh,800,520,pop(t,tw),o,-10);place(L,540,380,pop(t,ts),o)})}
// SAFETY
{const C=ckC(),V=label('safety valve / plug','tok',32),Tp=['🧽 keep the vent clean','⭕ gasket in good shape'].map(s=>label(s,'pill',30));
const tb=W('safety','blocked'),ts=W('safety','safety'),tk=W('safety','keep');cue(ts,'lock');cue(tk,'tick');
SCN('safety',(t,o)=>{cplace(C,t,540,1000,{op:o,s:1.3,mood:t>ts?'joy':'worry'});place(V,540,440,pop(t,ts),o);Tp.forEach((x,i)=>place(x,540,1180+i*110,pop(t,tk+i*.6),o))})}
charOutro([[ckC(),.45],[buddy('circle','#fef3c7','#f59e0b','',95,.8),.55]],'Cooking','with physics.');
