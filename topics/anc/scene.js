const WV=(w,h)=>{const d=mk(`<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="overflow:visible"><path fill="none" stroke-width="8" stroke-linecap="round"/></svg>`);d.P=d.querySelector('path');d.w=w;d.h=h;return d};
function wave(d,f,col,glowOn){let s='';for(let x=0;x<=d.w;x+=6){const y=d.h/2-f(x);s+=(x?'L':'M')+x+' '+y.toFixed(1)}d.P.setAttribute('d',s);d.P.setAttribute('stroke',col);d.P.style.filter=glowOn?`drop-shadow(0 0 10px ${col})`:''}
const noise=(x,t,a=1)=>a*(60*Math.sin(x*.025-t*6)+22*Math.sin(x*.061-t*9+1));
// HOOK
{const B=node('ear','',200),N=WV(700,240),Q=mk('<div style="font-size:150px;font-weight:900" class="acc">?</div>'),Bus=mk('<div class="pill" style="font-size:36px">bus engine · rrrrr</div>');
const tp=W('hook','put'),td=W('hook','disappears'),tb=W('hook','but');cue(td,'down');cue(tb,'whoosh');
SCN('hook',(t,o)=>{place(Bus,540,420,pop(t,S0('hook')-.2),o);const a=1-eio(p(t,td-.3,td+.6));wave(N,x=>noise(x,t,a),a>.1?'#fff':ACC,a<.1);place(N,450,800,1,o);place(B,880,800,pop(t,tp),o);glow(B,t>td);place(Q,540,1150,pop(t,tb),o*p(t,tb,tb+.1),Math.sin(t*3)*8)})}
// SOUND
{const V=WV(900,320),Pu=mk('<div class="pill">push · high pressure</div>'),Pl=mk('<div class="pill">pull · low pressure</div>'),Ear=node('ear','Eardrum',150),Dr=mk('<div style="width:16px;height:200px;border-radius:8px;background:#818cf8"></div>');
const tw=W('sound','wave'),tpu=W('sound','pushes'),tpl=W('sound','pulls'),te=W('sound','eardrum');cue(tw,'whoosh');cue(tpu,'tick');cue(tpl,'tick');
SCN('sound',(t,o)=>{wave(V,x=>110*Math.sin(x*.02-t*4)*p(t,S0('sound')-.2,tw),'#fff');place(V,500,760,1,o);place(Pu,300,480,pop(t,tpu),o);place(Pl,700,1050,pop(t,tpl),o);place(Ear,540,1300,pop(t,te),o);place(Dr,980,760,1,o*p(t,te,te+.3),0);Dr.style.transform+=` translateX(${Math.sin(t*4)*14}px)`})}
// MIC
{const Bud=mk('<div style="width:520px;height:520px;border-radius:50% 50% 50% 20%;background:#1e1c25;border:4px solid #3a3550"></div>'),M=mk('<div style="width:56px;height:56px;border-radius:28px;background:#818cf8;box-shadow:0 0 40px #818cf8"></div>'),ML=mk('<div class="pill">outside mic</div>'),Ear=mk('<div class="card" style="font-size:30px">your ear →</div>'),N=WV(380,200);
const tm=W('mic','microphone'),th=W('mic','hears'),tb=W('mic','before');cue(tm,'pop');cue(th,'beep');
SCN('mic',(t,o)=>{place(Bud,680,800,pop(t,S0('mic')-.3),o);place(M,440,640,pop(t,tm),o*(1-.4*Math.sin(t*8)**2));place(ML,440,520,pop(t,tm),o);const r=p(t,th-.8,th);wave(N,x=>x/N.w<r?noise(x,t,.9):0,'#fff');place(N,200,700,1,o);place(Ear,860,1140,pop(t,tb),o)})}
// FLIP
{const A=WV(860,220),B=WV(860,220),Ch=node('chip','DSP chip',150),L1=mk('<div class="pill" style="background:rgba(255,255,255,.08);color:#fff;border-color:#fff">noise</div>'),L2=mk('<div class="pill">anti-noise</div>'),Pu=mk('<div class="card" style="font-size:28px">push ↑</div>'),Pl=mk('<div class="card on" style="font-size:28px">pull ↓</div>');
const tc=W('flip','computes'),to=W('flip','opposite'),tpu=W('flip','pushes'),tpl=W('flip','pulls');cue(tc,'scramble');cue(to,'ding');
SCN('flip',(t,o)=>{const f=x=>noise(x,t,1);place(Ch,540,400,pop(t,S0('flip')-.3),o);glow(Ch,t>tc);wave(A,f,'#fff');place(A,540,720,1,o);place(L1,160,580,1,o);
 const k=eio(p(t,to-.3,to+.4));wave(B,x=>-f(x)*k,ACC,true);place(B,540,1060,1,o*p(t,tc,tc+.3));place(L2,200,920,pop(t,to),o);place(Pu,800,580,pop(t,tpu),o);place(Pl,800,1220,pop(t,tpl),o)})}
// PLAY
{const Sp=node('speaker','Speaker'),M=WV(800,200),An=WV(800,200),Lm=mk('<div class="pill" style="background:rgba(255,255,255,.08);color:#fff;border-color:#fff">your music</div>'),La=mk('<div class="pill">anti-noise</div>'),Lt=mk('<div class="tok" style="font-size:40px">&lt; 1 ms</div>');
const ta=W('play','anti'),tm=W('play','music'),tf=W('play','fraction');cue(ta,'pop');cue(tm,'shimmer');cue(tf,'tick');
SCN('play',(t,o)=>{place(Sp,540,420,pop(t,S0('play')-.3),o);glow(Sp,t>ta);wave(An,x=>-noise(x,t),ACC,true);place(An,540,760,1,o*p(t,ta,ta+.3));place(La,200,640,pop(t,ta),o);
 wave(M,x=>40*Math.sin(x*.05-t*3),'#fff');place(M,540,1020,1,o*p(t,tm,tm+.3));place(Lm,200,900,pop(t,tm),o);place(Lt,540,1300,pop(t,tf),o)})}
// CANCEL
{const N=WV(860,200),A=WV(860,200),S=WV(860,200),Eq=mk('<div class="big" style="font-size:60px">= <span class="acc">near silence</span></div>'),Mi=mk('<div class="card on" style="font-size:30px">inside mic: <span class="mono acc" id="cres"></span> left → correct</div>');
const tm=W('cancel','meet'),tc=W('cancel','cancel'),ts=W('cancel','second'),tco=W('cancel','corrects');cue(tm,'whoosh');cue(tc,'down');cue(ts,'beep');cue(tco,'tick');
SCN('cancel',(t,o)=>{const sep=1-eio(p(t,tm,tc));wave(N,x=>noise(x,t),'#fff');wave(A,x=>-noise(x,t),ACC);place(N,540,560+sep*0,1,o*(.4+.6*sep));place(A,540,560+sep*300,1,o*(.4+.6*sep));
 const res=t<ts?.08:.08*(1-eio(p(t,tco,tco+.8)))+.01;wave(S,x=>noise(x,t,p(t,tc-.2,tc)>0?res:1),ACC,true);place(S,540,1020,1,o*p(t,tc,tc+.3));place(Eq,540,1200,pop(t,tc),o);place(Mi,540,1400,pop(t,ts),o);$('cres').textContent=Math.round(res*100)+'%'})}
// LIMITS
{const bars=[90,80,70,55,35,18,10,6],B=bars.map(()=>mk('<div style="width:80px;border-radius:12px;background:#818cf8"></div>')),Ax=mk('<div style="width:840px;display:flex;justify-content:space-between;font-size:26px;color:#aaa;font-weight:700"><span>low · hum</span><span>high · voices</span></div>'),T=mk('<div class="dim" style="font-size:28px">HOW MUCH ANC REMOVES</div>');
const C1=mk('<div class="card on" style="font-size:32px">engines · hum ✓ ANC</div>'),C2=mk('<div class="card" style="font-size:32px">voices · claps → ear tip seal</div>'),Tip=mk('<div style="width:200px;height:120px;border-radius:60px 60px 30px 30px;background:#2a2838;border:4px solid #818cf8"></div>');
const tl=W('limits','low'),tv=W('limits','voices'),ts=W('limits','seal'),tst=W('limits','steady');cue(tl,'up');cue(tv,'pop');cue(ts,'lock');
SCN('limits',(t,o)=>{place(T,540,400,pop(t,tst),o);B.forEach((b,i)=>{const h=bars[i]*4*eio(p(t,tst+i*.08,tst+i*.08+.5));b.firstElementChild.style.height=Math.max(1,h)+'px';b.style.opacity=i<4?1:.45;place(b,180+i*103,820-h/2,1,o)});place(Ax,540,860,1,o*p(t,tst,tst+.3));
 place(C1,540,1000,pop(t,tl+.3),o);place(C2,540,1150,pop(t,tv),o);place(Tip,540,1340,pop(t,ts-.2),o)})}
outro([['mic','Listen'],['chip','Flip'],['speaker','Play'],['ear','Cancel']],'Silence,','made from sound.');
