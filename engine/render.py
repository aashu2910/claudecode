import json,sys,subprocess,os
from playwright.sync_api import sync_playwright
D=os.path.abspath(sys.argv[1]);E=os.path.dirname(os.path.abspath(__file__))
J=json.load(open(D+'/script.json'))
html=open(E+'/base.html').read().replace('__TL__',open(D+'/timeline.json').read()).replace('__ACCENT__',J['accent']).replace('__SCENE__',open(D+'/scene.js').read())
open(D+'/built.html','w').write(html)
mode=sys.argv[2]
with sync_playwright() as pw:
    b=pw.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome');pg=b.new_page(viewport={'width':1080,'height':1920})
    errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.goto('file://'+D+'/built.html');pg.wait_for_timeout(500)
    if errs: print('ERR',errs);sys.exit(1)
    json.dump(pg.evaluate('window.SFX'),open(D+'/sfx.json','w'))
    if mode=='stills':
        tl=json.load(open(D+'/timeline.json'));ts=[]
        for s in tl['scenes']: ts+= [s['start']+s['dur']*.35, s['start']+s['dur']*.95]
        for i,t in enumerate(ts):
            pg.evaluate(f'render({t})');pg.screenshot(path=f'{D}/st_{i:02d}.jpg',type='jpeg',quality=80)
        if errs: print('ERR',errs)
    else:
        ff=subprocess.Popen(['ffmpeg','-y','-loglevel','error','-f','image2pipe','-framerate','30','-c:v','mjpeg','-i','-','-c:v','libx264','-crf','18','-pix_fmt','yuv420p',D+'/video.mp4'],stdin=subprocess.PIPE)
        for f in range(59*30):
            pg.evaluate(f'render({f/30})');ff.stdin.write(pg.screenshot(type='jpeg',quality=94))
        ff.stdin.close();ff.wait()
    b.close()
