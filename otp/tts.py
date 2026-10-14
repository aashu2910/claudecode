import json, numpy as np, soundfile as sf, re, sys
from kokoro_onnx import Kokoro
S=[("hook","How it works","You tap send OTP, and two seconds later, a code pops up on your phone. But what actually happens in those two seconds?"),
("code","01 · Code is made","First, the app's server generates a random six digit code. It saves a copy, with a timer of about five minutes."),
("gateway","02 · SMS gateway","Then it hands the code and your number to an SMS gateway. That's a service that connects apps to phone networks."),
("smsc","03 · Your carrier","The gateway finds which carrier owns your number, and passes the message to that carrier's text centre, called the SMSC."),
("locate","04 · Find the phone","The SMSC asks a subscriber database where your phone is right now. Which network, which tower."),
("air","05 · Over the air","The tower sends the text on a signalling channel, the same one used to set up calls. That's why OTPs arrive even without mobile data."),
("verify","06 · Verify","You type the code. The server compares it with its saved copy. If it matches, and the timer hasn't run out, you're in."),
("outro","Recap","App, gateway, carrier, tower, phone. All in about two seconds. Follow for more on how things really work.")]
speed=float(sys.argv[1]) if len(sys.argv)>1 else 1.0
k=Kokoro("kokoro-v1.0.onnx","voices-v1.0.bin")
auds=[]
for n,_,t in S:
    a,sr=k.create(t,voice="af_heart",speed=speed,lang="en-us")
    nz=np.where(np.abs(a)>0.01)[0]; a=a[max(0,nz[0]-240):nz[-1]+2400]
    sf.write(f"vo_{n}.wav",a,sr); auds.append(a)
sp=sum(len(a) for a in auds)/sr; gap=(59-0.45-2.0-sp)/(len(S)-1)
print("speech",sp,"gap",gap)
scenes=[];words=[];t0=0.45
for (n,st,txt),a in zip(S,auds):
    d=len(a)/sr; scenes.append(dict(name=n,step=st,start=t0,dur=d))
    # silences
    hop=240; rms=np.array([np.sqrt(np.mean(a[i:i+480]**2)+1e-12) for i in range(0,len(a),hop)]); db=20*np.log10(rms)
    sil=[];i=0
    while i<len(db):
        if db[i]<-38:
            j=i
            while j<len(db) and db[j]<-38: j+=1
            if (j-i)*hop/sr>=0.09 and i>0 and j<len(db): sil.append(((i*hop)/sr,(j*hop)/sr))
            i=j
        else: i+=1
    ws=txt.split(); clauses=[];cur=[]
    for w in ws:
        cur.append(w)
        if re.search(r"[,.?!:]$",w): clauses.append(cur);cur=[]
    if cur: clauses.append(cur)
    nb=len(clauses)-1
    chosen=sorted(sorted(sil,key=lambda s:s[0]-s[1])[:nb]) if nb else []
    bounds=[0.0]
    for s in chosen: bounds+= [s[0],s[1]]
    bounds.append(d)
    if len(chosen)<nb:  # fallback proportional
        tot=sum(len(w)+2.2 for w in ws);bounds=[0.0];acc=0
        for c in clauses[:-1]:
            acc+=sum(len(w)+2.2 for w in c); x=d*acc/tot; bounds+=[x,x]
        bounds.append(d)
    for ci,c in enumerate(clauses):
        a0,b0=bounds[2*ci],bounds[2*ci+1]; W=[len(w)+2.2 for w in c]; tw=sum(W); acc=a0
        for w,wt in zip(c,W):
            e=acc+(b0-a0)*wt/tw; words.append(dict(w=w,s=round(t0+acc,3),e=round(t0+e,3),scene=n)); acc=e
    t0+=d+gap
json.dump(dict(total=59.0,scenes=scenes,words=words),open("timeline.json","w"),indent=1)
full=np.zeros(int(59*sr),dtype=np.float32)
for s,a in zip(scenes,auds):
    i=int(s["start"]*sr); full[i:i+len(a)]+=a
sf.write("vo_full.wav",full,sr)
