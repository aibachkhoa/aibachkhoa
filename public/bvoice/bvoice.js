/* =========================================================
   BVoice — Android page, iOS page and privacy policy.
   One dictionary serves all three: keys with no prefix are shared,
   `ios_` keys belong to the App Store page and `pol_` keys to the
   policy. Each page says which title/description pair it wants
   through data-title-key / data-desc-key on <body>, and which
   screenshot folder its gallery reads through data-shot-dir.
   Theme rides on the site-wide 'theme' key; the language choice is
   stored separately so it does not fight the landing page picker.
   ========================================================= */

const i18n = {
};

i18n.en = {
    page_title: "BVoice — Vietnamese meeting transcripts on your phone | AIBachKhoa",
    meta_desc: "BVoice for Android turns spoken Vietnamese into text while the meeting runs, labels who said what, translates into 100 languages and reads translations aloud — on the phone, with no account.",
    aria_lang: "Change language",
    aria_theme: "Toggle theme",
    aria_menu: "Open menu",
    skip_link: "Skip to content",
    nav_home: "Home",
    nav_blog: "Blog",
    nav_overview: "Overview",
    nav_meet: "Meetings",
    nav_interp: "Interpreting",
    nav_plans: "Plans",
    nav_shots: "Screenshots",
    nav_download: "Download",
    nav_ios: "iPhone version",
    nav_android: "Android version",
    nav_policy: "Privacy",
    hero_kicker: "Android · meetings & transcription",
    hero_title: "Say it once. <em>Read it back, labelled.</em>",
    hero_sub: "BVoice listens to a meeting in Vietnamese and writes it down as people speak — newest line on top, each one translated if you like. When the meeting ends it works out who said what, so the minutes are ready before you leave the room.",
    btn_play: "Get it on Google Play",
    btn_appstore: "Download on the App Store",
    btn_shots: "See the app",
    hero_meta: "Android 8.0 and up · phones, portrait · 7 days free with every feature, then a subscription or a pack of minutes.",
    switch_label: "Platform:",
    switch_android: "Android",
    switch_ios: "iPhone",
    alt_hero: "BVoice recording a meeting, with live text and translation",
    alt_side: "BVoice minutes with each line labelled by speaker",
    stat_live: "Ways to take the minutes away: Word, PDF and plain text",
    stat_langs: "Languages to translate a meeting into",
    stat_voices: "Languages it can speak aloud while interpreting",
    stat_account: "Accounts to create before you record",
    stat_days: "Days free, with every feature switched on",
    meet_eyebrow: "Meetings",
    meet_title: "The words arrive <em>while people talk</em>.",
    meet_sub: "Press record and put the phone on the table. Each sentence appears as it is spoken, the newest at the top, so a glance tells you where the conversation has got to.",
    m_live_t: "Text as it is spoken",
    m_live_d: "A line forms while someone is still talking and settles when they pause. You can follow along, or look away and catch up later.",
    m_tr_t: "Live translation",
    m_tr_d: "Pick a language before the meeting and every line is translated underneath it as it lands — useful when not everyone in the room reads Vietnamese.",
    m_noise_t: "Noise in the room, not in the text",
    m_noise_d: "Fans, air-conditioning and keyboards are filtered out before the words are written down. The original recording is kept untouched.",
    m_bg_t: "Keeps going with the screen off",
    m_bg_d: "Lock the phone or switch to another app and the meeting carries on recording. You always know the microphone is on.",
    spk_eyebrow: "Who said what",
    spk_title: "Minutes with <em>names on them</em>.",
    spk_sub: "A transcript without speakers is a wall of text. After the meeting BVoice works out how many people spoke and puts a label on every line.",
    spk_1: "<strong>Counts the speakers itself.</strong> No need to say how many people were in the room.",
    spk_2: "<strong>Name each person once.</strong> \"Linh\", \"Son\", \"Minh\" — the name then appears on every line they said.",
    spk_3: "<strong>Correct anything.</strong> Tap a line to fix a word; play the recording back to check it.",
    min_eyebrow: "Minutes",
    min_title: "From recording <em>to a document</em>.",
    min_sub: "A finished meeting is something you send to people. BVoice gets it there in a couple of taps.",
    mn_export_t: "Word and PDF",
    mn_export_d: "Export the minutes, with speakers and translations, as a Word document or a PDF — or copy the text and share it to any app.",
    mn_tr_t: "Translate the whole meeting",
    mn_tr_d: "Choose any of 100 languages and every line of a past meeting is translated in place.",
    mn_search_t: "Find it again",
    mn_search_d: "Search your meetings by title or by anything that was said in them.",
    mn_play_t: "Listen back",
    mn_play_d: "The recording is kept with the transcript, so you can always hear exactly what was said.",
    ip_eyebrow: "Interpreting",
    ip_title: "Speak Vietnamese. <em>The phone says it in their language.</em>",
    ip_sub: "For hosting guests, guiding a tour or giving a talk. You speak; BVoice translates each sentence and reads it aloud in up to three languages, one after another.",
    ip_1: "<strong>English, French, German and Spanish</strong>, through the phone's own speaker — no extra device.",
    ip_2: "<strong>It waits for your pause.</strong> Translations are prepared while you talk and spoken once you stop, so the phone never talks over you.",
    ip_3: "<strong>Every sentence on screen</strong>, in Vietnamese and in each language, so nobody misses a line.",
    priv_eyebrow: "Privacy",
    priv_title: "Your meetings stay <em>on your phone</em>.",
    priv_sub: "Recognition, speaker labels, translation and speech all happen on the phone itself. There is no account to create, and no copy of your recordings anywhere else.",
    pv_1: "<strong>No sign-up.</strong> Open the app and record.",
    pv_2: "<strong>Recordings and minutes are stored only in the app</strong>, on this phone. Delete a meeting and it is gone.",
    pv_3: "<strong>A one-time download.</strong> On first use the app fetches the data it needs to recognise speech — about 35 MB; translation, voices and speaker labels fetch theirs the first time you use them.",
    btn_policy: "Read the privacy policy",
    faq1_q: "Which phones does it run on?",
    faq1_a: "Android 8.0 and up. It runs best on a recent mid-range phone with 6 GB of memory or more; on lower-end phones BVoice still works, with help from our processing server (see below).",
    faq2_q: "Does my audio leave the phone?",
    faq2_a: "Not on a capable phone. Only on phones below the minimum hardware does the app send short audio clips and sentences to our processing server, over an encrypted connection, to be transcribed or translated and returned. Nothing is kept there. Full recordings and minutes always stay on the phone.",
    faq3_q: "Which language does it understand?",
    faq3_a: "Vietnamese. Meetings and transcripts can then be translated into 100 languages, and interpreting speaks English, French, German or Spanish.",
    faq4_q: "Do I need an internet connection?",
    faq4_a: "Once, to download the data each feature needs. After that, recording, transcribing, labelling speakers, translating and interpreting all work without a connection.",
    faq5_q: "How accurate is it?",
    faq5_a: "Very good on clear speech, less so with heavy noise, people talking over each other or specialist jargon. Results are produced automatically and can be wrong, so check minutes before relying on them for anything important.",
    faq6_q: "Can I record people without telling them?",
    faq6_a: "Please don't. Tell everyone present that you are recording and ask for their consent, as data-protection law requires in Vietnam and most other places.",
    plans_eyebrow: "Plans",
    plans_title: "Try everything, <em>then choose</em>.",
    plans_sub: "Every feature is open for seven days from the first launch. After that, pick whichever way of paying suits how often you record.",
    th_q: "The question",
    th_a: "The answer",
    pl_q1: "The free trial",
    pl_a1: "Seven days with every feature, no card required.",
    pl_q2: "BVoice Pro",
    pl_a2: "A monthly or yearly subscription with no limit on recording time.",
    pl_q3: "Minute packs",
    pl_a3: "60, 300 or 1,000 minutes, bought once and used up as you record. They do not expire, and are kept aside while a subscription is active.",
    pl_q4: "Where to pay and cancel",
    pl_a4: "Through Google Play; prices appear in your own currency in the app. Cancel any time in Google Play → Payments & subscriptions. We never see your card.",
    pl_q5: "After the trial, without paying",
    pl_a5: "Your meetings stay readable, playable and exportable. Only new recordings and speaker labelling need a plan.",
    gal_eyebrow: "Screenshots",
    gal_title: "The real app, <em>as it draws itself</em>.",
    gal_sub: "Every frame below is the app's own interface, with sample meeting data.",
    s1_title: "Live meeting",
    s1_cap: "Words appear as people speak, newest on top, each with its translation.",
    s2_title: "Minutes",
    s2_cap: "Every line labelled with its speaker, translated, ready to export.",
    s3_title: "Interpreting",
    s3_cap: "Spoken Vietnamese, read aloud in English, French and German.",
    s4_title: "Home",
    s4_cap: "Recording, interpreting and speaker labels, one tap away.",
    s5_title: "Settings",
    s5_cap: "Light or dark, Vietnamese or English, nine accent colours.",
    s6_title: "Plans",
    s6_cap: "Subscriptions and minute packs, with restore purchases.",
    dl_eyebrow: "Download",
    dl_title: "On Android and <em>on iPhone</em>.",
    dl_sub: "The same app on both, with the same features. Pick your store.",
    dl_android_t: "Android phones",
    dl_android_d: "Android 8.0 and up, from Google Play.",
    dl_ios_t: "iPhone",
    dl_ios_d: "iOS 15.1 or later, from the App Store.",
    dl_more_android: "More about the Android version",
    dl_more_ios: "More about the iPhone version",
    cta_title: "Your next meeting can write its own minutes.",
    btn_contact: "Contact us",
    footer_desc: "Building practical AI tools for developers and businesses.",
    footer_app: "The app",
    footer_prod: "Other products",
    footer_comp: "Company",
    footer_about: "About",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",
    ios_page_title: "BVoice for iPhone — Vietnamese meeting transcripts | AIBachKhoa",
    ios_meta_desc: "BVoice for iPhone turns spoken Vietnamese into text while the meeting runs, labels who said what, translates into 100 languages and reads translations aloud — all on the iPhone. iOS 15.1 or later.",
    ios_kicker: "iPhone · meetings & transcription",
    ios_meta: "iPhone, iOS 15.1 or later · portrait · 7 days free with every feature, then a subscription or a pack of minutes.",
    ios_m_bg_d: "Lock the iPhone or switch to another app and the meeting carries on recording; the orange indicator shows the microphone is on.",
    ios_perm_eyebrow: "Permissions",
    ios_perm_title: "One permission, <em>asked when you record</em>.",
    ios_perm_sub: "iOS asks you first, at the moment you start a meeting — not when the app opens.",
    ios_perm_mic: "<strong>Microphone.</strong> To hear the meeting while you record or interpret. It is off the rest of the time.",
    ios_perm_bg: "<strong>Audio in the background.</strong> So a meeting keeps recording with the screen locked. It applies only while you are recording.",
    ios_perm_none: "<strong>Nothing beyond that.</strong> No location, no contacts, no camera, no photo library, no tracking.",
    ios_priv_sub: "On iPhone everything happens on the device itself: recognition, speaker labels, translation and speech. No audio, transcript or recording is sent anywhere.",
    ios_faq1_q: "Which iPhones does it run on?",
    ios_faq1_a: "Any iPhone on iOS 15.1 or later. It runs best on iPhone 12 or newer; older models work, more slowly on long meetings and live translation.",
    ios_faq2_a: "No. On iPhone recognition, translation and speech all run on the device. The only connection the app makes is the one-time download of the data each feature needs, and purchases, which Apple handles.",
    ios_pl_a4: "Through the App Store; prices appear in your own currency in the app. Cancel any time in Settings → your name → Subscriptions. We never see your card.",
    ios_gal_sub: "Every frame below is the app's own interface on iPhone, with sample meeting data.",
    pol_page_title: "BVoice — Privacy Policy | AIBachKhoa",
    pol_meta_desc: "How BVoice handles your recordings, transcripts and purchases on Android and iPhone: what stays on your phone, what is downloaded, and how to delete it.",
    pol_eyebrow: "Legal",
    pol_title: "Privacy Policy",
    pol_app: "BVoice",
    pol_updated: "Last updated: 21 October 2026",
    pol_lead: "This Privacy Policy explains how BVoice (\"we\", \"our\", or \"us\") handles your information when you use the BVoice mobile application (the \"App\") on Android or iPhone. We are committed to protecting your privacy and to complying with applicable data protection laws, including Vietnam's Decree 13/2023/ND-CP, the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), where they apply.",
    pol_toc: "On this page",
    pol_h_intro: "Introduction",
    pol_intro: "BVoice records meetings and conversations in Vietnamese, turns them into text, labels who said what, translates them and reads translations aloud. It has no accounts, no user profiles and no social features.",
    pol_h_short: "The short version",
    pol_short_1: "<strong>Your recordings and minutes stay on your phone.</strong> Recordings, transcripts, translations, speaker names and settings are stored only in the App's private storage on your device. We keep no copy.",
    pol_short_2: "<strong>Processing happens on the phone.</strong> Recognition, speaker labelling, translation and speech run on your device. On iPhone, always. On Android, unless the phone is below the minimum hardware — see below.",
    pol_short_3: "<strong>No account, no analytics, no advertising, no tracking.</strong> Nothing in the App measures what you do or follows you across other apps.",
    pol_short_4: "<strong>One permission that matters: the microphone</strong>, used only while you record a meeting, interpret, or have the meeting screen open.",
    pol_short_5: "<strong>Payments are handled by Google Play or the App Store.</strong> We never see your card.",
    pol_h_defs: "Interpretation and Definitions",
    pol_h_interp: "Interpretation",
    pol_interp: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
    pol_h_defs2: "Definitions",
    pol_defs_lead: "For the purposes of this Privacy Policy:",
    pol_d_app: "<strong>Application</strong> (or the <strong>App</strong>) refers to BVoice, the software program provided by the Company.",
    pol_d_company: "<strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\") refers to tdson, the developer of the Application.",
    pol_d_country: "<strong>Country</strong> refers to: Vietnam.",
    pol_d_device: "<strong>Device</strong> means any device that can access the Service, such as a phone.",
    pol_d_personal: "<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual. A recording of someone's voice can be Personal Data.",
    pol_d_provider: "<strong>Service Provider</strong> means any party that processes data on behalf of the Company: Google, for Google Play billing on Android; Apple, for App Store billing on iPhone; and, on Android phones below the minimum hardware only, the operator of our processing server.",
    pol_d_purchase: "<strong>In-App Purchase</strong> means a BVoice Pro subscription, monthly or yearly, or a pack of transcription minutes, transacted through Google Play or the App Store depending on where the App was installed from.",
    pol_d_you: "<strong>You</strong> means the individual using the Service.",
    pol_h_collect: "What the App Stores",
    pol_collect_lead: "The App keeps the following, all of it in its own private storage on your device:",
    pol_c_1: "The audio recordings of your meetings.",
    pol_c_2: "Their transcripts, translations, and the names you give to speakers.",
    pol_c_3: "Your settings: language, theme, colour, the translation and interpreting languages you chose.",
    pol_c_4: "Your plan: the trial start date, an active subscription, minutes remaining, and the transaction identifiers of purchases already credited, so a purchase is never counted twice.",
    pol_collect_none: "The App never asks for your name, email address, phone number or any other identifying information. It does not back your data up to any cloud service of ours.",
    pol_h_voice: "Microphone and Recording",
    pol_voice_1: "The microphone is used only while the meeting screen is open (to show a sound level; nothing is stored), while you record a meeting, or while you interpret. It is not used at any other time. While recording, Android shows a persistent notification and iPhone shows its orange indicator, so you always know the microphone is on.",
    pol_voice_2: "You are responsible for telling the people present that you are recording and obtaining their consent, as required by the data protection laws that apply to you — in Vietnam, Decree 13/2023/ND-CP. Do not use the App to record anyone secretly or for any unlawful purpose.",
    pol_h_process: "Where Processing Happens",
    pol_proc_1: "<strong>On iPhone</strong>, recognition, noise reduction, speaker labelling, translation and speech all run on the device. No audio, transcript or recording leaves it.",
    pol_proc_2: "<strong>On Android</strong>, the same is true on any phone that meets the minimum hardware. Only on a phone below that minimum, which cannot transcribe and translate quickly enough by itself, does the App send short audio clips and the sentences to translate to our processing server, over an encrypted connection. They are used only to produce the text or translation and send it back; they are not stored, not used to train anything, and not shared. Full recordings, minutes and speaker names always stay on the phone.",
    pol_h_download: "One-Time Downloads",
    pol_download: "To work on the phone, the App downloads the data each feature needs once — about 35 MB for recognition, more for translation, voices and speaker labelling — from file hosting servers. As with any download, those servers see your device's IP address and ordinary connection details. None of your recordings or other data is sent with the request. Wi-Fi is recommended, as these downloads can use mobile data.",
    pol_h_purchases: "Purchases and Subscriptions",
    pol_pur_1: "Every feature is free for seven days from the first launch. After that you can subscribe to BVoice Pro, monthly or yearly, or buy packs of transcription minutes.",
    pol_pur_2: "Payment is handled entirely by Google Play or the App Store, depending on where the App was installed from. We never see, receive or store your card or payment details. The App learns only what you are entitled to: whether a subscription is active, and which purchases to credit.",
    pol_pur_3: "Cancel a subscription in Google Play → Payments & subscriptions, or on iPhone in Settings → your name → Subscriptions.",
    pol_h_perm: "Permissions and Network Access",
    pol_perm_1: "On Android the App declares the microphone permission, permission to keep recording in the foreground with a notification, notifications, internet access, and Google Play billing. On iPhone the App asks for the microphone, and declares background audio so a meeting keeps recording while the screen is locked.",
    pol_perm_2: "The App requests no location, contacts, calendar, camera or photo library access, and no access to your files.",
    pol_perm_3: "The network is used for the one-time downloads above, for purchases, and on Android phones below the minimum hardware for the processing described above. Recording, transcription, speaker labelling, translation and interpreting otherwise work with no connection.",
    pol_h_storage: "Data Storage and Deletion",
    pol_storage_1: "Everything the App stores lives in its own private area on your device. You can delete any meeting from within the App.",
    pol_storage_2: "Uninstalling the App deletes all of it permanently. Anything you export or share outside the App — a Word file, a PDF, copied text — is then yours to manage.",
    pol_h_accuracy: "Accuracy of Results",
    pol_accuracy: "Transcripts, speaker labels, translations and synthesised speech are produced automatically and may be wrong, incomplete, or attribute words to the wrong person — especially with noise, overlapping speech or specialist terms. Check them before relying on them for anything important, such as official minutes, contracts, medical or legal matters.",
    pol_h_children: "Children's Privacy",
    pol_children: "The App is not directed at children under 13 and does not knowingly collect personal data from children. It contains in-app purchases, so on a shared device we recommend a purchase PIN on Google Play or Screen Time restrictions on iPhone.",
    pol_h_rights: "Your Rights",
    pol_rights: "Data protection laws give you rights to access, correct, delete and port the personal data an organisation holds about you. We hold no personal data about you: what exists is on your device, where you can view, edit, export and delete it at any time. For payment data, please contact Google or Apple directly.",
    pol_h_security: "Security",
    pol_security: "Your recordings never leave your device on iPhone, nor on Android phones that meet the minimum hardware, so there is no transfer to intercept and no database of ours to breach. Where Android processing does happen on our server, the connection is encrypted and nothing is kept. No method of electronic storage is completely secure, so protect your phone with a passcode.",
    pol_h_changes: "Changes to this Privacy Policy",
    pol_changes: "When this policy changes, the new version is posted on this page with a new date at the top. If a change is material, the App asks you to accept it again before its next download.",
    pol_h_contact: "Contact Us",
    pol_contact: "If you have any question about this Privacy Policy, please get in touch:"
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

    // Each page names its own screenshot folder, so the Android page and the
    // iOS page can share this file and still show their own captures.
    const SHOT_DIR = document.body.dataset.shotDir || '/assets/apps/bvoice/android/';

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
        galImg.alt = 'BVoice — ' + (dict[key + '_title'] || fallback[key + '_title'] || '');
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
