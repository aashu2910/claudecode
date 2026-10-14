const G=9,X0=220,Y0=420,PI=80;// grid 9x9 at pitch 80
const gx=i=>X0+i*PI,gy=j=>Y0+j*PI;
function gridEls(){const rows=[],cols=[],nodes=[];for(let i=0;i<G;i++){rows.push(mk(`<div style="width:${PI*(G-1)+60}px;height:8px;border-radius:4px;background:rgba(196,181,253,.35)"></div>`));cols.push(mk(`<div style="width:8px;height:${PI*(G-1)+60}px;border-radius:4px;background:rgba(255,255,255,.22)"></div>`))}
 for(let k=0;k<G*G;k++)nodes.push(mk('<div style="width:26px;height:26px;border-radius:13px;background:#c4b5fd"></div>'));return{rows,cols,nodes}}
function drawGrid(g,t,o,t0,nodeFn){const c=X0+PI*(G-1)/2,cy=Y0+PI*(G-1)/2;g.rows.forEach((r,j)=>place(r,c,gy(j),1,o*p(t,t0+j*.05,t0+j*.05+.3)));g.cols.forEach((r,i)=>place(r,gx(i),cy,1,o*p(t,t0+.4+i*.05,t0+.7+i*.05)));
 g.nodes.forEach((n,k)=>{const i=k%G,j=Math.floor(k/G);const [s,op,col]=nodeFn?nodeFn(i,j):[0,0,ACC];n.firstElementChild.style.background=col||ACC;n.firstElementChild.style.boxShadow=s>0.6?`0 0 16px ${col||ACC}`:'none';place(n,gx(i),gy(j),s,o*op)})}
const finger=()=>mk('<div style="width:200px;height:280px;border-radius:100px 100px 70px 70px;background:#d9b49a;opacity:.85"></div>');
const FX=gx(4)+22,FY=gy(4)-14;
const fall=(i,j,fx=FX,fy=FY)=>Math.max(0,1-Math.hypot(gx(i)-fx,gy(j)-fy)/150);
// HOOK
{const P=mk(`<div class="phone"><div style="position:absolute;top:500px;left:110px;width:160px;height:80px;border-radius:20px;background:#c4b5fd;color:#120f20;font-weight:800;font-size:30px;display:flex;align-items:center;justify-content:center">OK</div></div>`),F=finger(),R=mk('<div style="width:60px;height:60px;border-radius:30px;border:5px solid #fff"></div>'),Gl=mk('<div class="pill" style="font-size:34px">glass can\'t feel</div>'),Q=mk('<div style="font-size:150px;font-weight:900" class="acc">?</div>');
const tt=W('hook','tap'),tk=W('hook','knows'),tg=W('hook','glass'),ts=W('hook','so');cue(tt,'pop');cue(tk,'ding');cue(ts,'whoosh');
SCN('hook',(t,o)=>{place(P,540,880,pop(t,S0('hook')-.3),o);place(F,560,kf(t,[[tt-.5,1500],[tt,1210],[tt+.4,1210],[tt+.9,1550]]),1,o*win(t,tt-.5,tt+.9,.2));place(R,540,1000,1+p(t,tt,tt+.5),o*win(t,tt,tt+.6,.1));place(Gl,540,1420,pop(t,tg),o);place(Q,880,500,pop(t,ts),o*p(t,ts,ts+.1),Math.sin(t*3)*8)})}
// GRID
{const g=gridEls(),Gl=mk('<div style="width:820px;height:820px;border-radius:40px;background:rgba(255,255,255,.04);border:3px solid rgba(255,255,255,.15)"></div>'),R=mk('<div class="pill">rows</div>'),C=mk('<div class="pill" style="background:rgba(255,255,255,.08);color:#fff;border-color:#fff">columns</div>');
const tu=W('grid','under'),tgr=W('grid','grid'),tr=W('grid','rows'),tc=W('grid','columns');cue(tgr,'scramble');cue(tr,'tick');cue(tc,'tick');
SCN('grid',(t,o)=>{place(Gl,540,Y0+320,1,o*.8);drawGrid(g,t,o,tgr-.3);place(R,540,1310,pop(t,tr),o);place(C,540,1420,pop(t,tc),o)})}
// FIELD
{const g=gridEls(),Pu=mk('<div style="width:60px;height:20px;border-radius:10px;background:#fff;box-shadow:0 0 20px #fff"></div>'),Cp=mk('<div class="card on" style="font-size:30px">each crossing = tiny capacitor</div>');
const ts=W('field','sends'),tc=W('field','crossing'),tca=W('field','capacitance');cue(ts,'whoosh');cue(tc,'shimmer');cue(tca,'ding');
SCN('field',(t,o)=>{drawGrid(g,t,o,S0('field')-2,(i,j)=>[pop(t,tc+(i+j)*.03)*(.8+.2*Math.sin(t*6+i+j)),1]);const j=Math.floor(((t-ts)*3)%G);place(Pu,X0-60+((t-ts)*900%(PI*G+120)),gy(Math.max(0,j)),1,o*(t>ts?1:0));place(Cp,540,1310,pop(t,tca),o)})}
// FINGER
{const g=gridEls(),F=finger(),V=mk('<div class="card mono" style="font-size:32px">value: <span id="fv" class="acc"></span></div>'),Cd=mk('<div class="pill">finger = conductor</div>');
const tc=W('finger','conducts'),tn=W('finger','near'),tp=W('finger','pulls'),td=W('finger','drops');cue(tn,'pop');cue(tp,'down');cue(td,'tick');
SCN('finger',(t,o)=>{const k=eio(p(t,tp,td));drawGrid(g,t,o,S0('finger')-2,(i,j)=>{const f=fall(i,j)*k;return[.9-.6*f,1,f>.2?'#f87171':ACC]});place(F,FX+20,FY+kf(t,[[tn-.6,700],[tn,130]]),1,o*.55*p(t,tn-.6,tn-.3));$('fv').textContent=(100-38*k).toFixed(0)+(k>.5?' ↓':'');place(V,540,1310,pop(t,tp),o);place(Cd,540,330,pop(t,tc),o)})}
// SCAN
{const g=gridEls(),Ch=node('chip','Controller',140),Hz=mk('<div class="tok" style="font-size:40px">100+ scans / second</div>'),Sl=mk('<div style="width:760px;height:70px;border-radius:12px;background:rgba(196,181,253,.25);border:3px solid #c4b5fd"></div>');
const tc=W('scan','controller'),th=W('scan','hundred'),tl=W('scan','looking');cue(tc,'pop');cue(th,'scramble');cue(tl,'beep');
SCN('scan',(t,o)=>{drawGrid(g,t,o,S0('scan')-2,(i,j)=>{const f=fall(i,j);return[.9-.6*f,1,f>.2?'#f87171':ACC]});const r=((t-tc)*(t>th?24:4))%G;place(Sl,540,gy(Math.floor(r)),1,o*(t>tc?1:0));place(Ch,880,300,pop(t,tc-.2),o);glow(Ch,t>tc);place(Hz,540,1310,pop(t,th),o)})}
// CENTER
{const g=gridEls(),X=mk('<div style="width:50px;height:50px;border:6px solid #fff;border-radius:25px;box-shadow:0 0 30px #fff"></div>'),Cr=mk('<div class="card mono on" style="font-size:32px">touch at x=<span class="acc">542.6</span>, y=<span class="acc">723.1</span></div>'),Wt=[];for(let k=0;k<6;k++)Wt.push(mk('<div class="mono acc" style="font-size:22px;font-weight:800"></div>'));
const tc=W('center','covers'),tw=W('center','weighs'),tf=W('center','finds'),tg=W('center','finer');cue(tc,'pop');cue(tw,'tick');cue(tf,'ding');
SCN('center',(t,o)=>{drawGrid(g,t,o,S0('center')-2,(i,j)=>{const f=fall(i,j);return[.9-.4*f+.5*f*p(t,tw,tw+.4),1,f>.2?'#f87171':ACC]});const near=[[4,4],[5,4],[4,3],[5,3],[3,4],[4,5]];near.forEach(([i,j],k)=>{Wt[k].firstElementChild.textContent=(fall(i,j)*100).toFixed(0);place(Wt[k],gx(i)+28,gy(j)-30,1,o*p(t,tw,tw+.3))});place(X,FX,FY,pop(t,tf),o);place(Cr,540,1310,pop(t,tg),o)})}
// MULTI
{const g=gridEls(),F=[[gx(2),gy(2)],[gx(6)+20,gy(5)],[gx(3)+30,gy(7)-10]],Gv=mk('<div class="card" style="font-size:30px">glove → <span style="color:#f87171">no change</span> → no touch</div>'),Xs=F.map(()=>mk('<div style="width:44px;height:44px;border:6px solid #fff;border-radius:22px"></div>'));
const ts=W('multi','separately'),tm=W('multi','many'),tg=W('multi','glove'),tf=W('multi','fails');cue(tm,'pop');cue(tg,'pop');cue(tf,'down');
SCN('multi',(t,o)=>{const on=t<tg;drawGrid(g,t,o,S0('multi')-2,(i,j)=>{let f=0;F.forEach(([x,y],k)=>{if(t>tm+k*.25&&on)f=Math.max(f,Math.max(0,1-Math.hypot(gx(i)-x,gy(j)-y)/130))});return[.9-.6*f,1,f>.2?'#f87171':ACC]});F.forEach(([x,y],k)=>place(Xs[k],x,y,pop(t,tm+k*.25),o*(on?1:0)));place(Gv,540,1310,pop(t,tg),o)})}
outro([['grid','Grid'],['bolt','Field'],['finger','Finger'],['pin','Centre']],'Glass that','feels you.');
