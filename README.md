# Instigator Sound site

A static site (plain HTML, CSS and JavaScript, no build step) for selling guitar pedals, VSTs and Max for Live devices through Gumroad.

## Structure

- `index.html`, `products.html`, `about.html`, `contact.html`: the pages
- `js/products-data.js`: **the product catalog.** Add, edit or remove products here
- `js/main.js`: renders product cards and handles filtering
- `css/styles.css`: all styling (off-white theme; colors are variables at the top)
- `images/`: product images, referenced from the catalog

## Adding a product

Add an object to `PRODUCTS` in `js/products-data.js`:

```js
{
  id: "my-fuzz",
  name: "My Fuzz",
  type: "pedal",            // "pedal" | "vst" | "m4l"
  price: "$149",
  description: "One or two sentences.",
  url: "https://yourname.gumroad.com/l/my-fuzz",
  image: "images/my-fuzz.jpg",   // optional
  featured: true,                // show on the home page
}
```

To add a new product category, add it to `PRODUCT_TYPES` in the same file; the filter buttons update automatically.

Filters can be linked directly: `products.html#pedal`, `products.html#vst`, `products.html#m4l`.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy to GitHub Pages

Push to GitHub, then go to **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`. The site goes live at `https://<user>.github.io/<repo>/`. All links are relative, so it works under a repo subpath or a custom domain.
