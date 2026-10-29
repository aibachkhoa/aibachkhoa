"""One-off: build public/flow/index.html and public/flow/policy/index.html from the BVoice
pages (head, nav, footer, policy layout) with Flow's own content. English text is pre-rendered
from public/flow/flow.js so the page reads correctly before JS runs (and for crawlers).
Re-run after editing the English dictionary in flow.js. Then run the usual site build."""
import json, pathlib, re, subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUB = ROOT / 'public'
BV = (PUB / 'bvoice' / 'index.html').read_text(encoding='utf-8')
BVP = (PUB / 'bvoice' / 'policy' / 'index.html').read_text(encoding='utf-8')

# English dictionary straight from flow.js (node evaluates the object literal)
js = (PUB / 'flow' / 'flow.js').read_text(encoding='utf-8')
obj = js[js.index('i18n.en = {') + len('i18n.en = '): js.index('};', js.index('i18n.en = {')) + 1]
EN = json.loads(subprocess.run(['node', '-e', f'process.stdout.write(JSON.stringify({obj}))'],
                               capture_output=True, text=True, encoding='utf-8', check=True).stdout)

PLAY = 'https://play.google.com/store/apps/details?id=com.tdson.flow'
WIN = '/downloads/Flow-1.0.0-win-x64-setup.exe'
PLAY_SVG = '<svg class="bv-play-glyph" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M3.6 2.2 13 11.6l2.6-2.6L5.3 2.6a1.6 1.6 0 0 0-1.7-.4zM3.1 2.7A1.6 1.6 0 0 0 2.8 3.6v16.8c0 .34.1.65.3.9L12.4 12zm13.6 6.9-2.9 2.4 2.9 2.9 3.4-2c.8-.5.8-1.7 0-2.2zM13 12.4 3.6 21.8c.5.4 1.2.5 1.7.2l10.3-6z"/></svg>'
WIN_SVG = '<svg class="bv-play-glyph" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M3 5.5 10.5 4.4v7.1H3zm8.5-1.2L21 3v8.5h-9.5zM3 12.5h7.5v7.1L3 18.5zm8.5 0H21V21l-9.5-1.3z"/></svg>'
CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'


def T(k):
    return EN[k]


def card(icon_path, k):
    return f'''<div class="bv-card"><span class="bv-card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">{icon_path}</svg></span>
                        <h3 data-i18n="{k}_t">{T(k + '_t')}</h3><p data-i18n="{k}_d">{T(k + '_d')}</p></div>'''


def bullets(keys):
    return '<ul class="bv-list">' + ''.join(f'<li>{CHECK}<span data-i18n="{k}">{T(k)}</span></li>' for k in keys) + '</ul>'


def head_section(eb, ti, su):
    return f'''<div class="bv-head reveal"><p class="bv-eyebrow" data-i18n="{eb}">{T(eb)}</p>
                    <h2 class="bv-title" data-i18n="{ti}">{T(ti)}</h2><p class="bv-sub" data-i18n="{su}">{T(su)}</p></div>'''


# ---------------------------------------------------------------- detail page
nav = f'''<a href="/" class="nav-link" data-i18n="nav_home">{T('nav_home')}</a>
                <a href="/blog" class="nav-link" data-i18n="nav_blog">{T('nav_blog')}</a>
                <a href="#focus" class="nav-link" data-i18n="nav_focus">{T('nav_focus')}</a>
                <a href="#stats" class="nav-link" data-i18n="nav_stats">{T('nav_stats')}</a>
                <a href="#pc" class="nav-link" data-i18n="nav_pc">{T('nav_pc')}</a>
                <a href="#download" class="nav-link" data-i18n="nav_download">{T('nav_download')}</a>
                <a href="/flow/policy" class="nav-link" data-i18n="nav_policy">{T('nav_policy')}</a>'''

shots = ''.join(
    f'<button type="button" class="bv-gal-tab{" is-active" if i == 1 else ""}" data-shot="shot-0{i}" data-key="s{i}" role="tab" data-i18n="s{i}_title">{T(f"s{i}_title")}</button>'
    for i in range(1, 9))

body = f'''<header class="bv-hero" id="overview">
        <div class="container">
            <div class="bv-hero-grid">
                <div class="bv-hero-copy reveal">
                    <div class="bv-brandline">
                        <img src="/assets/apps/flow/icon.png" alt="" class="bv-brandmark" width="512" height="512">
                        <div><p class="bv-wordmark">Flow</p><p class="bv-brandsub" data-i18n="hero_kicker">{T('hero_kicker')}</p></div>
                    </div>
                    <h1 class="bv-hero-title" data-i18n="hero_title">{T('hero_title')}</h1>
                    <p class="bv-hero-sub" data-i18n="hero_sub">{T('hero_sub')}</p>
                    <div class="bv-hero-actions">
                        <a href="{PLAY}" target="_blank" rel="noopener" class="btn btn-primary">{PLAY_SVG}<span data-i18n="btn_play">{T('btn_play')}</span></a>
                        <a href="{WIN}" class="btn btn-ghost" download>{WIN_SVG}<span data-i18n="btn_windows">{T('btn_windows')}</span></a>
                    </div>
                    <p class="bv-hero-meta" data-i18n="hero_meta">{T('hero_meta')}</p>
                </div>
                <div class="bv-hero-media reveal">
                    <div class="bv-hero-art" aria-hidden="true"></div>
                    <div class="bv-phone"><img src="/assets/apps/flow/android/shot-01.webp" alt="{T('alt_hero')}" data-i18n-alt="alt_hero" width="620" height="1274" loading="lazy" decoding="async"></div>
                </div>
            </div>
            <div class="bv-stats reveal">
                <div class="bv-stat"><span class="bv-stat-n">20</span><span class="bv-stat-l" data-i18n="stat_tracks">{T('stat_tracks')}</span></div>
                <div class="bv-stat"><span class="bv-stat-n">17</span><span class="bv-stat-l" data-i18n="stat_langs">{T('stat_langs')}</span></div>
                <div class="bv-stat"><span class="bv-stat-n">6</span><span class="bv-stat-l" data-i18n="stat_scenes">{T('stat_scenes')}</span></div>
                <div class="bv-stat"><span class="bv-stat-n">0</span><span class="bv-stat-l" data-i18n="stat_account">{T('stat_account')}</span></div>
                <div class="bv-stat"><span class="bv-stat-n">~0.1%</span><span class="bv-stat-l" data-i18n="stat_cpu">{T('stat_cpu')}</span></div>
            </div>
        </div>
    </header>
    <main id="main">
        <section class="bv-section bv-section--tint" id="focus">
            <div class="container">
                {head_section('focus_eyebrow', 'focus_title', 'focus_sub')}
                <div class="bv-grid reveal">
                    {card('<path d="M12 4v4M12 16v4M4 12h4M16 12h4"/><circle cx="12" cy="12" r="2.4"/>', 'f_gest')}
                    {card('<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 8 8"/>', 'f_ring')}
                    {card('<path d="M5 12h3M10.5 12h3M16 12h3"/><path d="M4 7h16M4 17h16"/>', 'f_long')}
                    {card('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>', 'f_auto')}
                </div>
            </div>
        </section>
        <section class="bv-section" id="mood">
            <div class="container bv-split">
                <div class="reveal">
                    <p class="bv-eyebrow" data-i18n="mood_eyebrow">{T('mood_eyebrow')}</p>
                    <h2 class="bv-title" data-i18n="mood_title">{T('mood_title')}</h2>
                    <p class="bv-sub" style="margin-bottom: 1.8rem;" data-i18n="mood_sub">{T('mood_sub')}</p>
                    {bullets(['mood_1', 'mood_2', 'mood_3'])}
                </div>
                <div class="bv-hero-media reveal"><div class="bv-phone"><img src="/assets/apps/flow/android/shot-05.webp" alt="" width="620" height="1274" loading="lazy" decoding="async"></div></div>
            </div>
        </section>
        <section class="bv-section bv-section--tint" id="stats">
            <div class="container">
                {head_section('stats_eyebrow', 'stats_title', 'stats_sub')}
                <div class="bv-grid reveal">
                    {card('<rect x="3" y="5" width="4" height="4" rx="1"/><rect x="10" y="5" width="4" height="4" rx="1"/><rect x="17" y="5" width="4" height="4" rx="1"/><rect x="3" y="12" width="4" height="4" rx="1"/><rect x="10" y="12" width="4" height="4" rx="1"/><rect x="17" y="12" width="4" height="4" rx="1"/>', 's_heat')}
                    {card('<path d="M5 20V10M10 20V4M15 20v-7M20 20v-4"/>', 's_hist')}
                    {card('<path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.3"/>', 's_labels')}
                    {card('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>', 's_backup')}
                </div>
            </div>
        </section>
        <section class="bv-section" id="pc">
            <div class="container bv-split">
                <div class="reveal">
                    <p class="bv-eyebrow" data-i18n="pc_eyebrow">{T('pc_eyebrow')}</p>
                    <h2 class="bv-title" data-i18n="pc_title">{T('pc_title')}</h2>
                    <p class="bv-sub" style="margin-bottom: 1.8rem;" data-i18n="pc_sub">{T('pc_sub')}</p>
                    {bullets(['pc_1', 'pc_2', 'pc_3'])}
                    <p style="margin-top: 1.8rem;"><a href="{WIN}" class="btn btn-primary" download>{WIN_SVG}<span data-i18n="pc_btn">{T('pc_btn')}</span></a></p>
                    <p class="bv-hero-meta" data-i18n="pc_meta">{T('pc_meta')}</p>
                </div>
                <div class="reveal flow-pc-art"><img src="/assets/apps/flow/pc-widget.webp" alt="" width="900" height="560" decoding="async"></div>
            </div>
        </section>
        <section class="bv-section bv-section--tint" id="shots">
            <div class="container">
                <div class="bv-head reveal"><p class="bv-eyebrow" data-i18n="gal_eyebrow">{T('gal_eyebrow')}</p><h2 class="bv-title" data-i18n="gal_title">{T('gal_title')}</h2></div>
                <div class="bv-gal reveal">
                    <div class="bv-gal-stage" id="gal-stage"><img id="gal-img" src="/assets/apps/flow/android/shot-01.webp" alt="Flow — {T('s1_title')}" width="620" height="1274" decoding="async"></div>
                    <div class="bv-gal-side">
                        <div><p class="bv-gal-cap-t" id="gal-title">{T('s1_title')}</p><p class="bv-gal-cap-d" id="gal-cap">{T('s1_cap')}</p></div>
                        <div class="bv-gal-tabs" role="tablist" aria-label="{T('gal_eyebrow')}" data-i18n-aria="gal_eyebrow">{shots}</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bv-section" id="pro">
            <div class="container">
                {head_section('pro_eyebrow', 'pro_title', 'pro_sub')}
                <div class="reveal"><p class="bv-sub" data-i18n="pro_list">{T('pro_list')}</p><p class="bv-hero-meta" data-i18n="pro_note">{T('pro_note')}</p></div>
            </div>
        </section>
        <section class="bv-section bv-section--tint" id="download">
            <div class="container">
                {head_section('dl_eyebrow', 'dl_title', 'dl_sub')}
                <div class="bv-grid bv-grid--two reveal">
                    <div class="bv-card"><span class="bv-card-ico">{PLAY_SVG}</span><h3 data-i18n="dl_android_t">{T('dl_android_t')}</h3><p data-i18n="dl_android_d">{T('dl_android_d')}</p>
                        <p class="bv-card-actions"><a href="{PLAY}" target="_blank" rel="noopener" class="btn btn-primary">{PLAY_SVG}<span data-i18n="btn_play">{T('btn_play')}</span></a></p></div>
                    <div class="bv-card"><span class="bv-card-ico">{WIN_SVG}</span><h3 data-i18n="dl_pc_t">{T('dl_pc_t')}</h3><p data-i18n="dl_pc_d">{T('dl_pc_d')}</p>
                        <p class="bv-card-actions"><a href="{WIN}" class="btn btn-primary" download>{WIN_SVG}<span data-i18n="btn_windows">{T('btn_windows')}</span></a></p></div>
                </div>
            </div>
        </section>
        <section class="bv-cta">
            <div class="container bv-cta-inner reveal">
                <h2 class="cta-title" data-i18n="cta_title">{T('cta_title')}</h2>
                <div class="bv-cta-actions">
                    <a href="{PLAY}" target="_blank" rel="noopener" class="btn btn-primary">{PLAY_SVG}<span data-i18n="btn_play">{T('btn_play')}</span></a>
                    <a href="/flow/policy" class="btn btn-ghost" data-i18n="nav_policy">{T('nav_policy')}</a>
                    <a href="/#contact" class="btn btn-ghost" data-i18n="btn_contact">{T('btn_contact')}</a>
                </div>
            </div>
        </section>
    </main>
    '''

app_footer = f'''<a href="#overview" data-i18n="nav_overview">{T('nav_overview')}</a>
                <a href="#focus" data-i18n="nav_focus">{T('nav_focus')}</a>
                <a href="#stats" data-i18n="nav_stats">{T('nav_stats')}</a>
                <a href="#pc" data-i18n="nav_pc">{T('nav_pc')}</a>
                <a href="#shots" data-i18n="nav_shots">{T('nav_shots')}</a>
                <a href="#download" data-i18n="nav_download">{T('nav_download')}</a>
                <a href="/flow/policy" data-i18n="nav_policy">{T('nav_policy')}</a>'''


def common(html, title, desc, url, body_attrs):
    # head metadata
    html = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', html, count=1, flags=re.S)
    for attr in ('name="description"', 'property="og:description"', 'name="twitter:description"'):
        html = re.sub(rf'(<meta {attr} content=")[^"]*(")', lambda m: m.group(1) + desc.replace('"', '&quot;') + m.group(2), html)
    short = title.split(' | ')[0]
    for attr in ('property="og:title"', 'name="twitter:title"', 'property="og:image:alt"'):
        html = re.sub(rf'(<meta {attr} content=")[^"]*(")', lambda m: m.group(1) + short + m.group(2), html)
    html = html.replace('https://aibachkhoa.com/bvoice/policy', 'https://aibachkhoa.com' + url)
    html = re.sub(r'https://aibachkhoa\.com/([a-z]{2}/)?bvoice(?=["/])', lambda m: f'https://aibachkhoa.com/{m.group(1) or ""}' + url.lstrip('/'), html)
    html = html.replace('/assets/og/bvoice.png', '/assets/og/flow.png')
    html = html.replace('/assets/apps/bvoice/icon.png', '/assets/apps/flow/icon.png')
    html = html.replace('/bvoice/bvoice.css', '/flow/flow.css').replace('/bvoice/bvoice.js', '/flow/flow.js')
    # structured data is regenerated by tools/build-structured-data.js; drop the copied BVoice block
    html = re.sub(r'\s*<!-- structured data \(generated by tools/build-structured-data.js\) -->\s*<script type="application/ld\+json">.*?</script>', '', html, flags=re.S)
    html = re.sub(r'<body[^>]*>', f'<body class="page-product" {body_attrs}>', html, count=1)
    # nav links
    html = re.sub(r'(<div class="nav-links" id="nav-links">\s*).*?(\s*<span class="nav-divider")', lambda m: m.group(1) + nav + m.group(2), html, count=1, flags=re.S)
    # footer "the app" column
    html = re.sub(r'(<h4 data-i18n="footer_app">)The app(</h4>).*?(\s*</nav>)', lambda m: m.group(1) + T('footer_app') + m.group(2) + '\n                ' + app_footer + m.group(3), html, count=1, flags=re.S)
    html = re.sub(r'(<h4 data-i18n="footer_prod">.*?</h4>)', r'\1\n                <a href="/bvoice">BVoice</a>', html, count=1, flags=re.S)
    return html


page = common(BV, T('page_title'), T('meta_desc'), '/flow', 'data-shot-dir="/assets/apps/flow/android/"')
page = re.sub(r'<header class="bv-hero" id="overview">.*?</main>\s*', body, page, count=1, flags=re.S)
out = PUB / 'flow' / 'index.html'
out.write_text(page, encoding='utf-8')
print('wrote', out.relative_to(ROOT), len(page))

# ---------------------------------------------------------------- policy page
pol = common(BVP, T('pol_page_title'), T('pol_meta_desc'), '/flow/policy',
             'data-shot-dir="/assets/apps/flow/android/" data-title-key="pol_page_title" data-desc-key="pol_meta_desc"')
pol = pol.replace('href="/bvoice"', 'href="/flow"')
m = re.search(r"<main[^>]*>.*?</main>", pol, flags=re.S)
H = lambda k, i: f'<h2 id="{i}" data-i18n="{k}">{T(k)}</h2>'
P = lambda k: f'<p data-i18n="{k}">{T(k)}</p>'
UL = lambda ks: '<ul>' + ''.join(f'<li data-i18n="{k}">{T(k)}</li>' for k in ks) + '</ul>'
sections = [
    ('pol_h_intro', 'intro', P('pol_intro')),
    ('pol_h_short', 'short', UL(['pol_short_1', 'pol_short_2', 'pol_short_3', 'pol_short_4'])),
    ('pol_h_defs', 'defs', f'<h3 data-i18n="pol_h_interp">{T("pol_h_interp")}</h3>{P("pol_interp")}<h3 data-i18n="pol_h_defs2">{T("pol_h_defs2")}</h3>{P("pol_defs_lead")}' + UL(['pol_d_app', 'pol_d_company', 'pol_d_country', 'pol_d_device', 'pol_d_personal', 'pol_d_provider', 'pol_d_purchase', 'pol_d_you'])),
    ('pol_h_collect', 'collect', P('pol_collect_lead') + UL(['pol_c_1', 'pol_c_2', 'pol_c_3', 'pol_c_4']) + P('pol_collect_none')),
    ('pol_h_perm', 'perm', P('pol_perm_1') + P('pol_perm_2') + P('pol_perm_3')),
    ('pol_h_purchases', 'purchases', P('pol_pur_1') + P('pol_pur_2') + P('pol_pur_3')),
    ('pol_h_storage', 'storage', P('pol_storage_1') + P('pol_storage_2')),
    ('pol_h_security', 'security', P('pol_security')),
    ('pol_h_children', 'children', P('pol_children')),
    ('pol_h_rights', 'rights', P('pol_rights')),
    ('pol_h_changes', 'changes', P('pol_changes')),
    ('pol_h_contact', 'contact', f'<p><span data-i18n="pol_contact">{T("pol_contact")}</span> <a href="mailto:contact@aibachkhoa.com">contact@aibachkhoa.com</a>.</p>'),
]
NL = chr(10)
toc_links = NL.join(f'                <li><a href="#{i}" data-i18n="{k}">{T(k)}</a></li>' for k, i, _ in sections)
content = (NL + NL + '        ').join(H(k, i) + NL + '        ' + c for k, i, c in sections)
main = f'''<main class="bv-policy" id="main">
<div class="container">
    <div class="bv-policy-head reveal">
        <p class="bv-eyebrow" data-i18n="pol_eyebrow">{T('pol_eyebrow')}</p>
        <h1 class="bv-title" data-i18n="pol_title">{T('pol_title')}</h1>
        <p class="bv-sub" data-i18n="pol_app">Flow</p>
        <p class="bv-policy-stamp" data-i18n="pol_updated">{T('pol_updated')}</p>
    </div>

    <div class="bv-policy-body">
        <p class="reveal" data-i18n="pol_lead">{T('pol_lead')}</p>

        <nav class="bv-toc reveal" aria-label="{T('pol_toc')}" data-i18n-aria="pol_toc">
            <h2 data-i18n="pol_toc">{T('pol_toc')}</h2>
            <ol>
{toc_links}
            </ol>
        </nav>

        {content}

        <p class="bv-legal-links">
            <a href="/flow" data-i18n="nav_overview">{T('nav_overview')}</a>
            <span aria-hidden="true">·</span>
            <a href="/flow#download" data-i18n="nav_download">{T('nav_download')}</a>
        </p>
    </div>
</div>
    </main>'''
pol = pol.replace(m.group(0), main)
outp = PUB / 'flow' / 'policy' / 'index.html'
outp.write_text(pol, encoding='utf-8')
print('wrote', outp.relative_to(ROOT), len(pol))
