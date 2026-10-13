# The Golden Feather Hampers

Website for **The Golden Feather Hampers** - premium gift hampers for festivals, corporate gifting and bespoke luxury experiences.

> Hamper Happiness, Customized with Love

## Pages

One-page site with four views (no reload when switching):

- **Home** - categories, bespoke creations, testimonials, contact
- **Customized** - bespoke hampers with monogrammed linens and local products
- **Corporate** - premium chocolates, gourmet coffee and silk ribbons
- **Festival** - artisanal treats, seasonal flowers and elegant linens

Direct links: `#home`, `#customized`, `#corporate`, `#festival`

## Project structure

```
.
|-- index.html                  page markup
|-- css/style.css               all styles (colours are CSS variables at the top)
|-- js/main.js                  switches between the four views
|-- assets/
|   |-- logo.webp               optimised logo used on the site
|   `-- logo-original.png       full-resolution logo
|-- wix-embed/
|   `-- golden-feather-full-site.html   single-file version for Wix "Embed HTML"
|-- .nojekyll
|-- .gitignore
`-- README.md
```

## Run locally

Open `index.html` in a browser. No build step or dependencies.

## Deploy with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch `main` and folder `/ (root)`, then **Save**.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Use inside Wix

Paste the contents of `wix-embed/golden-feather-full-site.html` into a Wix **Embed HTML** element (Add Elements > Embed Code > Embed HTML > Enter Code). That file is self-contained, with the logo embedded.

## Customising

- **Colours:** edit the variables in `:root` at the top of `css/style.css`.
- **Hampers and prices:** search `index.html` for `Short description` and `Price`.
- **Product photos:** replace the emoji in `<div class="pimg">` with `<img src="assets/your-photo.jpg" alt="...">` and add `.pimg img{width:100%;height:100%;object-fit:cover;display:block}` to the CSS.
- **Contact details:** search for `goldenfeatherhamper@gmail.com`.

## Contact

goldenfeatherhamper@gmail.com
