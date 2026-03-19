---
name: seo-semantic-master
description: "SEO und semantische HTML-Qualität prüfen: Heading-Hierarchie, semantische Tags, Meta-Daten, JSON-LD Schemas, Bild-Optimierung, Core Web Vitals."
---

Dieser Skill prüft die Codebase auf SEO-Best-Practices und semantische HTML-Qualität. Arbeite alle 6 Prüfbereiche der Reihe nach ab. Gib am Ende eine Zusammenfassung mit Status pro Bereich.

## 1. HTML-Struktur – Heading-Hierarchie

Durchsuche alle Seiten und Komponenten nach Heading-Tags (`<h1>` bis `<h6>`):

### Prüfungen
- **Genau ein `<h1>` pro Seite** — nicht null, nicht mehrere
- **Keine übersprungenen Ebenen** — nach `<h2>` darf kein `<h4>` ohne `<h3>` kommen
- **Keine leeren Headings** — `<h2></h2>` oder `<h3> </h3>` entfernen oder befüllen
- **Keine leeren Tags** — `<p></p>`, `<span></span>`, `<div></div>` ohne Inhalt oder Funktion entfernen
- **Logische Verschachtelung** — Headings müssen die inhaltliche Hierarchie widerspiegeln

**Wenn Verstöße gefunden:** Korrigieren und die Änderung dokumentieren.

## 2. Semantik – Semantische HTML-Tags

Durchsuche alle Templates und Komponenten nach generischen `<div>`-Containern, die durch semantische Tags ersetzt werden sollten:

### Ersetzungsregeln
| Aktuell | Ersetzen durch | Bedingung |
|---------|---------------|-----------|
| `<div>` als Seitenrahmen | `<main>` | Hauptinhalt der Seite (1x pro Seite) |
| `<div>` als thematischer Block | `<section>` | Hat eine eigene Überschrift |
| `<div>` als eigenständiger Inhalt | `<article>` | Unabhängig verständlich (Blog-Post, Card, Produkt) |
| `<div>` als Seitenleiste | `<aside>` | Ergänzender/sekundärer Inhalt |
| `<div>` als Navigation | `<nav>` | Enthält Navigationslinks |
| `<div>` als Kopfbereich | `<header>` | Einleitender Inhalt oder Navigationsgruppe |
| `<div>` als Fußbereich | `<footer>` | Abschluss einer Section oder der Seite |
| `<div>` als Abbildung | `<figure>` + `<figcaption>` | Bild/Grafik mit Beschreibung |

### Regeln
- Nicht blind jedes `<div>` ersetzen — nur wenn die Semantik eindeutig passt
- `<section>` nur verwenden, wenn eine Überschrift existiert oder hinzugefügt wird
- `<div>` für reine Layout-Container (Flexbox/Grid-Wrapper) beibehalten
- Jede `<section>` sollte ein `aria-labelledby` oder `aria-label` haben

## 3. Meta-Daten – Title & Description

Prüfe den `<head>`-Bereich jeder Seite:

### Title-Tag
- **Vorhanden?** Jede Seite braucht einen einzigartigen `<title>`
- **Länge:** Max. 60 Zeichen (optimal 50–60)
- **Format:** `[Primäres Keyword] – [Markenname]` oder `[Markenname] | [Beschreibung]`
- **Kein Keyword-Stuffing** — natürlich lesbar

### Meta-Description
- **Vorhanden?** `<meta name="description" content="...">`
- **Länge:** Max. 155 Zeichen (optimal 120–155)
- **Inhalt:** Handlungsaufforderung oder Zusammenfassung mit primärem Keyword
- **Einzigartig pro Seite** — keine Duplikate

### Weitere Meta-Tags prüfen
- `<meta name="viewport" content="width=device-width, initial-scale=1">` vorhanden?
- `<meta charset="UTF-8">` vorhanden?
- `<link rel="canonical" href="...">` vorhanden?
- Open Graph Tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`)
- Twitter Card Tags (`twitter:card`, `twitter:title`, `twitter:description`)

**Wenn fehlend:** Optimierte Meta-Tags generieren, basierend auf dem Seiteninhalt.

## 4. Strukturierte Daten – JSON-LD Schemas

Prüfe ob JSON-LD Schemas im `<head>` oder vor `</body>` eingebunden sind:

### Pflicht-Schemas für dieses Projekt

**Organization:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mountain Green",
  "url": "<!-- TODO: URL ergänzen -->",
  "logo": "<!-- TODO: Logo-URL ergänzen -->",
  "description": "Vertikal integrierter Cannabis-Produzent",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gurktal",
    "addressRegion": "Kärnten",
    "addressCountry": "AT"
  }
}
```

**WebSite:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mountain Green",
  "url": "<!-- TODO: URL ergänzen -->"
}
```

**BreadcrumbList** (falls mehrere Seiten):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "<!-- URL -->" }
  ]
}
```

### Prüfungen
- JSON-LD valide? Keine Syntaxfehler, korrekte Verschachtelung
- Platzhalter klar markiert mit `<!-- TODO: ... -->`
- Kein Inline-Microdata verwenden — ausschließlich JSON-LD

**Wenn fehlend:** Schema-Blöcke als `<script type="application/ld+json">` generieren.

## 5. Bilder – Alt-Attribute & Lazy Loading

Durchsuche alle `<img>`-Tags und Bild-Komponenten:

### Alt-Attribute
- **Jedes `<img>` braucht ein `alt`-Attribut**
- Dekorative Bilder: `alt=""` (leerer String, nicht weglassen)
- Inhaltliche Bilder: Beschreibender Text, der den Bildinhalt für Screenreader wiedergibt
- **Keine generischen Texte** wie `alt="Bild"`, `alt="image"`, `alt="foto"`
- Alt-Text sollte relevant und kontextbezogen sein (max. ~125 Zeichen)

### Lazy Loading
- Alle Bilder unterhalb des sichtbaren Bereichs: `loading="lazy"` setzen
- Hero-Images und Above-the-fold-Bilder: **KEIN** `loading="lazy"` (siehe Bereich 6)
- `<iframe>`-Elemente ebenfalls mit `loading="lazy"` versehen

### Weitere Bild-Prüfungen
- `width` und `height` Attribute gesetzt? (verhindert Layout Shift / CLS)
- Moderne Formate? (`.webp` oder `.avif` bevorzugen, `.png`/`.jpg` als Fallback)
- `decoding="async"` bei nicht-kritischen Bildern

**Wenn Verstöße gefunden:** Korrigieren und fehlende Alt-Texte basierend auf Kontext generieren.

## 6. Core Web Vitals – LCP-Optimierung

Prüfe die Largest Contentful Paint (LCP) relevanten Elemente:

### Hero-Image / LCP-Element
- **`fetchpriority="high"`** auf dem Hero-Image oder größten sichtbaren Element setzen
- **Kein `loading="lazy"`** auf dem LCP-Element
- **Kein `decoding="async"`** auf dem LCP-Element
- `<link rel="preload" as="image" href="...">` im `<head>` für das Hero-Image

### Weitere LCP-Optimierungen
- Kritische CSS inlined oder mit hoher Priorität geladen?
- Fonts mit `<link rel="preload" as="font" type="font/woff2" crossorigin>` vorladen?
- Render-blockierende Scripts identifizieren (`<script>` ohne `async`/`defer` im `<head>`)
- Third-Party-Scripts prüfen: Blockieren sie den LCP?

### CLS (Cumulative Layout Shift)
- Bilder ohne `width`/`height` → Layout Shift Risiko
- Fonts ohne `font-display: swap` → FOIT/FOUT
- Dynamisch eingefügte Inhalte ohne reservierten Platz

### FID/INP (Interaction to Next Paint)
- Lange synchrone Scripts im `<head>` identifizieren
- Event-Handler auf dem Main Thread prüfen

**Wenn Probleme gefunden:** Korrigieren und Optimierung dokumentieren.

---

## Ausgabeformat

Nach Abschluss aller Prüfungen, gib folgende Zusammenfassung:

```
## SEO Semantic Master – Ergebnis

| Bereich                     | Status              | Anmerkung              |
|-----------------------------|---------------------|------------------------|
| HTML-Struktur (Headings)    | ✅ / ⚠️ / ❌        | ...                    |
| Semantik (HTML5-Tags)       | ✅ / ⚠️ / ❌        | ...                    |
| Meta-Daten (Title/Desc/OG)  | ✅ / ⚠️ / ❌        | ...                    |
| Strukturierte Daten (JSON-LD)| ✅ / ⚠️ / ❌       | ...                    |
| Bilder (Alt/Lazy)           | ✅ / ⚠️ / ❌        | ...                    |
| Core Web Vitals (LCP/CLS)   | ✅ / ⚠️ / ❌        | ...                    |
```

Legende: ✅ = konform, ⚠️ = manueller Eingriff nötig, ❌ = Verstoß behoben
