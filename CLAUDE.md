# CLAUDE.md – Mountain Green Landingpage

## Projektbeschreibung
Einzel-Landingpage für Mountain Green, ein vertikal integrierter Cannabis-Produzent
(Anbau → Extraktion → Vertrieb). Zielgruppe: B2B-Partner und informierte Endverbraucher.
Die Seite kommuniziert Vertrauen, Qualität und moderne Agrartechnologie.

## Tech-Stack
- **Framework**: Astro (Static Site, kein Server-Rendering nötig)
- **Styling**: Tailwind CSS v4 (utility-first, kein custom CSS-Framework)
- **Scripting**: Vanilla JS / ES Modules – kein CommonJS, kein jQuery
- **Icons**: Lucide Icons (via @lucide/astro)
- **Fonts**: `Inter` (Body) + `Plus Jakarta Sans` (Headlines) – selbst gehostet unter `public/fonts/`
- **Animationen** – Framer Motion (Verleihe der Seite das „High-End“-Gefühl durch butterweiche, physikalisch korrekte Animationen)

## Screenshot-Feedback-Loop Regeln
Du hast Zugriff auf Puppeteer, um das visuelle Ergebnis deiner Arbeit zu prüfen. Folge strikt diesem Protokoll:

1. **Setup:** Falls Puppeteer nicht installiert ist, frage mich kurz nach der Erlaubnis, `npm install puppeteer` auszuführen.
2. **Speicherort:** Alle Screenshots müssen im Ordner `C:\Users\herby\Desktop\claude code\Screenshots\` gespeichert werden. Erstelle diesen Ordner, falls er nicht existiert.
3. **Benennung:** Nutze ein klares Schema: `[version]_[sektion]_[timestamp].png` (z.B. `v1_hero_171000.png`).
4. **Workflow:**
   - Starte den lokalen Server.
   - Warte, bis der Server auf Port 3000 antwortet, bevor du den Screenshot mit Puppeteer machst.
   - Mache einen Screenshot der betroffenen Sektion.
   - Analysiere das Bild auf Design-Fehler (Layout-Verschiebungen, Kontrast, Responsivität).
   - Korrigiere den Code und mache einen Vergleichs-Screenshot.
5. **Aufräumen:** Lösche am Ende jeder erfolgreichen Sitzung alle Dateien im Ordner `C:\Users\herby\Desktop\claude code\Screenshots\`, um das Repository sauber zu halten.

## Design-System

### Farbpalette
| Token            | Hex       | Verwendung                        |
|------------------|-----------|-----------------------------------|
| `--green-50`     | #f0fdf4   | Hintergrundebenen, Cards          |
| `--green-100`    | #dcfce7   | Subtile Highlights, Badges        |
| `--green-600`    | #16a34a   | Primary CTAs, Icons, Akzente      |
| `--green-800`    | #166534   | Headlines, Logofarbe              |
| `--green-950`    | #052e16   | Footer-Hintergrund, dunkle Text   |
| `--neutral-50`   | #fafafa   | Seitenbackground (hell)           |
| `--neutral-700`  | #404040   | Fließtext                         |
| `--white`        | #ffffff   | Cards, Sektionshintergründe       |

### Typography
- Headlines (h1–h2): `Plus Jakarta Sans`, font-weight 700, letter-spacing -0.02em
- Subheadings (h3–h4): `Plus Jakarta Sans`, font-weight 600
- Body: `Inter`, font-weight 400, line-height 1.7
- Labels / Badges: `Inter`, font-weight 500, uppercase, letter-spacing 0.08em

### Stil-Direktiven
- Hell und clean: weißer Hintergrund (#fafafa), viel Whitespace
- Moderne Karten mit leichtem Schatten (`shadow-sm`) und abgerundeten Ecken (`rounded-2xl`)
- Grüne Akzente gezielt einsetzen – kein Overuse
- Keine dunklen Hintergründe außer Footer
- Mobile-first, responsiv ab 320px

## Seitenstruktur (Sections in dieser Reihenfolge)
1. **Hero** – Pitch (max. 25 Wörter) + grüner CTA-Button „Mehr erfahren"
2. **Über uns** – „Woher kommen wir?" (3 Sätze, mit Map-Referenz Gurktal/Kärnten)
3. **Leistungen** – 3 Cards: Anbau / Veredelung / Produktion & Verkauf
4. **Nutzen** – 2-Spalten-Layout: B2B (White Label) | B2C (Endverbraucher)
5. **Footer** – Minimalistisch, dunkelgrün (#052e16), Impressum-Link

## Code-Konventionen
- ES Modules durchgehend (`import`/`export`), kein `require()`
- Tailwind-Klassen direkt im Markup – keine separaten CSS-Dateien außer globale Variablen
- Komponentennamen: PascalCase (z.B. `HeroSection.astro`)
- Alle Texte als Props übergeben, keine hartkodierte Strings in Components
- Accessibility: Semantisches HTML (`<section>`, `<article>`, `<nav>`), alt-Texte pflichtend
- Keine externen Tracking-Scripts ohne explizite Anweisung

## Content (direkt verwendbar)

### Hero – Pitch
> Mountain Green ist ein vertikal integrierter Produzent hochwertiger Cannabis-Rohstoffe
> und Extrakte für Medizin, Industrie und Konsumprodukte – vom Anbau bis zur marktfähigen Endlösung.

### Über uns
Mountain Green entstand aus einem europäischen Netzwerk von Cannabis-Pionieren mit Erfahrung
in Landwirtschaft, Vertrieb und Kapitalmärkten. Das Projekt verbindet moderne Agrartechnologie
mit professioneller Weiterverarbeitung. Der Standort im Gurktal bietet ideale klimatische
Bedingungen für hochwertigen Cannabis-Anbau.

### Leistungen
**Anbau**: Professioneller Cannabis-Anbau unter kontrollierten Bedingungen. Fokus auf stabile
Erträge, hohe Pflanzenqualität und nachvollziehbare Herkunft gemäß modernen Agrarstandards.

**Veredelung**: Hochwertige Cannabis-Extrakte und Rohstoffe aus geernteter Biomasse.
Standardisierte Öle, Extrakte und Inhaltsstoffe mit gleichbleibender industrieller Qualität.

**Produktion & Verkauf**: Marktfähige Cannabisprodukte für Handel, Gesundheitsbereich und
Markenlösungen. Vertrieb über Partner-Netzwerke und White-Label-Kanäle.

### B2B
Unternehmen erhalten Zugang zu hochwertiger Cannabis-Biomasse und standardisierten Extrakten.
Mountain Green ermöglicht Partnern den schnellen Einstieg in den Cannabinoid-Markt mit fertigen
Produktlösungen. White-Label-Produktion erlaubt eigene Cannabisprodukte unter eigener Marke.

### B2C
Konsumenten erhalten geprüfte Cannabisprodukte mit nachvollziehbarer Herkunft.
Natürliche Pflanzenstoffe kombiniert mit moderner Verarbeitungstechnologie.
Hochwertige Produkte für Wohlbefinden, Balance und moderne Lebensstile.


## UI Workflow
Nach dem Erstellen oder Ändern einer Frontend-Komponente automatisch in dieser Reihenfolge ausführen:


- `/frontend-design` – Visuelles Design prüfen: Farben, Abstände, Typography gemäß Design-System
- `/ui-ux-pro-max` 
- `/baseline-ui` – Basis-UI-Qualität sicherstellen: Konsistenz, Proportionen, Responsive-Verhalten
- `/fixing-accessibility` – ARIA-Labels, Kontrastverhältnisse (WCAG AA), Tastaturnavigation
- `/fixing-motion-performance` – Animationen auf `prefers-reduced-motion` prüfen, CSS-only bevorzugen, keine Layout-Thrashing-Effekte

> ⚠️ Dieser Workflow ist **nicht optional** – er gilt für jede Komponente, auch für kleine Änderungen.

## Workflow-Präferenz
Immer nach dem **Explore → Plan → Code → Commit**-Muster vorgehen:
1. Relevante Dateien lesen, bevor Änderungen vorgeschlagen werden
2. Plan als Kommentar-Block ausgeben, bevor Code geschrieben wird
3. Keine spekulativen Änderungen an Dateien, die nicht gelesen wurden

## Font-Hosting (Datenschutz-Pflicht)
Fonts werden **ausschließlich lokal** geladen – kein Aufruf von Google Fonts oder externen CDNs.
Grund: DSGVO-Konformität, keine Datenübertragung an Google-Server.

### Dateistruktur
public/
└── fonts/
├── inter/
│ ├── Inter-Regular.woff2
│ ├── Inter-Medium.woff2
│ └── Inter-Bold.woff2
└── plus-jakarta-sans/
├── PlusJakartaSans-SemiBold.woff2
└── PlusJakartaSans-Bold.woff2


### @font-face Einbindung (in `src/styles/fonts.css`)
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/Inter-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}