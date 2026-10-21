// Builds a product card element. Uses textContent throughout so catalog data can't inject HTML.
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.type = product.type;

  const media = document.createElement("div");
  media.className = "card-media";
  if (product.image) {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy";
    media.appendChild(img);
  } else {
    media.textContent = product.name.charAt(0);
    media.setAttribute("aria-hidden", "true");
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = PRODUCT_TYPES[product.type] || product.type;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const desc = document.createElement("p");
  desc.textContent = product.description;

  const footer = document.createElement("div");
  footer.className = "card-footer";

  const price = document.createElement("span");
  price.className = "price";
  price.textContent = product.price;

  const link = document.createElement("a");
  link.className = "button";
  link.href = product.url;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Buy on Gumroad";

  footer.append(price, link);
  body.append(badge, title, desc, footer);
  card.append(media, body);
  return card;
}

function renderProducts(container, products) {
  container.replaceChildren(...products.map(createProductCard));
}

// Home page: featured products
const featuredGrid = document.getElementById("featured-grid");
if (featuredGrid) {
  renderProducts(featuredGrid, PRODUCTS.filter((p) => p.featured));
}

// Products page: filter buttons, synced with the URL hash (e.g. products.html#vst)
const productGrid = document.getElementById("product-grid");
if (productGrid) {
  const filterBar = document.getElementById("filters");
  const emptyMsg = document.getElementById("empty");

  const filters = [["all", "All"], ...Object.entries(PRODUCT_TYPES)];
  filters.forEach(([value, label]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.filter = value;
    btn.textContent = label;
    filterBar.appendChild(btn);
  });

  function applyFilter(value) {
    if (value !== "all" && !PRODUCT_TYPES[value]) value = "all";
    const shown = PRODUCTS.filter((p) => value === "all" || p.type === value);
    renderProducts(productGrid, shown);
    emptyMsg.hidden = shown.length > 0;
    filterBar.querySelectorAll("button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === value));
    });
  }

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    history.replaceState(null, "", btn.dataset.filter === "all" ? location.pathname : "#" + btn.dataset.filter);
    applyFilter(btn.dataset.filter);
  });

  window.addEventListener("hashchange", () => applyFilter(location.hash.slice(1)));
  applyFilter(location.hash.slice(1));
}
