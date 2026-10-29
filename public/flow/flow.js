/* =========================================================
   Flow — product page and privacy policy.
   One dictionary serves both pages: `pol_` keys belong to the policy.
   Each page names its title/description pair with data-title-key /
   data-desc-key on <body> and its screenshot folder with data-shot-dir.
   Translations live in /flow/i18n/<lang>.js (loaded by the localized copies).
   ========================================================= */

const i18n = {
};

i18n.en = {
    page_title: "Flow — Pomodoro focus timer for Android and Windows | AIBachKhoa",
    meta_desc: "Flow is a calm Pomodoro timer: focus sessions with a glowing progress ring, built-in focus music, backgrounds that follow the time of day and a year-long focus heatmap. On Android and as a small glass widget on Windows. No account, no ads.",
    aria_lang: "Change language",
    aria_theme: "Toggle theme",
    aria_menu: "Open menu",
    skip_link: "Skip to content",
    nav_home: "Home",
    nav_blog: "Blog",
    nav_overview: "Overview",
    nav_focus: "Focus",
    nav_stats: "Stats",
    nav_pc: "Windows",
    nav_shots: "Screenshots",
    nav_download: "Download",
    nav_policy: "Privacy",
    hero_kicker: "Android · Windows · Pomodoro timer",
    hero_title: "Focus deeply. <em>Rest on time.</em>",
    hero_sub: "Flow runs your work in focused blocks and reminds you to take real breaks. Tap to start, swipe to skip, and watch a glowing ring fill while you work — with calm music if you want it and a background that follows your day.",
    btn_play: "Get it on Google Play",
    btn_windows: "Download for Windows",
    btn_shots: "See the app",
    hero_meta: "Android 7.0 and up · Windows 10/11 · free, with an optional one-time Flow Pro upgrade.",
    alt_hero: "Flow timer running a focus session over a tomato-red background",
    alt_side: "Flow statistics with a year-long focus heatmap",
    stat_tracks: "Built-in focus music tracks",
    stat_langs: "Languages",
    stat_scenes: "Background scenes, plus your own photo",
    stat_account: "Accounts, ads or trackers",
    stat_cpu: "CPU used by the Windows widget while idle",
    focus_eyebrow: "Focus",
    focus_title: "A timer you <em>barely have to touch</em>.",
    focus_sub: "Everything happens on the clock itself. No menus in the way while you work.",
    f_gest_t: "Gestures, not buttons",
    f_gest_d: "Tap to start or pause. Swipe sideways to skip, up for one more minute, down to stop. On Windows: Space, the arrow keys or the mouse wheel.",
    f_ring_t: "A ring that shows the time",
    f_ring_d: "The ring fills as the session runs and changes colour with the mode: tomato red for focus, green for a short break, blue for a long one.",
    f_long_t: "Long breaks on schedule",
    f_long_d: "Choose how many focus sessions come before a long break. Dots under the clock show how close you are.",
    f_auto_t: "Stay in the flow",
    f_auto_d: "Start breaks and work sessions automatically, and get a notification when a session ends — even with the app in the background.",
    mood_eyebrow: "Atmosphere",
    mood_title: "Music and scenes <em>that keep you there</em>.",
    mood_sub: "Twenty focus tracks play while you work, shuffled without repeats. Mark your favourites and they play first.",
    mood_1: "Auto background changes with the time of day: sunrise, day, sunset and a starry night.",
    mood_2: "Or pick Tomato, Forest, Night, Sunrise, Day, Sunset — or your own photo, with adjustable dimming.",
    mood_3: "Mute or skip a track with one tap, without leaving the timer.",
    stats_eyebrow: "Statistics",
    stats_title: "See a whole year <em>of focus</em>.",
    stats_sub: "Every finished session is counted, so progress is something you can see rather than guess.",
    s_heat_t: "Year heatmap",
    s_heat_d: "One square per day for the last year, darker on the days you focused longest.",
    s_hist_t: "History",
    s_hist_d: "Time or sessions per day, week or month, and your most productive weekdays and hours.",
    s_labels_t: "Colour labels",
    s_labels_d: "Tag sessions by subject or project and see exactly where your time went.",
    s_backup_t: "Your data, your file",
    s_backup_d: "Export and import backups, or export every session to CSV for a spreadsheet.",
    pc_eyebrow: "Windows",
    pc_title: "A glass widget <em>that stays out of the way</em>.",
    pc_sub: "On Windows, Flow is a small rounded, translucent window you can pin to any corner of the screen and keep on top while you work.",
    pc_1: "Pin it to a corner or drag it anywhere; it remembers where you left it.",
    pc_2: "Light on your PC: about 0.1% CPU while idle and around 1% with a session running.",
    pc_3: "Keyboard shortcuts: Space to start or pause, → to skip, ↑ for one more minute, ↓ to stop.",
    pc_btn: "Download for Windows (18 MB)",
    pc_meta: "Windows 10 and 11, 64-bit. Installs for your user only — no administrator rights needed.",
    gal_eyebrow: "Screenshots",
    gal_title: "Inside <em>Flow</em>.",
    s1_title: "Focus",
    s1_cap: "A focus session running, with the ring filling and the current label below.",
    s2_title: "Short break",
    s2_cap: "Breaks turn the ring green, over a starry night background.",
    s3_title: "Statistics",
    s3_cap: "Overview, the year heatmap and daily history.",
    s4_title: "Charts",
    s4_cap: "Productive days and the split of your time by label.",
    s5_title: "Backgrounds",
    s5_cap: "Scenes that follow the time of day, presets, or your own photo.",
    s6_title: "Labels",
    s6_cap: "Colour labels for subjects and projects.",
    s7_title: "Menu",
    s7_cap: "Everything one tap away from the timer.",
    s8_title: "Settings",
    s8_cap: "Durations, language, reminders, notifications and more.",
    pro_eyebrow: "Flow Pro",
    pro_title: "Free to use. <em>Pro, once.</em>",
    pro_sub: "The timer, music, backgrounds and statistics are free. Flow Pro is a single purchase — no subscription — that unlocks:",
    pro_list: "Colour labels · adding and editing sessions · custom time profiles · screensaver mode · backups and CSV export · insistent alerts and the one-minute warning · screen flash · AMOLED pure-black theme · every future feature.",
    pro_note: "On Android Pro is bought through Google Play. On Windows it is unlocked with a licence key.",
    dl_eyebrow: "Download",
    dl_title: "On your phone <em>and your PC</em>.",
    dl_sub: "Pick the version for your device.",
    dl_android_t: "Android",
    dl_android_d: "Android 7.0 and up, from Google Play.",
    dl_pc_t: "Windows",
    dl_pc_d: "Windows 10 and 11, 64-bit. A signed installer, about 18 MB.",
    cta_title: "Your next focus session is one tap away.",
    btn_contact: "Contact us",
    footer_desc: "Building practical AI tools for developers and businesses.",
    footer_app: "The app",
    footer_prod: "Other products",
    footer_comp: "Company",
    footer_about: "About",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",

    pol_page_title: "Flow — Privacy Policy | AIBachKhoa",
    pol_meta_desc: "Flow keeps everything on your device: no account, no analytics, no ads and no data sent by the app. What it stores, the permissions it uses, and how purchases work.",
    pol_eyebrow: "Legal",
    pol_title: "Privacy Policy",
    pol_app: "Flow",
    pol_updated: "Last updated: 29 October 2026",
    pol_lead: "This Privacy Policy explains how Flow (\"we\", \"our\", or \"us\") handles your information when you use the Flow application for Android and Windows (the \"App\").",
    pol_toc: "On this page",
    pol_h_intro: "Introduction",
    pol_intro: "Flow is a Pomodoro focus timer. It times work and break sessions, plays built-in focus music, shows statistics about your sessions and can remind you to start working. It is designed to work entirely on your device.",
    pol_h_short: "The short version",
    pol_short_1: "<strong>Everything stays on your device.</strong> Your sessions, labels, settings and any background photo you choose are stored only in the App's private storage.",
    pol_short_2: "<strong>The App sends no data.</strong> It makes no network requests of its own: no server, no sync, no cloud.",
    pol_short_3: "<strong>No account, no analytics, no advertising, no tracking.</strong>",
    pol_short_4: "<strong>Purchases are handled by Google Play.</strong> We never see your payment details.",
    pol_h_defs: "Interpretation and Definitions",
    pol_h_interp: "Interpretation",
    pol_interp: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
    pol_h_defs2: "Definitions",
    pol_defs_lead: "For the purposes of this Privacy Policy:",
    pol_d_app: "<strong>Application</strong> (or the <strong>App</strong>) refers to Flow, the software program provided by the Company, on Android and Windows.",
    pol_d_company: "<strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\") refers to tdson, the developer of the Application.",
    pol_d_country: "<strong>Country</strong> refers to: Vietnam.",
    pol_d_device: "<strong>Device</strong> means any device that can run the Application, such as a phone or a computer.",
    pol_d_personal: "<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.",
    pol_d_provider: "<strong>Service Provider</strong> means Google, which processes in-app purchases on Android through Google Play Billing.",
    pol_d_purchase: "<strong>In-App Purchase</strong> means the one-time Flow Pro upgrade, transacted through Google Play on Android or unlocked with a licence key on Windows.",
    pol_d_you: "<strong>You</strong> means the individual using the Application.",
    pol_h_collect: "What the App Stores",
    pol_collect_lead: "The App keeps the following, all of it in its own private storage on your device:",
    pol_c_1: "Your finished focus sessions: when they ended, how long they lasted and their label.",
    pol_c_2: "Your labels and their colours, and any custom time profiles.",
    pol_c_3: "Your settings: durations, language, theme, background, notification and reminder choices, and favourite music tracks.",
    pol_c_4: "A copy of the background photo you pick, if you choose one, and on Windows the licence key you enter.",
    pol_collect_none: "The App never asks for your name, email address, phone number or any other identifying information, and it does not back your data up to any cloud.",
    pol_h_perm: "Permissions",
    pol_perm_1: "On Android the App asks to post notifications (to tell you when a session ends and for the reminders you set), to schedule exact alarms (so that alert is on time), to vibrate, to restore reminders after a restart and to keep the device awake briefly when an alert fires.",
    pol_perm_2: "It declares internet access because its interface runs in the system web view and Google Play Billing needs a connection; the App itself sends no data.",
    pol_perm_3: "It requests no location, contacts, camera, microphone or calendar access. Photos and files are opened only through the system picker, and only the file you pick.",
    pol_h_purchases: "Purchases",
    pol_pur_1: "The timer, music, backgrounds and statistics are free. Flow Pro is a single, optional purchase.",
    pol_pur_2: "On Android, payment is handled entirely by Google Play. We never see, receive or store your card or account details; the App only learns whether Pro has been purchased. Google's Privacy Policy applies to that transaction.",
    pol_pur_3: "On Windows, Pro is unlocked with a licence key that is checked on your computer, without contacting any server, and stored locally.",
    pol_h_storage: "Backups, Data Storage and Deletion",
    pol_storage_1: "Backups and CSV exports are written only to a place you choose, and only when you ask. You can delete any session or label inside the App.",
    pol_storage_2: "Uninstalling the App deletes everything it stored. Files you exported are then yours to manage.",
    pol_h_security: "Security",
    pol_security: "Because nothing leaves your device, the security of your data depends on the security of the device itself: its screen lock, encryption and updates.",
    pol_h_children: "Children's Privacy",
    pol_children: "The App is not directed at children under 13 and does not knowingly collect personal data from anyone. It contains an optional in-app purchase.",
    pol_h_rights: "Your Rights",
    pol_rights: "As the App holds no data about you on any server, there is nothing for us to access, correct or delete on your behalf. All of your data is under your control on your device.",
    pol_h_changes: "Changes to this Privacy Policy",
    pol_changes: "We may update this Privacy Policy from time to time. Changes are posted on this page with a new \"Last updated\" date.",
    pol_h_contact: "Contact Us",
    pol_contact: "If you have any questions about this Privacy Policy, contact us at"
};


document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // Each page names its own screenshot folder, so the Android page and the
    // iOS page can share this file and still show their own captures.
    const SHOT_DIR = document.body.dataset.shotDir || '/assets/apps/flow/android/';

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
    // The iOS page and the policy carry their own title/description keys, so
    // each page says which pair it wants rather than the script guessing.
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
    const tabs = Array.from(document.querySelectorAll('.bv-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // Keep the caption in step with both the selected shot and the current
    // language, so switching either one is enough.
    function paintGallery() {
        const active = tabs.find(tab => tab.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const fallback = i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
        galImg.alt = 'Flow — ' + (dict[key + '_title'] || fallback[key + '_title'] || '');
        if (galTitle) galTitle.textContent = dict[key + '_title'] || fallback[key + '_title'] || '';
        if (galCap) galCap.textContent = dict[key + '_cap'] || fallback[key + '_cap'] || '';
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(other => {
            const on = other === tab;
            other.classList.toggle('is-active', on);
            other.setAttribute('aria-selected', String(on));
        });
        paintGallery();
    }));

    // Warm the neighbouring shots so the first few clicks feel instant.
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + '.webp'; });
        });
    }

    updateLanguage(currentLang);

    // ---------- Mobile menu ----------
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
