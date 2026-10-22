#!/usr/bin/env python3
"""One-pager generator v2: every shop gets its own layout recipe (hero, sections, order),
text effect, reveal style and signature motion. Usage: python3 build.py [slug ...]"""
import sys, os, html, json
from shops import SHOPS
E = html.escape
OUT = os.path.dirname(os.path.abspath(__file__))
BASE = open(os.path.join(OUT, 'engine.css'), encoding='utf-8').read()
JS = open(os.path.join(OUT, 'engine.js'), encoding='utf-8').read()


def H(tag, txt, fx, cls='', extra=''):
    """Heading with effect. txt may contain [[highlight]] markers."""
    parts = txt.split('[[')
    out = E(parts[0])
    for p in parts[1:]:
        a, b = p.split(']]', 1)
        out += f'<span class="hl">{E(a)}</span>' + E(b)
    if fx == 'scramble':
        return f'<{tag} class="{cls}" data-fx="scramble" {extra}>{E(txt.replace("[[", "").replace("]]", ""))}</{tag}>'
    return f'<{tag} class="fx {cls}" data-fx="{fx}" {extra}>{out}</{tag}>'


def addbtn(n): return f'<button class="add" aria-label="Add {E(n)}" data-name="{E(n)}">+</button>'


def head(s, i, left=False):
    t = s['sec'][i]
    p = t[2] if len(t) > 2 else ''
    return (f'<div class="head{" left" if left else ""}"><span class="eyebrow rv">{E(t[0])}</span>'
            + H('h2', t[1], s['d']['fx']) + (f'<p class="rv">{E(p)}</p>' if p else '') + '</div>')


def chips(s): return '<div class="chips">' + ''.join(f'<div><strong>{E(a)}</strong>{E(b)}</div>' for a, b in s['chips']) + '</div>'


def ctas(s): return f'<div class="cta"><a href="#shop" class="btn">{E(s["cta"][0])} →</a><a href="#about" class="btn ghost">{E(s["cta"][1])}</a></div>'


def h1(s):
    if s['d']['hero'] == 'typer':
        return f'<h1>{E(s["h1"])}<br><span class="hl" data-type=\'{E(json.dumps(s["typer"]))}\'></span><span class="caret"></span></h1>'
    return H('h1', s['h1'], s['d']['fx'])


def intro(s, delay=.5):
    return (f'<span class="eyebrow in-load" style="animation-delay:.1s">{E(s["eyebrow"])}</span>' + h1(s)
            + f'<p class="lead in-load" style="animation-delay:{delay}s">{E(s["lead"])}</p>'
            + f'<div class="in-load" style="animation-delay:{delay+.2}s">{ctas(s)}{chips(s)}</div>')


# ---------------------------------------------------------------- heroes
def hero_orbit(s):
    orb = ''.join(f'<span style="left:calc(50% + 46%*cos({a}deg) - 35px);top:calc(50% + 46%*sin({a}deg) - 35px)">{e}</span>'
                  for e, a in zip(s['orbit'], [0, 60, 120, 180, 240, 300]))
    return f'''<header class="hero h-orbit" id="top"><div class="wrap"><div>{intro(s)}</div>
<div class="art" data-follow><div class="ring"></div><div class="blob"></div><div class="orbit">{orb}</div><div class="big-emoji">{s["emoji"]}</div></div></div></header>'''


def hero_mega(s):
    word = (s['circle'] + ' • ') * 2
    return f'''<header class="hero h-mega" id="top"><div class="mega-emoji">{s["emoji"]}</div>
<div class="cbadge"><svg viewBox="0 0 150 150"><defs><path id="cp" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"/></defs><text><textPath href="#cp">{E(word)}</textPath></text></svg><div class="c">{s["logo"]}</div></div>
<div class="wrap">{intro(s, .7)}</div></header>'''


def hero_panel(s):
    slides = ''.join(f'<div class="slide{" on" if i == 0 else ""}"><b>{p[0]}</b><span>{E(p[1])}</span></div>' for i, p in enumerate(s['products'][:4]))
    return f'''<header class="hero h-panel" id="top"><div class="grid2"><div class="panel-l">{slides}</div>
<div class="panel-r">{intro(s)}<div class="sbar">{"<i><b></b></i>" * 4}</div></div></div></header>'''


def hero_typer(s):
    tiles = ''.join(f'<span>{s["orbit"][i % len(s["orbit"])]}</span>' for i in range(40))
    return f'''<header class="hero h-typer" id="top"><div class="tiles">{tiles}</div><div class="veil"></div><div class="wrap">{intro(s)}</div></header>'''


def hero_waves(s):
    def wv(cls, op, y):
        d = f'M0,{y} C150,{y-40} 350,{y+40} 500,{y} S850,{y-40} 1000,{y} S1350,{y+40} 1500,{y} S1850,{y-40} 2000,{y} V180 H0Z'
        return f'<svg class="wv {cls}" viewBox="0 0 2000 180" preserveAspectRatio="none"><path d="{d}" fill="var(--bg2)" opacity="{op}"/></svg>'
    return f'''<header class="hero h-waves" id="top"><div class="hero-bubbles" style="position:absolute;inset:0"></div><div class="wrap"><div>{intro(s)}</div>
<div class="disc" data-follow>{s["emoji"]}</div></div>{wv("w3", .35, 80)}{wv("w2", .6, 100)}{wv("w1", 1, 120)}</header>'''


def hero_bento(s):
    c = s['chips']
    return f'''<header class="hero h-bento" id="top"><div class="wrap"><div class="bento">
<div class="bt main" style="animation-delay:.1s">{intro(s)}</div>
<div class="bt em" style="animation-delay:.35s"><span>{s["emoji"]}</span></div>
<div class="bt dark" style="animation-delay:.5s"><strong>{E(c[0][0])}</strong><small>{E(c[0][1])}</small></div>
<div class="bt" style="animation-delay:.65s"><strong class="hl">{E(c[1][0])}</strong><small>{E(c[1][1])}</small></div>
<div class="bt em" style="animation-delay:.8s"><span style="animation-delay:-2s">{s["orbit"][0]}</span></div></div></div></header>'''


def hero_ring(s):
    n = len(s['orbit'])
    ring = ''.join(f'<span style="transform:rotateY({i*360/n}deg) translateZ(var(--rz))">{e}</span>' for i, e in enumerate(s['orbit']))
    return f'''<header class="hero h-ring" id="top"><div class="wrap">{intro(s, .6)}<div class="stage3d in-load" style="animation-delay:.9s"><div class="ring3d">{ring}</div></div></div></header>'''


HEROES = dict(orbit=hero_orbit, mega=hero_mega, panel=hero_panel, typer=hero_typer, waves=hero_waves, bento=hero_bento, ring=hero_ring)


# ---------------------------------------------------------------- sections
def strip(s, kind):
    if kind == 'none': return ''
    if kind == 'icons':
        return '<div class="wrap strip-circle" data-stagger>' + ''.join(f'<span style="animation-delay:{i*.3}s">{e}</span>' for i, e in enumerate(s['orbit'] + s['gallery'][:2])) + '</div>'
    if kind == 'ticker':
        w = s['ticker'][1][:4]
        return f'<div class="ticker wrap rv">{E(s["ticker"][0])} <span class="roll"><span>' + ''.join(f'<i>{E(x)}</i>' for x in w + w[:1]) + '</span></span></div>'
    if kind == 'pills':
        return '<div class="wrap pills" data-stagger>' + ''.join(f'<span>{E(x)}</span>' for x in s['cats']) + '</div>'
    if kind == 'ribbon':
        return '<div class="ribbon"><div class="wrap" data-stagger>' + ''.join(f'<div><strong data-n="{n}" data-s="{E(x)}">0</strong>{E(l)}</div>' for n, x, l in s['stats']) + '</div></div>'


def features(s, kind):
    F = s['features']
    if kind == 'cards':
        body = f'<div class="grid {"g4" if len(F) == 4 else "g3"}" data-stagger data-tilt>' + ''.join(f'<div class="card"><div class="ico">{i}</div><h3>{E(t)}</h3><p>{E(d)}</p></div>' for i, t, d in F) + '</div>'
    elif kind == 'zigzag':
        body = '<div class="zig">' + ''.join(f'<div class="zrow"><div class="zart rv"><span>{i}</span></div><div class="rv"><div class="num">0{k+1}</div><h3>{E(t)}</h3><p class="mut">{E(d)}</p></div></div>' for k, (i, t, d) in enumerate(F)) + '</div>'
    elif kind == 'accordion':
        body = '<div class="acc" data-stagger>' + ''.join(f'<details{" open" if k == 0 else ""}><summary><span style="font-size:1.6rem">{i}</span>{E(t)}<em>+</em></summary><div class="body">{E(d)}</div></details>' for k, (i, t, d) in enumerate(F)) + '</div>'
    elif kind == 'tabs':
        body = ('<div class="tabs rv">' + ''.join(f'<button class="{"on" if k == 0 else ""}">{i} {E(t)}</button>' for k, (i, t, d) in enumerate(F)) + '</div>'
                + ''.join(f'<div class="tabpane{" on" if k == 0 else ""}"><div class="zart"><span>{i}</span></div><div><h3 style="font-size:2rem;margin-bottom:12px">{E(t)}</h3><p class="mut">{E(d)}</p></div></div>' for k, (i, t, d) in enumerate(F)))
    elif kind == 'bento':
        body = '<div class="bgrid" data-stagger data-tilt>' + ''.join(f'<div class="card"><div class="ico">{i}</div><h3>{E(t)}</h3><p>{E(d)}</p></div>' for i, t, d in F) + '</div>'
    elif kind == 'vline':
        body = '<div class="vline"><i class="fill"></i>' + ''.join(f'<div class="vitem rv"><div class="dot">{i}</div><h3>{E(t)}</h3><p class="mut">{E(d)}</p></div>' for i, t, d in F) + '</div>'
    return f'<section id="features"><div class="wrap">{head(s, 0)}{body}</div></section>'


def products(s, kind):
    P = s['products']
    cols = ['a', 'b', 'c']
    tagh = lambda tg: f'<span class="tag">{E(tg)}</span>' if tg else ''
    if kind in ('grid', 'carousel'):
        cards = ''.join(f'<div class="card prod"><div class="pic" style="background:color-mix(in srgb,var(--{cols[k % 3]}) 14%,var(--card))">{tagh(tg)}<span>{e}</span></div>'
                        f'<div class="info"><div><h3>{E(n)}</h3><p>{E(d)}</p></div><div style="text-align:right"><div class="price">{E(pr)}</div>{addbtn(n)}</div></div></div>' for k, (e, n, d, pr, tg) in enumerate(P))
        body = (f'<div class="grid g3" data-stagger data-tilt>{cards}</div>' if kind == 'grid'
                else f'<div class="carnav rv"><button class="p" aria-label="Previous">←</button><button class="n" aria-label="Next">→</button></div><div class="car">{cards}</div>')
    elif kind == 'menu':
        body = '<div class="menu" data-stagger>' + ''.join(f'<div class="mi"><div class="e">{e}</div><div class="mt"><div><h3>{E(n)}</h3><i></i><span class="price">{E(pr)}</span></div><p>{E(d)}{" · " + E(tg) if tg else ""}</p></div>{addbtn(n)}</div>' for e, n, d, pr, tg in P) + '</div>'
    elif kind == 'flip':
        body = '<div class="grid g3" data-stagger>' + ''.join(f'<div class="flipc"><div class="in3"><div class="f"><b>{e}</b><h3>{E(n)}</h3>{tagh(tg) or "<small class=mut>Hover to see more</small>"}</div>'
                                                          f'<div class="bk"><h3>{E(n)}</h3><p>{E(d)}</p><div class="price">{E(pr)}</div>{addbtn(n)}</div></div></div>' for e, n, d, pr, tg in P) + '</div>'
    elif kind == 'pricing':
        body = '<div class="plans" data-stagger>' + ''.join(f'<div class="card plan{" feat" if k == 1 else ""}"><div class="e">{e}</div>{tagh(tg)}<h3 style="margin-top:10px">{E(n)}</h3><p>{E(d)}</p><span class="price">{E(pr)}</span><a href="#contact" class="btn{"" if k == 1 else " ghost"}">Choose</a></div>' for k, (e, n, d, pr, tg) in enumerate(P[:3])) + '</div>'
        body += '<div class="grid g3" data-stagger style="margin-top:30px">' + ''.join(f'<div class="card" style="display:flex;gap:16px;align-items:center"><span style="font-size:2.4rem">{e}</span><div style="flex:1"><h3 style="font-size:1.1rem">{E(n)}</h3><p>{E(d)}</p></div><span class="price" style="font-size:1.1rem">{E(pr)}</span></div>' for e, n, d, pr, tg in P[3:]) + '</div>'
    elif kind == 'spotlight':
        data = json.dumps([[e, n, d, pr] for e, n, d, pr, tg in P])
        body = (f'<div class="spot"><div class="spot-main rv" data-items=\'{E(data)}\'><b>{P[0][0]}</b><div class="cap"><div><h3>{E(P[0][1])}</h3><p class="mut">{E(P[0][2])}</p></div><div class="price">{E(P[0][3])}</div></div></div>'
                '<div class="thumbs" data-stagger>' + ''.join(f'<button><span>{e}</span><div><b>{E(n)}</b><br><small>{E(pr)}</small></div></button>' for e, n, d, pr, tg in P) + '</div></div>')
    return f'<section id="shop" class="alt"><div class="wrap">{head(s, 1)}{body}</div></section>'


def about(s, kind):
    ab = s['about']
    pts = ''.join(f'<li><b>✓</b><span>{E(x)}</span></li>' for x in ab['points'])
    txt = f'<span class="eyebrow">Our story</span><h2 class="h2">{E(ab["title"])}</h2><p class="mut">{E(ab["text"])}</p><ul class="list">{pts}</ul><a href="#contact" class="btn">{E(ab["cta"])} →</a>'
    if kind == 'stack':
        return f'<section id="about"><div class="wrap split"><div class="stack rv"><div class="s1">{ab["e1"]}</div><div class="s2">{ab["e2"]}</div><div class="s3"><span>{E(ab["since"])}</span></div></div><div class="rv">{txt}</div></div></section>'
    if kind == 'statement':
        w = ' '.join(f'<span class="wd">{E(x)}</span>' for x in ab['text'].split())
        return f'''<section id="about"><div class="wrap statement"><div class="em-row rv">{ab["e1"]}{ab["e2"]}</div><span class="eyebrow">{E(ab["since"])}</span><h2 class="h2" style="margin-bottom:30px">{E(ab["title"])}</h2><p class="big">{w}</p>
<ul class="list rv" style="max-width:520px;margin:34px auto;text-align:left">{pts}</ul><a href="#contact" class="btn rv">{E(ab["cta"])} →</a></div></section>'''
    return f'<section id="about"><div class="wrap"><div class="reveal-img rv"><div class="ghost">{ab["e1"]}</div><div class="txt">{txt}</div></div></div></section>'


def stats(s, kind):
    S = s['stats']
    if kind == 'band':
        b = '<div class="stats rv">' + ''.join(f'<div><strong data-n="{n}" data-s="{E(x)}">0</strong>{E(l)}</div>' for n, x, l in S) + '</div>'
    elif kind == 'rings':
        offs = [440 - 440 * f for f in (.78, .92, .64, .98)]
        b = '<div class="rings" data-stagger>' + ''.join(f'<div style="--off:{o}"><svg viewBox="0 0 150 150"><circle class="bgc" cx="75" cy="75" r="70"/><circle class="fg" cx="75" cy="75" r="70"/></svg><strong data-n="{n}" data-s="{E(x)}">0</strong><div class="mut">{E(l)}</div></div>' for (n, x, l), o in zip(S, offs)) + '</div>'
    elif kind == 'inline':
        b = '<div class="inline-stats" data-stagger>' + ''.join(f'<div><strong class="hl" data-n="{n}" data-s="{E(x)}">0</strong><span class="mut">{E(l)}</span></div>' for n, x, l in S) + '</div>'
    else:
        return ''
    return f'<section style="padding:40px 0 100px"><div class="wrap">{b}</div></section>'


def steps(s, kind):
    T = s['steps']
    if kind == 'line':
        b = '<div class="line"><i></i></div><div class="grid g4 steps" data-stagger>' + ''.join(f'<div class="step"><h3>{E(t)}</h3><p>{E(d)}</p></div>' for t, d in T) + '</div>'
    elif kind == 'circles':
        b = '<div class="circles" data-stagger>' + ''.join(f'<div><div class="c">{k+1}</div><h3>{E(t)}</h3><p>{E(d)}</p></div>' for k, (t, d) in enumerate(T)) + '</div>'
    else:
        b = '<div class="tl"><i class="fill"></i>' + ''.join(f'<div class="tli rv"><h3>{E(t)}</h3><p>{E(d)}</p></div>' for t, d in T) + '</div>'
    return f'<section class="alt"><div class="wrap">{head(s, 2)}{b}</div></section>'


def reviews(s, kind):
    R = s['testimonials']
    who = lambda n, r: f'<div class="who"><i>{E(n[0])}</i><span>{E(n)}<small>{E(r)}</small></span></div>'
    if kind == 'fade':
        b = '<div class="tslider rv">' + ''.join(f'<div class="t"><div class="stars">★★★★★</div><blockquote>“{E(q)}”</blockquote>{who(n, r)}</div>' for q, n, r in R) + '</div><div class="dots">' + ''.join(f'<button aria-label="Review {i+1}"></button>' for i in range(len(R))) + '</div>'
    elif kind == 'deck':
        b = '<div class="deck rv">' + ''.join(f'<div class="card"><div class="stars">★★★★★</div><blockquote>“{E(q)}”</blockquote>{who(n, r)}</div>' for q, n, r in R) + '</div><p class="mut" style="text-align:center;margin-top:60px">Tap the card for the next review</p>'
    elif kind == 'wall':
        b = '<div class="wall">' + ''.join(f'<div class="card rv"><div class="stars">★★★★★</div><blockquote>“{E(q)}”</blockquote>{who(n, r)}</div>' for q, n, r in R) + '</div>'
    else:
        data = json.dumps([[q, n, r] for q, n, r in R])
        b = f'<div class="bq rv" data-q=\'{E(data)}\'><div class="mark">“</div><blockquote></blockquote><div class="nm"></div><div class="people">' + ''.join(f'<button aria-label="{E(n)}">{E(n[0])}</button>' for q, n, r in R) + '</div></div>'
    return f'<section id="reviews"><div class="wrap"><div class="head"><span class="eyebrow rv">Happy customers</span>{H("h2", s["sec"][3], s["d"]["fx"])}</div>{b}</div></section>'


def gallery(s, kind):
    G = s['gallery']
    cols = ['a', 'b', 'c', 'a', 'b', 'c']
    if kind == 'mosaic':
        b = '<div class="gal" data-stagger>' + ''.join(f'<div style="background:linear-gradient(135deg,color-mix(in srgb,var(--{cols[i]}) {[70,30,45,25,60,35][i]}%,var(--card)),var(--card))">{e}</div>' for i, e in enumerate(G)) + '</div>'
        return f'<section style="padding-top:0"><div class="wrap">{b}</div></section>'
    if kind == 'hscroll':
        cards = ''.join(f'<div style="background:linear-gradient(160deg,color-mix(in srgb,var(--{cols[i]}) 55%,var(--card)),var(--card))">{e}</div>' for i, e in enumerate(G))
        return f'<section class="hs"><div class="pin"><div class="wrap"><div class="head left"><span class="eyebrow">Gallery</span><h2 class="h2">{E(s.get("galTitle", "A look inside"))}</h2></div></div><div class="row">{cards}</div></div></section>'
    if kind == 'polaroid':
        caps = s.get('galCaps', [''] * 6)
        b = '<div class="pola" data-stagger>' + ''.join(f'<div><b style="background:color-mix(in srgb,var(--{cols[i]}) 25%,#fff)">{e}</b><small>{E(caps[i])}</small></div>' for i, e in enumerate(G)) + '</div>'
        return f'<section><div class="wrap"><div class="head"><span class="eyebrow rv">Gallery</span><h2 class="h2 rv">{E(s.get("galTitle", "Moments we love"))}</h2></div>{b}</div></section>'
    return ''


def banner(s, kind):
    t, p, c = s['banner']
    if kind == 'bubbles':
        b = f'<div class="banner rv"><div class="bubbles"></div><h2>{E(t)}</h2><p>{E(p)}</p><a href="#contact" class="btn">{E(c)} →</a></div>'
    elif kind == 'halves':
        b = f'<div class="banner halves rv"><div class="l"><h2>{E(t)}</h2><p class="mut" style="opacity:1">{E(p)}</p><a href="#contact" class="btn">{E(c)} →</a></div><div class="r"><span>{s["fab"]}</span></div></div>'
    else:
        b = f'<div class="banner spot rv"><h2>{E(t)}</h2><p>{E(p)}</p><a href="#contact" class="btn">{E(c)} →</a></div>'
    return f'<section style="padding-top:0"><div class="wrap">{b}</div></section>'


def contact(s):
    c = s['contact']
    opts = ''.join(f'<option>{E(o)}</option>' for o in c['options'])
    return f'''<section id="contact" class="alt"><div class="wrap contact"><div class="rv"><span class="eyebrow">Visit us</span><h2 class="h2" style="margin-bottom:26px">{E(c["title"])}</h2>
<div class="info-row"><i>📍</i><div><b>Address</b><br><span class="mut">{E(c["addr"])}</span></div></div>
<div class="info-row"><i>📞</i><div><b>Call / WhatsApp</b><br><span class="mut">+91 98765 43210</span></div></div>
<div class="info-row"><i>🕒</i><div><b>Open</b><br><span class="mut">{E(c["hours"])}</span></div></div></div>
<form class="rv card" style="padding:34px"><h3 style="font-size:1.4rem">{E(c["form"])}</h3><input required placeholder="Your name" aria-label="Your name"><input required type="tel" placeholder="Phone number" aria-label="Phone number"><select aria-label="Type">{opts}</select><textarea rows="4" placeholder="Message" aria-label="Message"></textarea><button class="btn" style="justify-content:center">Send →</button></form></div></section>'''


def page(s):
    if isinstance(s['h1'], list):
        s['h1'] = ' '.join(f'[[{t}]]' if em else t for t, em in s['h1'])
    d, p = s['d'], s['pal']
    fonts = list(dict.fromkeys(s['fonts']))
    gf = '&'.join('family=' + f.replace(' ', '+') + ':wght@400;500;600;700;800' for f in fonts)
    root = (f":root{{--bg:{p['bg']};--bg2:{p['bg2']};--ink:{p['ink']};--mut:{p['mut']};--a:{p['a']};--b:{p['b']};--c:{p['c']};--card:{p['card']};"
            f"--bi:{p.get('btnink', '#fff')};--hf:'{s['fonts'][0]}',serif;--bf:'{s['fonts'][1]}',sans-serif;--r:{s.get('radius', '24px')};--br:{d.get('btnRadius', '999px')};"
            f"--heroBg:{s.get('heroBg', 'var(--bg)')}}}")
    secs = dict(strip=lambda: strip(s, d['strip']), features=lambda: features(s, d['features']), products=lambda: products(s, d['products']),
                about=lambda: about(s, d['about']), stats=lambda: stats(s, d['stats']), steps=lambda: steps(s, d['steps']),
                reviews=lambda: reviews(s, d['reviews']), gallery=lambda: gallery(s, d['gallery']), banner=lambda: banner(s, d['banner']))
    body = ''.join(secs[k]() for k in d['order'])
    title = E(s['name'])
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} — {E(s["tagline"])}</title><meta name="description" content="{E(s["desc"])}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?{gf}&display=swap" rel="stylesheet">
<style>{root}{BASE}</style></head><body data-rv="{d["rv"]}">
<div id="prog"></div><div id="glow"></div>
<nav class="{d.get("nav", "")}"><div class="wrap"><a href="#top" class="logo"><i>{s["logo"]}</i>{title}</a>
<div class="links"><a href="#features">{E(s["nav"][0])}</a><a href="#shop">{E(s["nav"][1])}</a><a href="#about">About</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></div>
<a href="#contact" class="btn nav-cta">{E(s["cta"][0])}</a><button class="burger" aria-label="Menu">☰</button></div></nav>
{HEROES[d["hero"]](s)}
{body}
{contact(s)}
<footer><div class="wrap"><span>© <span id="yr"></span> {title}. All rights reserved.</span><span>{E(s["foot"])}</span></div></footer>
<a href="#contact" class="fab" aria-label="Contact">{s["fab"]}</a><div class="toast" role="status"></div>
<script>{JS}</script></body></html>'''


if __name__ == '__main__':
    for k in sys.argv[1:] or list(SHOPS):
        open(os.path.join(OUT, k + '.html'), 'w', encoding='utf-8').write(page(SHOPS[k]))
        print('built', k)
