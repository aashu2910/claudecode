#!/usr/bin/env python3
# Build script.json + scene.js from a compact spec.json (v2 energetic style, no robots):
# {accent,file,buddy:[shape,light],outro:[l1,l2],scenes:[{name,step,text,emoji,ew,items:[[word,label]]}]}
import json,sys,re
d=sys.argv[1];S=json.load(open(f'{d}/spec.json'))
json.dump({'accent':S['accent'],'file':S['file'],'scenes':[{k:s[k] for k in('name','step','text')} for s in S['scenes']]},open(f'{d}/script.json','w'),indent=0,ensure_ascii=False)
L=[]
for s in S['scenes'][:-1]:
  ew=s.get('ew') or re.match(r'[A-Za-z0-9]*',s['text']).group(0)
  L.append({'n':s['name'],'em':s.get('emoji',''),'ew':ew.lower(),'items':[[w.lower(),l] for w,l in s.get('items',[])]})
J=lambda x:json.dumps(x,ensure_ascii=False)
b=S.get('buddy',['circle','#e0f2fe'])
open(f'{d}/scene.js','w').write(f"FXRUN({J(L)});\ncharOutro([[buddy({J(b[0])},{J(b[1])},{J(S['accent'])},'',95,.8),.7]],{J(S['outro'][0])},{J(S['outro'][1])});\n")
