// ---- Character kit: cute faces, blink, squash & stretch, mascot "Kiko"
const SHD='filter:drop-shadow(0 18px 22px rgba(0,0,0,.45))';
let _g=0;const gid=()=>'g'+(_g++);
function grad(id,c1,c2,cx='35%',cy='30%'){return `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="75%"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`}
function face(cx,cy,s,{blink=0,look=[0,0],mood='happy',eye='#1b1b2f',cheek=true,gap=18}={}){
 let out='';const rx=11*s,ry=14*s*(1-blink*.92);
 for(const sx of [-1,1]){const x=cx+sx*gap*s;
  if(mood==='joy'&&blink<.5){out+=`<path d="M${x-rx} ${cy+3*s} Q${x} ${cy-15*s} ${x+rx} ${cy+3*s}" stroke="${eye}" stroke-width="${4.5*s}" fill="none" stroke-linecap="round"/>`;continue}
  out+=`<ellipse cx="${x+look[0]*2*s}" cy="${cy+look[1]*2*s}" rx="${rx}" ry="${Math.max(1,ry)}" fill="${eye}"/>`;
  if(blink<.5)out+=`<circle cx="${x+look[0]*4*s+3.5*s}" cy="${cy+look[1]*4*s-5*s}" r="${4.2*s}" fill="#fff"/><circle cx="${x+look[0]*4*s-4*s}" cy="${cy+look[1]*4*s+5*s}" r="${2*s}" fill="#fff" opacity=".75"/>`}
 if(cheek)out+=`<ellipse cx="${cx-(gap+15)*s}" cy="${cy+15*s}" rx="${8*s}" ry="${5*s}" fill="#ff6f9c" opacity=".5"/><ellipse cx="${cx+(gap+15)*s}" cy="${cy+15*s}" rx="${8*s}" ry="${5*s}" fill="#ff6f9c" opacity=".5"/>`;
 const my=cy+22*s;
 if(mood==='o')out+=`<ellipse cx="${cx}" cy="${my+3*s}" rx="${6*s}" ry="${8*s}" fill="#5b1730"/>`;
 else if(mood==='joy'||mood==='grin')out+=`<path d="M${cx-12*s} ${my-2*s} Q${cx} ${my+17*s} ${cx+12*s} ${my-2*s} Z" fill="#5b1730"/><path d="M${cx-6*s} ${my+6*s} Q${cx} ${my+12*s} ${cx+6*s} ${my+6*s}" fill="#ff8fa3"/>`;
 else{const d={happy:`M${cx-9*s} ${my} Q${cx} ${my+9*s} ${cx+9*s} ${my}`,sad:`M${cx-9*s} ${my+6*s} Q${cx} ${my-3*s} ${cx+9*s} ${my+6*s}`,flat:`M${cx-8*s} ${my+3*s} L${cx+8*s} ${my+3*s}`,worry:`M${cx-9*s} ${my+4*s} Q${cx-4*s} ${my} ${cx} ${my+4*s} Q${cx+4*s} ${my+8*s} ${cx+9*s} ${my+4*s}`}[mood]||'';out+=`<path d="${d}" stroke="${eye}" stroke-width="${4*s}" fill="none" stroke-linecap="round"/>`}
 return out}
const blinkAt=(t,seed=0)=>{const ph=(t+seed*1.37)%3.3;return ph<.16?Math.sin(ph/.16*Math.PI):0};
function jump(t,t0,h=110,d=.7){if(t0==null||t<t0)return[0,1,1];const u=(t-t0)/d;
 if(u<.15){const k=Math.sin(u/.15*Math.PI);return[0,1+.16*k,1-.18*k]}
 if(u<1){const k=(u-.15)/.85;return[-h*4*k*(1-k),1-.08*Math.sin(k*Math.PI),1+.12*Math.sin(k*Math.PI)]}
 const k=Math.min(1,(u-1)/.3),e=Math.sin(k*Math.PI)*(1-k*.5);return[0,1+.14*e,1-.14*e]}
// character element: svgFn(opts)-> inner svg; anchored at feet (bottom-centre)
function char(w,h,fn){const el=mk('');el.cw=w;el.ch=h;el.fn=fn;el.seed=Math.random()*3;return el}
function cplace(c,t,x,y,o={}){const{s=1,op=1,jumpT=null,jh=110,r=0,bob=1,popT=null,...rest}=o;if(op<=.001||(popT!=null&&t<popT)){c.style.visibility='hidden';return}
 const [dy,jx,jy]=jump(t,jumpT,jh);const br=1+.025*Math.sin(t*3.2+c.seed*2)*bob;const pp=popT!=null?eob(clamp((t-popT)/.5)):1;
 const sx=s*jx*pp/Math.sqrt(br),sy=s*jy*pp*br;c.innerHTML=`<svg width="${c.cw}" height="${c.ch}" viewBox="0 0 ${c.cw} ${c.ch}" style="overflow:visible;${SHD}">${c.fn({t,blink:blinkAt(t,c.seed),...rest})}</svg>`;
 c.style.visibility='visible';c.style.opacity=op;c.style.transformOrigin='50% 100%';c.style.transform=`translate(${x}px,${y+dy*s}px) translate(-50%,-100%) rotate(${r}deg) scale(${sx},${sy})`}
// ---- Mascot Kiko (240x300)
function kikoSVG({t=0,blink=0,mood='happy',look=[0,0],wave=0,point=0}){const g1=gid(),g2=gid(),g3=gid();
 const aL=-30-wave*(60+25*Math.sin(t*12)),aR=30+point*60;
 return `<defs>${grad(g1,'#ffffff','#c9d3ff')}${grad(g2,'#26305e','#0c1027','50%','40%')}${grad(g3,ACC,ACC,'50%','50%')}</defs>
 <line x1="120" y1="48" x2="120" y2="14" stroke="#c9d3ff" stroke-width="7" stroke-linecap="round"/><circle cx="120" cy="12" r="12" fill="${ACC}" style="filter:drop-shadow(0 0 10px ${ACC})"/>
 <g transform="rotate(${aL} 62 222)"><rect x="20" y="214" width="46" height="18" rx="9" fill="#c9d3ff"/><circle cx="22" cy="223" r="13" fill="#fff"/></g>
 <g transform="rotate(${aR} 178 222)"><rect x="174" y="214" width="46" height="18" rx="9" fill="#c9d3ff"/><circle cx="218" cy="223" r="13" fill="#fff"/></g>
 <ellipse cx="120" cy="238" rx="62" ry="50" fill="url(#${g1})"/><circle cx="120" cy="238" r="12" fill="${ACC}" opacity=".9"/>
 <rect x="22" y="44" width="196" height="156" rx="70" fill="url(#${g1})"/><rect x="44" y="68" width="152" height="108" rx="48" fill="url(#${g2})"/>
 <ellipse cx="88" cy="84" rx="26" ry="8" fill="#fff" opacity=".12"/>
 ${face(120,112,1.25,{blink,mood,look,eye:ACC,cheek:false,gap:22})}
 <ellipse cx="62" cy="160" rx="10" ry="6" fill="#ff6f9c" opacity=".55"/><ellipse cx="178" cy="160" rx="10" ry="6" fill="#ff6f9c" opacity=".55"/>`}
const kiko=()=>char(240,300,kikoSVG);
// speech/thought bubble
const bubble=(html,fs=34)=>mk(`<div style="position:relative;background:#fff;color:#151520;border-radius:34px;padding:18px 30px;font-weight:800;font-size:${fs}px;white-space:nowrap;box-shadow:0 14px 30px rgba(0,0,0,.35)">${html}<div style="position:absolute;left:38px;bottom:-16px;width:32px;height:32px;background:#fff;transform:rotate(45deg);border-radius:6px"></div></div>`);
