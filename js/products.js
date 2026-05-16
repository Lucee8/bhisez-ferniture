/* =========================================
   BHISE'Z FERNITURE – PRODUCTS JS
   Urban Ladder style cards, filters, search
   ========================================= */

// ─── PRODUCT DATA ───────────────────────────────────────────
// To add a real image: set  image: 'images/products/filename.jpg'
// colors: array of hex color strings for swatches
// priceNum: numeric version for sorting/filtering
// priceOrig: original (strikethrough) price string
// discount: e.g. '38% OFF'
const products = [
  {
    id:1, name:'Royal 3+1+1 Sofa Set',
    category:'living', catLabel:'Living Room',
    desc:'Premium fabric 3+1+1 sofa set. Multiple colour options available.',
    price:'₹35,000', priceNum:35000, priceOrig:'₹55,000', discount:'36% OFF',
    badge:'hot', image:null,
    colors:['#5a6f4a','#3b5b7a','#c47a40','#8b4b4b']
  },
  {
    id:2, name:'Classic Wooden Divan',
    category:'living', catLabel:'Living Room',
    desc:'Solid wood divan with cushioned top. Ideal for living or bedroom.',
    price:'₹12,000', priceNum:12000, priceOrig:'₹18,000', discount:'33% OFF',
    badge:'new', image:null,
    colors:['#6b4226','#222','#a87c52']
  },
  {
    id:3, name:'Sofa Cum Bed',
    category:'living', catLabel:'Living Room',
    desc:'Multi-functional sofa converts to full-size bed. Space-saving design.',
    price:'₹18,000', priceNum:18000, priceOrig:'₹26,000', discount:'31% OFF',
    badge:'new', image:null,
    colors:['#808080','#3a3a3a','#c47a40']
  },
  {
    id:4, name:'Wooden Teapoy / Centre Table',
    category:'living', catLabel:'Living Room',
    desc:'Elegant wooden teapoy with glass or wooden top.',
    price:'₹4,500', priceNum:4500, priceOrig:'₹7,000', discount:'36% OFF',
    badge:null, image:null,
    colors:['#6b4226','#3a3a3a','#d4b896']
  },
  {
    id:5, name:'King Size Storage Bed',
    category:'bedroom', catLabel:'Bedroom',
    desc:'Solid teak king size bed with hydraulic storage. Premium finish.',
    price:'₹28,000', priceNum:28000, priceOrig:'₹42,000', discount:'33% OFF',
    badge:'hot', image:null,
    colors:['#6b4226','#3a3a3a','#c9b99a']
  },
  {
    id:6, name:'4-Door Wardrobe with Mirror',
    category:'bedroom', catLabel:'Bedroom',
    desc:'4-door wardrobe with full-length mirror and pull-out drawers.',
    price:'₹22,000', priceNum:22000, priceOrig:'₹34,000', discount:'35% OFF',
    badge:null, image:null,
    colors:['#f5f0e8','#3a3a3a','#6b4226']
  },
  {
    id:7, name:'Dressing Table with Mirror',
    category:'bedroom', catLabel:'Bedroom',
    desc:'Classic dressing table with frameless mirror and 5 drawers.',
    price:'₹8,500', priceNum:8500, priceOrig:'₹13,000', discount:'35% OFF',
    badge:'new', image:null,
    colors:['#f5f0e8','#6b4226','#c9b99a']
  },
  {
    id:8, name:'Wall-Mounted TV Unit',
    category:'bedroom', catLabel:'Living / Bedroom',
    desc:'Sleek wall-mounted TV unit with shelves. Multiple finish options.',
    price:'₹9,000', priceNum:9000, priceOrig:'₹14,000', discount:'36% OFF',
    badge:'new', image:null,
    colors:['#3a3a3a','#f5f0e8','#6b4226']
  },
  {
    id:9, name:'6-Seater Dining Table Set',
    category:'dining', catLabel:'Dining',
    desc:'Solid wood 6-seater dining set with cushioned chairs.',
    price:'₹24,000', priceNum:24000, priceOrig:'₹36,000', discount:'33% OFF',
    badge:null, image:null,
    colors:['#6b4226','#3a3a3a','#a87c52']
  },
  {
    id:10, name:'4-Seater Dining Table',
    category:'dining', catLabel:'Dining',
    desc:'Compact 4-seater dining table. Perfect for small families.',
    price:'₹15,000', priceNum:15000, priceOrig:'₹22,000', discount:'32% OFF',
    badge:null, image:null,
    colors:['#6b4226','#3a3a3a']
  },
  {
    id:11, name:'Traditional Chaurang',
    category:'dining', catLabel:'Dining',
    desc:'Authentic wooden chaurang (low dining seat). Konkan tradition.',
    price:'₹2,500', priceNum:2500, priceOrig:'₹4,000', discount:'38% OFF',
    badge:null, image:null,
    colors:['#6b4226','#a87c52']
  },
  {
    id:12, name:'Decorative Home Mandir',
    category:'mandir', catLabel:'Home Temple',
    desc:'Beautifully carved wooden mandir in teak. Traditional craftsmanship.',
    price:'₹12,000', priceNum:12000, priceOrig:'₹18,000', discount:'33% OFF',
    badge:'hot', image:null,
    colors:['#a87c52','#6b4226','#d4b896']
  },
  {
    id:13, name:'Grand Puja Room Set',
    category:'mandir', catLabel:'Home Temple',
    desc:'Complete puja room set: mandir, storage shelf, chaurang & lamp stand.',
    price:'₹25,000', priceNum:25000, priceOrig:'₹38,000', discount:'34% OFF',
    badge:null, image:null,
    colors:['#a87c52','#6b4226']
  },
  {
    id:14, name:'Premium Safety Door',
    category:'doors', catLabel:'Safety Doors',
    desc:'Heavy-duty steel safety door with 5-bar design and triple lock.',
    price:'₹8,000', priceNum:8000, priceOrig:'₹12,000', discount:'33% OFF',
    badge:null, image:null,
    colors:['#3a3a3a','#8b7355','#c0c0c0']
  },
  {
    id:15, name:'Hardwood Door Frame',
    category:'doors', catLabel:'Doors',
    desc:'Premium hardwood door frame. Custom sizes available on order.',
    price:'₹3,500', priceNum:3500, priceOrig:'₹5,500', discount:'36% OFF',
    badge:null, image:null,
    colors:['#6b4226','#3a3a3a','#a87c52']
  },
  {
    id:16, name:'Traditional Wooden Swing',
    category:'doors', catLabel:'Outdoor / Living',
    desc:'Jhopala – ceiling/wall-mounted wooden swing. Family favourite.',
    price:'₹6,000', priceNum:6000, priceOrig:'₹9,500', discount:'37% OFF',
    badge:'new', image:null,
    colors:['#6b4226','#a87c52']
  },
  {
    id:17, name:'Custom Furniture Order',
    category:'custom', catLabel:'Custom',
    desc:'Your exact design, size & finish. We build it for you from scratch.',
    price:null, priceNum:0, priceOrig:null, discount:null,
    badge:'custom', image:null,
    colors:['#C8973A','#3a3a3a','#a87c52','#5a6f4a']
  }
];

// ─── STATE ──────────────────────────────────────────────────
window.activeFilter = 'all';
window.searchQuery  = '';
window.priceFilter  = 'all';
window.sortOrder    = 'default';

// ─── PRICE RANGE HELPER ────────────────────────────────────
function inPriceRange(num, filter) {
  if (filter === 'all' || !filter) return true;
  if (filter === 'under10k')  return num > 0 && num < 10000;
  if (filter === '10k-25k')   return num >= 10000 && num <= 25000;
  if (filter === '25k-50k')   return num > 25000 && num <= 50000;
  if (filter === '50k+')      return num > 50000;
  return true;
}

// ─── RENDER CARDS ───────────────────────────────────────────
function renderProducts(list) {
  var grid = document.getElementById('productGrid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div style="font-size:3rem">🛋️</div><p>No products found. Try a different filter or search term.</p></div>';
    updateCounts(0);
    return;
  }

  grid.innerHTML = list.map(function(p) {
    var waMsg = encodeURIComponent('Hi, I am interested in ' + p.name + '. Please share more details and pricing.');
    var waURL = 'https://wa.me/919999999999?text=' + waMsg;

    // Badge HTML
    var badgeHTML = '';
    if (p.badge === 'new')    badgeHTML = '<span class="ul-card-badge badge-new">New Arrivals</span>';
    if (p.badge === 'hot')    badgeHTML = '<span class="ul-card-badge badge-hot">Bestseller</span>';
    if (p.badge === 'custom') badgeHTML = '<span class="ul-card-badge badge-custom">Custom</span>';
    if (p.badge === 'sale')   badgeHTML = '<span class="ul-card-badge badge-sale">On Sale</span>';

    // Image HTML
    var imgHTML = p.image
      ? '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy"/>'
      : '<div class="ul-img-ph"><div class="ph-icon">🪑</div><span>Add Photo</span></div>';

    // Price HTML
    var priceHTML = '';
    if (!p.price) {
      priceHTML = '<div class="ul-card-prices"><span class="price-enquire">Get Quote on WhatsApp</span></div>';
    } else {
      priceHTML = '<div class="ul-card-prices">'
        + '<span class="price-now">' + p.price + '</span>'
        + (p.priceOrig ? '<span class="price-was">' + p.priceOrig + '</span>' : '')
        + (p.discount  ? '<span class="price-off">' + p.discount + '</span>'  : '')
        + '</div>';
    }

    // Swatches HTML
    var swatchesHTML = '';
    if (p.colors && p.colors.length > 0) {
      var max = Math.min(p.colors.length, 3);
      var swatches = p.colors.slice(0, max).map(function(c, i) {
        return '<span class="swatch' + (i===0?' on':'') + '" style="background:' + c + ';" title="Colour option"></span>';
      }).join('');
      var more = p.colors.length > 3 ? '<span class="swatch-more">+' + (p.colors.length - 3) + '</span>' : '';
      swatchesHTML = '<div class="ul-card-swatches">' + swatches + more + '</div>';
    }

    return '<div class="ul-card" data-id="' + p.id + '">'
      + '<div class="ul-card-img-wrap">'
      + imgHTML
      + badgeHTML
      + '<button class="ul-heart" aria-label="Add to wishlist" onclick="toggleHeart(this)">'
      + '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
      + '</button>'
      + '<a class="ul-card-wa" href="' + waURL + '" target="_blank">'
      + '<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
      + 'Enquire on WhatsApp'
      + '</a>'
      + '</div>'
      + '<div class="ul-card-body">'
      + '<p class="ul-card-brand">Bhise\'z Ferniture</p>'
      + '<p class="ul-card-name">' + p.name + '</p>'
      + priceHTML
      + swatchesHTML
      + '</div>'
      + '</div>';
  }).join('');

  updateCounts(list.length);
}

// ─── UPDATE COUNT LABELS ────────────────────────────────────
function updateCounts(count) {
  var label   = document.getElementById('countLabel');
  var mobCount = document.getElementById('mobileCount');
  var mobTitle = document.getElementById('mobileTitle');
  var text = count + ' Product' + (count !== 1 ? 's' : '');
  if (label)    label.textContent    = 'Showing ' + text;
  if (mobCount) mobCount.textContent = text;
  if (mobTitle && window.activeFilter && window.activeFilter !== 'all') {
    var catNames = {living:'Living Room',bedroom:'Bedroom',dining:'Dining',mandir:'Mandirs',doors:'Doors',custom:'Custom'};
    mobTitle.textContent = catNames[window.activeFilter] || 'All Products';
  } else if (mobTitle) {
    mobTitle.textContent = 'All Products';
  }
}

// ─── APPLY FILTERS ──────────────────────────────────────────
window.applyFilter = function() {
  var list = products.slice(); // copy

  // Category
  if (window.activeFilter && window.activeFilter !== 'all') {
    list = list.filter(function(p){ return p.category === window.activeFilter; });
  }

  // Search
  var q = (window.searchQuery || '').toLowerCase().trim();
  if (q) {
    list = list.filter(function(p){
      return p.name.toLowerCase().includes(q)
          || p.catLabel.toLowerCase().includes(q)
          || p.desc.toLowerCase().includes(q);
    });
  }

  // Price
  if (window.priceFilter && window.priceFilter !== 'all') {
    list = list.filter(function(p){ return inPriceRange(p.priceNum, window.priceFilter); });
  }

  // Sort
  var order = window.sortOrder || 'default';
  if (order === 'price-asc')  list.sort(function(a,b){ return a.priceNum - b.priceNum; });
  if (order === 'price-desc') list.sort(function(a,b){ return b.priceNum - a.priceNum; });
  if (order === 'name')       list.sort(function(a,b){ return a.name.localeCompare(b.name); });

  renderProducts(list);
};

// ─── WISHLIST TOGGLE ────────────────────────────────────────
window.toggleHeart = function(btn) {
  btn.classList.toggle('liked');
  var svg = btn.querySelector('svg');
  if (btn.classList.contains('liked')) {
    svg.setAttribute('fill','#e74c3c');
    svg.setAttribute('stroke','#e74c3c');
  } else {
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke','#888');
  }
};

// ─── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  window.applyFilter();

  // URL param
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('cat');
  if (cat && cat !== 'all') {
    window.activeFilter = cat;
    window.applyFilter();
  }
});