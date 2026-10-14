const K=kiko();const kk=(t,x,y,o)=>cplace(K,t,x,y,o);
const scr=(id)=>mk(`<div id="${id}" style="width:380px;height:720px;border-radius:50px;border:6px solid #4b5563;background:#e2e8f0;position:relative"><div style="position:absolute;top:24px;left:170px;width:40px;height:14px;border-radius:7px;background:#111"></div></div>`);
// HOOK
{const S=scr('hs'),Ear=mk('<div style="font-size:150px">👂</div>'),Q=qmark();
const td=W('hook','dims'),to=W('hook','off'),tk=W('hook','know');cue(td,'down');cue(to,'lock');cue(tk,'whoosh');
SCN('hook',(t,o)=>{const b=t<td?1:t<to?.45:.05;$('hs').style.background=`rgba(226,232,240,${b})`;place(S,540,900,1,o);place(Ear,kf(t,[[to-.6,1000],[to,700]]),560,1,o*p(t,to-.6,to-.3));place(Q,860,1350,pop(t,tk),o*p(t,tk,tk+.1),Math.sin(t*3)*8);kk(t,180,1490,{op:o,s:.5,mood:t>tk?'o':'happy'})})}
// LIGHT
{const D=mk('<div style="width:60px;height:60px;border-radius:30px;background:#fde047;box-shadow:0 0 40px #fde047"></div>'),S=scr('ls'),R=Array.from({length:5},()=>mk('<div style="width:8px;height:180px;border-radius:4px;background:linear-gradient(transparent,#fde047)"></div>')),L=label('ambient light sensor','tok',32);
const ta=W('light','ambient'),tm=W('light','measures');cue(ta,'pop');cue(tm,'shimmer');
SCN('light',(t,o)=>{place(S,540,1000,1,o);place(D,540,670,pop(t,ta),o);R.forEach((r,i)=>place(r,380+i*80,480,1,o*p(t,tm,tm+.4)*(.5+.5*Math.sin(t*4+i)),(i-2)*15));place(L,540,330,pop(t,ta),o)})}
// ADJUST
{const A=scr('a1'),B=scr('a2'),Su=mk('<div style="font-size:90px">☀️</div>'),Mo=mk('<div style="font-size:90px">🌙</div>'),L=label('🔋 saves battery · 👀 easier on eyes','tok',30);
const tb=W('adjust','bright'),td=W('adjust','dark'),ts=W('adjust','saves');cue(tb,'up');cue(td,'down');cue(ts,'ding');
SCN('adjust',(t,o)=>{$('a1').style.background='#f8fafc';$('a2').style.background=`rgba(226,232,240,${.3})`;place(Su,290,450,pop(t,tb),o);place(A,290,900,.6,o*p(t,tb,tb+.3));place(Mo,790,450,pop(t,td),o);place(B,790,900,.6,o*p(t,td,td+.3));place(L,540,1300,pop(t,ts),o)})}
// LEARN
{const Sl=mk('<div style="width:700px;height:30px;border-radius:15px;background:#374151;position:relative"><div id="sk" style="position:absolute;top:-25px;width:80px;height:80px;border-radius:40px;background:#fde047"></div></div>'),L=label('adaptive brightness learns your taste','tok',30),B=buddy('circle','#fef9c3','#eab308','',95,.9);
const tn=W('learn','nudge'),ta=W('learn','adaptive');cue(tn,'tick');cue(ta,'ding');
SCN('learn',(t,o)=>{$('sk').style.left=(300+kf(t,[[tn,0],[tn+.6,180],[tn+1.2,140]]))+'px';place(Sl,540,800,1,o);place(L,540,1050,pop(t,ta),o);cplace(B,t,540,1400,{op:o,s:.8,mood:t>ta?'joy':'happy',jumpT:ta+.3})})}
// PROX
{const Ir=mk('<div style="width:40px;height:40px;border-radius:20px;background:#7f1d1d;box-shadow:0 0 20px #ef4444"></div>'),E=mk('<div style="font-size:160px">👂</div>'),e=edge([[440,1100],[440,700],[640,700],[640,1100]]),L=label('infrared bounces back from your ear','tok',30);
const ts=W('prox','sends'),tc=W('prox','close'),tb=W('prox','bounces');cue(ts,'pop');cue(tb,'beep');
SCN('prox',(t,o)=>{place(Ir,440,1130,pop(t,ts),o);place(E,540,kf(t,[[tc-.6,350],[tc,560]]),1,o*p(t,tc-.6,tc-.3));drawEdge(e,t,tb,o,true);place(L,540,1300,pop(t,tb),o)})}
// OFF
{const S=scr('os'),C=label('screen off during calls 📞','tok',32),Ck=label('no accidental cheek taps · saves power','pill',28);
const tt=W('off','turns'),tc=W('off','cheek');cue(tt,'lock');cue(tc,'tick');
SCN('off',(t,o)=>{$('os').style.background=t>tt?'#000':'#e2e8f0';place(S,540,850,1,o);place(C,540,400,pop(t,tt),o);place(Ck,540,1300,pop(t,tc),o)})}
// HIDDEN
{const S=scr('hd'),D=[0,1].map(()=>mk('<div style="width:50px;height:50px;border-radius:25px;border:4px dashed #fde047"></div>')),L=label('hidden under the screen 🙈','tok',32);
const th=W('hidden','hide'),ts=W('hidden','see');cue(th,'shimmer');
SCN('hidden',(t,o)=>{place(S,540,900,1,o);D.forEach((d,i)=>place(d,480+i*120,620,1,o*(t>th?(.5+.5*Math.sin(t*5)):0)));place(L,540,400,pop(t,th),o)})}
charOutro([[buddy('tall','#4b5563','#111827','',80,.9),.6],[buddy('circle','#fef9c3','#eab308','',95,.8),.55]],'Little sensors,','big help.');
