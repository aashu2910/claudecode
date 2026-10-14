import json,sys,subprocess
from playwright.sync_api import sync_playwright
tl=open('timeline.json').read()
html=open('page.html').read().replace('__TL__',tl);open('built.html','w').write(html)
mode=sys.argv[1]
with sync_playwright() as pw:
    b=pw.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome');pg=b.new_page(viewport={'width':1080,'height':1920})
    pg.goto('file:///home/user/claudecode/otp/built.html');pg.wait_for_timeout(500)
    json.dump(pg.evaluate('window.SFX'),open('sfx.json','w'))
    if mode=='stills':
        for i,t in enumerate(map(float,sys.argv[2].split(','))):
            pg.evaluate(f'render({t})');pg.screenshot(path=f'st_{i:02d}.jpg',type='jpeg',quality=80)
    else:
        ff=subprocess.Popen(['ffmpeg','-y','-loglevel','error','-f','image2pipe','-framerate','30','-c:v','mjpeg','-i','-','-c:v','libx264','-crf','18','-pix_fmt','yuv420p','video.mp4'],stdin=subprocess.PIPE)
        for f in range(59*30):
            pg.evaluate(f'render({f/30})');ff.stdin.write(pg.screenshot(type='jpeg',quality=94))
        ff.stdin.close();ff.wait()
    b.close()
