import numpy as np,soundfile as sf,json
R=48000;rng=np.random.default_rng(1);T=59
def env(n,a=.005,d=.2):t=np.arange(n)/R;return np.minimum(t/a,1)*np.exp(-t/d)
def tone(f,dur,d=.15,a=.003):n=int(dur*R);t=np.arange(n)/R;return np.sin(2*np.pi*f*t)*env(n,a,d)
def sweep(f0,f1,dur):n=int(dur*R);t=np.arange(n)/R;f=np.linspace(f0,f1,n);return np.sin(2*np.pi*np.cumsum(f)/R)*np.sin(np.pi*t/dur)*.6
def bp(x,lo,hi):X=np.fft.rfft(x);fr=np.fft.rfftfreq(len(x),1/R);X[(fr<lo)|(fr>hi)]=0;return np.fft.irfft(X,len(x))
def whoosh(dur=.5):
 n=int(dur*R);x=rng.standard_normal(n);out=np.zeros(n);seg=n//8
 for i in range(8):out[i*seg:(i+1)*seg]=bp(x[i*seg:(i+1)*seg],300+i*500,900+i*900)
 return out*np.sin(np.pi*np.arange(n)/n)**2*1.5
S={'pop':lambda:tone(600,.15,.04)+tone(900,.15,.03)*.5,'tick':lambda:tone(2200,.05,.01),'beep':lambda:tone(1320,.18,.08),
'ding':lambda:tone(1568,.8,.3)+tone(2093,.8,.25)*.5,'whoosh':whoosh,'lock':lambda:np.concatenate([tone(180,.12,.03)[:4000]+bp(rng.standard_normal(4000),2000,6000)*env(4000,.001,.01),tone(180,.12,.03)[4000:]]),
'unlock':lambda:np.concatenate([tone(880,.12,.06),tone(1320,.4,.15)]),'up':lambda:sweep(400,1400,.35),'down':lambda:sweep(1200,300,.4),
'shimmer':lambda:sum(tone(f,1.0,.4)*.3 for f in [1760,2217,2637,3520]),
'scramble':lambda:np.concatenate([tone(1000+rng.integers(0,1500),.04,.015) for _ in range(18)])}
sfx=np.zeros(T*R)
for t,n in json.load(open('sfx.json')):
 s=S[n]();s=s/(np.abs(s).max()+1e-9)*.5;i=int(t*R);sfx[i:i+len(s)]+=s[:len(sfx)-i]
t=np.arange(T*R)/R;pad=sum(np.sin(2*np.pi*f*t)*(.5+.5*np.sin(2*np.pi*.07*t+k)) for k,f in enumerate([110,164.8,220,277.2,329.6]))*.04
beat=60/116;ph=t%beat;kick=np.sin(2*np.pi*(50+80*np.exp(-ph*30))*ph)*np.exp(-ph*9)*.12
bed=(pad+kick)*np.minimum(1,np.minimum(t/2,(T-t)/2.5))
vo,sr=sf.read('vo_full.wav');vo=np.interp(np.arange(T*R)/R,np.arange(len(vo))/sr,vo)
e=np.convolve(np.abs(vo),np.ones(4800)/4800,'same');duck=1-.55*np.clip(e/0.02,0,1)
mix=vo+bed*duck*.9+sfx*.55;mix=np.tanh(mix*1.1)/1.1
sf.write('mix_raw.wav',mix.astype(np.float32),R)
