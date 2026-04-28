# Elim Huidherstel — landingspagina (los project)

Dit is een **eigen kopie** van de inhoud en vormgeving van de bestaande campagnepagina. Er is **geen koppeling** met een andere GitHub-repo of domein: alle afbeeldingen staan in `assets/`, er staan geen verwijzingen naar `afspraakeliminstituut.nl`, en er is **geen** `git remote` geconfigureerd.

Zo kun je straks tekst, prijs en offers aanpassen voor een **nieuwe campagne**.

## Lokaal bekijken

Gebruik een **lokale server** (dubbelklikken op `index.html` kan ervoor zorgen dat fonts, video en stijl anders ogen dan je voorbeeld):

```bash
cd "/Users/carinda/Elim landingpage huidverjonging"
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`.

## Aanpassen

| Bestand | Waarvoor |
|---------|----------|
| `index.html` | Teksten, structuur, secties |
| `css/styles.css` | Kleuren, layout |
| `js/main.js` | `BOOKING_URL`, `HERO_VIDEO_URL` |
| `assets/` | Afbeeldingen vervangen |

**Canonical & Open Graph:** in `index.html` staat een opmerking bij de canonical; zet na livegang jouw definitieve URL. `og:image` wijst nog naar een externe preview-URL — vervang die desgewenst door een absolute URL naar jouw gehoste afbeelding.

## Op je eigen GitHub zetten

Je hoeft **geen repository-toegang** aan AI of derden te geven.

1. Maak op GitHub een **nieuwe lege repository** (bijv. `mijn-nieuwe-offer`).
2. In deze map:

```bash
git remote add origin https://github.com/JOUW-USERNAME/JOUW-REPO.git
git push -u origin main
```

Inloggen: GitHub vraagt om token of gebruik **GitHub Desktop** / ingebouwde Git in Cursor.

Alle stappen met een **bestaande** repo (pull met `--allow-unrelated-histories`, conflicten, enz.) zijn niet nodig als je een **verse** repo gebruikt.

## GitHub-toegang “geven” (meestal niet nodig)

Als je iemand wél toegang wilt: **Settings → Collaborators** op die repo, uitnodiging per GitHub-gebruiker. Voor automatische agents levert dat zelden iets op zonder dat jij lokaal clone’t.

**Repo tijdelijk public** maken kan handig zijn om code te delen; daarna weer private zetten is oké.

## Video

De **hero** gebruikt dezelfde Adilo-URL als je oorspronkelijke pagina (`iframe` in `index.html`). Adilo kan beperkingen per domein of IP hanteren — wijzig de `src` of zet `HERO_VIDEO_URL` in `js/main.js`.
