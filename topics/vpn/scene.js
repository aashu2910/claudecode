const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const phoneC=()=>buddy('tall','#4b5563','#111827','',80,.9),vpnC=()=>buddy('rect','#ecfccb','#65a30d',`<rect x="70" y="20" width="60" height="30" rx="6" fill="#365314"/>`,110,.75);
const tunnel=()=>mk('<div style="width:600px;height:90px;border-radius:45px;background:rgba(163,230,53,.18);border:5px solid #a3e635"></div>');
const pkt=(c='#a3e635')=>mk(`<div style="width:30px;height:30px;border-radius:8px;background:${c}"></div>`);
// HOOK
{const P=phoneC(),G=label('📍 site sees: Singapore','tok',32),W1=label('📶 Wi-Fi sees: ???','pill',32),Q=qmark();
const tt=W('hook','turn'),ts=W('hook','somewhere'),tw=W('hook','wi');cue(tt,'pop');cue(ts,'whoosh');cue(tw,'lock');
SCN('hook',(t,o)=>{cplace(P,t,540,1200,{op:o,s:1.5,popT:S0('hook')-.3,mood:'grin'});place(G,540,450,pop(t,ts),o);place(W1,540,580,pop(t,tw),o);place(Q,860,900,pop(t,tw+.5),o*p(t,tw+.5,tw+.6),Math.sin(t*3)*8)})}
// NORMAL
{const P=phoneC(),R=node('gate','Wi-Fi / ISP',140),S=node('server','website.com',140),e=edge([[200,900],[540,900],[880,900]]),L=label('they see: website.com 👀','pill',30);
const tn=W('normal','normally'),tw=W('normal','which'),te=W('normal','encrypted');cue(tw,'beep');
SCN('normal',(t,o)=>{cplace(P,t,200,1000,{op:o,s:.8});place(R,540,900,1,o);place(S,880,900,1,o);drawEdge(e,t,tn,o,true);place(L,540,600,pop(t,tw),o)})}
// TUNNEL
{const P=phoneC(),V=vpnC(),T=tunnel(),Pk=[0,1,2,3].map(()=>pkt()),L=label('🔒 encrypted tunnel','tok',34);
const tc=W('tunnel','creates'),ta=W('tunnel','all');cue(tc,'lock');cue(ta,'whoosh');
SCN('tunnel',(t,o)=>{cplace(P,t,170,950,{op:o,s:.8});cplace(V,t,910,950,{op:o,s:.8,popT:tc-.3,mood:'grin'});place(T,540,880,pop(t,tc),o);Pk.forEach((k,i)=>place(k,240+((t-ta)*250+i*150)%600,880,1,o*(t>ta?1:0)));place(L,540,500,pop(t,tc),o)})}
// SERVER
{const V=vpnC(),S=node('server','website.com',140),e=edge([[300,900],[800,900]]),L=label('site sees the VPN server\'s address','tok',30);
const tc=W('server','contacts'),ts=W('server','see');cue(tc,'whoosh');cue(ts,'ding');
SCN('server',(t,o)=>{cplace(V,t,300,1000,{op:o,s:.9,mood:'grin'});place(S,800,900,1,o);drawEdge(e,t,tc,o,true);place(L,540,550,pop(t,ts),o)})}
// SEE
{const R=[['📶 Wi-Fi / ISP','scrambled data → VPN'],['🛡️ VPN company','can see where you go']].map(([a,b],i)=>mk(`<div class="card${i?' on':''}" style="width:760px;font-size:30px"><span class="dim">${a}</span><br>${b}</div>`)),L=label('trust matters','tok',34);
const tw=W('see','wi'),tv=W('see','company'),tt=W('see','trust');cue(tw,'tick');cue(tv,'beep');cue(tt,'ding');
SCN('see',(t,o)=>{place(R[0],540,580,pop(t,tw),o);place(R[1],540,800,pop(t,tv),o);place(L,540,1020,pop(t,tt),o)})}
// LIMITS
{const C=['👤 logged-in accounts','🍪 cookies','🧭 browser fingerprint'].map(s=>label(s,'pill',30)),L=label('not full anonymity','tok',32);
const tn=W('limits','anonymity'),tl=W('limits','logged');cue(tn,'down');cue(tl,'tick');
SCN('limits',(t,o)=>{place(L,540,420,pop(t,tn),o);C.forEach((c,i)=>place(c,540,640+i*130,pop(t,tl+i*.3),o));kk(t,540,1350,{op:o,s:.6,mood:'o'})})}
// INDIA
{const R=mk('<div class="card on" style="font-size:32px;text-align:center;width:720px"><span class="dim">INDIA · 2022 RULES</span><br>VPN providers must keep certain user records</div>');
const tr=W('india','rules'),tk=W('india','keep');cue(tr,'pop');cue(tk,'lock');
SCN('india',(t,o)=>{place(R,540,760,pop(t,tr),o);kk(t,540,1300,{op:o,s:.6,mood:'flat'})})}
charOutro([[phoneC(),.6],[vpnC(),.6]],'Privacy,','with limits.');
