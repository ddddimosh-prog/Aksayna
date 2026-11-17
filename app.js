(function () {
  'use strict';

  /* ---------- data ---------- */
  var COLORS = { forest: '#1F4A38', sage: '#A9BFAA', sand: '#D8C6A3', ink: '#1D2420', bone: '#E9E4D8', moss: '#5F7A4E' };
  var SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
  var FREE_SHIP = 120;
  var SHIP_TEXT = 'Free standard shipping over $120. Free returns within 30 days, unworn with tags. D&N is a demo store, so no orders are processed.';

  var P = [
    { id: 'core-tee', name: 'Core Tee', cat: 'tops', col: 'essentials', price: 38, art: 'tee', frame: '#E4D7BC', colors: ['forest', 'sand', 'ink'], sizes: 'std', tag: 'Bestseller',
      blurb: 'A boxy, heavyweight tee that holds its shape through every wash.',
      details: ['380 gsm cotton and recycled polyester blend', 'Boxy fit with a dropped shoulder', 'Ribbed collar with taped neck seam', 'Tonal D&N ring mark on the chest'],
      fabric: '82% cotton, 18% recycled polyester. Machine wash cold with similar colors. Tumble dry low or hang dry.' },
    { id: 'studio-long-sleeve', name: 'Studio Long Sleeve', cat: 'tops', col: 'training', price: 52, art: 'longsleeve', frame: '#9DB59F', colors: ['sand', 'forest', 'bone'], sizes: 'std', tag: '',
      blurb: 'Light, breathable and stretchy, with thumbholes for warm-ups.',
      details: ['Four-way stretch jersey', 'Thumbholes in the cuffs', 'Flat-lock seams that sit smooth under a bar', 'Athletic fit, close through the chest'],
      fabric: '88% recycled polyester, 12% elastane. Machine wash cold. Do not iron the print. Hang dry.' },
    { id: 'form-tank', name: 'Form Tank', cat: 'tops', col: 'training', price: 32, art: 'tank', frame: '#DDE9A6', colors: ['ink', 'sage', 'forest'], sizes: 'std', tag: 'New',
      blurb: 'Ribbed and close-fitting, cut high at the arm so nothing gets in the way of a press.',
      details: ['Ribbed stretch knit', 'High, open armhole', 'Scooped neckline', 'Close fit, size up for a looser feel'],
      fabric: '92% cotton, 8% elastane rib. Machine wash cold, inside out. Lay flat or hang dry.' },
    { id: 'layer-hoodie', name: 'Layer Hoodie', cat: 'tops', col: 'essentials', price: 88, art: 'hoodie', frame: '#2C5543', colors: ['sage', 'sand', 'ink'], sizes: 'std', tag: 'Bestseller',
      blurb: 'Brushed on the inside and structured on the outside. A hoodie that looks sharp over a tee.',
      details: ['420 gsm brushed-back fleece', 'Relaxed fit with a double-layer hood', 'Hidden media pocket inside the pouch', 'Metal-tipped drawcords'],
      fabric: '80% cotton, 20% recycled polyester. Machine wash cold with similar colors. Tumble dry low.' },
    { id: 'crew-sweatshirt', name: 'Crew Sweatshirt', cat: 'tops', col: 'recovery', price: 74, art: 'sweatshirt', frame: '#C48A64', colors: ['bone', 'forest', 'moss'], sizes: 'std', tag: '',
      blurb: 'Soft terry for rest days and travel. Cut slightly short in the body.',
      details: ['340 gsm French terry', 'Rib collar, cuffs and hem', 'Relaxed, slightly cropped fit', 'Garment washed for a worn-in feel'],
      fabric: '100% organic cotton terry. Machine wash cold. Tumble dry low. Some shrinkage is normal in the first wash.' },
    { id: 'standard-short', name: 'Standard Short', cat: 'bottoms', col: 'training', price: 46, art: 'short', frame: '#E4D7BC', colors: ['moss', 'ink', 'sand'], sizes: 'std', tag: '',
      blurb: 'The short for every session. Seven inch inseam with room to squat.',
      details: ['7 inch inseam', 'Four-way stretch woven fabric', 'Hidden zip pocket for keys', 'Elastic waist with internal drawcord'],
      fabric: '90% recycled polyester, 10% elastane. Machine wash cold. Do not tumble dry on high heat.' },
    { id: 'lift-jogger', name: 'Lift Jogger', cat: 'bottoms', col: 'essentials', price: 68, art: 'jogger', frame: '#CBD8C8', colors: ['ink', 'forest', 'sand'], sizes: 'std', tag: 'Bestseller',
      blurb: 'Tapered through the leg with extra room in the thigh for squats and lunges.',
      details: ['Stretch woven with a smooth, dry hand', 'Articulated knee and gusseted crotch', 'Zip hand pockets and one back pocket', 'Cuffs that sit clean over shoes'],
      fabric: '94% recycled nylon, 6% elastane. Machine wash cold. Hang dry.' },
    { id: 'base-tight', name: 'Base Tight', cat: 'bottoms', col: 'recovery', price: 44, art: 'tight', frame: '#D8C6A3', colors: ['forest', 'ink', 'moss'], sizes: 'std', tag: 'New',
      blurb: 'A compression base layer for cold sessions and long travel days.',
      details: ['Compression knit, mid rise', 'Flat seams that do not chafe', 'Stays in place under shorts', 'Wide, flat waistband'],
      fabric: '78% recycled nylon, 22% elastane. Machine wash cold, inside out. Do not use fabric softener.' },
    { id: 'warm-up-jacket', name: 'Warm-Up Jacket', cat: 'outerwear', col: 'recovery', price: 110, art: 'jacket', frame: '#1F4A38', colors: ['sand', 'ink', 'sage'], sizes: 'std', tag: 'New',
      blurb: 'A zip-through shell that cuts wind and light rain between sets and on the walk home.',
      details: ['Water-resistant ripstop shell', 'Full-length zip with a chin guard', 'Two zip pockets', 'Roomy through the shoulders for layering'],
      fabric: '100% recycled nylon with a water-repellent finish. Wash cold on a gentle cycle. Do not dry clean.' },
    { id: 'everyday-cap', name: 'Everyday Cap', cat: 'extras', col: 'essentials', price: 28, art: 'cap', frame: '#DDE9A6', colors: ['ink', 'sand', 'forest'], sizes: 'one', tag: '',
      blurb: 'An unstructured six-panel cap in washed cotton twill.',
      details: ['Washed cotton twill', 'Adjustable strap with a metal clasp', 'Embroidered ring mark', 'One size fits most'],
      fabric: '100% cotton twill. Spot clean or hand wash cold. Reshape and air dry.' },
    { id: 'carry-duffel', name: 'Carry Duffel', cat: 'extras', col: 'training', price: 96, art: 'duffel', frame: '#CFC8B6', colors: ['forest', 'ink', 'sand'], sizes: 'one', tag: '',
      blurb: 'A 35 litre bag with a ventilated shoe compartment and a wet pocket.',
      details: ['35 litre capacity', 'Separate ventilated shoe compartment', 'Water-resistant base', 'Padded, removable shoulder strap'],
      fabric: '600D recycled polyester with a PU coating. Wipe clean with a damp cloth. Air dry fully before storing.' },
    { id: 'strap-set', name: 'Strap Set', cat: 'extras', col: 'training', price: 29, art: 'straps', frame: '#17382B', colors: ['sage', 'sand', 'bone'], sizes: 'one', tag: '',
      blurb: 'Cotton lifting straps for deadlifts and rows. Sold as a pair.',
      details: ['Heavy cotton webbing, 60 cm long', 'Box-stitched loop that stays open', 'Sold as a pair', 'Works with barbells and dumbbells'],
      fabric: '100% cotton webbing. Hand wash cold and air dry. Straps soften with use.' }
  ];

  var CATS = ['tops', 'bottoms', 'outerwear', 'extras'];
  var COLS = ['essentials', 'training', 'recovery'];

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function money(n) { return '$' + n; }
  function get(id) { for (var i = 0; i < P.length; i++) { if (P[i].id === id) return P[i]; } return null; }
  function shade(h, a) {
    var n = parseInt(h.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    function f(v) { return Math.max(0, Math.min(255, Math.round(a < 0 ? v * (1 + a) : v + (255 - v) * a))); }
    return '#' + ((1 << 24) + (f(r) << 16) + (f(g) << 8) + f(b)).toString(16).slice(1);
  }
  function lum(h) { var n = parseInt(h.slice(1), 16); return (0.2126 * (n >> 16) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255; }

  /* ---------- garment illustrations ---------- */
  function art(t, hex) {
    var d = shade(hex, -0.14), k = shade(hex, -0.32), m = lum(hex) > 0.6 ? k : shade(hex, 0.6);
    var st = ' stroke="' + k + '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"';
    function f(p) { return '<path fill="' + hex + '"' + st + ' d="' + p + '"/>'; }
    function fd(p) { return '<path fill="' + d + '"' + st + ' d="' + p + '"/>'; }
    function ln(p) { return '<path fill="none"' + st + ' d="' + p + '"/>'; }
    function mark(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="5" fill="none" stroke="' + m + '" stroke-width="2"/><circle cx="' + x + '" cy="' + y + '" r="1.6" fill="' + m + '"/>'; }
    var g = '';
    switch (t) {
      case 'tee':
        g = f('M82 40 L58 52 L22 86 L46 114 L68 98 L68 218 L172 218 L172 98 L194 114 L218 86 L182 52 L158 40 Q120 64 82 40Z') + ln('M82 40 Q120 64 158 40') + mark(152, 84);
        break;
      case 'longsleeve':
        g = f('M82 40 L58 50 L20 192 L44 200 L72 112 L72 218 L168 218 L168 112 L196 200 L220 192 L182 50 L158 40 Q120 64 82 40Z') + ln('M82 40 Q120 64 158 40') + ln('M22 184 L46 192') + ln('M218 184 L194 192') + mark(150, 84);
        break;
      case 'tank':
        g = f('M84 26 L106 26 Q120 70 134 26 L156 26 Q158 70 172 92 L168 218 L72 218 L68 92 Q82 70 84 26Z') + ln('M72 200 L168 200') + mark(148, 110);
        break;
      case 'hoodie':
        g = f('M84 52 L56 62 L22 198 L48 206 L74 120 L74 224 L166 224 L166 120 L192 206 L218 198 L184 62 L156 52 Q120 90 84 52Z') +
          ln('M86 168 L154 168 L162 204 L78 204Z') +
          fd('M80 56 Q80 10 120 10 Q160 10 160 56 Q144 92 120 94 Q96 92 80 56Z') +
          '<path fill="' + k + '" fill-opacity=".45" d="M100 56 Q120 34 140 56 Q132 84 120 86 Q108 84 100 56Z"/>' +
          ln('M108 90 L106 124') + ln('M132 90 L134 124') + mark(152, 134);
        break;
      case 'sweatshirt':
        g = f('M84 42 L58 54 L22 194 L48 202 L74 112 L74 220 L166 220 L166 112 L192 202 L218 194 L182 54 L156 42 Q120 66 84 42Z') +
          fd('M74 204 L166 204 L166 220 L74 220Z') + fd('M84 42 Q120 66 156 42 L150 34 Q120 54 90 34Z') + ln('M22 184 L46 192') + ln('M218 184 L194 192') + mark(150, 92);
        break;
      case 'short':
        g = '<g transform="translate(0,16)">' + f('M62 60 L178 60 L196 190 L130 192 L120 118 L110 192 L44 190Z') + fd('M62 60 L178 60 L178 76 L62 76Z') +
          ln('M110 76 L108 98') + ln('M130 76 L132 98') + ln('M158 102 L163 128') + '</g>';
        break;
      case 'jogger':
        g = f('M66 36 L174 36 L186 124 L172 232 L132 232 L120 108 L108 232 L68 232 L54 124Z') + fd('M66 36 L174 36 L175 52 L65 52Z') +
          fd('M66 218 L109 218 L108 232 L68 232Z') + fd('M131 218 L174 218 L172 232 L132 232Z') + ln('M112 52 L110 76') + ln('M128 52 L130 76') + ln('M70 72 Q82 80 84 106');
        break;
      case 'tight':
        g = f('M70 36 L170 36 L174 124 L160 234 L128 234 L120 112 L112 234 L80 234 L66 124Z') + fd('M70 36 L170 36 L170 50 L70 50Z') + ln('M120 50 L120 112');
        break;
      case 'jacket':
        g = f('M88 46 L58 58 L22 196 L48 204 L74 118 L74 222 L166 222 L166 118 L192 204 L218 196 L182 58 L152 46 L120 66Z') +
          fd('M88 46 L98 28 L142 28 L152 46 L120 66Z') + ln('M120 66 L120 222') + ln('M86 168 L86 198') + ln('M154 168 L154 198') +
          '<circle cx="120" cy="82" r="3" fill="' + k + '"/>' + mark(150, 100);
        break;
      case 'cap':
        g = '<g transform="translate(0,28)">' + f('M56 150 Q54 66 122 64 Q190 66 188 150Z') + fd('M44 152 Q124 140 206 156 Q222 166 196 182 Q122 170 62 182 Q34 168 44 152Z') +
          ln('M122 64 L122 148') + ln('M88 76 Q84 110 80 148') + ln('M156 76 Q160 110 164 148') + '<circle cx="122" cy="62" r="5" fill="' + d + '" stroke="' + k + '" stroke-width="2"/>' + mark(150, 118) + '</g>';
        break;
      case 'duffel':
        g = '<g transform="translate(0,10)"><path fill="none" stroke="' + k + '" stroke-width="7" stroke-linecap="round" d="M84 94 Q84 50 120 50 Q156 50 156 94"/>' +
          f('M34 112 Q34 92 56 92 L184 92 Q206 92 206 112 L206 192 Q206 210 188 210 L52 210 Q34 210 34 192Z') + ln('M34 126 L206 126') +
          fd('M50 150 L98 150 L98 198 L50 198Z') + ln('M50 162 L98 162') + mark(170, 160) + '</g>';
        break;
      case 'straps':
        g = '<g transform="translate(0,6)">' + f('M64 70 Q64 28 88 28 Q112 28 112 70 L112 214 L64 214Z') +
          '<ellipse cx="88" cy="66" rx="13" ry="22" fill="' + k + '" fill-opacity=".35" stroke="' + k + '" stroke-width="2"/>' + ln('M64 188 L112 188') + ln('M64 196 L112 196') + '</g>' +
          '<g transform="translate(66,20)">' + fd('M64 70 Q64 28 88 28 Q112 28 112 70 L112 190 L64 190Z') +
          '<ellipse cx="88" cy="66" rx="13" ry="22" fill="' + k + '" fill-opacity=".35" stroke="' + k + '" stroke-width="2"/>' + ln('M64 164 L112 164') + ln('M64 172 L112 172') + '</g>';
        break;
    }
    return '<svg viewBox="0 0 240 260" aria-hidden="true" focusable="false"><ellipse cx="120" cy="248" rx="74" ry="5" fill="rgba(17,23,19,.14)"/>' + g + '</svg>';
  }

  /* ---------- cart ---------- */
  var cart = [];
  try { var raw = localStorage.getItem('dn-cart'); if (raw) cart = JSON.parse(raw) || []; } catch (e) { cart = []; }
  function saveCart() { try { localStorage.setItem('dn-cart', JSON.stringify(cart)); } catch (e) { /* storage unavailable */ } }
  function cartCount() { return cart.reduce(function (n, i) { return n + i.qty; }, 0); }
  function cartTotal() { return cart.reduce(function (n, i) { var p = get(i.id); return n + (p ? p.price * i.qty : 0); }, 0); }
  function addToCart(id, color, size, qty) {
    var key = id + '|' + color + '|' + size, found = null;
    cart.forEach(function (i) { if (i.key === key) found = i; });
    if (found) found.qty = Math.min(10, found.qty + qty); else cart.push({ key: key, id: id, color: color, size: size, qty: qty });
    saveCart(); renderCart();
  }
  function renderCart() {
    var list = $('#cartList'); if (!list) return;
    var n = cartCount(), sub = cartTotal();
    $('#count').textContent = n;
    $('#sub').textContent = money(sub);
    var remain = FREE_SHIP - sub;
    $('#ship').innerHTML = (n === 0 ? 'Free shipping on orders over $120.' : (remain > 0 ? 'You are <b>' + money(remain) + '</b> away from free shipping.' : 'Your order ships free.')) +
      '<div class="bar"><i style="width:' + Math.min(100, Math.round(sub / FREE_SHIP * 100)) + '%"></i></div>';
    if (!n) {
      list.innerHTML = '<div class="d-empty"><p>Your cart is empty.</p><a class="btn plain" href="shop.html">Browse the range</a></div>';
      return;
    }
    list.innerHTML = cart.map(function (i) {
      var p = get(i.id); if (!p) return '';
      return '<div class="ci"><div class="th" style="--frame:' + p.frame + '">' + art(p.art, COLORS[i.color]) + '</div>' +
        '<div><h3>' + p.name + '</h3><div class="opts">' + cap(i.color) + ' / ' + i.size + '</div>' +
        '<div class="qty"><button type="button" data-qty="-1" data-key="' + i.key + '" aria-label="Decrease quantity">&minus;</button><output>' + i.qty + '</output><button type="button" data-qty="1" data-key="' + i.key + '" aria-label="Increase quantity">+</button></div></div>' +
        '<div class="right"><b>' + money(p.price * i.qty) + '</b><button class="rm" type="button" data-rm="' + i.key + '">Remove</button></div></div>';
    }).join('');
  }
  function openCart() { document.body.classList.add('cart-open'); var d = $('#drawer'); d.setAttribute('aria-hidden', 'false'); d.focus(); }
  function closeCart() { document.body.classList.remove('cart-open'); $('#drawer').setAttribute('aria-hidden', 'true'); var b = $('#cartBtn'); if (b) b.focus(); }
  var toastTimer;
  function toast(html) {
    var t = $('#toast'); t.innerHTML = html; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  /* ---------- shared chrome ---------- */
  function chrome() {
    var page = document.body.getAttribute('data-page') || '';
    var cur = function (p) { return page === p ? ' aria-current="page"' : ''; };
    $('#top').innerHTML =
      '<div class="ann"><div class="wrap">Free shipping over $120<b>&#9679;</b>Demo store, no orders are processed</div></div>' +
      '<header class="site-head" id="head"><div class="wrap head-in">' +
      '<a class="logo" href="index.html" aria-label="D&amp;N home">D<span>&amp;</span>N</a>' +
      '<nav id="nav" aria-label="Main"><a href="shop.html"' + cur('shop') + '>Shop</a><a href="shop.html#essentials">Essentials</a><a href="shop.html#training">Training</a><a href="shop.html#recovery">Recovery</a><a href="about.html"' + cur('about') + '>About</a></nav>' +
      '<button class="cart-btn" id="cartBtn" type="button" aria-label="Open cart"><span>Cart</span><span class="count" id="count">0</span></button>' +
      '<button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>' +
      '</div></header>';
    $('#foot').innerHTML =
      '<footer class="site-foot on-dark"><div class="foot-ring" aria-hidden="true"></div><div class="wrap"><div class="foot-grid">' +
      '<div class="foot-brand"><a class="logo" href="index.html" aria-label="D&amp;N home">D<span>&amp;</span>N</a><p>Quiet, heavyweight training clothes for men. Made to be worn all day.</p></div>' +
      '<div><h4>Shop</h4><ul><li><a href="shop.html">All products</a></li><li><a href="shop.html#tops">Tops</a></li><li><a href="shop.html#bottoms">Bottoms</a></li><li><a href="shop.html#outerwear">Outerwear</a></li><li><a href="shop.html#extras">Extras</a></li></ul></div>' +
      '<div><h4>Brand</h4><ul><li><a href="about.html">Our story</a></li><li><a href="shop.html#essentials">Essentials</a></li><li><a href="shop.html#training">Training</a></li><li><a href="shop.html#recovery">Recovery</a></li></ul></div>' +
      '</div><p class="fine-print">D&amp;N is a fictional brand made as a web design portfolio project. Nothing here is for sale.</p></div></footer>';

    var wrap = document.createElement('div');
    wrap.innerHTML =
      '<div class="scrim" id="scrim"></div>' +
      '<aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Your cart" aria-hidden="true" tabindex="-1">' +
      '<div class="d-head"><h2>Your cart</h2><button class="d-close" id="closeCart" type="button" aria-label="Close cart">&times;</button></div>' +
      '<div class="ship" id="ship"></div><div class="d-body" id="cartList"></div>' +
      '<div class="d-foot"><div class="d-row"><span>Subtotal</span><b id="sub">$0</b></div><button class="btn plain block" id="checkout" type="button">Checkout</button><p class="d-fine" id="coMsg" role="status"></p></div></aside>' +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    renderCart();
  }

  /* ---------- product cards ---------- */
  function card(p) {
    var k = p.colors[0];
    var sws = p.colors.map(function (c, i) {
      return '<button class="sw" type="button" data-sw="' + c + '" data-id="' + p.id + '" style="--c:' + COLORS[c] + '" aria-label="' + cap(c) + '" aria-pressed="' + (i === 0) + '"></button>';
    }).join('');
    return '<article class="card" data-id="' + p.id + '" data-color="' + k + '">' +
      '<div class="cm"><a class="cl" href="product.html#' + p.id + '" tabindex="-1" aria-hidden="true"><div class="frame" style="--frame:' + p.frame + '">' + art(p.art, COLORS[k]) + (p.tag ? '<span class="tag">' + p.tag + '</span>' : '') + '</div></a>' +
      '<button class="quick" type="button" data-quick="' + p.id + '" aria-label="Quick add ' + p.name + ' to cart">+</button></div>' +
      '<div class="meta"><div><a class="nm-link" href="product.html#' + p.id + '">' + p.name + '</a><div class="sub">' + cap(p.col) + ' / ' + cap(p.cat) + '</div></div><span class="pr">' + money(p.price) + '</span></div>' +
      '<div class="sws">' + sws + '</div></article>';
  }
  function renderCards(el, list) { el.innerHTML = list.map(card).join(''); }

  /* ---------- pages ---------- */
  function initHome() {
    $$('[data-art]').forEach(function (el) { var a = el.getAttribute('data-art').split(':'); el.insertAdjacentHTML('beforeend', art(a[0], COLORS[a[1]])); });
    $$('[data-count]').forEach(function (el) {
      var c = el.getAttribute('data-count');
      el.textContent = P.filter(function (p) { return p.col === c; }).length + ' pieces';
    });
    renderCards($('#featured'), ['core-tee', 'layer-hoodie', 'lift-jogger', 'warm-up-jacket'].map(get));
    var f = $('#newsForm');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = $('#newsEmail').value.trim(), m = $('#newsMsg');
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { m.textContent = 'Enter a valid email address, like name@example.com.'; return; }
      m.textContent = 'Thanks. This is a demo, so nothing was sent.';
      f.reset();
    });
  }

  function initShop() {
    var st = { cat: 'all', col: 'all', color: 'all', size: 'all', sort: 'featured' };
    var grid = $('#grid');
    function fromHash() {
      var h = location.hash.slice(1);
      st.cat = 'all'; st.col = 'all';
      if (CATS.indexOf(h) > -1) st.cat = h; else if (COLS.indexOf(h) > -1) st.col = h;
    }
    function sync() {
      $$('[data-cat]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-cat') === st.cat)); });
      $$('[data-col]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-col') === st.col)); });
      $$('[data-color]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-color') === st.color)); });
      $('#sizeSel').value = st.size; $('#sortSel').value = st.sort;
    }
    function draw() {
      var list = P.filter(function (p) {
        if (st.cat !== 'all' && p.cat !== st.cat) return false;
        if (st.col !== 'all' && p.col !== st.col) return false;
        if (st.color !== 'all' && p.colors.indexOf(st.color) < 0) return false;
        return true;
      });
      if (st.sort === 'low') list.sort(function (a, b) { return a.price - b.price; });
      if (st.sort === 'high') list.sort(function (a, b) { return b.price - a.price; });
      if (st.sort === 'name') list.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
      $('#res').textContent = list.length + (list.length === 1 ? ' piece' : ' pieces');
      var title = st.col !== 'all' ? cap(st.col) : (st.cat !== 'all' ? cap(st.cat) : 'All pieces');
      $('#shopTitle').textContent = title;
      if (!list.length) {
        grid.className = '';
        grid.innerHTML = '<div class="empty"><h2>Nothing matches those filters.</h2><button class="btn plain" type="button" id="resetF">Clear filters</button></div>';
        return;
      }
      grid.className = 'grid';
      renderCards(grid, list);
    }
    function reset() { st = { cat: 'all', col: 'all', color: 'all', size: 'all', sort: 'featured' }; sync(); draw(); }
    $('#filters').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.hasAttribute('data-cat')) { st.cat = b.getAttribute('data-cat'); }
      else if (b.hasAttribute('data-col')) { var c = b.getAttribute('data-col'); st.col = (st.col === c ? 'all' : c); }
      else if (b.hasAttribute('data-color')) { var k = b.getAttribute('data-color'); st.color = (st.color === k ? 'all' : k); }
      else return;
      sync(); draw();
    });
    $('#sizeSel').addEventListener('change', function (e) { st.size = e.target.value; draw(); });
    $('#sortSel').addEventListener('change', function (e) { st.sort = e.target.value; draw(); });
    document.addEventListener('click', function (e) { if (e.target.id === 'resetF') reset(); });
    window.addEventListener('hashchange', function () { fromHash(); sync(); draw(); });
    fromHash(); sync(); draw();
  }

  function initProduct() {
    var host = $('#pd'), p, s;
    function render() {
      p = get(location.hash.slice(1)) || P[0];
      s = { color: p.colors[0], size: p.sizes === 'one' ? 'One size' : null, qty: 1 };
      document.title = p.name + ' | D&N';
      $('#crumbName').textContent = p.name;
      var sizes = p.sizes === 'one'
        ? '<button class="size" type="button" data-size="One size" aria-pressed="true">One size</button>'
        : SIZES.map(function (z) { return '<button class="size" type="button" data-size="' + z + '" aria-pressed="false">' + z + '</button>'; }).join('');
      var sw = p.colors.map(function (c, i) {
        return '<button class="sw big" type="button" data-pcolor="' + c + '" style="--c:' + COLORS[c] + ';width:2rem;height:2rem" aria-label="' + cap(c) + '" aria-pressed="' + (i === 0) + '"></button>';
      }).join('');
      host.innerHTML =
        '<div><div class="pd-frame" id="pdArt" style="--frame:' + p.frame + '" role="img" aria-label="' + p.name + ' in ' + cap(s.color) + '">' + art(p.art, COLORS[s.color]) + '</div></div>' +
        '<div class="pd-info"><div class="eyebrow">' + cap(p.col) + ' collection</div><h1>' + p.name + '</h1><div class="pd-price">' + money(p.price) + '</div>' +
        '<p class="lead">' + p.blurb + '</p>' +
        '<div class="opt"><div class="opt-label"><span>Color</span><b id="colorName">' + cap(s.color) + '</b></div><div class="sws" style="gap:.9rem">' + sw + '</div></div>' +
        '<div class="opt"><div class="opt-label"><span>Size</span><b>' + (p.sizes === 'one' ? 'Adjustable' : 'Model is 185 cm, wears M') + '</b></div><div class="sizes" role="group" aria-label="Size">' + sizes + '</div></div>' +
        '<div class="buy"><div class="qty"><button type="button" data-q="-1" aria-label="Decrease quantity">&minus;</button><output id="qv">1</output><button type="button" data-q="1" aria-label="Increase quantity">+</button></div>' +
        '<button class="btn" id="addBtn" type="button"><span>Add to cart</span><span class="dot" aria-hidden="true">+</span></button></div>' +
        '<p class="pd-msg" id="pdMsg" role="status"></p>' +
        '<div class="tabs"><div class="tab-row" role="tablist" aria-label="Product information">' +
        '<button class="tab" role="tab" id="t0" aria-selected="true" aria-controls="pn0" data-tab="0">Details</button>' +
        '<button class="tab" role="tab" id="t1" aria-selected="false" aria-controls="pn1" data-tab="1">Fabric and care</button>' +
        '<button class="tab" role="tab" id="t2" aria-selected="false" aria-controls="pn2" data-tab="2">Shipping and returns</button></div>' +
        '<div class="panel" role="tabpanel" id="pn0" aria-labelledby="t0"><ul>' + p.details.map(function (d) { return '<li>' + d + '</li>'; }).join('') + '</ul></div>' +
        '<div class="panel" role="tabpanel" id="pn1" aria-labelledby="t1" hidden><p>' + p.fabric + '</p></div>' +
        '<div class="panel" role="tabpanel" id="pn2" aria-labelledby="t2" hidden><p>' + SHIP_TEXT + '</p></div></div></div>';
      var rel = P.filter(function (x) { return x.id !== p.id && (x.col === p.col || x.cat === p.cat); }).slice(0, 4);
      if (rel.length < 4) P.forEach(function (x) { if (rel.length < 4 && x.id !== p.id && rel.indexOf(x) < 0) rel.push(x); });
      renderCards($('#related'), rel);
    }
    host.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.hasAttribute('data-pcolor')) {
        s.color = b.getAttribute('data-pcolor');
        $$('[data-pcolor]', host).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        $('#pdArt svg').outerHTML = art(p.art, COLORS[s.color]);
        $('#colorName').textContent = cap(s.color);
        $('#pdArt').setAttribute('aria-label', p.name + ' in ' + cap(s.color));
      } else if (b.hasAttribute('data-size')) {
        s.size = b.getAttribute('data-size');
        $$('[data-size]', host).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        $('#pdMsg').textContent = '';
      } else if (b.hasAttribute('data-q')) {
        s.qty = Math.max(1, Math.min(10, s.qty + parseInt(b.getAttribute('data-q'), 10)));
        $('#qv').textContent = s.qty;
      } else if (b.hasAttribute('data-tab')) {
        var n = b.getAttribute('data-tab');
        [0, 1, 2].forEach(function (i) {
          $('#t' + i).setAttribute('aria-selected', String(String(i) === n));
          $('#pn' + i).hidden = String(i) !== n;
        });
      } else if (b.id === 'addBtn') {
        if (!s.size) { $('#pdMsg').textContent = 'Choose a size first.'; return; }
        addToCart(p.id, s.color, s.size, s.qty);
        openCart();
      }
    });
    window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });
    render();
  }

  /* ---------- global events ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target;
    var b = t.closest ? t.closest('button') : null;
    if (b && b.id === 'cartBtn') return openCart();
    if (b && b.id === 'closeCart') return closeCart();
    if (t.id === 'scrim') return closeCart();
    if (b && b.id === 'burger') {
      var h = $('#head'), o = h.classList.toggle('nav-open');
      b.setAttribute('aria-expanded', String(o)); return;
    }
    if (b && b.id === 'checkout') {
      $('#coMsg').textContent = cart.length ? 'Checkout is switched off because D&N is a demo store. Your cart stays saved in this browser.' : 'Add something to your cart first.';
      return;
    }
    if (b && b.hasAttribute('data-quick')) {
      var p = get(b.getAttribute('data-quick')), card = b.closest('.card');
      var color = card ? card.getAttribute('data-color') : p.colors[0];
      var size = p.sizes === 'one' ? 'One size' : 'M';
      addToCart(p.id, color, size, 1);
      toast('Added <b>' + p.name + '</b> in ' + cap(color) + ', ' + size);
      return;
    }
    if (b && b.hasAttribute('data-sw')) {
      var cd = b.closest('.card'), pr = get(b.getAttribute('data-id')), c = b.getAttribute('data-sw');
      cd.setAttribute('data-color', c);
      $$('.sw', cd).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var svg = $('.frame svg', cd); if (svg) svg.outerHTML = art(pr.art, COLORS[c]);
      return;
    }
    if (b && b.hasAttribute('data-qty')) {
      var key = b.getAttribute('data-key'), d = parseInt(b.getAttribute('data-qty'), 10);
      cart.forEach(function (i) { if (i.key === key) i.qty = Math.max(1, Math.min(10, i.qty + d)); });
      saveCart(); renderCart(); return;
    }
    if (b && b.hasAttribute('data-rm')) {
      var rk = b.getAttribute('data-rm');
      cart = cart.filter(function (i) { return i.key !== rk; });
      saveCart(); renderCart(); return;
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('cart-open')) closeCart(); });

  chrome();
  var page = document.body.getAttribute('data-page') || ($('#featured') ? 'home' : null);
  if (page === 'home') initHome();
  if (page === 'shop') initShop();
  if (page === 'product') initProduct();
  if (page === 'about') $$('[data-art]').forEach(function (el) { var a = el.getAttribute('data-art').split(':'); el.insertAdjacentHTML('beforeend', art(a[0], COLORS[a[1]])); });
})();
