# CLAUDE.md -- Mountain Green Landingpage

## Projektbeschreibung
Landingpage fuer Mountain Green, ein vertikal integrierter Cannabis-Produzent
(Anbau -> Extraktion -> Vertrieb). Zielgruppe: B2B-Partner und informierte Endverbraucher.
Die Seite kommuniziert Vertrauen, Qualitaet und moderne Agrartechnologie.

**Firma:** Mountain Green GmbH, Zwatzhof 8, 9362 Grades, Kaernten, AT
**FN:** 591530 y | **UID:** ATU78748018

## Tech-Stack
| Layer | Technologie | Version |
|-------|-------------|---------|
| **Framework** | Astro (Static Site Generation) | 6.0.6 |
| **Styling** | Tailwind CSS via @tailwindcss/vite | 4.2.2 |
| **React** | @astrojs/react (installiert, minimal genutzt) | 5.0.1 |
| **Icons** | @lucide/astro (Inline-SVGs) + Custom SVGs im Footer | 0.577.0 |
| **Fonts** | Inter (Body) + Plus Jakarta Sans (Headlines) -- selbst gehostet | woff2 |
| **Animationen** | CSS + IntersectionObserver (Scroll-Reveal), Vanilla JS (Hero-Karussell) | -- |
| **Framer Motion** | Installiert (12.38.0), aktuell nicht aktiv genutzt | 12.38.0 |
| **Screenshots** | Puppeteer (visuelles Testing) | 24.39.1 |
| **Build** | Vite | 8.0.1 |

**Wichtig:** Kein CommonJS, kein jQuery, keine externen CDNs/Google Fonts (DSGVO).

## Dateistruktur (Ist-Zustand)
```
src/
├── components/
│   ├── AnnouncementBar.astro      # Gruener Balken oben, Text via Props
│   ├── SiteHeader.astro           # Sticky Header, Logo-Shrink, Hamburger-Menue
│   ├── HeroSection.astro          # Bild-Karussell (hero1/hero2), Overlay-Text
│   ├── WhoWeAreSection.astro      # "Wer wir sind" -- Kurzvorstellung
│   ├── AboutSection.astro         # "Ueber uns" -- 2-Spalten mit Standort-Karte
│   ├── ServicesSection.astro      # "Leistungen" -- 3 versetzte Cards mit Bildern
│   ├── BenefitsSection.astro      # "Nutzen" -- B2B/B2C 2-Spalten
│   └── Footer.astro               # Dunkelgruen, Social Icons, Impressum-Link
├── config/
│   └── site.ts                    # Zentrale Konfiguration (Announcement, Social Links)
├── layouts/
│   └── BaseLayout.astro           # Master-Template (SEO, JSON-LD, OG, Font-Preloads)
├── pages/
│   ├── index.astro                # Homepage (alle Sektionen)
│   ├── kontakt.astro              # Kontaktseite
│   └── impressum.astro            # Impressum (AT-Rechtskonform)
└── styles/
    ├── global.css                 # Scroll-Animationen, Theme-Variablen
    └── fonts.css                  # @font-face Definitionen

public/
├── fonts/
│   ├── inter/                     # Inter-Regular, Inter-Medium, Inter-Bold (.woff2)
│   └── plus-jakarta-sans/         # PlusJakartaSans-SemiBold, -Bold (.woff2)
├── images/
│   ├── hero1.webp, hero2.webp     # Hero-Karussell (WebP optimiert)
│   ├── Anbau1.webp                # Service-Bild: Anbau
│   ├── Veredelung1.webp           # Service-Bild: Veredelung
│   ├── Produktion1.webp           # Service-Bild: Produktion
│   └── logo/mountaingreen_logo.webp
└── favicon.png
```

## Konfiguration (`src/config/site.ts`)
Zentrale Stelle fuer aenderbare Inhalte:
- `announcementBar.enabled` -- Balken ein/ausschalten
- `announcementBar.text` -- Ankuendigungstext
- `socialLinks` -- WhatsApp, Instagram, TikTok, YouTube URLs

## Seitenstruktur (Homepage -- Ist-Zustand)

### Navigation (Fixed Position)
1. **AnnouncementBar** -- Gruener Balken (#054027), weisser Text, slidet beim Scrollen hoch
2. **SiteHeader** -- Weisser Sticky Header, Logo 160x160 (shrinks auf 48x48), Hamburger-Menue rechts

### Sektionen (in dieser Reihenfolge)
1. **HeroSection** -- Vollbild-Karussell (hero1.webp/hero2.webp, 5s Interval), Gradient-Overlay, zentrierter Text mit Drop-Shadow
2. **WhoWeAreSection** -- Badge "ANBAU . VERARBEITUNG . QUALITAET", Headline + Kurztext, CTA -> #leistungen
3. **AboutSection** -- 2-Spalten: Text links + Standort-Karte rechts (Gurktal, Kaernten), CTA -> Kontakt
4. **ServicesSection** -- 3 versetzte Cards (Anbau/Veredelung/Produktion & Verkauf), abwechselnd links/rechts mit WebP-Bildern
5. **BenefitsSection** -- 2-Spalten: B2B (White-Label) links | B2C (Endverbraucher) rechts, Feature-Listen mit Checkmarks
6. **Footer** -- Dunkelgruen (#054027), Social Icons (WhatsApp, Instagram, TikTok, YouTube), Impressum-Link, Copyright

### Zusaetzliche Seiten
- **`/kontakt`** -- Kontaktinfos, Geschaeftszeiten, 2-Spalten-Layout
- **`/impressum`** -- AT-Rechtskonformes Impressum (ECG/MedienG/UGB), EU-Streitbeilegung

## Design-System

### Farbpalette
| Token | Hex | Verwendung |
|-------|-----|------------|
| `green-50` | #f0fdf4 | Hintergrundebenen, Standort-Karte |
| `green-100` | #dcfce7 | Subtile Highlights, Badges |
| `green-600` | #054027 | Primary CTAs, Icons, Akzente, Announcement Bar |
| `green-800` | #054027 | Headlines, Logofarbe |
| `green-950` | #054027 | Footer-Hintergrund |
| `neutral-50` / `white` | #F7F7F5 | Seitenhintergrund, Cards |
| `neutral-700` | #404040 | Fliesstext |

### Typography
- **Headlines (h1-h2):** Plus Jakarta Sans, weight 700, letter-spacing -0.02em
- **Subheadings (h3-h4):** Plus Jakarta Sans, weight 600
- **Body:** Inter, weight 400, line-height 1.7
- **Labels/Badges:** Inter, weight 500, uppercase, letter-spacing 0.08em
- Fonts selbst gehostet unter `public/fonts/` (DSGVO-konform)
- @font-face in `src/styles/fonts.css`, Preloads in `BaseLayout.astro`

### Spacing & Komponenten
- Container: `max-w-6xl`
- Horizontal Padding: `px-6` (mobile), `sm:px-8`, `lg:px-12`
- Section Padding: `py-24` (mobile), `sm:py-32`
- Grid Gap: `gap-8` bis `gap-12`
- Border Radius: `rounded-2xl` durchgehend
- Shadow: `shadow-sm` fuer Tiefe

### Stil-Direktiven
- Hell und clean: weisser Hintergrund (#F7F7F5)
- Gruene Akzente gezielt -- kein Overuse
- Keine dunklen Hintergruende ausser Footer
- Mobile-first, responsiv ab 320px

## Animationen (Ist-Zustand)

### Scroll-Reveal (`src/styles/global.css` + `BaseLayout.astro`)
- IntersectionObserver auf `[data-animate]`-Elementen (10% Threshold, 40px rootMargin)
- Richtungen: `up`, `down`, `left`, `right`, `fade`
- Stagger-Delays: `data-delay="1|2|3|4"` (0.1s-0.5s)
- Respektiert `prefers-reduced-motion` (nur Opacity-Transition)

### Header-Scroll-Verhalten (`SiteHeader.astro`)
- Logo: 160px -> 48px ab scrollY > 40px (Transition 0.3s ease)
- Header-Padding reduziert sich (`is-scrolled` Klasse)
- AnnouncementBar slidet per translateY hoch (0.35s ease)

### Hero-Karussell (`HeroSection.astro`)
- Auto-Rotation alle 5000ms, Opacity-Transition 1000ms
- Vanilla JS, kein Framework

## Implementierte Features
- [x] Announcement Bar (konfigurierbar, Auto-Hide on Scroll)
- [x] Sticky Header mit Logo-Shrink und Hamburger-Menue
- [x] Hero-Bild-Karussell (5s Intervall, Smooth Transitions)
- [x] Scroll-Animationen (IntersectionObserver, Stagger, Reduced-Motion)
- [x] Responsive Design (Mobile-first ab 320px)
- [x] Accessibility (Semantisches HTML, ARIA, Alt-Texte, Fokus-States)
- [x] SEO (JSON-LD Organization/WebSite, Open Graph, Twitter Cards, Canonical URLs)
- [x] AT-Rechtskonformitaet (Impressum ECG/MedienG/UGB, DSGVO-Fonts, kein externes Tracking)
- [x] Social Links (WhatsApp, Instagram, TikTok, YouTube) via Config
- [x] Performance (Font-Preloads, WebP-Bilder, Lazy Loading, Async Decoding)
- [x] Kontaktseite (`/kontakt`)
- [x] Impressum (`/impressum`)

## Code-Konventionen
- ES Modules durchgehend (`import`/`export`), kein `require()`
- Tailwind-Klassen direkt im Markup -- keine separaten CSS-Dateien ausser `global.css` und `fonts.css`
- Komponentennamen: PascalCase (z.B. `HeroSection.astro`)
- Alle Texte als Props uebergeben, keine hartkodierte Strings in Components
- Aenderbare Inhalte (Announcement, Social Links) in `src/config/site.ts`
- Accessibility: Semantisches HTML (`<section>`, `<nav>`), alt-Texte pflichtend
- Keine externen Tracking-Scripts ohne explizite Anweisung

## Screenshot-Feedback-Loop
Puppeteer ist installiert fuer visuelles Testing:
1. Screenshots in `C:\Users\herby\Desktop\claude code\Screenshots\` speichern
2. Benennung: `[version]_[sektion]_[timestamp].png`
3. Server auf Port 3000 starten, warten bis bereit, Screenshot machen
4. Bild analysieren, korrigieren, Vergleichs-Screenshot
5. Am Ende der Sitzung Screenshot-Ordner aufraeumen

## UI Workflow
Nach dem Erstellen oder Aendern einer Frontend-Komponente automatisch in dieser Reihenfolge ausfuehren:

- `/frontend-design` -- Visuelles Design pruefen: Farben, Abstaende, Typography gemaess Design-System
- `/ui-ux-pro-max`
- `/baseline-ui` -- Basis-UI-Qualitaet sicherstellen: Konsistenz, Proportionen, Responsive-Verhalten
- `/fixing-accessibility` -- ARIA-Labels, Kontrastverhaeltnisse (WCAG AA), Tastaturnavigation
- `/fixing-motion-performance` -- Animationen auf `prefers-reduced-motion` pruefen, CSS-only bevorzugen, keine Layout-Thrashing-Effekte
- `/legal-compliance-at` -- Oesterreichische Rechtskonformitaet: DSGVO-Fonts, TKG 2021 Opt-in, AT-Lokalisierung, Impressum (ECG/MedienG/UGB), Tracking/Consent
- `/seo-semantic-master` -- SEO-Qualitaet: Heading-Hierarchie, semantische HTML-Tags, Meta-Daten, JSON-LD Schemas, Bild-Optimierung, Core Web Vitals

> Dieser Workflow ist **nicht optional** -- er gilt fuer jede Komponente, auch fuer kleine Aenderungen.

## Workflow-Praeferenz
Immer nach dem **Explore -> Plan -> Code -> Commit**-Muster vorgehen:
1. Relevante Dateien lesen, bevor Aenderungen vorgeschlagen werden
2. Plan als Kommentar-Block ausgeben, bevor Code geschrieben wird
3. Keine spekulativen Aenderungen an Dateien, die nicht gelesen wurden
