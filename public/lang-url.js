/* The language a page is in now lives in its URL: /bksafe is English,
 * /es/bksafe is the Spanish build of the same page. Both are real,
 * pre-rendered files (see tools/build-i18n-pages.js), so a crawler and a
 * reader who arrives cold both get the right language with no JavaScript.
 *
 * This file gives the per-page scripts the two things they need to keep the
 * picker honest: read the language out of the path, and work out where the
 * picker should send someone who chooses another one.
 */
(function () {
    'use strict';

    function fromPath(supported) {
        var seg = window.location.pathname.split('/')[1];
        return supported.indexOf(seg) !== -1 ? seg : null;
    }

    // Strip whatever language prefix is on the current path, then put the
    // requested one back. The default language has no prefix at all.
    function hrefFor(lang, defaultLang, supported) {
        var parts = window.location.pathname.split('/').filter(Boolean);
        if (parts.length && supported.indexOf(parts[0]) !== -1) parts.shift();
        var rest = parts.join('/');
        var prefix = lang === defaultLang ? '' : '/' + lang;
        return (prefix + '/' + rest).replace(/\/+$/, '') + (rest ? '' : '/')
            + window.location.search + window.location.hash;
    }

    // The language a page should run in. The URL decides: a page without a
    // prefix is the default language. The one exception is a visitor who
    // explicitly picked another language somewhere on the site (the picker
    // stores it as 'lang'): they are sent to that language's copy of this
    // page instead of being left on the English one. Browser preferences
    // are deliberately not consulted, so a crawler and a first-time visitor
    // always get the page the URL names.
    function detect(supported, defaultLang) {
        var fromUrl = fromPath(supported);
        if (fromUrl) return fromUrl;
        var saved = null;
        try { saved = window.localStorage.getItem('lang'); } catch (e) { /* storage blocked */ }
        if (saved && saved !== defaultLang && supported.indexOf(saved) !== -1) {
            window.location.replace(hrefFor(saved, defaultLang, supported));
        }
        return defaultLang;
    }

    // One site-wide choice, so picking Spanish on the home page carries
    // through to every product page and back.
    function remember(lang) {
        try { window.localStorage.setItem('lang', lang); } catch (e) { /* storage blocked */ }
    }

    window.LangUrl = { fromPath: fromPath, hrefFor: hrefFor, detect: detect, remember: remember };
})();

/* Collapse the top navigation into the menu button whenever the links do not
 * fit on one line. A fixed breakpoint cannot cover every page: BKSafe has nine
 * entries and the Russian or German labels run far longer than the English
 * ones, so the bar is measured instead. Below 1201px the stylesheet already
 * shows the menu; this only covers wider screens (see .nav-collapsed). */
(function () {
    'use strict';
    var root = document.documentElement;
    var queued = false;

    function fit() {
        queued = false;
        var bar = document.querySelector('.nav-container');
        if (!bar) return;
        root.classList.remove('nav-collapsed');
        if (window.innerWidth <= 1200) return;
        if (bar.scrollWidth > bar.clientWidth + 1) root.classList.add('nav-collapsed');
    }
    function schedule() {
        if (queued) return;
        queued = true;
        window.requestAnimationFrame(fit);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fit);
    else fit();
    window.addEventListener('load', schedule);
    window.addEventListener('resize', schedule);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
})();
