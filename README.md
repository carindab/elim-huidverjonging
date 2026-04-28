# Elim Huidherstel — landingpage (statische versie)

Statische HTML/CSS/JS-versie van de Elim Huidherstel Formule landingpage, geschikt voor **GitHub Pages** of elke andere host.

## Lokaal bekijken

```bash
python3 -m http.server 8080
```

Open daarna `http://127.0.0.1:8080/`.

## Naar GitHub pushen

Deze map heeft al `git init`, branch **`main`** en remote **`origin`** → [github.com/carindab/elimhuidherstelformule](https://github.com/carindab/elimhuidherstelformule).

```bash
cd "/Users/carinda/Elim landingpage huidverjonging"
git push -u origin main
```

Als GitHub meldt dat de remote al commits heeft die hier niet in zitten:

```bash
git pull origin main --allow-unrelated-histories
# eventuele conflicten oplossen
git push -u origin main
```

Als GitHub vraagt om inloggen: gebruik een **Personal Access Token** als wachtwoord (GitHub → Settings → Developer settings → Personal access tokens), of push vanuit **GitHub Desktop** / **Cursor** met ingebouwde Git-login.

### Bestaande repo die al andere bestanden heeft

Wil je alleen deze statische site in die repo?

- **Optie A:** Nieuwe branch: o.a. `git checkout -b static-site` en push die branch.
- **Optie B:** Map in de repo, bijv. `docs/` of `static/`, en bestanden daar plaatsen — voor GitHub Pages kun je dan de Pages-root op die map zetten.

## Configuratie

In `js/main.js`:

- `BOOKING_URL` — je boekingslink (Cal.com, Calendly, …).
- `VIDEO_EMBED_URL` — YouTube/Vimeo embed-URL.

## Broncode React (Lovable)

Als je ook de **exacte** React/Lovable-bron in GitHub hebt ([elimhuidherstelformule](https://github.com/carindab/elimhuidherstelformule)), clone die repo **lokaal** (met jouw account), open de map in Cursor en vergelijk daar met deze `index.html` voor tekst/secties. Deze statische map bevat géén kopie van die bundel.
