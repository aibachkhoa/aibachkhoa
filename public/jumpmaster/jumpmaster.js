/* =========================================================
   Jump Master product page + privacy policy.
   Same shape as treasure-hunters.js: a self-contained dictionary
   (English here, the other languages in i18n/<lang>.js), a
   language picker that remembers its own choice, and a theme
   toggle shared with the rest of the site. The screenshots are
   portrait, so the gallery is a row of phone-shaped frames with
   their own captions rather than a single tabbed stage.
   ========================================================= */

const i18n = {
    en: {
        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_game: "The game",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
        page_title: "Jump Master — a pixel-art charge-jump climber | AIBachKhoa",
        meta_desc: "A pixel-art climbing game for Android: hold to charge, slide to aim, let go to leap. Ten climbs, checkpoint flags, three crowns per climb. No ads, no purchases, offline.",
        pol_page_title: "Privacy Policy — Jump Master | AIBachKhoa",
        pol_meta_desc: "Jump Master collects nothing. No account, no internet access, no analytics, no ads — your progress, times and ranking stay on your device.",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",
        nav_home: "Home",
        nav_blog: "Blog",
        nav_overview: "Overview",
        nav_play: "How it plays",
        nav_climbs: "Climbs",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",
        nav_back: "Back to the game",
        hero_kicker: "Android · pixel-art climbing game",
        hero_title: "One jump at a time. <em>All the way up.</em>",
        hero_sub: "Jump Master is a calm but demanding pixel-art climber made for touch screens. No running, no double jump — only one perfectly judged leap after another, up ten towering climbs with original music and quiet, muted pixel art.",
        btn_play: "Get it on Google Play",
        btn_policy: "Privacy policy",
        hero_img_alt: "Jump Master — the hero mid-leap beside a stone tower",
        quote: "Every ledge is one good jump away. Every fall is your own fault — and the climb waits patiently for you to try again.",
        play_eyebrow: "How it plays",
        play_title: "Hold, aim, let go.",
        play_lede: "Touch anywhere on the screen — there is no fixed jump button. Two move buttons at the bottom walk you to the edge, and your finger does the rest.",
        play_charge_h: "Hold to charge",
        play_charge_p: "Touch and hold anywhere. The longer you hold, the higher and further the jump will carry you.",
        play_aim_h: "Slide to aim",
        play_aim_p: "Slide the same finger left or right. An arrow under your finger shows exactly where the jump is heading.",
        play_jump_h: "Lift to leap",
        play_jump_p: "Let go and you are committed. Land on the ledge — or fall back down and learn the gap.",
        climb_eyebrow: "Climbs",
        climb_title: "Ten climbs, harder the higher you go.",
        climb_lede: "Each climb is a tower of its own. Further up, platforms get narrower, gaps get wider and the spikes come more often.",
        climb_clock_h: "Clockwork Spire, Gear Works, Iron Summit",
        climb_clock_p: "Conveyor belts keep moving under your feet and push you towards the walls. Time the take-off before the belt decides for you.",
        climb_ice_h: "Crystal Caverns, Frozen Depths, Shard Abyss",
        climb_ice_p: "Slippery ice. You keep sliding after you land, so a jump that looks perfect can still carry you over the edge.",
        climb_sky_h: "Sky Citadel, Storm Peaks, Thunder Crown",
        climb_sky_p: "Clouds you can jump up through, bounce pads that throw you higher, and gusts of wind that bend every jump.",
        climb_ruins_h: "Ancient Ruins",
        climb_ruins_p: "The final challenge: a huge hand-built world of temples, trees and jungle, climbed from the forest floor to the very top.",
        climb_flag_h: "Checkpoint flags",
        climb_flag_p: "Flags light up as you touch them. Tap a lit flag at any time to warp straight back to it after a long fall.",
        climb_crown_h: "Three crowns per climb",
        climb_crown_p: "One for reaching the summit, one for beating the par time, one for falling as little as possible. Your fastest runs go on a personal ranking board.",
        gal_eyebrow: "Screenshots",
        gal_title: "Captured on a real phone.",
        gal_lede: "Every frame here was taken from the game running on an Android phone in portrait, HUD and touch controls included.",
        gal_img_alt: "Jump Master screenshot",
        gal_c1_h: "Charge and aim",
        gal_c1_p: "Hold to charge, slide to aim — the arrow shows where the jump will land.",
        gal_c2_h: "Clockwork climbs",
        gal_c2_p: "Conveyor belts push you towards the walls.",
        gal_c3_h: "Ice climbs",
        gal_c3_p: "Slippery ledges keep you sliding after you land.",
        gal_c4_h: "Sky climbs",
        gal_c4_p: "Clouds to jump through, bounce pads and wind.",
        gal_c5_h: "Ancient Ruins",
        gal_c5_p: "Temples, trees and jungle in the final climb.",
        gal_c6_h: "Crowns and ranking",
        gal_c6_p: "Three crowns per climb and a board of your fastest runs.",
        facts_title: "At a glance",
        f1: "climbs in four worlds",
        f2: "crowns to earn on every climb",
        f3_b: "Auto",
        f3: "progress saved as you climb",
        f4_b: "Offline",
        f4: "no account, no internet",
        f5_b: "None",
        f5: "ads, purchases or trackers",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_updated: "Last updated: 21 October 2026",
        pol_short_p: "Jump Master collects nothing and sends nothing. The game does not use the network, has no account and no advertising, and everything it remembers stays in the app's own private storage on your device.",
        pol_collect_h: "Information we collect",
        pol_collect_p: "None. There is no sign-in, no analytics, no advertising, no third-party SDK that collects data, no crash reporter and no telemetry of any kind. We never see that you installed the game, never see how you play it, and have no way to identify you.",
        pol_device_h: "What is stored on your device",
        pol_device_p: "A small amount of data, written by the game into its private storage and readable only by it:",
        pol_device_li1: "<strong>Progress</strong> — which climbs you have unlocked, where you are on each climb, the checkpoint flags you have lit and the crowns you have earned.",
        pol_device_li2: "<strong>Best times and ranking</strong> — your fastest runs on each climb, shown on the in-game ranking board, together with the player name you type in the game. The ranking is personal: it is never uploaded or shared, and the name can be anything you like.",
        pol_device_li3: "<strong>Settings</strong> — whether music and sound effects are switched on.",
        pol_device_p2: "None of this ever leaves the device. Uninstalling the game deletes all of it.",
        pol_perm_h: "Permissions",
        pol_perm_p: "The game asks for one permission: <strong>vibration</strong>, for short haptic feedback during play. No camera, no microphone, no photos, no location, no contacts, no notifications and no network.",
        pol_stores_h: "What the app store sees",
        pol_stores_p: "Downloading and updating the game happens through Google Play, which handles that transaction under its own privacy policy and may show us aggregate, anonymous figures — how many people installed the game in a country, for instance. We receive no personal information from it and cannot connect any of it to a person.",
        pol_children_h: "Children",
        pol_children_p: "Jump Master is suitable for all ages but is not directed specifically at children. It contains no violence beyond a fall back down the climb. Because it collects no data at all, it collects no data about children either. It has no chat, no user-generated content shared with others, no links out and no purchases.",
        pol_changes_h: "Changes to this policy",
        pol_changes_p: "If the game ever gains a feature that touches the network, this page will be updated before that version ships, and the date at the top will change with it.",
        pol_contact_h: "Contact",
        pol_contact_p: "Questions about this policy: <a href=\"mailto:contact@aibachkhoa.com\">contact@aibachkhoa.com</a>.",
        pol_credit_p: "Jump Master is made by AIBachKhoa."
    }
};

const LANGS = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ar', label: 'العربية' },
    { code: 'pt', label: 'Português' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'ru', label: 'Русский' }
];
const DEFAULT_LANG = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme (shared with the rest of the site) ----------
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
    let currentTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', currentTheme);
    themeToggles.filter(Boolean).forEach(btn => btn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }));

    // ---------- Language ----------
    const langSelects = [document.getElementById('lang-select'), document.getElementById('mobile-lang-select')].filter(Boolean);
    const supported = LANGS.map(l => l.code);

    // The URL names the language; see LangUrl.detect in /lang-url.js.
    const detectLang = () => window.LangUrl ? window.LangUrl.detect(supported, DEFAULT_LANG) : DEFAULT_LANG;

    langSelects.forEach(sel => {
        const short = sel.dataset.display === 'code';
        sel.innerHTML = LANGS.map(l =>
            `<option value="${l.code}">${short ? l.code.toUpperCase() : l.label}</option>`
        ).join('');
        sel.hidden = LANGS.length < 2;
    });

    const t = (lang, key) => (i18n[lang] && i18n[lang][key]) || i18n[DEFAULT_LANG][key] || '';

    const metaDesc = document.querySelector('meta[name="description"]');
    // The policy page carries its own title/description keys, so each page says
    // which pair it wants rather than the script guessing from the URL.
    const titleKey = document.body.dataset.titleKey || 'page_title';
    const descKey = document.body.dataset.descKey || 'meta_desc';

    let currentLang = detectLang();

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = t(lang, el.getAttribute('data-i18n'));
            if (value) el.innerHTML = value;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const value = t(lang, el.getAttribute('data-i18n-aria'));
            if (value) el.setAttribute('aria-label', value);
        });
        document.title = t(lang, titleKey);
        if (metaDesc) metaDesc.setAttribute('content', t(lang, descKey));
        root.lang = lang;
        langSelects.forEach(sel => { sel.value = lang; });
    };

    langSelects.forEach(sel => sel.addEventListener('change', () => {
        const lang = sel.value;
        localStorage.setItem('lang', lang);
        // Each language is its own page now, so go there rather
        // than rewriting this one and leaving the URL lying.
        if (window.LangUrl) {
            window.location.href = window.LangUrl.hrefFor(lang, DEFAULT_LANG, supported);
            return;
        }
        currentLang = lang;
        updateLanguage(currentLang);
    }));

    updateLanguage(currentLang);

    // ---------- Mobile nav ----------
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            mobileBtn.setAttribute('aria-expanded', String(open));
        });
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileBtn.setAttribute('aria-expanded', 'false');
        }));
    }

    // ---------- Navbar border on scroll ----------
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const sentinel = document.createElement('div');
        sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;';
        document.body.prepend(sentinel);
        new IntersectionObserver(([e]) => {
            navbar.classList.toggle('scrolled', !e.isIntersecting);
        }, { threshold: 0 }).observe(sentinel);
    }

    // ---------- Reveal on view ----------
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = document.querySelectorAll('.reveal');
    if (reduce) {
        reveals.forEach(el => el.classList.add('in-view'));
    } else {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        reveals.forEach(el => io.observe(el));
    }
});
