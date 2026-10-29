(function () {
  var header = document.getElementById('siteHeader');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add('in'); }); }

  var chips = document.querySelectorAll('.chip');
  var products = document.querySelectorAll('.product');
  function applyFilter(cat) {
    chips.forEach(function (c) { c.classList.toggle('active', c.dataset.filter === cat); });
    products.forEach(function (p) {
      var hide = cat !== 'all' && p.dataset.cat !== cat;
      p.classList.toggle('is-hidden', hide);
      if (!hide) p.classList.add('in');
    });
  }
  chips.forEach(function (c) { c.addEventListener('click', function () { applyFilter(c.dataset.filter); }); });
  document.querySelectorAll('[data-go]').forEach(function (a) {
    a.addEventListener('click', function () { applyFilter(a.dataset.go); });
  });

  var interest = document.getElementById('interest');
  var message = document.getElementById('message');
  var catMap = { paintings: 'Paintings', kenyan: 'Kenyan Made Art', moulds: 'Moulds', candles: 'Candles', soaps: 'Soaps', handwash: 'Liquid Handwash' };
  document.querySelectorAll('[data-product]').forEach(function (a) {
    a.addEventListener('click', function () {
      var card = a.closest('.product');
      if (message) message.value = 'Hello, I am interested in: ' + a.dataset.product + '. Please share price, availability and delivery to my location.';
      if (interest && card && catMap[card.dataset.cat]) interest.value = catMap[card.dataset.cat];
    });
  });

  var NUM = '254792381698';
  var copyBtn = document.getElementById('copyNum');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var n = copyBtn.dataset.num;
      var done = function () { copyBtn.textContent = 'Copied!'; setTimeout(function () { copyBtn.textContent = 'Copy number'; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(n).then(done, done); } else { done(); }
    });
  }

  var co = document.getElementById('checkoutForm');
  if (co) {
    co.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { return (document.getElementById(id).value || '').trim(); };
      if (!v('co-name') || !v('co-items') || !v('co-loc')) { alert('Please fill in your name, what you want to order and your delivery location.'); return; }
      var pay = co.querySelector('input[name="pay"]:checked').value;
      var lines = [
        "Hello Lord's Art & Crafts, I would like to place an order.",
        'Name: ' + v('co-name'),
        v('co-phone') ? 'Phone: ' + v('co-phone') : '',
        'Order: ' + v('co-items'),
        'Delivery to: ' + v('co-loc'),
        v('co-amt') ? 'Agreed amount: KSh ' + v('co-amt') : '',
        'Payment method: ' + pay,
        pay === 'M-Pesa' ? 'I will send the M-Pesa confirmation once paid.' : 'Please send me a secure card payment link.'
      ].filter(Boolean).join('\n');
      window.open('https://wa.me/' + NUM + '?text=' + encodeURIComponent(lines), '_blank', 'noopener');
    });
  }
})();
