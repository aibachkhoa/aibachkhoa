/* =========================================================
   Treasure Hunters product page + privacy policy.
   Same shape as mini-castle.js: a self-contained dictionary
   (English here, the other languages in i18n/<lang>.js), a
   language picker that remembers its own choice, and a theme
   toggle shared with the rest of the site.
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
        page_title: "Treasure Hunters — a pixel pirate platformer | AIBachKhoa",
        meta_desc: "A pixel-art pirate platformer for Android: 50 levels, 5 mini-bosses, 5 flying ghost ships and 120 golden skulls to find. No ads, no purchases, offline.",
        pol_page_title: "Privacy Policy — Treasure Hunters | AIBachKhoa",
        pol_meta_desc: "Treasure Hunters collects nothing. No account, no internet access, no analytics, no ads — your progress stays on your device.",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",
        nav_home: "Home",
        nav_blog: "Blog",
        nav_overview: "Overview",
        nav_play: "How it plays",
        nav_bosses: "Bosses",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",
        nav_back: "Back to the game",
        hero_kicker: "Android · pixel-art platformer",
        hero_title: "Grab your cutlass. <em>The treasure won't wait.</em>",
        hero_sub: "Treasure Hunters is a pixel-art pirate platformer made for touch screens. Run, double-jump and slash across beaches, misty valleys and haunted shipwrecks — fifty levels, ten bosses, and a chest of gold at the end of every island.",
        btn_play: "Get it on Google Play",
        btn_policy: "Privacy policy",
        hero_img_alt: "Treasure Hunters — fighting the mini-boss Captain Claw",
        quote: "Every island ends with a chest. Every fifth one has something guarding it — and every tenth, that something flies.",
        play_eyebrow: "How it plays",
        play_title: "Short levels, made for one thumb on each side.",
        play_lede: "Move on the left, jump and slash on the right. A level takes a couple of minutes; a checkpoint flag in the middle means a slip never costs you much.",
        play_run_h: "Run, jump, slash",
        play_run_p: "Double-jump over spike pits and rivers, cut through crabs, sharp-toothed fish and starfish, smash barrels and crates for coins.",
        play_skull_h: "Three golden skulls",
        play_skull_p: "Every regular level hides three. Some sit on the path; some need a perfect double jump off a plank you almost missed.",
        play_chest_h: "Open the chest",
        play_chest_p: "Reach the treasure chest to clear the level: the coins burst out and fly straight into your pockets.",
        boss_eyebrow: "Bosses",
        boss_title: "A boss every fifth level.",
        boss_lede: "Levels 5, 15, 25, 35 and 45 end in a mini-boss arena. Levels 10, 20, 30, 40 and 50 bring a ghost ship down out of a storm — each one tougher than the last.",
        boss_claw_h: "Captain Claw",
        boss_claw_p: "An armoured lobster with an eyepatch. Its claws sweep wide, and when it leaps, the landing sends shockwaves along the sand — jump them.",
        boss_shark_h: "Shark Brute",
        boss_shark_p: "A hammerhead with a spiked club and no patience. It charges the moment you are in range.",
        boss_urchin_h: "Urchin Queen",
        boss_urchin_p: "A crowned sea urchin that curls into a spinning ball of spikes and rolls straight at you.",
        boss_bone_h: "Bone Captain &amp; Octo Baron",
        boss_bone_p: "A towering skeleton captain with a broad cutlass, then an octopus noble with a cutlass in every tentacle. At half health, every boss gets angry — and faster.",
        boss_ship_h: "Five ghost ships",
        boss_ship_p: "They fire cannon volleys, rain swords on the deck and roll cannonballs along it. Slash a cannonball back into the hull, or wait for the ship to swoop low and strike it.",
        boss_dead_h: "The Dead Admiral",
        boss_dead_p: "Level 50. The last flagship, with the most hull, the most cannons and the shortest pauses between them.",
        gal_eyebrow: "Screenshots",
        gal_title: "Captured on a real phone.",
        gal_lede: "Every frame here was taken from the game running on an Android phone, HUD and touch buttons included.",
        gal_img_alt: "Treasure Hunters screenshot",
        gal_t1: "Ghost ship",
        gal_t2: "Mini-boss",
        gal_t3: "Sunny Shore",
        gal_t4: "Misty Valley",
        gal_t5: "Later islands",
        gal_t6: "Level clear",
        gal_c1_h: "The Ghost Ship, level 10",
        gal_c1_p: "Its cannonballs land where the rings are drawn. Slash one at the right moment and it flies back into the hull.",
        gal_c2_h: "Captain Claw, level 5",
        gal_c2_p: "The first mini-boss. Its health bar sits at the top; watch for the wind-up before the leap.",
        gal_c3_h: "Sunny Shore, level 1",
        gal_c3_p: "A crab on the beach, coins in the air and a golden skull above the plank.",
        gal_c4_h: "Misty Valley, level 2",
        gal_c4_p: "Stepping stones across a river fed by a waterfall. Miss a jump and the current carries you off.",
        gal_c5_h: "Totem Isle, level 33",
        gal_c5_p: "Later islands mix skeleton pirates, ghosts that drift through walls and totems that spit spikes.",
        gal_c6_h: "Level clear",
        gal_c6_p: "Three golden skulls and every coin from the chest — the best result is saved for each level.",
        facts_title: "At a glance",
        f1: "levels in five worlds",
        f2: "bosses",
        f3: "golden skulls to find",
        f4_b: "Offline",
        f4: "no account, no internet",
        f5_b: "None",
        f5: "ads, purchases or trackers",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_updated: "Last updated: 21 October 2026",
        pol_short_p: "Treasure Hunters collects nothing and sends nothing. The game does not request internet access, has no account and no advertising, and everything it remembers stays in the app's own storage on your device.",
        pol_collect_h: "Information we collect",
        pol_collect_p: "None. There is no sign-in, no analytics, no advertising, no crash reporter and no telemetry of any kind. We never see that you installed the game, never see how you play it, and have no way to identify you.",
        pol_device_h: "What is stored on your device",
        pol_device_p: "One small save file, written by the game and readable only by it:",
        pol_device_li1: "<strong>Progress</strong> — which levels you have unlocked, and your best number of golden skulls and coins in each level.",
        pol_device_li2: "<strong>Settings</strong> — whether music and sound effects are switched on.",
        pol_device_p2: "The file never leaves the device and is not included in cloud backups. Uninstalling the game deletes it.",
        pol_perm_h: "Permissions",
        pol_perm_p: "The game asks for one permission: <strong>vibration</strong>, for short haptic feedback when you take a hit or clear a level. No camera, no microphone, no photos, no location, no contacts, no notifications and no network.",
        pol_stores_h: "What the app store sees",
        pol_stores_p: "Downloading and updating the game happens through Google Play, which handles that transaction under its own privacy policy and may show us aggregate, anonymous figures — how many people installed the game in a country, for instance. We receive no personal information from it and cannot connect any of it to a person.",
        pol_children_h: "Children",
        pol_children_p: "The game contains mild cartoon fantasy violence — a pirate's cutlass against crabs, skeletons and ghost ships — and no blood. Because it collects no data at all, it collects no data about children either. It has no chat, no user-generated content, no links out and no purchases.",
        pol_changes_h: "Changes to this policy",
        pol_changes_p: "If the game ever gains a feature that touches the network, this page will be updated before that version ships, and the date at the top will change with it.",
        pol_contact_h: "Contact",
        pol_contact_p: "Questions about this policy: <a href=\"mailto:contact@aibachkhoa.com\">contact@aibachkhoa.com</a>.",
        pol_credit_p: "Artwork based on the Treasure Hunters pack by Pixel Frog. Treasure Hunters is made by AIBachKhoa."
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
const SHOT_DIR = '/assets/games/treasure-hunters/';

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
        paintGallery();
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

    // ---------- Screenshot gallery ----------
    const tabs = Array.from(document.querySelectorAll('.th-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // The caption follows both the selected shot and the current language, so
    // changing either one alone is enough to repaint it.
    function paintGallery() {
        const active = tabs.find(tab => tab.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
        galImg.alt = 'Treasure Hunters — ' + (dict[key + '_h'] || '');
        if (galTitle) galTitle.textContent = dict[key + '_h'] || '';
        if (galCap) galCap.textContent = dict[key + '_p'] || '';
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(other => {
            const on = other === tab;
            other.classList.toggle('is-active', on);
            other.setAttribute('aria-selected', String(on));
        });
        paintGallery();
    }));

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + '.webp'; });
        });
    }

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
