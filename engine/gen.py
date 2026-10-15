#!/usr/bin/env python3
# Build script.json + scene.js from a compact spec.json:
# {accent,file,buddy:[shape,light],outro:[l1,l2],scenes:[{name,step,text,emoji,ew,items:[[word,label]],kiko}]}
import json,sys,re
d=sys.argv[1];S=json.load(open(f'{d}/spec.json'))
json.dump({'accent':S['accent'],'file':S['file'],'scenes':[{k:s[k] for k in('name','step','text')} for s in S['scenes']]},open(f'{d}/script.json','w'),indent=0,ensure_ascii=False)
J=lambda x:json.dumps(x,ensure_ascii=False)
cues=['pop','tick','ding','whoosh','lock','beep','scramble']
out=[]
for si,s in enumerate(S['scenes'][:-1]):
  n=s['name'];its=s.get('items',[]);hook=si==0
  em=s.get('emoji','');ew=s.get('ew') or re.match(r'[A-Za-z0-9]*',s['text']).group(0)
  ny=len(its);top=880 if em else 600
  out.append("{"+f"const E=mk('<div style=\"font-size:{230 if hook else 190}px\">{em}</div>'),"
    f"L={J([i[1] for i in its])}.map((s,i)=>label(s,i==0?'tok':'pill',{34 if max([len(i[1]) for i in its]+[0])<26 else 28}))"+(",Q=qmark();" if hook else ";")+
    f"const te=W({J(n)},{J(ew.lower())}),T={J([i[0].lower() for i in its])}.map(w=>W({J(n)},w));"
    f"cue(te,'whoosh');T.forEach((x,i)=>cue(x,{J(cues)}[(i+{si})%7]));"
    f"SCN({J(n)},(t,o)=>{{place(E,540,{560 if hook else 600},pop(t,te),o,Math.sin(t*2)*4);"
    f"T.forEach((x,i)=>place(L[i],540,{top}+i*130,pop(t,x),o));"
   
    + ("const tq=T.length?T[T.length-1]:te;place(Q,860,1250,pop(t,tq),o*p(t,tq,tq+.1),Math.sin(t*3)*8);" if hook else "")
    + "})}")
b=S.get('buddy',['circle','#e0f2fe'])
out.append(f"charOutro([[buddy({J(b[0])},{J(b[1])},{J(S['accent'])},'',95,.8),.7]],{J(S['outro'][0])},{J(S['outro'][1])});")
open(f'{d}/scene.js','w').write('\n'.join(out))
