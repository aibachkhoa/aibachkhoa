/* =========================================================
   Tracy — product page and privacy policy.
   English only, so the text lives in the markup and there is no
   dictionary; gallery captions sit on each tab as data-cap.
   ponytail: add `const i18n = {…}` + a GROUPS entry in
   tools/build-i18n-pages.js (see flow.js) when translations exist.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme (shared with the rest of the site) ----------
    let theme = 'light';
    try { theme = localStorage.getItem('theme') || 'light'; } catch (e) {}
    root.setAttribute('data-theme', theme);
    ['theme-toggle', 'mobile-theme-toggle'].map(id => document.getElementById(id)).filter(Boolean)
        .forEach(btn => btn.addEventListener('click', () => {
            theme = theme === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', theme);
            try { localStorage.setItem('theme', theme); } catch (e) {}
        }));

    // ---------- Screenshot gallery ----------
    const SHOT_DIR = document.body.dataset.shotDir || '/assets/apps/tracy/android/';
    const tabs = Array.from(document.querySelectorAll('.bv-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');
    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(other => {
            const on = other === tab;
            other.classList.toggle('is-active', on);
            other.setAttribute('aria-selected', String(on));
        });
        galImg.src = SHOT_DIR + tab.dataset.shot + '.webp';
        galImg.alt = 'Tracy — ' + tab.textContent;
        galTitle.textContent = tab.textContent;
        galCap.textContent = tab.dataset.cap;
    }));
    if (galImg && 'requestIdleCallback' in window) {
        requestIdleCallback(() => tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + '.webp'; }));
    }

    // ---------- Mobile menu ----------
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.setAttribute('aria-expanded', String(navLinks.classList.toggle('open')));
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
        new IntersectionObserver(([e]) => navbar.classList.toggle('scrolled', !e.isIntersecting), { threshold: 0 }).observe(sentinel);
    }

    // ---------- Reveal on view ----------
    const reveals = document.querySelectorAll('.reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('in-view'));
    } else {
        const io = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
        }), { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        reveals.forEach(el => io.observe(el));
    }
});
