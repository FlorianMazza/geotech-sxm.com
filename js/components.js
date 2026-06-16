/**
 * components.js — Geotech Caraïbes
 * Shared navbar and footer injection for all pages.
 * Usage: include this script at the bottom of <body>.
 * The page must contain:
 *   <div id="navbar-placeholder"></div>   (top of body)
 *   <div id="footer-placeholder"></div>   (bottom of body)
 */

/* ============================================================
   NAVBAR TEMPLATE
   ============================================================ */
const NAVBAR_HTML = `
<header class="site-header" id="site-header">
  <nav class="navbar" role="navigation" aria-label="Navigation principale">
    <div class="navbar__container">

      <!-- ── Logo ─────────────────────────────────────────── -->
      <a class="navbar__logo" href="/" aria-label="Geotech Caraïbes — Accueil">
        <!-- Inline SVG: hexagon, orange top with "G", blue stripes, wordmark -->
        <svg class="navbar__logo-svg" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 80 90" width="54" height="60" aria-hidden="true">
          <!-- Hexagon outline -->
          <polygon points="40,4 76,24 76,64 40,84 4,64 4,24"
                   fill="#ffffff" stroke="#1a3a5c" stroke-width="2"/>
          <!-- Orange top half -->
          <clipPath id="hex-clip">
            <polygon points="40,4 76,24 76,64 40,84 4,64 4,24"/>
          </clipPath>
          <rect x="4" y="4" width="72" height="42" fill="#E8651A" clip-path="url(#hex-clip)"/>
          <!-- Blue stripe band -->
          <rect x="4" y="46" width="72" height="6"  fill="#1a3a5c" clip-path="url(#hex-clip)"/>
          <rect x="4" y="55" width="72" height="4"  fill="#2a6db5" clip-path="url(#hex-clip)"/>
          <rect x="4" y="62" width="72" height="22" fill="#1a3a5c" clip-path="url(#hex-clip)"/>
          <!-- Letter G -->
          <text x="40" y="38" text-anchor="middle" dominant-baseline="middle"
                font-family="Arial Black, sans-serif" font-weight="900"
                font-size="28" fill="#ffffff">G</text>
        </svg>
        <span class="navbar__logo-text">
          <span class="navbar__logo-main">GEOTECH</span>
          <span class="navbar__logo-sub">CARAÏBES</span>
        </span>
      </a>

      <!-- ── Desktop navigation ───────────────────────────── -->
      <ul class="navbar__menu" role="list" id="navbar-menu">

        <li class="navbar__item">
          <a class="navbar__link" href="/">Accueil</a>
        </li>

        <!-- Services mega-dropdown -->
        <li class="navbar__item navbar__item--has-dropdown" id="services-menu-item">
          <button class="navbar__link navbar__link--dropdown-trigger"
                  aria-expanded="false" aria-controls="services-dropdown"
                  id="services-trigger">
            Services
            <svg class="navbar__chevron" xmlns="http://www.w3.org/2000/svg"
                 width="12" height="12" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div class="navbar__dropdown navbar__dropdown--mega"
               id="services-dropdown" role="region" aria-labelledby="services-trigger">
            <div class="navbar__dropdown-grid">

              <a class="navbar__dropdown-item" href="/vrd-saint-martin.html">
                <span class="navbar__dropdown-icon" aria-hidden="true">🛣️</span>
                <span class="navbar__dropdown-content">
                  <strong>Voirie &amp; VRD</strong>
                  <small>Réseaux secs et humides, voirie</small>
                </span>
              </a>

              <a class="navbar__dropdown-item" href="/terrassement-saint-martin.html">
                <span class="navbar__dropdown-icon" aria-hidden="true">🏗️</span>
                <span class="navbar__dropdown-content">
                  <strong>Terrassement</strong>
                  <small>Déblai, remblai, nivellement</small>
                </span>
              </a>

              <a class="navbar__dropdown-item" href="/assainissement-saint-martin.html">
                <span class="navbar__dropdown-icon" aria-hidden="true">💧</span>
                <span class="navbar__dropdown-content">
                  <strong>Assainissement</strong>
                  <small>Réseaux EU, EP, eaux usées</small>
                </span>
              </a>

              <a class="navbar__dropdown-item" href="/geotechnique-saint-martin.html">
                <span class="navbar__dropdown-icon" aria-hidden="true">🔬</span>
                <span class="navbar__dropdown-content">
                  <strong>Géotechnique</strong>
                  <small>Études de sol, sondages</small>
                </span>
              </a>

              <a class="navbar__dropdown-item" href="/fondations-speciales-saint-martin.html">
                <span class="navbar__dropdown-icon" aria-hidden="true">⚓</span>
                <span class="navbar__dropdown-content">
                  <strong>Fondations Spéciales</strong>
                  <small>Micropieux, parois moulées</small>
                </span>
              </a>

              <a class="navbar__dropdown-item" href="/amenagements-exterieurs-saint-martin.html">
                <span class="navbar__dropdown-icon" aria-hidden="true">🌿</span>
                <span class="navbar__dropdown-content">
                  <strong>Aménagements Extérieurs</strong>
                  <small>Espaces verts, clôtures, pavage</small>
                </span>
              </a>

            </div>
            <div class="navbar__dropdown-footer">
              <a href="/index.html#devis" class="navbar__dropdown-cta">
                Obtenir un devis gratuit →
              </a>
            </div>
          </div>
        </li>

        <li class="navbar__item">
          <a class="navbar__link" href="/realisations.html">Réalisations</a>
        </li>

        <li class="navbar__item">
          <a class="navbar__link" href="/materiel.html">Matériel</a>
        </li>

        <li class="navbar__item">
          <a class="navbar__link" href="/a-propos.html">À propos</a>
        </li>

        <li class="navbar__item">
          <a class="navbar__link" href="/blog/">Blog</a>
        </li>

        <li class="navbar__item">
          <a class="navbar__link" href="/recrutement.html">Recrutement</a>
        </li>

      </ul>

      <!-- ── Right controls ───────────────────────────────── -->
      <div class="navbar__controls">

        <!-- Phone (desktop only) -->
        <a class="navbar__phone" href="tel:+590590000000" aria-label="Appeler Geotech Caraïbes">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
               viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
                     A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3-8.59
                     A2 2 0 0 1 3.32 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0
                     .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6
                     l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7
                     A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>+590 (0)590 00 00 00</span>
        </a>

        <!-- Language switcher -->
        <div class="lang-switcher" id="lang-switcher" role="navigation" aria-label="Choix de langue">
          <button class="lang-switcher__btn lang-switcher__btn--active"
                  data-lang="fr" aria-pressed="true">
            🇫🇷 FR
          </button>
          <button class="lang-switcher__btn" data-lang="en" aria-pressed="false">
            🇬🇧 EN
          </button>
          <button class="lang-switcher__btn" data-lang="nl" aria-pressed="false">
            🇳🇱 NL
          </button>
        </div>

        <!-- CTA button -->
        <a class="btn btn--cta navbar__cta" href="/index.html#devis">
          Devis gratuit
        </a>

        <!-- Hamburger (mobile) -->
        <button class="navbar__hamburger" id="navbar-hamburger"
                aria-label="Ouvrir le menu" aria-expanded="false"
                aria-controls="navbar-menu">
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
        </button>

      </div>
    </div>
  </nav>
</header>
`;

/* ============================================================
   FOOTER TEMPLATE
   ============================================================ */
const FOOTER_HTML = `
<footer class="site-footer" role="contentinfo">
  <div class="site-footer__top">
    <div class="container">
      <div class="site-footer__grid">

        <!-- ── Column 0: Brand ──────────────────────────────── -->
        <div class="site-footer__brand">
          <!-- Logo -->
          <a class="site-footer__logo" href="/" aria-label="Geotech Caraïbes — Accueil">
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 80 90" width="48" height="54" aria-hidden="true">
              <polygon points="40,4 76,24 76,64 40,84 4,64 4,24"
                       fill="#ffffff" stroke="#2a6db5" stroke-width="2"/>
              <clipPath id="footer-hex-clip">
                <polygon points="40,4 76,24 76,64 40,84 4,64 4,24"/>
              </clipPath>
              <rect x="4" y="4"  width="72" height="42" fill="#E8651A" clip-path="url(#footer-hex-clip)"/>
              <rect x="4" y="46" width="72" height="6"  fill="#1a3a5c" clip-path="url(#footer-hex-clip)"/>
              <rect x="4" y="55" width="72" height="4"  fill="#2a6db5" clip-path="url(#footer-hex-clip)"/>
              <rect x="4" y="62" width="72" height="22" fill="#1a3a5c" clip-path="url(#footer-hex-clip)"/>
              <text x="40" y="38" text-anchor="middle" dominant-baseline="middle"
                    font-family="Arial Black, sans-serif" font-weight="900"
                    font-size="28" fill="#ffffff">G</text>
            </svg>
            <span class="site-footer__logo-text">
              <span class="site-footer__logo-main">GEOTECH</span>
              <span class="site-footer__logo-sub">CARAÏBES</span>
            </span>
          </a>

          <p class="site-footer__tagline">
            Expert en VRD, terrassement et géotechnique à Saint-Martin depuis plus de 15 ans.
            Votre partenaire de confiance pour tous vos projets de construction.
          </p>

          <!-- Social links -->
          <div class="site-footer__social" aria-label="Réseaux sociaux">
            <a class="site-footer__social-link" href="https://www.linkedin.com/company/geotech-caraibes"
               target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Geotech Caraïbes">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                   viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0
                         0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a class="site-footer__social-link" href="https://www.facebook.com/geotechcaraibes"
               target="_blank" rel="noopener noreferrer" aria-label="Facebook Geotech Caraïbes">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                   viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7
                         a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a class="site-footer__social-link" href="https://www.instagram.com/geotechcaraibes"
               target="_blank" rel="noopener noreferrer" aria-label="Instagram Geotech Caraïbes">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- ── Column 1: Services ────────────────────────────── -->
        <nav class="site-footer__col" aria-labelledby="footer-services-heading">
          <h3 class="site-footer__heading" id="footer-services-heading">Nos Services</h3>
          <ul class="site-footer__list" role="list">
            <li><a class="site-footer__link" href="/vrd-saint-martin.html">Voirie &amp; VRD</a></li>
            <li><a class="site-footer__link" href="/terrassement-saint-martin.html">Terrassement</a></li>
            <li><a class="site-footer__link" href="/assainissement-saint-martin.html">Assainissement</a></li>
            <li><a class="site-footer__link" href="/geotechnique-saint-martin.html">Géotechnique</a></li>
            <li><a class="site-footer__link" href="/fondations-speciales-saint-martin.html">Fondations Spéciales</a></li>
            <li><a class="site-footer__link" href="/amenagements-exterieurs-saint-martin.html">Aménagements Extérieurs</a></li>
          </ul>
        </nav>

        <!-- ── Column 2: Entreprise ─────────────────────────── -->
        <nav class="site-footer__col" aria-labelledby="footer-company-heading">
          <h3 class="site-footer__heading" id="footer-company-heading">Entreprise</h3>
          <ul class="site-footer__list" role="list">
            <li><a class="site-footer__link" href="/a-propos.html">À propos</a></li>
            <li><a class="site-footer__link" href="/realisations.html">Réalisations</a></li>
            <li><a class="site-footer__link" href="/materiel.html">Matériel</a></li>
            <li><a class="site-footer__link" href="/blog/">Blog</a></li>
            <li><a class="site-footer__link" href="/recrutement.html">Recrutement</a></li>
          </ul>
        </nav>

        <!-- ── Column 3: Zone d'intervention ───────────────── -->
        <nav class="site-footer__col" aria-labelledby="footer-zone-heading">
          <h3 class="site-footer__heading" id="footer-zone-heading">Zone d'Intervention</h3>
          <ul class="site-footer__list site-footer__list--zones" role="list">
            <li>Saint-Martin (partie française)</li>
            <li>Sint Maarten (partie néerlandaise)</li>
            <li>Marigot</li>
            <li>Philipsburg</li>
            <li>Grand Case</li>
            <li>Orient Bay</li>
            <li>Maho</li>
            <li>Mullet Bay</li>
            <li>Dawn Beach</li>
            <li>Cole Bay</li>
          </ul>
        </nav>

        <!-- ── Column 4: Contact ─────────────────────────────── -->
        <address class="site-footer__col site-footer__contact" aria-labelledby="footer-contact-heading">
          <h3 class="site-footer__heading" id="footer-contact-heading">Contact</h3>
          <ul class="site-footer__list site-footer__list--contact" role="list">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
                         A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3-8.59
                         A2 2 0 0 1 3.32 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0
                         .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6
                         l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7
                         A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a class="site-footer__link" href="tel:+590590000000">+590 (0)590 00 00 00</a>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a class="site-footer__link" href="mailto:contact@geotech-caraibes.fr">contact@geotech-caraibes.fr</a>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Route de Sandy Ground<br>97150 Saint-Martin</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Lun–Ven&nbsp;: 07h30–17h30<br>Sam&nbsp;: 07h30–12h00</span>
            </li>
          </ul>
        </address>

      </div>
    </div>
  </div>

  <!-- ── Bottom bar ──────────────────────────────────────────── -->
  <div class="site-footer__bottom">
    <div class="container site-footer__bottom-inner">
      <p class="site-footer__copy">
        &copy; <span id="footer-year"></span> Geotech Caraïbes. Tous droits réservés.
      </p>
      <nav class="site-footer__legal" aria-label="Liens légaux">
        <a class="site-footer__legal-link" href="/mentions-legales.html">Mentions légales</a>
        <a class="site-footer__legal-link" href="/politique-confidentialite.html">Politique de confidentialité</a>
        <a class="site-footer__legal-link" href="/rgpd.html">RGPD</a>
      </nav>
    </div>
  </div>
</footer>
`;

/* ============================================================
   INJECTION — inject navbar and footer into placeholder divs
   ============================================================ */
(function injectComponents() {
  'use strict';

  /**
   * Injects an HTML string into a DOM element by id.
   * @param {string} id - The element id to inject into.
   * @param {string} html - The HTML string to inject.
   */
  function inject(id, html) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = html;
    } else {
      console.warn('[components.js] Placeholder #' + id + ' not found.');
    }
  }

  inject('navbar-placeholder', NAVBAR_HTML);
  inject('footer-placeholder', FOOTER_HTML);

  // Set dynamic footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
