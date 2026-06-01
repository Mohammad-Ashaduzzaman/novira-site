(function () {
  'use strict';

  var pages = {
    home: 'index.html',
    solutions: 'solutions.html',
    logistics: 'solutions-logistics.html',
    coldChain: 'solutions-cold-chain.html',
    insurance: 'solutions-insurance.html',
    manufacturing: 'solutions-manufacturing.html',
    assetProtection: 'solutions-asset-protection.html',
    platform: 'docs-platform-overview.html',
    journey: 'shipment-journey.html',
    products: 'products.html',
    novaFive: 'products.html#novafive',
    novaFiveLite: 'products.html#novafive-lite',
    novaGps: 'products.html#novagps',
    novaGpsLite: 'products.html#novagps-lite',
    novaAqua: 'products.html#novaaqua',
    novaFlex: 'products.html#novaflex',
    pricing: 'pricing.html',
    resources: 'resources.html',
    caseStudies: 'case-studies.html',
    partners: 'partners.html',
    contact: 'contact.html',
    about: 'about.html',
    docs: 'docs.html',
    gettingStarted: 'docs-getting-started.html',
    productsOverview: 'docs-products-overview.html',
    security: 'docs-security-trust.html',
    faq: 'docs-faq.html',
    api: 'docs-api-integrations.html',
    useCases: 'use-cases.html',
    coldUse: 'use-case-cold-chain-excursion.html',
    insuranceUse: 'use-case-insurance-validation.html',
    manufacturingUse: 'use-case-manufacturing-compliance.html',
    theftUse: 'use-case-theft-prevention.html',
    blog: 'blog.html',
    cargoBlog: 'blog-cargo-disputes.html',
    chainBlog: 'blog-chain-of-custody-fails.html',
    parametricBlog: 'blog-future-of-parametric-insurance.html',
    nobodyBlog: 'blog-nobody-can-agree.html',
    tempBlog: 'blog-temperature-excursions.html',
    trackingBlog: 'blog-tracking-isnt-enough.html',
    claimsBlog: 'blog-verified-events-claims-friction.html',
    compare: 'compare-devices.html',
    build: 'build-your-solution.html',
    checkout: 'checkout.html',
    quote: 'request-quote.html',
    login: 'login.html',
    portal: 'portal.html',
    track: 'track.html',
    novacheck: 'novacheck.html',
    novaproof: 'novaproof.html',
    novalink: 'novalink.html',
    novaprotect: 'novaprotect.html',
    dost: 'dost.html',
    happened: 'know-what-happened.html',
    next: 'know-what-happens-next.html',
    protectLoss: 'protect-against-loss.html'
  };

  function normalize(value) {
    return (value || '')
      .replace(/[\u2190-\u21ff]/g, ' ')
      .replace(/[·•]/g, ' ')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9\s]/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  function has(text, words) {
    return words.every(function (word) { return text.indexOf(word) !== -1; });
  }

  function currentFile() {
    var path = window.location.pathname.split('/').pop();
    return path || pages.home;
  }

  function isArtifactPage() {
    return window.location.pathname.replace(/\\/g, '/').indexOf('/artifacts/') !== -1;
  }

  function routeHref(route) {
    if (!route || route.charAt(0) === '#' || route.indexOf('http') === 0 || route.indexOf('mailto:') === 0 || route.indexOf('../') === 0 || route.charAt(0) === '/') return route;
    return isArtifactPage() ? '../' + route : route;
  }

  function cleanTarget(href) {
    return (href || '').split('#')[0].split('?')[0].replace(/^\.\.\//, '');
  }

  function currentSection() {
    var file = currentFile();
    if ([pages.solutions, pages.logistics, pages.coldChain, pages.insurance, pages.manufacturing, pages.assetProtection, pages.useCases, pages.coldUse, pages.insuranceUse, pages.manufacturingUse, pages.theftUse].indexOf(file) !== -1) return 'solutions';
    if ([pages.platform, pages.journey, pages.track, pages.novacheck, pages.novaproof, pages.novalink, pages.novaprotect, pages.dost, pages.happened, pages.next, pages.protectLoss].indexOf(file) !== -1) return 'platform';
    if ([pages.products, pages.compare].indexOf(file) !== -1) return 'products';
    if (file === pages.pricing) return 'pricing';
    if ([pages.build, pages.checkout, pages.quote].indexOf(file) !== -1) return 'build';
    if (file === pages.portal || file === pages.login) return 'portal';
    if ([pages.blog, pages.cargoBlog, pages.chainBlog, pages.parametricBlog, pages.nobodyBlog, pages.tempBlog, pages.trackingBlog, pages.claimsBlog, pages.resources, pages.caseStudies, pages.docs, pages.gettingStarted, pages.productsOverview, pages.security, pages.faq, pages.api].indexOf(file) !== -1) return 'resources';
    if (file === pages.partners) return 'partners';
    if (file === pages.contact) return 'contact';
    if (file === pages.about) return 'about';
    return 'home';
  }

  function navTheme() {
    return 'dark';
  }

  function nearestContext(anchor) {
    return anchor.closest('.libcard,.doc-card,.res,.uc,.ind,.rel,.mcard,.ncard,.pcard,.hw-card,.fork,.plan,.popular,.side-group,.sum-body,.summary,.hero-ctas,.cta-ctas,.nav-cta,.tb-right,nav,.topbar,section,article,main,aside') || anchor;
  }

  function directRoute(label) {
    var exact = {
      'solutions': pages.solutions,
      'platform': pages.platform,
      'products': pages.products,
      'pricing': pages.pricing,
      'compare devices': pages.compare,
      'customer portal': pages.portal,
      'resources': pages.resources,
      'case studies': pages.caseStudies,
      'partners': pages.partners,
      'partner': pages.partners,
      'contact': pages.contact,
      'contact us': pages.contact,
      'about us': pages.about,
      'about': pages.about,
      'documentation': pages.docs,
      'docs': pages.docs,
      'overview': pages.docs,
      'getting started': pages.gettingStarted,
      'platform overview': pages.platform,
      'products overview': pages.productsOverview,
      'use cases': pages.useCases,
      'security and trust': pages.security,
      'faq': pages.faq,
      'api and integrations': pages.api,
      'developer portal': pages.portal,
      'blog': pages.blog,
      'blog resources': pages.blog,
      'blog and resources': pages.blog,
      'intelligence': pages.blog,
      'build your solution': pages.build,
      'build your solution now': pages.build,
      'build with explorer': pages.build,
      'build with navigator': pages.build,
      'back to builder': pages.build,
      'talk to a solutions expert': pages.quote,
      'talk to sales': pages.quote,
      'contact sales': pages.quote,
      'request quote': pages.quote,
      'request a quote': pages.quote,
      'build a quote': pages.quote,
      'send my quote request': pages.quote,
      'see pricing': pages.pricing,
      'view pricing': pages.pricing,
      'device comparison guide': pages.compare,
      'full comparison': pages.compare,
      'compare': pages.compare,
      'buy online': pages.checkout,
      'buy': pages.checkout,
      'start an order': pages.checkout,
      'purchase online': pages.checkout,
      'pay for hardware': pages.checkout,
      'login': pages.login,
      'log in': pages.login,
      'sign in': pages.login,
      'go to my account': pages.portal,
      'back to novira': pages.home,
      'edit configuration': pages.build,
      'privacy policy': pages.security,
      'terms of service': pages.security,
      'support': pages.faq,
      'forgot password': pages.login,
      'explore products': pages.products,
      'novafive': pages.novaFive,
      'novafive lite': pages.novaFiveLite,
      'novagps': pages.novaGps,
      'novagps lite': pages.novaGpsLite,
      'novaaqua': pages.novaAqua,
      'novaflex': pages.novaFlex,
      'explore the platform': pages.platform,
      'see one shipment move through the whole system': pages.journey,
      'shipment journey': pages.journey,
      'view solution': pages.solutions,
      'view use cases': pages.useCases,
      'see all industries': pages.solutions,
      'learn more': pages.resources,
      'read': pages.blog,
      'view': pages.resources
    };
    return exact[label] || null;
  }

  function contextualRoute(anchor) {
    var label = normalize(anchor.textContent);
    var context = normalize(nearestContext(anchor).textContent);
    var joined = (label + ' ' + context).trim();

    var direct = directRoute(label);
    if (direct) return direct;

    if (has(joined, ['back', 'to', 'builder'])) return pages.build;
    if (has(joined, ['build', 'with'])) return pages.build;
    if (has(joined, ['view', 'use', 'cases'])) return pages.useCases;
    if (has(joined, ['cargo', 'damage', 'transit'])) return pages.logistics;
    if (has(joined, ['cold', 'chain', 'excursion'])) return pages.coldUse;
    if (has(joined, ['insurance', 'claim', 'validation'])) return pages.insuranceUse;
    if (has(joined, ['manufacturing', 'compliance'])) return pages.manufacturingUse;
    if (has(joined, ['theft', 'prevention']) || has(joined, ['asset', 'theft'])) return pages.theftUse;
    if (has(joined, ['raw', 'data', 'opinion'])) return pages.trackingBlog;
    if (has(joined, ['verification', 'matters', 'visibility'])) return pages.trackingBlog;

    if (has(joined, ['cargo', 'dispute'])) return pages.cargoBlog;
    if (has(joined, ['chain', 'custody'])) return pages.chainBlog;
    if (has(joined, ['parametric', 'insurance'])) return pages.parametricBlog;
    if (has(joined, ['nobody', 'agree'])) return pages.nobodyBlog;
    if (has(joined, ['temperature', 'excursion'])) return pages.tempBlog;
    if (has(joined, ['tracking', 'isnt', 'enough']) || has(joined, ['tracking', 'enough'])) return pages.trackingBlog;
    if (has(joined, ['verified', 'events', 'claims']) || has(joined, ['claims', 'friction'])) return pages.claimsBlog;

    if (has(joined, ['cold', 'chain', 'excursion'])) return pages.coldUse;
    if (has(joined, ['insurance', 'claim', 'validation'])) return pages.insuranceUse;
    if (has(joined, ['manufacturing', 'compliance'])) return pages.manufacturingUse;
    if (has(joined, ['theft', 'prevention']) || has(joined, ['asset', 'theft'])) return pages.theftUse;
    if (has(joined, ['high', 'risk', 'shipment'])) return pages.theftUse;

    if (has(joined, ['logistics', 'transportation'])) return pages.logistics;
    if (has(joined, ['cold', 'chain']) || has(joined, ['pharma'])) return pages.coldChain;
    if (has(joined, ['insurance', 'risk'])) return pages.insurance;
    if (has(joined, ['manufacturing'])) return pages.manufacturing;
    if (has(joined, ['asset', 'protection']) || has(joined, ['high', 'value', 'transit'])) return pages.assetProtection;

    if (has(joined, ['platform', 'overview']) || has(joined, ['operating', 'model'])) return pages.platform;
    if (has(joined, ['novaproof', 'guide']) || has(joined, ['verified', 'record'])) return pages.novaproof;
    if (has(joined, ['novaprotect', 'guide']) || has(joined, ['protection', 'workflow'])) return pages.novaprotect;
    if (has(joined, ['asset', 'intelligence', 'record'])) return pages.journey;
    if (has(joined, ['new', 'customer', 'setup'])) return pages.gettingStarted;
    if (has(joined, ['security', 'trust'])) return pages.security;
    if (has(joined, ['api', 'integrations'])) return pages.api;
    if (has(joined, ['faq'])) return pages.faq;
    if (has(joined, ['device', 'comparison']) || has(joined, ['compare', 'devices'])) return pages.compare;

    if (has(joined, ['track', 'know', 'where'])) return pages.track;
    if (has(joined, ['novacheck']) || has(joined, ['verify', 'know', 'what', 'happened'])) return pages.novacheck;
    if (has(joined, ['novaproof']) || has(joined, ['proof'])) return pages.novaproof;
    if (has(joined, ['novalink']) || has(joined, ['share'])) return pages.novalink;
    if (has(joined, ['novaprotect']) || has(joined, ['protect', 'against', 'loss'])) return pages.novaprotect;
    if (has(joined, ['dost']) || has(joined, ['predict']) || has(joined, ['happens', 'next'])) return pages.dost;
    if (has(joined, ['know', 'what', 'happened'])) return pages.happened;
    if (has(joined, ['know', 'what', 'happens', 'next'])) return pages.next;

    if (has(joined, ['checkout']) || has(joined, ['order']) || has(joined, ['buy'])) return pages.checkout;
    if (has(joined, ['quote']) || has(joined, ['solutions', 'expert']) || has(joined, ['sales'])) return pages.quote;
    if (has(joined, ['case', 'studies'])) return pages.caseStudies;
    if (has(joined, ['partner']) || has(joined, ['partnership'])) return pages.partners;
    if (has(joined, ['contact'])) return pages.contact;
    if (has(joined, ['pricing'])) return pages.pricing;
    if (has(joined, ['products'])) return pages.products;
    if (has(joined, ['resources'])) return pages.resources;
    if (has(joined, ['documentation'])) return pages.docs;
    return null;
  }

  function wirePlaceholderLinks() {
    document.querySelectorAll('a[href="#"], a:not([href])').forEach(function (anchor) {
      var route = contextualRoute(anchor);
      if (route) {
        anchor.setAttribute('href', routeHref(route));
        anchor.dataset.prototypeLinked = 'true';
      } else {
        anchor.setAttribute('href', routeHref(pages.home));
        anchor.dataset.prototypeFallback = 'true';
      }
    });
  }

  function wireLogo() {
    document.querySelectorAll('.logo').forEach(function (logo) {
      if (logo.closest('a')) return;
      logo.setAttribute('role', 'link');
      logo.setAttribute('tabindex', '0');
      logo.setAttribute('aria-label', 'Go to Novira home');
      logo.style.cursor = 'pointer';
      logo.addEventListener('click', function () { window.location.href = routeHref(pages.home); });
      logo.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          window.location.href = routeHref(pages.home);
        }
      });
    });
  }

  function markActiveLinks() {
    var file = currentFile();
    document.querySelectorAll('a[href]').forEach(function (anchor) {
      var href = anchor.getAttribute('href');
      if (!href || href.charAt(0) === '#' || href.indexOf('http') === 0 || href.indexOf('mailto:') === 0) return;
      var target = cleanTarget(href);
      if (target === file) {
        anchor.classList.add('is-active');
        if (anchor.classList.contains('side-link')) anchor.classList.add('active');
      }
    });
  }

  function addPrototypeStyle() {
    if (document.getElementById('novira-prototype-style')) return;
    var style = document.createElement('style');
    style.id = 'novira-prototype-style';
    style.textContent = [
      ':root{--site-nav-bg:rgba(251,250,247,.96);--site-nav-ink:#15171c;--site-nav-muted:#5d6269;--site-nav-line:#e5e1d8;--site-nav-accent:#0f6e56}',
      'html{scroll-padding-top:82px}',
      'body>.novira-original-nav{display:none!important}',
      '.site-shell-nav{position:sticky;top:0;z-index:9000;background:var(--site-nav-bg);color:var(--site-nav-ink);border-bottom:1px solid var(--site-nav-line);backdrop-filter:blur(16px);font-family:var(--sans,"Spline Sans",system-ui,sans-serif)}',
      '.site-shell-nav.theme-dark{--site-nav-bg:rgba(13,15,14,.94);--site-nav-ink:#f4f1e8;--site-nav-muted:#a8a89e;--site-nav-line:rgba(244,241,232,.12);--site-nav-accent:#4fae84}',
      '.site-nav-inner{max-width:1320px;margin:0 auto;padding:0 22px;height:68px;display:flex;align-items:center;justify-content:space-between;gap:14px}',
      '.site-logo{font-family:var(--display,"Fraunces",Georgia,serif);font-size:23px;font-weight:600;letter-spacing:-.01em;color:var(--site-nav-ink);text-decoration:none;white-space:nowrap}.site-logo span{color:var(--site-nav-accent)}',
      '.site-main-nav{display:flex;align-items:center;gap:0;height:100%;min-width:0}.site-nav-item{height:100%;display:flex;align-items:center}.site-nav-link{display:inline-flex;align-items:center;gap:6px;height:100%;padding:0 8px;color:var(--site-nav-muted);font-size:13px;font-weight:500;text-decoration:none;white-space:nowrap}.site-nav-link:hover,.site-nav-item:focus-within>.site-nav-link,.site-nav-link.is-active{color:var(--site-nav-ink)!important}.site-nav-item.has-mega>.site-nav-link::after{content:"";width:5px;height:5px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg);margin-top:-3px;opacity:.6}',
      '.site-nav-actions{display:flex;align-items:center;gap:10px}.site-nav-action{display:inline-flex;align-items:center;justify-content:center;height:38px;padding:0 15px;border-radius:8px;border:1px solid var(--site-nav-line);font-size:13px;font-weight:600;text-decoration:none;color:var(--site-nav-ink);white-space:nowrap}.site-nav-action.primary{background:var(--site-nav-accent);border-color:var(--site-nav-accent);color:#fff}.site-shell-nav.theme-dark .site-nav-action.primary{color:#06140e}.site-nav-action:hover{transform:translateY(-1px)}',
      '.site-mega{position:absolute;left:50%;top:68px;transform:translateX(-50%) translateY(8px);width:min(1040px,calc(100vw - 32px));display:grid;grid-template-columns:1.1fr .9fr .9fr;gap:18px;padding:20px;border:1px solid var(--site-nav-line);border-radius:8px;background:var(--site-mega-bg,#fff);color:var(--site-nav-ink);box-shadow:0 24px 60px rgba(21,23,28,.16);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s ease,transform .18s ease,visibility .18s ease}.site-shell-nav.theme-dark .site-mega{--site-mega-bg:#14171a;box-shadow:0 24px 60px rgba(0,0,0,.38)}.site-nav-item:hover>.site-mega,.site-nav-item:focus-within>.site-mega,.site-nav-item.open>.site-mega{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}',
      '.site-mega::before{content:"";position:absolute;left:0;right:0;top:-14px;height:14px}.mega-lead{border:1px solid var(--site-nav-line);border-radius:8px;padding:18px;background:var(--site-mega-lead,#fbfaf7)}.site-shell-nav.theme-dark .mega-lead{--site-mega-lead:#0d0f0e}.mega-eyebrow{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--site-nav-accent);margin-bottom:10px}.mega-title{font-family:var(--display,"Fraunces",Georgia,serif);font-size:1.35rem;font-weight:500;line-height:1.15;margin-bottom:8px}.mega-copy{font-size:13px;line-height:1.55;color:var(--site-nav-muted);margin-bottom:14px}.mega-all{display:inline-flex;color:var(--site-nav-accent);font-size:13px;font-weight:700;text-decoration:none}',
      '.mega-col{display:grid;gap:8px;align-content:start}.mega-heading{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#8b8f97;margin:0 0 4px}.mega-card{display:grid;gap:2px;padding:10px 11px;border-radius:8px;color:var(--site-nav-ink);text-decoration:none}.mega-card:hover,.mega-card:focus{background:var(--site-mega-hover,#f4f2ec);outline:none}.site-shell-nav.theme-dark .mega-card:hover,.site-shell-nav.theme-dark .mega-card:focus{--site-mega-hover:rgba(244,241,232,.08)}.mega-card b{font-size:14px;font-weight:700}.mega-card span{font-size:12px;color:var(--site-nav-muted);line-height:1.35}',
      '.site-mobile-toggle{display:none;align-items:center;justify-content:center;width:40px;height:40px;border-radius:8px;border:1px solid var(--site-nav-line);background:var(--site-mobile-button,#fff);color:var(--site-nav-ink);cursor:pointer}.site-shell-nav.theme-dark .site-mobile-toggle{--site-mobile-button:#14171a}.site-mobile-toggle span{display:block;width:18px;height:2px;background:currentColor;box-shadow:0 6px 0 currentColor,0 -6px 0 currentColor}',
      '.site-mobile-panel{display:none;position:absolute;top:68px;left:16px;right:16px;max-height:calc(100vh - 92px);overflow:auto;border:1px solid var(--site-nav-line);border-radius:8px;background:var(--site-mobile-bg,#fff);box-shadow:0 22px 52px rgba(21,23,28,.18);padding:12px}.site-shell-nav.theme-dark .site-mobile-panel{--site-mobile-bg:#14171a;box-shadow:0 22px 52px rgba(0,0,0,.38)}.site-mobile-group{border-bottom:1px solid var(--site-nav-line);padding:8px 0}.site-mobile-group:last-child{border-bottom:none}.site-mobile-title{font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:800;color:var(--site-nav-accent);padding:8px 10px}.site-mobile-panel a{display:block;padding:10px;border-radius:8px;color:var(--site-nav-ink);text-decoration:none;font-size:14px}.site-mobile-panel a:hover{background:var(--site-mobile-hover,#f4f2ec)}.site-shell-nav.theme-dark .site-mobile-panel a:hover{--site-mobile-hover:rgba(244,241,232,.08)}.site-shell-nav.mobile-open .site-mobile-panel{display:block}',
      '.site-page-polish a:focus-visible,.site-shell-nav a:focus-visible,.site-shell-nav button:focus-visible{outline:2px solid var(--site-nav-accent);outline-offset:3px}.site-page-polish .btn,.site-page-polish button,.site-page-polish input,.site-page-polish select,.site-page-polish textarea{max-width:100%}.site-page-polish img,.site-page-polish svg{max-width:100%}',
      '.is-active{color:var(--accent,var(--seal,var(--ink)))!important}',
      '.prototype-menu-toggle{display:none;align-items:center;justify-content:center;width:40px;height:40px;border-radius:8px;border:1px solid var(--line,rgba(255,255,255,.16));background:transparent;color:inherit;cursor:pointer;font:inherit}',
      '.prototype-menu-toggle span{display:block;width:18px;height:2px;background:currentColor;box-shadow:0 6px 0 currentColor,0 -6px 0 currentColor}',
      '.prototype-menu-panel{display:none}',
      '.prototype-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;max-width:min(92vw,520px);padding:13px 16px;border-radius:10px;background:#15171c;color:#fff;box-shadow:0 14px 40px rgba(0,0,0,.25);font-family:var(--sans,system-ui,sans-serif);font-size:14px;line-height:1.45}',
      '@media(max-width:1180px){.site-nav-link{padding:0 6px;font-size:12.5px}.site-logo{font-size:21px}.site-nav-actions{display:none}}',
      '@media(max-width:1120px){.site-main-nav,.site-nav-actions{display:none}.site-mobile-toggle{display:inline-flex}.site-nav-inner{height:64px}.site-mobile-panel{top:64px}.site-shell-nav{top:0}.site-mega{display:none}}',
      '@media(max-width:860px){.prototype-menu-toggle{display:inline-flex}.nav-in,.topbar-in{position:relative}.prototype-menu-panel{position:absolute;top:100%;left:16px;right:16px;z-index:80;padding:14px;gap:8px;border:1px solid var(--line,rgba(255,255,255,.14));border-radius:8px;background:var(--surface,var(--card,var(--bg-card,var(--bg,#fff))));box-shadow:0 18px 44px rgba(0,0,0,.18)}.prototype-menu-panel a{display:flex;align-items:center;justify-content:space-between;padding:11px 12px;border-radius:8px;color:inherit;text-decoration:none}.prototype-menu-panel a:hover{background:rgba(127,127,127,.12)}.prototype-menu-open .prototype-menu-panel{display:grid}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function navLink(page, title, detail) {
    return '<a class="mega-card" href="' + routeHref(page) + '"><b>' + title + '</b><span>' + detail + '</span></a>';
  }

  function mobileLink(page, title) {
    return '<a href="' + routeHref(page) + '">' + title + '</a>';
  }

  function megaPanel(kind) {
    var panels = {
      solutions: {
        eyebrow: 'Solutions',
        title: 'Choose the operating problem.',
        copy: 'Industry pages and use cases organized around where loss, dispute, and uncertainty appear.',
        all: pages.solutions,
        allLabel: 'View all solutions',
        cols: [
          ['Industries', [
            [pages.logistics, 'Logistics', 'Cargo damage, route risk, and handoff disputes'],
            [pages.coldChain, 'Cold chain', 'Temperature-sensitive pharma and food shipments'],
            [pages.insurance, 'Insurance', 'Claims validation and risk evidence'],
            [pages.manufacturing, 'Manufacturing', 'Compliance events and condition proof'],
            [pages.assetProtection, 'Asset protection', 'Theft, route deviation, and high-value assets']
          ]],
          ['Use cases', [
            [pages.coldUse, 'Cold chain excursion', 'Verified breach and response workflow'],
            [pages.insuranceUse, 'Insurance validation', 'Trusted evidence for claim decisions'],
            [pages.manufacturingUse, 'Manufacturing compliance', 'Audit-ready records for process events'],
            [pages.theftUse, 'Theft prevention', 'Detect, verify, and trigger response']
          ]]
        ]
      },
      platform: {
        eyebrow: 'Platform',
        title: 'The whole trust chain.',
        copy: 'Move from observation to verification, proof, sharing, protection, and prediction.',
        all: pages.platform,
        allLabel: 'Open platform overview',
        cols: [
          ['Methodology', [
            [pages.journey, 'Shipment journey', 'One shipment through the full Novira chain'],
            [pages.track, 'Track', 'Where physical events enter the record'],
            [pages.novacheck, 'NovaCheck', 'Make raw readings trustworthy'],
            [pages.novaproof, 'NovaProof', 'Create sealed evidence records']
          ]],
          ['Capabilities', [
            [pages.novalink, 'NovaLink', 'Share one trusted version with every party'],
            [pages.novaprotect, 'NovaProtect', 'Activate response after verified events'],
            [pages.dost, 'DOST', 'Predict likely risk while there is still time'],
            [pages.security, 'Security & trust', 'How the records stay credible']
          ]]
        ]
      },
      products: {
        eyebrow: 'Products',
        title: 'Choose the device family.',
        copy: 'Each device route takes buyers to the right hardware, comparison, and configuration path.',
        all: pages.products,
        allLabel: 'Explore products',
        cols: [
          ['Device family', [
            [pages.novaFive, 'NovaFive', 'Flagship multi-sensor tracker'],
            [pages.novaFiveLite, 'NovaFive Lite', 'Core condition sensing at lower cost'],
            [pages.novaGps, 'NovaGPS', 'Location-first shipment tracker'],
            [pages.novaGpsLite, 'NovaGPS Lite', 'Core location tracking for scale']
          ]],
          ['Specialized devices', [
            [pages.novaAqua, 'NovaAqua', 'Condition protection for sensitive cargo'],
            [pages.novaFlex, 'NovaFlex', 'High-volume smart label deployments'],
            [pages.compare, 'Compare devices', 'Side-by-side specs and fit'],
            [pages.productsOverview, 'Products overview', 'Documentation for product selection']
          ]]
        ]
      },
      build: {
        eyebrow: 'Build your solution',
        title: 'Configure, quote, or check out.',
        copy: 'Move from fit-finding to a prototype purchase path without leaving the top navigation.',
        all: pages.build,
        allLabel: 'Open builder',
        cols: [
          ['Purchase path', [
            [pages.build, 'Build your solution', 'Configure devices, plan, and protection'],
            [pages.checkout, 'Checkout', 'Prototype online order flow'],
            [pages.quote, 'Request quote', 'For fleets, coverage, and enterprise needs']
          ]],
          ['Helpful next steps', [
            [pages.pricing, 'Pricing', 'Hardware and platform plan guidance'],
            [pages.compare, 'Compare devices', 'Confirm the best device fit'],
            [pages.contact, 'Contact', 'Talk through edge cases or rollout needs']
          ]]
        ]
      },
      resources: {
        eyebrow: 'Resources',
        title: 'Case studies, docs, and articles.',
        copy: 'A focused resource folder for proof, implementation, customer stories, and field thinking.',
        all: pages.resources,
        allLabel: 'Open resource center',
        cols: [
          ['Resource library', [
            [pages.caseStudies, 'Case studies', 'Customer-style stories and use-case outcomes'],
            [pages.docs, 'Documentation', 'Start here, setup, platform, products, trust'],
            [pages.blog, 'Blog / resources', 'Articles on verification, claims, and cold chain'],
            [pages.useCases, 'Use cases', 'Scenario pages across key industries']
          ]],
          ['Support & trust', [
            [pages.gettingStarted, 'Getting started', 'First deployment and account setup'],
            [pages.security, 'Security & trust', 'Verification, integrity, and evidence model'],
            [pages.faq, 'FAQ', 'Answers for common buying and platform questions'],
            [pages.api, 'API integrations', 'Connect records and workflows to other tools']
          ]]
        ]
      },
      blog: {
        eyebrow: 'Blog',
        title: 'Intelligence and field notes.',
        copy: 'Article topics on tracking, verification, proof, claims, cold chain, and parametric insurance.',
        all: pages.blog,
        allLabel: 'Open the blog',
        cols: [
          ['Featured topics', [
            [pages.trackingBlog, 'Why tracking is not enough', 'Visibility is only the first layer'],
            [pages.nobodyBlog, 'Nobody can agree what happened', 'How disputes grow when evidence is weak'],
            [pages.chainBlog, 'Chain-of-custody failures', 'Why records fail when they are needed most'],
            [pages.cargoBlog, 'Cargo disputes', 'How damage arguments cost supply chains']
          ]],
          ['Insurance & cold chain', [
            [pages.claimsBlog, 'Verified events and claims', 'Reducing claims friction with proof'],
            [pages.parametricBlog, 'Parametric insurance', 'Future coverage built on verified events'],
            [pages.tempBlog, 'Temperature excursions', 'Cold-chain breaches and verified records']
          ]]
        ]
      }
    };
    var panel = panels[kind];
    return '<div class="site-mega" role="group" aria-label="' + panel.eyebrow + ' menu">' +
      '<div class="mega-lead"><div class="mega-eyebrow">' + panel.eyebrow + '</div><div class="mega-title">' + panel.title + '</div><div class="mega-copy">' + panel.copy + '</div><a class="mega-all" href="' + routeHref(panel.all) + '">' + panel.allLabel + ' &rarr;</a></div>' +
      panel.cols.map(function (col) {
        return '<div class="mega-col"><div class="mega-heading">' + col[0] + '</div>' + col[1].map(function (item) { return navLink(item[0], item[1], item[2]); }).join('') + '</div>';
      }).join('') +
      '</div>';
  }

  function topNavItem(section, label, page, hasDropdown) {
    return '<div class="site-nav-item' + (hasDropdown ? ' has-mega' : '') + '" data-section="' + section + '"><a class="site-nav-link" href="' + routeHref(page) + '">' + label + '</a>' + (hasDropdown ? megaPanel(section) : '') + '</div>';
  }

  function topNavLink(section, label, page) {
    return '<a class="site-nav-link" data-section="' + section + '" href="' + routeHref(page) + '">' + label + '</a>';
  }

  function mobileGroup(title, items) {
    return '<div class="site-mobile-group"><div class="site-mobile-title">' + title + '</div>' + items.map(function (item) { return mobileLink(item[0], item[1]); }).join('') + '</div>';
  }

  function injectUnifiedNav() {
    if (document.querySelector('.site-shell-nav')) return;
    document.body.classList.add('site-page-polish');
    document.querySelectorAll('body > nav, body > .topbar').forEach(function (oldNav) {
      oldNav.classList.add('novira-original-nav');
      oldNav.setAttribute('aria-hidden', 'true');
    });

    var header = document.createElement('header');
    header.className = 'site-shell-nav theme-' + navTheme();
    header.setAttribute('data-site-nav', '');
    header.innerHTML =
      '<div class="site-nav-inner">' +
        '<a class="site-logo" href="' + routeHref(pages.home) + '">Nov<span>ira</span></a>' +
        '<nav class="site-main-nav" aria-label="Primary navigation">' +
          topNavItem('solutions', 'Solutions', pages.solutions, true) +
          topNavItem('platform', 'Platform', pages.platform, true) +
          topNavItem('products', 'Products', pages.products, true) +
          topNavLink('compare', 'Compare Devices', pages.compare) +
          topNavLink('pricing', 'Pricing', pages.pricing) +
          topNavItem('build', 'Build Your Solution', pages.build, true) +
          topNavLink('portal', 'Customer Portal', pages.portal) +
          topNavItem('resources', 'Resources', pages.resources, true) +
          topNavLink('partners', 'Partners', pages.partners) +
          topNavLink('about', 'About Us', pages.about) +
          topNavLink('contact', 'Contact', pages.contact) +
        '</nav>' +
        '<button class="site-mobile-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false"><span aria-hidden="true"></span></button>' +
        '<div class="site-mobile-panel" aria-label="Mobile navigation">' +
          mobileGroup('Solutions', [[pages.solutions, 'All solutions'], [pages.logistics, 'Logistics'], [pages.coldChain, 'Cold chain'], [pages.insurance, 'Insurance'], [pages.manufacturing, 'Manufacturing'], [pages.assetProtection, 'Asset protection'], [pages.useCases, 'Use cases']]) +
          mobileGroup('Platform', [[pages.platform, 'Platform overview'], [pages.journey, 'Shipment journey'], [pages.track, 'Track'], [pages.novacheck, 'NovaCheck'], [pages.novaproof, 'NovaProof'], [pages.novalink, 'NovaLink'], [pages.novaprotect, 'NovaProtect'], [pages.dost, 'DOST']]) +
          mobileGroup('Products', [[pages.products, 'Products'], [pages.novaFive, 'NovaFive'], [pages.novaFiveLite, 'NovaFive Lite'], [pages.novaGps, 'NovaGPS'], [pages.novaGpsLite, 'NovaGPS Lite'], [pages.novaAqua, 'NovaAqua'], [pages.novaFlex, 'NovaFlex'], [pages.compare, 'Compare devices']]) +
          mobileGroup('Buy', [[pages.pricing, 'Pricing'], [pages.build, 'Build your solution'], [pages.checkout, 'Checkout'], [pages.quote, 'Request quote'], [pages.portal, 'Customer portal']]) +
          mobileGroup('Resources', [[pages.resources, 'Resource center'], [pages.caseStudies, 'Case studies'], [pages.docs, 'Documentation'], [pages.blog, 'Blog / resources'], [pages.useCases, 'Use cases'], [pages.faq, 'FAQ'], [pages.security, 'Security & trust']]) +
          mobileGroup('Company', [[pages.partners, 'Partners'], [pages.about, 'About us'], [pages.contact, 'Contact']]) +
        '</div>' +
      '</div>';

    document.body.insertBefore(header, document.body.firstChild);

    var section = currentSection();
    header.querySelectorAll('[data-section="' + section + '"]').forEach(function (node) { node.classList.add('is-active'); });

    header.querySelectorAll('.site-nav-item > .site-nav-link').forEach(function (link) {
      var item = link.closest('.site-nav-item');
      if (!item || !item.querySelector('.site-mega')) return;
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var isOpen = item.classList.contains('open');
        header.querySelectorAll('.site-nav-item.open').forEach(function (openItem) { openItem.classList.remove('open'); });
        item.classList.toggle('open', !isOpen);
      });
    });

    var toggle = header.querySelector('.site-mobile-toggle');
    toggle.addEventListener('click', function () {
      var open = !header.classList.contains('mobile-open');
      header.classList.toggle('mobile-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function (event) {
      if (!header.contains(event.target)) {
        header.classList.remove('mobile-open');
        toggle.setAttribute('aria-expanded', 'false');
        header.querySelectorAll('.site-nav-item.open').forEach(function (openItem) { openItem.classList.remove('open'); });
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        header.classList.remove('mobile-open');
        toggle.setAttribute('aria-expanded', 'false');
        header.querySelectorAll('.site-nav-item.open').forEach(function (openItem) { openItem.classList.remove('open'); });
      }
    });
  }

  function collectPrimaryLinks(scope) {
    var wanted = [
      ['Solutions', pages.solutions],
      ['Platform', pages.platform],
      ['Products', pages.products],
      ['Compare Devices', pages.compare],
      ['Pricing', pages.pricing],
      ['Build Your Solution', pages.build],
      ['Customer Portal', pages.portal],
      ['Resources', pages.resources],
      ['Partners', pages.partners],
      ['About Us', pages.about],
      ['Contact', pages.contact]
    ];
    var found = [];
    var seen = {};
    scope.querySelectorAll('.nav-links a, .tb-right a, .side-link').forEach(function (anchor) {
      var href = anchor.getAttribute('href');
      var text = anchor.textContent.replace(/\s+/g, ' ').trim();
      if (!href || !text || href.charAt(0) === '#') return;
      var key = text + '|' + href;
      if (!seen[key]) {
        found.push([text, href]);
        seen[key] = true;
      }
    });
    return found.length >= 3 ? found : wanted;
  }

  function addMobileMenus() {
    document.querySelectorAll('nav, .topbar').forEach(function (bar, index) {
      var inner = bar.querySelector('.nav-in, .topbar-in') || bar;
      if (inner.querySelector('.prototype-menu-toggle')) return;
      var links = collectPrimaryLinks(bar);
      if (!links.length) return;

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'prototype-menu-toggle';
      button.setAttribute('aria-label', 'Open navigation menu');
      button.setAttribute('aria-expanded', 'false');
      button.innerHTML = '<span aria-hidden="true"></span>';

      var panel = document.createElement('div');
      panel.className = 'prototype-menu-panel';
      panel.id = 'prototype-menu-' + index;
      links.forEach(function (pair) {
        var link = document.createElement('a');
        link.href = pair[1];
        link.textContent = pair[0];
        panel.appendChild(link);
      });
      button.setAttribute('aria-controls', panel.id);
      button.addEventListener('click', function () {
        var open = !bar.classList.contains('prototype-menu-open');
        bar.classList.toggle('prototype-menu-open', open);
        button.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', function (event) {
        if (!bar.contains(event.target)) {
          bar.classList.remove('prototype-menu-open');
          button.setAttribute('aria-expanded', 'false');
        }
      });

      var cta = inner.querySelector('.nav-cta, .tb-right, .nav-cta + a, .nav-cta a, .tb-cta');
      inner.insertBefore(button, cta || null);
      inner.appendChild(panel);
    });
  }

  function showToast(message) {
    var old = document.querySelector('.prototype-toast');
    if (old) old.remove();
    var toast = document.createElement('div');
    toast.className = 'prototype-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    window.setTimeout(function () { toast.remove(); }, 3600);
  }

  function builderParams() {
    var state = window.state || {};
    var qtyInput = document.getElementById('qty');
    var qty = Math.max(1, parseInt(qtyInput && qtyInput.value, 10) || state.qty || 1);
    return {
      device: state.device || 'NovaFive',
      price: state.price || 199,
      qty: qty,
      plan: state.plan || 'Navigator',
      mo: state.planMo || 24,
      prot: state.prot || 'none'
    };
  }

  function wireBuilderFlow() {
    var btn = document.getElementById('ctaBtn');
    if (!btn || currentFile() !== pages.build) return;
    btn.addEventListener('click', function () {
      var cfg = builderParams();
      var params = new URLSearchParams(cfg);
      var quote = cfg.plan === 'Atlas' || cfg.prot !== 'none' || Number(cfg.qty) > 25;
      window.location.href = (quote ? pages.quote : pages.checkout) + '?' + params.toString();
    });
  }

  function wirePrototypeStubs() {
    var forgot = document.getElementById('forgot');
    if (forgot) {
      forgot.addEventListener('click', function (event) {
        event.preventDefault();
        showToast('Password reset is ready for backend integration in this prototype.');
      }, true);
    }
    document.querySelectorAll('a[href="portal.html"]').forEach(function (anchor) {
      anchor.addEventListener('click', function () {
        if (!document.querySelector('body')) return;
      });
    });
  }

  addPrototypeStyle();
  wirePlaceholderLinks();
  injectUnifiedNav();
  wireLogo();
  markActiveLinks();
  wireBuilderFlow();
  wirePrototypeStubs();
}());
