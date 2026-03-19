---
name: legal-compliance-at
description: "Österreichische Rechtskonformität prüfen: DSGVO-konforme Fonts, TKG 2021 Opt-in, AT-Lokalisierung, Impressum (ECG/Mediengesetz/UGB), Tracking/Consent."
---

Dieser Skill prüft die Codebase auf österreichische Rechtskonformität und behebt Verstöße. Arbeite alle 5 Prüfbereiche der Reihe nach ab. Gib am Ende eine Zusammenfassung mit Status pro Bereich (bestanden / behoben / manuell nötig).

## 1. Fonts – DSGVO-konforme Einbindung

Durchsuche alle Dateien nach externen Font-Aufrufen:
- `fonts.googleapis.com`
- `fonts.gstatic.com`
- Jede andere externe Font-CDN-URL

**Wenn gefunden:**
1. Entferne den externen `<link>`- oder `@import`-Aufruf
2. Prüfe, ob die Font-Dateien bereits unter `public/fonts/` liegen
3. Falls ja: Ersetze durch lokale `@font-face`-Deklaration (Muster siehe `CLAUDE.md` Abschnitt „Font-Hosting")
4. Falls nein: Lade die `.woff2`-Dateien herunter, speichere sie unter `public/fonts/<fontname>/` und erstelle die `@font-face`-Regeln

**Wenn nicht gefunden:** Bestätigen, dass alle Fonts lokal eingebunden sind.

## 2. Formulare – TKG 2021 Opt-in

Durchsuche alle `<form>`-Elemente und prüfe:

- **Marketing-Checkbox**: Existiert eine separate, nicht vorausgewählte (`checked` darf NICHT gesetzt sein) Checkbox für Marketing-Einwilligung?
- **Zweckangabe**: Ist klar formuliert, wofür die Einwilligung erteilt wird (z.B. „Ich stimme dem Erhalt von Marketing-E-Mails zu")?
- **Double-Opt-in**: Bei Newsletter-/E-Mail-Formularen: Hinweis auf Double-Opt-in-Verfahren vorhanden?
- **Koppelungsverbot**: Ist die Marketing-Einwilligung von der Hauptaktion (z.B. Kontaktanfrage) getrennt? Keine Pflicht-Checkbox für Marketing.

**Wenn Formulare fehlen:** Nur vermerken, keine Formulare erstellen.

**Wenn Verstöße gefunden:** Code korrigieren und das Muster dokumentieren.

## 3. Sprache – AT-Lokalisierung

### HTML-Lang-Attribut
- Prüfe `<html lang="...">` — muss `de-AT` sein, nicht `de` oder `de-DE`

### Datumsangaben (Monatsnamen)
Durchsuche alle Templates, Komponenten und Content-Dateien nach deutschen Monatsnamen und ersetze:
- „Januar" → „Jänner"
- „Februar" bleibt (identisch in AT)
- Alle anderen Monate sind identisch

### Weitere AT-Begriffe (prüfen, nicht erzwingen)
- „Straße" statt „Strasse"
- „Jänner" statt „Januar"
- Währungsformat: „€ 1.234,56" (Euro-Zeichen vor Betrag, Punkt als Tausendertrenner, Komma als Dezimaltrenner)

## 4. Impressum – § 5 ECG, § 25 MedienG, § 14 UGB

Prüfe, ob eine Impressum-Seite oder -Section existiert (z.B. `/impressum`, Footer-Link, eigene Seite).

### Pflichtangaben nach § 5 ECG (E-Commerce-Gesetz)
- [ ] Vollständiger Firmenname inkl. Rechtsform
- [ ] Firmensitz (Adresse)
- [ ] Kontaktdaten (E-Mail-Adresse, optional Telefon)
- [ ] Firmenbuchnummer und Firmenbuchgericht
- [ ] Unternehmensgegenstand
- [ ] UID-Nummer (Umsatzsteuer-Identifikationsnummer)
- [ ] Zuständige Aufsichtsbehörde (falls reguliert)
- [ ] Mitgliedschaft Wirtschaftskammer (Fachgruppe, Bundesland)

### Pflichtangaben nach § 25 Mediengesetz
- [ ] Medieninhaber (Name/Firma)
- [ ] Sitz des Medieninhabers
- [ ] Unternehmensgegenstand des Medieninhabers
- [ ] Blattlinie / grundlegende Richtung des Mediums

### Pflichtangaben nach § 14 UGB (Unternehmensgesetzbuch)
- [ ] Firma, Rechtsform, Sitz
- [ ] Firmenbuchnummer, Firmenbuchgericht

**Wenn Impressum fehlt oder unvollständig:** Erstelle ein HTML-Template mit Platzhaltern für alle Pflichtfelder und markiere fehlende Daten mit `<!-- TODO: [Feldname] ergänzen -->`.

## 5. Tracking – DSGVO / ePrivacy

Durchsuche alle HTML-, Astro- und JS-Dateien nach Tracking-Scripts:

### Bekannte Tracking-Dienste erkennen
- Google Analytics (`gtag.js`, `analytics.js`, `ga.js`, `G-`, `UA-`)
- Google Tag Manager (`gtm.js`, `GTM-`)
- Facebook Pixel (`fbevents.js`, `fbq`)
- Hotjar, Mixpanel, Segment, Amplitude
- Jedes `<script>` mit externem `src` das Nutzerdaten erfasst

### Prüfungen
1. **Werden Scripts vor Consent geladen?** Scripts dürfen erst nach expliziter Einwilligung aktiviert werden
2. **Consent-Manager vorhanden?** Prüfe auf Cookiebot, Klaro, Osano, CookieYes oder eigene Consent-Lösung
3. **Cookie-Banner**: Muss „Ablehnen" gleichwertig sichtbar zu „Akzeptieren" sein (keine Dark Patterns)

### Wenn Tracking-Scripts gefunden
- Vorschlag: Script hinter Consent-Gate setzen (z.B. `type="text/plain"` + `data-cookieconsent="statistics"`)
- DSGVO-konforme Alternativen vorschlagen:
  - Google Analytics → Plausible Analytics (cookieless), Matomo (self-hosted)
  - Facebook Pixel → Server-side Conversions API
- Consent-Manager-Integration vorschlagen falls keiner vorhanden

### Wenn keine Tracking-Scripts gefunden
Bestätigen, dass keine externen Tracking-Scripts geladen werden.

---

## Ausgabeformat

Nach Abschluss aller Prüfungen, gib folgende Zusammenfassung:

```
## Legal Compliance AT – Ergebnis

| Bereich                  | Status              | Anmerkung              |
|--------------------------|---------------------|------------------------|
| Fonts (DSGVO)            | ✅ / ⚠️ / ❌        | ...                    |
| Formulare (TKG 2021)     | ✅ / ⚠️ / ❌        | ...                    |
| Sprache (AT)             | ✅ / ⚠️ / ❌        | ...                    |
| Impressum (ECG/MedienG)  | ✅ / ⚠️ / ❌        | ...                    |
| Tracking (DSGVO)         | ✅ / ⚠️ / ❌        | ...                    |
```

Legende: ✅ = konform, ⚠️ = manueller Eingriff nötig, ❌ = Verstoß behoben
