"""One-off: list Flow on the home page (latest card, product index, footer) and add its
three strings to every language in public/script.js. Idempotent."""
import pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
HOME = ROOT / 'public' / 'index.html'
JS = ROOT / 'public' / 'script.js'

STR = {  # lang: (tag, description, action)
    'en': ('Pomodoro focus timer', 'A calm Pomodoro timer with focus music, time-of-day backgrounds and a year-long focus heatmap — on Android and as a glass widget on Windows.', 'Get Flow'),
    'es': ('Temporizador Pomodoro', 'Un temporizador Pomodoro sereno con música para concentrarse, fondos según la hora del día y un mapa de concentración de todo el año — en Android y como widget de cristal en Windows.', 'Consigue Flow'),
    'zh': ('番茄专注计时器', '安静的番茄钟：专注音乐、随时间变化的背景、全年专注热力图 —— 支持 Android，并在 Windows 上以玻璃小组件运行。', '获取 Flow'),
    'hi': ('पोमोडोरो फ़ोकस टाइमर', 'फ़ोकस संगीत, दिन के समय के साथ बदलते बैकग्राउंड और पूरे साल के फ़ोकस हीटमैप वाला शांत पोमोडोरो टाइमर — Android पर और Windows पर ग्लास विजेट के रूप में।', 'Flow पाएँ'),
    'ar': ('مؤقت بومودورو للتركيز', 'مؤقت بومودورو هادئ مع موسيقى للتركيز وخلفيات تتغير مع الوقت وخريطة تركيز لعام كامل — على Android وكأداة زجاجية على Windows.', 'احصل على Flow'),
    'pt': ('Timer Pomodoro de foco', 'Um timer Pomodoro tranquilo com música de foco, fundos que acompanham a hora do dia e um mapa de foco do ano inteiro — no Android e como widget de vidro no Windows.', 'Baixe o Flow'),
    'fr': ('Minuteur Pomodoro', 'Un minuteur Pomodoro apaisant avec musique de concentration, fonds qui suivent l’heure et carte de concentration sur un an — sur Android et en widget de verre sur Windows.', 'Obtenir Flow'),
    'de': ('Pomodoro-Fokus-Timer', 'Ein ruhiger Pomodoro-Timer mit Fokusmusik, Hintergründen nach Tageszeit und einer Fokus-Heatmap übers ganze Jahr — auf Android und als Glas-Widget unter Windows.', 'Flow holen'),
    'ja': ('ポモドーロ集中タイマー', '集中用ミュージック、時間帯で変わる背景、1年分の集中ヒートマップを備えた落ち着いたポモドーロタイマー。Android と、Windows のガラス風ウィジェットに対応。', 'Flow を入手'),
    'ko': ('뽀모도로 집중 타이머', '집중 음악, 시간대에 따라 바뀌는 배경, 1년 집중 히트맵을 갖춘 차분한 뽀모도로 타이머 — Android 와 Windows 유리 위젯으로.', 'Flow 받기'),
    'ru': ('Помодоро-таймер', 'Спокойный помодоро-таймер с музыкой для фокуса, фонами по времени суток и тепловой картой фокуса за год — на Android и в виде стеклянного виджета на Windows.', 'Скачать Flow'),
}

# ---------------------------------------------------------------- script.js strings
js = JS.read_text(encoding='utf-8')
if 'tag_flow:' not in js:
    lines = js.split('\n')
    out, lang_order, idx = [], list(STR), 0
    for line in lines:
        out.append(line)
        m = re.match(r'(\s*)action_bvoice: ".*",\s*$', line)
        if m:
            tag, desc, act = STR[lang_order[idx]]
            ind = m.group(1)
            esc = lambda s: s.replace('\\', '\\\\').replace('"', '\\"')
            out += [f'{ind}tag_flow: "{esc(tag)}",', f'{ind}latest_flow: "{esc(desc)}",', f'{ind}action_flow: "{esc(act)}",']
            idx += 1
    assert idx == len(STR), f'expected {len(STR)} language blocks, found {idx}'
    JS.write_text('\n'.join(out), encoding='utf-8')
    print('script.js: added Flow strings to', idx, 'languages')

# ---------------------------------------------------------------- index.html
html = HOME.read_text(encoding='utf-8')
en_tag, en_desc, en_act = STR['en']
if 'href="/flow"' not in html:
    card = f'''<a class="card" href="/flow">
                        <div class="card-media" style="background: linear-gradient(135deg, #ff6b5b, #7a1f2b); display: flex; align-items: center; justify-content: center; padding: 3rem;"><img src="/assets/apps/flow/icon.png" alt="" width="200" height="200" loading="lazy" style="max-width: 200px; border-radius: 24px;"></div>
                        <div class="card-body">
                            <p class="card-tag" data-i18n="tag_flow">{en_tag}</p>
                            <h3 class="card-title">Flow <span class="flag-new" data-i18n="badge_new">New</span></h3>
                            <p class="card-desc" data-i18n="latest_flow">{en_desc}</p>
                            <span class="card-more"><span data-i18n="action_flow">{en_act}</span> <span aria-hidden="true">→</span></span>
                        </div>
                    </a>

                    <a class="card" href="/bvoice">'''
    html = html.replace('<a class="card" href="/bvoice">', card, 1)

    row = f'''<a class="index-row" href="/flow">
                        <span class="index-n">04</span>
                        <span class="index-name">Flow<span class="index-kind" data-i18n="tag_flow">{en_tag}</span></span>
                        <p class="index-desc" data-i18n="latest_flow">{en_desc}</p>
                        <span class="index-go" aria-hidden="true">→</span>
                    </a>
                    <a class="index-row" href="/bvoice">'''
    html = html.replace('<a class="index-row" href="/bvoice">', row, 1)
    # renumber the whole index after the insert
    n = iter(range(1, 1000))
    html = re.sub(r'<span class="index-n">\d+</span>', lambda m: f'<span class="index-n">{next(n):02d}</span>', html)

    html = html.replace('<h4 data-i18n="footer_mobile">Mobile apps</h4>\n                    <a href="/bvoice">BVoice</a>',
                        '<h4 data-i18n="footer_mobile">Mobile apps</h4>\n                    <a href="/flow">Flow</a>\n                    <a href="/bvoice">BVoice</a>', 1)
    HOME.write_text(html, encoding='utf-8')
    print('index.html: card, index row and footer link added')
