# Elim Huidherstel — landingspagina (los project)

Dit is een **eigen kopie** van de inhoud en vormgeving van de bestaande campagnepagina. Er is **geen koppeling** met een andere GitHub-repo of domein: alle afbeeldingen staan in `assets/`, er staan geen verwijzingen naar `afspraakeliminstituut.nl`, en er is **geen** `git remote` geconfigureerd.

Zo kun je straks tekst, prijs en offers aanpassen voor een **nieuwe campagne**.

## Lokaal bekijken

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
| `js/main.js` | `BOOKING_URL`, `VIDEO_EMBED_URL` |
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

Standaard staat de **Adilo**-URL van de oorspronkelijke pagina in `js/main.js`. Adilo kan afhankelijk van domein/IP beperkingen hanteren — wijzig `VIDEO_EMBED_URL` naar je eigen host (YouTube/Vimeo embed) als dat nodig is.
