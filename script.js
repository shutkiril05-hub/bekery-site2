/* ============ DATA ============ */
const categories = [
  {id:'classic', name:'Классические торты'},
  {id:'holiday', name:'Праздничные торты'},
  {id:'wedding', name:'Свадебные торты'},
  {id:'kids', name:'Детские торты'},
  {id:'pastry', name:'Пирожные'},
  {id:'event', name:'К событию'},
  {id:'pies', name:'Пироги'},
  {id:'karavay', name:'Караваи'},
  {id:'easter', name:'Пасхальная продукция'},
];

/* ============ REAL PHOTOS (Unsplash, free license) ============ */
const IMG = {
  pastryCase: 'https://images.unsplash.com/photo-1782864639148-91dcc2ad0a7b',
  weddingCake: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52',
  chocSlice: 'https://images.unsplash.com/photo-1564844536308-75c540dbf14e',
  macarons: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c',
  cupcakes: 'https://images.unsplash.com/photo-1611692276815-cd6efa0b2dac',
  cherryPie: 'https://images.unsplash.com/photo-1617612014110-279dfce1211b',
};
function img(url,w,h){ return `${url}?w=${w}&h=${h}&fit=crop&auto=format&q=80`; }
const CAT_IMG = {
  classic: IMG.chocSlice,
  holiday: IMG.weddingCake,
  wedding: IMG.weddingCake,
  kids: IMG.cupcakes,
  pastry: IMG.macarons,
  event: IMG.cupcakes,
  pies: IMG.cherryPie,
  karavay: IMG.pastryCase,
  easter: IMG.pastryCase,
};

let favorites = [];
try{ favorites = JSON.parse(localStorage.getItem('bakeryFavorites')) || []; }catch(e){ favorites = []; }
function isFavorite(id){ return favorites.includes(id); }

const products = [
  {id:1,cat:'classic',name:'Наполеон',desc:'Слоёное тесто, заварной крем',price:58,badge:'Хит',weight:'1,3 кг',ready:'от 5 часов',comp:'мука, масло, яйцо, молоко, сахар',kcal:'312',prot:'4,8',fat:'19',carb:'31',img:IMG.chocSlice},
  {id:2,cat:'classic',name:'Медовик',desc:'Медовые коржи, сметанный крем',price:63,badge:'Хит',weight:'1,4 кг',ready:'от 6 часов',comp:'мука, мёд, сметана, сливки 33%',kcal:'329',prot:'5,1',fat:'21',carb:'32',img:IMG.pastryCase},
  {id:3,cat:'classic',name:'Эстерхази',desc:'Миндальные коржи, крем-шарлотт',price:79,badge:null,weight:'1,2 кг',ready:'от 8 часов',comp:'миндаль, яйцо, масло, сахар',kcal:'398',prot:'7,2',fat:'28',carb:'27',img:IMG.chocSlice},
  {id:4,cat:'holiday',name:'«Красный бархат»',desc:'Какао-бисквит, крем-чиз',price:85,badge:'Праздник',weight:'1,6 кг',ready:'от 10 часов',comp:'мука, какао, сливочный сыр, свёкла',kcal:'340',prot:'5,0',fat:'20',carb:'35',img:IMG.weddingCake},
  {id:5,cat:'wedding',name:'Свадебный трёхъярусный',desc:'Ягодная начинка, живые цветы',price:420,badge:'От 3 кг',weight:'3–8 кг',ready:'от 48 часов',comp:'по выбору начинки и крема',kcal:'—',prot:'—',fat:'—',carb:'—',img:IMG.weddingCake},
  {id:6,cat:'kids',name:'«Единорог»',desc:'Ванильный бисквит, декор из мастики',price:95,badge:'Детям',weight:'1,5 кг',ready:'от 24 часов',comp:'мука, ваниль, мастика, крем-чиз',kcal:'355',prot:'4,5',fat:'18',carb:'42',img:IMG.cupcakes},
  {id:7,cat:'pastry',name:'Эклеры (набор 6 шт)',desc:'Заварной крем на выбор',price:24,badge:null,weight:'420 г',ready:'от 3 часов',comp:'мука, яйцо, масло, крем',kcal:'298',prot:'5,0',fat:'17',carb:'30',img:IMG.pastryCase},
  {id:8,cat:'pastry',name:'Макарони (набор 8 шт)',desc:'Миндальная мука, ганаш',price:30,badge:null,weight:'240 г',ready:'от 4 часов',comp:'миндальная мука, сахарная пудра, ганаш',kcal:'410',prot:'6,0',fat:'22',carb:'44',img:IMG.macarons},
  {id:9,cat:'pastry',name:'«Картошка»',desc:'Бисквитная крошка, коньячная пропитка',price:3,badge:null,weight:'80 г / шт',ready:'от 2 часов',comp:'бисквит, какао, сгущённое молоко',kcal:'340',prot:'4,0',fat:'16',carb:'45',img:IMG.chocSlice},
  {id:10,cat:'pastry',name:'Тарталетки ассорти',desc:'Ягоды, заварной крем',price:4,badge:null,weight:'60 г / шт',ready:'от 2 часов',comp:'песочное тесто, крем, ягоды',kcal:'280',prot:'3,5',fat:'14',carb:'34',img:IMG.pastryCase},
  {id:11,cat:'event',name:'Капкейки на заказ',desc:'Под цвет и тему события',price:5,badge:null,weight:'70 г / шт',ready:'от 6 часов',comp:'мука, масло, крем-чиз',kcal:'320',prot:'4,0',fat:'17',carb:'38',img:IMG.cupcakes},
  {id:12,cat:'pies',name:'Пирог с вишней',desc:'Открытый, песочное тесто',price:32,badge:null,weight:'900 г',ready:'от 4 часов',comp:'мука, вишня, масло, сахар',kcal:'270',prot:'4,0',fat:'11',carb:'38',img:IMG.cherryPie},
  {id:13,cat:'pies',name:'Пирог с мясом и картофелем',desc:'Сытный, дрожжевое тесто',price:29,badge:'Сытный',weight:'950 г',ready:'от 5 часов',comp:'мука, говядина, картофель, лук',kcal:'250',prot:'9,0',fat:'12',carb:'26',img:IMG.cherryPie},
  {id:14,cat:'karavay',name:'Каравай свадебный',desc:'Дрожжевое тесто, узорный декор',price:75,badge:null,weight:'2,0 кг',ready:'от 24 часов',comp:'мука, дрожжи, яйцо, соль',kcal:'260',prot:'8,0',fat:'4',carb:'50',img:IMG.weddingCake},
  {id:15,cat:'easter',name:'Кулич классический',desc:'Цукаты, ванильная глазурь',price:18,badge:'Сезон',weight:'600 г',ready:'от 6 часов',comp:'мука, изюм, цукаты, ваниль',kcal:'310',prot:'6,0',fat:'9',carb:'52',img:IMG.pastryCase},
  {id:16,cat:'easter',name:'Пасхальный набор',desc:'Кулич + декорированные яйца из шоколада',price:35,badge:'Сезон',weight:'900 г',ready:'от 10 часов',comp:'мука, шоколад, цукаты',kcal:'330',prot:'5,5',fat:'14',carb:'46',img:IMG.macarons},
];

const news = [
  {date:'28 августа 2026', title:'Осенняя линейка вкусов начинок', text:'Добавили тыкву с карамелью и грушу с кардамоном в картотеку начинок для тортов на заказ.', img:IMG.cherryPie},
  {date:'14 августа 2026', title:'Скидка 10% на будние заказы', text:'При заказе капкейков и наборов пирожных с понедельника по четверг — скидка на весь чек.', img:IMG.cupcakes},
  {date:'2 августа 2026', title:'Открыли конструктор тортов онлайн', text:'Теперь можно собрать торт по шагам и сразу увидеть вес и стоимость — без звонков и уточнений.', img:IMG.chocSlice},
  {date:'22 июля 2026', title:'Новая линейка свадебных тортов', text:'Пять новых многоярусных композиций — от минимализма до пышного декора живыми цветами.', img:IMG.weddingCake},
  {date:'10 июля 2026', title:'Макаронс: 6 новых вкусов', text:'Расширили картотеку макаронс — добавили фисташку, малину с розой и солёную карамель.', img:IMG.macarons},
  {date:'28 июня 2026', title:'Готовим наборы к школьному сезону', text:'Собрали капкейки и мини-десерты для линеек 1 сентября — заказ за 3 дня.', img:IMG.pastryCase},
];

/* ============ SOCIAL LINKS ============ */
/* TODO: заменить href="#" на реальные ссылки Facebook / X / Instagram */
const socials = [
  {name:'Facebook', href:'#', svg:'<path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>'},
  {name:'X', href:'#', svg:'<path d="M18.9 3H22l-7.2 8.2L23 21h-6.6l-5.2-6.5L5.2 21H2l7.7-8.8L1.5 3h6.8l4.7 5.9L18.9 3Zm-1.2 16h1.7L7.4 5H5.6l12.1 14Z"/>'},
  {name:'Instagram', href:'#', svg:'<path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2Zm0 1.8c-2.6 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1 .1 1.4.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.4.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.7-.3-1-.1-1.4-.1-4-.1Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm4.9-2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/>'},
];
function renderSocials(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = socials.map(s=>`<a class="social-ic" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.name}"><svg viewBox="0 0 24 24">${s.svg}</svg></a>`).join('');
}
renderSocials('socialRowFooter');
renderSocials('callSocials');
renderSocials('socialRowAbout');

/* ============ ABOUT GALLERY ============ */
const aboutPhotos = [
  {url:'https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=500&h=500&fit=crop&auto=format&q=80', alt:'Витрина с фруктовыми тарталетками'},
  {url:'https://images.unsplash.com/photo-1534432182912-63863115e106?w=500&h=500&fit=crop&auto=format&q=80', alt:'Пирожные и крошковый торт на витрине'},
  {url:'https://images.unsplash.com/photo-1623334044303-241021148842?w=500&h=500&fit=crop&auto=format&q=80', alt:'Круассаны на столе'},
  {url:'https://images.unsplash.com/photo-1678303054606-9247ec5ca401?w=500&h=500&fit=crop&auto=format&q=80', alt:'Тарелка с десертами крупным планом'},
  {url:'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&h=500&fit=crop&auto=format&q=80', alt:'Кофе среди свежей выпечки'},
  {url:'https://images.unsplash.com/photo-1622941367239-8acd68fa946d?w=500&h=500&fit=crop&auto=format&q=80', alt:'Хлеб на тарелке'},
];
const aboutGalleryEl = document.getElementById('aboutGallery');
if(aboutGalleryEl){
  aboutGalleryEl.innerHTML = aboutPhotos.map(p=>`<a href="${p.url.split('?')[0]}?w=1400&auto=format&q=80" target="_blank" rel="noopener"><img src="${p.url}" alt="${p.alt}" loading="lazy"></a>`).join('');
}

/* ============ MOBILE MENU ============ */
const mobileMenu = document.getElementById('mobileMenu');
const menuToggle = document.getElementById('menuToggle');
function closeMobileMenu(){ mobileMenu.classList.remove('open'); menuToggle.textContent = '☰'; }
menuToggle.addEventListener('click', ()=>{
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});
mobileMenu.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeMobileMenu));

/* ============ PAGE NAVIGATION ============ */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const target = document.getElementById('page-'+id);
  if(target) target.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active', a.dataset.page===id));
  window.scrollTo({top:0,behavior:'smooth'});
  closeMobileMenu();
}
function goToCategory(catId){
  showPage('catalog');
  activeCat = catId;
  renderPills();
  renderProducts();
}

/* ============ CATEGORY SHOWCASE (mouse-reactive) ============ */
function renderShowcase(){
  const grid = document.getElementById('showcaseGrid');
  grid.innerHTML = categories.map(c=>`
    <div class="showcase-item" data-cat="${c.id}">
      <div class="showcase-ring"><img src="${img(CAT_IMG[c.id],200,200)}" alt="${c.name}" loading="lazy"></div>
      <span>${c.name}</span>
    </div>`).join('');
  grid.querySelectorAll('.showcase-item').forEach(item=>{
    const ring = item.querySelector('.showcase-ring');
    item.addEventListener('mousemove', e=>{
      const r = ring.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ring.style.transform = `perspective(400px) rotateX(${(-py*16).toFixed(1)}deg) rotateY(${(px*16).toFixed(1)}deg) scale(1.05)`;
    });
    item.addEventListener('mouseleave', ()=>{
      ring.style.transform = 'perspective(400px) rotateX(0) rotateY(0) scale(1)';
    });
    item.addEventListener('click', ()=>{
      goToCategory(item.dataset.cat);
    });
  });
}

/* ============ WHAT WE BAKE TILES ============ */
const bakeTilesData = [
  {cat:'classic', img:IMG.chocSlice, name:'Классические торты', desc:'Медовик, Наполеон, Прага — вкусы, проверенные временем'},
  {cat:'wedding', img:IMG.weddingCake, name:'Свадебные торты', desc:'Многоярусные композиции под цвет и стиль торжества'},
  {cat:'pastry', img:IMG.macarons, name:'Пирожные и десерты', desc:'Капкейки, макаронс и мини-десерты на любой праздник'},
  {cat:'pies', img:IMG.cherryPie, name:'Пироги', desc:'Открытые и закрытые пироги с сезонными начинками'},
];
function renderBakeTiles(){
  const el = document.getElementById('bakeTiles');
  if(!el) return;
  el.innerHTML = bakeTilesData.map(t=>`
    <div class="bake-tile" data-cat="${t.cat}">
      <img src="${img(t.img,500,650)}" alt="${t.name}" loading="lazy">
      <div class="bt-label"><h4>${t.name}</h4><span>${t.desc}</span></div>
    </div>`).join('');
  el.querySelectorAll('.bake-tile').forEach(tile=>{
    tile.addEventListener('click', ()=> goToCategory(tile.dataset.cat));
  });
}
renderBakeTiles();

/* ============ FEATURED PICKS ============ */
function renderFeatured(){
  const el = document.getElementById('featuredGrid');
  if(!el) return;
  const list = products.filter(p=>p.badge).slice(0,4);
  el.innerHTML = list.map(p=>`
    <div class="p-card" data-id="${p.id}">
      <div class="p-thumb">
        <img src="${img(p.img,400,300)}" alt="${p.name}" loading="lazy">
        ${p.badge?`<span class="badge">${p.badge}</span>`:''}
        <button class="p-fav-toggle ${isFavorite(p.id)?'active':''}" data-fav="${p.id}" aria-label="В избранное">
          <svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.7-9.8-9.4C.6 7.6 2 4 5.6 3.2 8 2.7 10.3 3.9 12 6.2c1.7-2.3 4-3.5 6.4-3 3.6.8 5 4.4 3.4 7.9C19.5 15.8 12 20.5 12 20.5z"/></svg>
        </button>
      </div>
      <div class="p-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="p-foot">
          <span class="price">${p.price} BYN</span>
          <button class="add-btn" data-add="${p.id}">+</button>
        </div>
      </div>
    </div>`).join('');
  el.querySelectorAll('.p-card').forEach(card=>{
    card.addEventListener('click', (e)=>{
      if(e.target.closest('[data-fav]') || e.target.closest('[data-add]')) return;
      openProduct(parseInt(card.dataset.id));
    });
  });
  el.querySelectorAll('[data-add]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const p = products.find(x=>x.id===parseInt(btn.dataset.add));
      addToCart('p'+p.id, p.name, p.price, 1);
      pulseCartButton();
    });
  });
  el.querySelectorAll('[data-fav]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      toggleFavorite(parseInt(btn.dataset.fav));
      btn.classList.toggle('active', isFavorite(parseInt(btn.dataset.fav)));
    });
  });
}
renderFeatured();

/* ============ CATALOG RENDER ============ */
const catDropdown = document.getElementById('catDropdown');
const catMenu = document.querySelector('.cat-menu');
const catMenuBtn = document.getElementById('catMenuBtn');
const catMenuLabel = document.getElementById('catMenuLabel');
const productGrid = document.getElementById('productGrid');
let activeCat = 'all';

function renderPills(){
  const all = [{id:'all',name:'Все хиты'}, ...categories];
  catDropdown.innerHTML = all.map(c=>`<button class="${activeCat===c.id?'active':''}" data-id="${c.id}" role="option">${c.name}</button>`).join('');
  catMenuLabel.textContent = all.find(c=>c.id===activeCat)?.name || 'Все хиты';
  catDropdown.querySelectorAll('button').forEach(p=>p.addEventListener('click',()=>{
    activeCat=p.dataset.id;
    renderPills();
    renderProducts();
    catMenu.classList.remove('open');
    catMenuBtn.setAttribute('aria-expanded','false');
  }));
}
catMenuBtn.addEventListener('click', e=>{
  e.stopPropagation();
  const isOpen = catMenu.classList.toggle('open');
  catMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
document.addEventListener('click', e=>{
  if(!catMenu.contains(e.target)){
    catMenu.classList.remove('open');
    catMenuBtn.setAttribute('aria-expanded','false');
  }
});

/* ============ CONTACTS MODAL ============ */
const callModal = document.getElementById('callModal');
function openCallPopover(){ callModal.classList.add('open'); }
function closeCallPopover(){ callModal.classList.remove('open'); }
callModal.addEventListener('click', e=>{ if(e.target===callModal) closeCallPopover(); });
function renderProducts(){
  const list = activeCat==='all' ? products.filter(p=>p.badge) : products.filter(p=>p.cat===activeCat);
  productGrid.innerHTML = list.map(p=>`
    <div class="p-card" data-id="${p.id}">
      <div class="p-thumb">
        <img src="${img(p.img,400,300)}" alt="${p.name}" loading="lazy">
        ${p.badge?`<span class="badge">${p.badge}</span>`:''}
        <button class="p-fav-toggle ${isFavorite(p.id)?'active':''}" data-fav="${p.id}" aria-label="В избранное">
          <svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.7-9.8-9.4C.6 7.6 2 4 5.6 3.2 8 2.7 10.3 3.9 12 6.2c1.7-2.3 4-3.5 6.4-3 3.6.8 5 4.4 3.4 7.9C19.5 15.8 12 20.5 12 20.5z"/></svg>
        </button>
      </div>
      <div class="p-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="p-foot">
          <span class="price">${p.price} BYN</span>
          <button class="add-btn" data-add="${p.id}">+</button>
        </div>
      </div>
    </div>`).join('');
  productGrid.querySelectorAll('.p-card').forEach(card=>{
    card.addEventListener('click',()=>openProduct(parseInt(card.dataset.id)));
  });
  productGrid.querySelectorAll('[data-add]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const p = products.find(x=>x.id===parseInt(btn.dataset.add));
      addToCart('p'+p.id, p.name, p.price, 1);
      pulseCartButton();
    });
  });
  productGrid.querySelectorAll('[data-fav]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      toggleFavorite(parseInt(btn.dataset.fav));
      btn.classList.toggle('active', isFavorite(parseInt(btn.dataset.fav)));
    });
  });
}
function thumbGradient(id){
  const palette = ['#E9A15C, #A85F27','#F0C08A, #7C2A4F','#D98A52, #5E1E3C','#E3B27A, #B23A5B'];
  const g = palette[id % palette.length];
  return `linear-gradient(135deg, ${g})`;
}
renderPills();
renderProducts();
renderShowcase();

/* ============ NEWS RENDER ============ */
document.getElementById('newsGrid').innerHTML = news.map((n,i)=>`
  <div class="news-line">
    <div class="nl-thumb"><img src="${img(n.img,900,560)}" alt="${n.title}" loading="lazy"></div>
    <div class="nl-divider"></div>
    <div class="nl-body">
      <div class="nl-title">${n.title}</div>
      <div class="nl-date">${n.date}</div>
      <div class="nl-text">${n.text}</div>
    </div>
  </div>`).join('');

/* ============ PRODUCT DETAIL + CANVAS PARTICLES ============ */
const pdSection = document.getElementById('product-detail');
let currentProduct = null;

function openProduct(id){
  showPage('catalog');
  currentProduct = products.find(p=>p.id===id);
  pdQty = 1;
  document.getElementById('pdQty').textContent = pdQty;
  document.getElementById('pdPhoto').src = img(currentProduct.img,1000,800);
  document.getElementById('pdName').textContent = currentProduct.name;
  document.getElementById('pdDesc').textContent = currentProduct.desc + '. Готовим и собираем в день заказа.';
  document.getElementById('pdComp').textContent = currentProduct.comp;
  document.getElementById('pdWeight').textContent = currentProduct.weight;
  document.getElementById('pdReady').textContent = currentProduct.ready;
  document.getElementById('pdPrice').textContent = currentProduct.price + ' BYN';
  document.getElementById('pdKbju').innerHTML = `
    <div><b>${currentProduct.kcal}</b>ккал/100г</div>
    <div><b>${currentProduct.prot}</b>белки</div>
    <div><b>${currentProduct.fat}</b>жиры</div>
    <div><b>${currentProduct.carb}</b>углеводы</div>`;
  const sizes = ['0,8 кг','1,2 кг','1,5 кг','2,0 кг'];
  document.getElementById('pdSizes').innerHTML = sizes.map((s,i)=>`<button class="size-opt ${i===1?'active':''}">${s}</button>`).join('');
  document.querySelectorAll('#pdSizes .size-opt').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('#pdSizes .size-opt').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
  }));
  pdSection.classList.add('open');
  pdSection.scrollIntoView({behavior:'smooth',block:'start'});
  startParticles();
}
function closeProduct(){
  pdSection.classList.remove('open');
  stopParticles();
}
let pdQty = 1;
function pdChangeQty(delta){
  pdQty = Math.max(1, pdQty + delta);
  document.getElementById('pdQty').textContent = pdQty;
}
function addProductToCart(){
  addToCart('p'+currentProduct.id, currentProduct.name, currentProduct.price, pdQty);
  pulseCartButton();
}

/* Canvas particle field reacting to mouse */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [], mouse = {x:0,y:0}, rafId = null;

function resizeCanvas(){
  const stage = document.getElementById('pdStage');
  canvas.width = stage.clientWidth;
  canvas.height = stage.clientHeight;
}
function initParticles(){
  resizeCanvas();
  particles = Array.from({length:60}, ()=>({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1.5,
    vx: (Math.random()-0.5)*0.3,
    vy: (Math.random()-0.5)*0.3,
    hue: Math.random()>0.5 ? '233,180,120' : '210,120,150'
  }));
}
function drawParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    const dx = mouse.x - p.x, dy = mouse.y - p.y;
    const dist = Math.sqrt(dx*dx+dy*dy);
    if(dist < 140){
      p.x -= dx*0.01;
      p.y -= dy*0.01;
    }
    p.x += p.vx; p.y += p.vy;
    if(p.x<0||p.x>canvas.width) p.vx*=-1;
    if(p.y<0||p.y>canvas.height) p.vy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = `rgba(${p.hue},0.7)`;
    ctx.fill();
  });
  // connecting lines
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const a=particles[i], b=particles[j];
      const d = Math.hypot(a.x-b.x, a.y-b.y);
      if(d<70){
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${0.08*(1-d/70)})`;
        ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
    }
  }
  rafId = requestAnimationFrame(drawParticles);
}
function startParticles(){
  initParticles();
  cancelAnimationFrame(rafId);
  drawParticles();
}
function stopParticles(){ cancelAnimationFrame(rafId); }
document.getElementById('pdStage').addEventListener('mousemove', e=>{
  const r = canvas.getBoundingClientRect();
  mouse.x = e.clientX - r.left;
  mouse.y = e.clientY - r.top;
});
window.addEventListener('resize', ()=>{ if(pdSection.classList.contains('open')) resizeCanvas(); });

/* ============ CONSTRUCTOR ============ */
const stepDefs = [
  {key:'base', label:'Основа', options:[
    {name:'Ванильный бисквит',add:0,w:0.4},{name:'Шоколадный бисквит',add:5,w:0.4},
    {name:'Медовые коржи',add:8,w:0.45},{name:'Миндальный бисквит',add:14,w:0.4}]},
  {key:'filling', label:'Начинка', options:[
    {name:'Клубника',add:6,w:0.15},{name:'Вишня',add:5,w:0.15},
    {name:'Манго-маракуйя',add:9,w:0.15},{name:'Карамель солёная',add:7,w:0.15}]},
  {key:'cream', label:'Крем', options:[
    {name:'Сливочно-сырный',add:0,w:0.2},{name:'Заварной классический',add:0,w:0.2},
    {name:'Взбитые сливки 33%',add:4,w:0.2},{name:'Ганаш шоколадный',add:8,w:0.2}]},
  {key:'decor', label:'Декор', options:[
    {name:'Свежие ягоды',add:10,w:0.1},{name:'Мастика и фигурки',add:18,w:0.15},
    {name:'Шоколадные подтёки',add:8,w:0.1},{name:'Минимализм / без декора',add:0,w:0}]},
  {key:'size', label:'Размер', options:[
    {name:'1 кг · 8–10 персон',add:0,w:1},{name:'1,5 кг · 12–15 персон',add:22,w:1.5},
    {name:'2 кг · 18–20 персон',add:44,w:2},{name:'3 кг · 25–30 персон',add:80,w:3}]},
];
const basePrice = 45;
let consSelections = [0,0,0,0,0];
let currentStep = 0;

function renderStepsNav(){
  document.getElementById('stepsNav').innerHTML = stepDefs.map((s,i)=>
    `<div class="step-tab ${i===currentStep?'current':(i<currentStep?'done':'')}" data-step="${i}">${i+1}. ${s.label}</div>`).join('');
  document.querySelectorAll('.step-tab').forEach(tab=>{
    tab.addEventListener('click', ()=> goToStep(parseInt(tab.dataset.step)));
  });
}
function goToStep(i){
  if(i<0 || i>=stepDefs.length || i===currentStep) return;
  document.querySelector(`.step-block[data-step="${currentStep}"]`).classList.remove('show');
  currentStep = i;
  document.querySelector(`.step-block[data-step="${currentStep}"]`).classList.add('show');
  renderStepsNav();
  document.getElementById('prevStepBtn').style.visibility = currentStep===0 ? 'hidden':'visible';
  document.getElementById('nextStepBtn').textContent = currentStep===stepDefs.length-1 ? 'Готово' : 'Далее';
}
function renderStepOptions(){
  stepDefs.forEach((s,i)=>{
    const el = document.getElementById('step'+i);
    el.innerHTML = s.options.map((o,oi)=>`
      <div class="opt ${consSelections[i]===oi?'sel':''}" data-step="${i}" data-opt="${oi}">
        <div class="name">${o.name}</div>
        <div class="add">${o.add>0? '+'+o.add+' BYN' : 'без доплаты'}</div>
      </div>`).join('');
  });
  document.querySelectorAll('.opt').forEach(o=>{
    o.addEventListener('click',()=>{
      const step = parseInt(o.dataset.step), opt = parseInt(o.dataset.opt);
      consSelections[step] = opt;
      renderStepOptions();
      updateSummary();
    });
  });
}
function changeStep(dir){
  goToStep(currentStep + dir);
}
function updateSummary(){
  let total = basePrice, weight = 0;
  const rows = stepDefs.map((s,i)=>{
    const o = s.options[consSelections[i]];
    total += o.add; weight += o.w;
    return `<div class="sum-row"><span>${s.label}: ${o.name}</span><span>${o.add>0?'+'+o.add:'—'}</span></div>`;
  }).join('');
  document.getElementById('sumRows').innerHTML =
    `<div class="sum-row"><span>База сборки</span><span>${basePrice} BYN</span></div>` + rows +
    `<div class="sum-row"><span>Итоговый вес</span><span>~${weight.toFixed(1)} кг</span></div>`;
  document.getElementById('sumTotal').textContent = total + ' BYN';
  return total;
}
renderStepsNav();
renderStepOptions();
updateSummary();
document.getElementById('prevStepBtn').style.visibility = 'hidden';

/* ============ CART ============ */
let cart = {}; // key -> {name, price, qty}

function cartCount(){
  return Object.values(cart).reduce((s,i)=>s+i.qty,0);
}
function cartTotal(){
  return Object.values(cart).reduce((s,i)=>s+i.price*i.qty,0);
}
function updateCartBadge(){
  const badge = document.getElementById('cartBadge');
  const n = cartCount();
  badge.textContent = n;
  badge.classList.toggle('hide', n===0);
}
function pulseCartButton(){
  const btn = document.querySelector('.cart-btn');
  btn.style.transform = 'scale(1.15)';
  setTimeout(()=>btn.style.transform = 'scale(1)', 180);
}
function addToCart(key, name, price, qty){
  if(cart[key]) cart[key].qty += qty;
  else cart[key] = {name, price, qty};
  updateCartBadge();
  if(cartModal.classList.contains('open')) renderCart();
}
function changeCartQty(key, delta){
  if(!cart[key]) return;
  cart[key].qty += delta;
  if(cart[key].qty <= 0) delete cart[key];
  updateCartBadge();
  renderCart();
}
function removeCartItem(key){
  delete cart[key];
  updateCartBadge();
  renderCart();
}
function addConstructorToCart(){
  const total = updateSummary();
  const label = stepDefs.map((s,i)=>s.options[consSelections[i]].name).join(', ');
  addToCart('custom-'+Date.now(), 'Торт из конструктора (' + label.slice(0,40) + (label.length>40?'…':'') + ')', total, 1);
  pulseCartButton();
  openCart();
}

const cartModal = document.getElementById('cartModal');
function renderCart(){
  const items = Object.entries(cart);
  const cartItemsEl = document.getElementById('cartItems');
  const cartFooterEl = document.getElementById('cartFooter');
  if(items.length===0){
    cartItemsEl.innerHTML = '<div class="cart-empty">Пока пусто — добавьте что-нибудь вкусное из каталога.</div>';
    cartFooterEl.innerHTML = '';
    return;
  }
  cartItemsEl.innerHTML = items.map(([key,it])=>`
    <div class="cart-row">
      <div style="flex:1;">
        <div class="ci-name">${it.name}</div>
        <div class="ci-price">${it.price} BYN × ${it.qty}</div>
      </div>
      <div class="qty-stepper">
        <button onclick="changeCartQty('${key}',-1)">−</button>
        <span>${it.qty}</span>
        <button onclick="changeCartQty('${key}',1)">+</button>
      </div>
      <button class="cart-remove" onclick="removeCartItem('${key}')">Убрать</button>
    </div>`).join('');
  cartFooterEl.innerHTML = `
    <div class="cart-summary-line" style="font-weight:800;color:var(--plum);font-size:16px;padding-top:12px;border-top:1px solid var(--line);">
      <span>Итого</span><span>${cartTotal()} BYN</span>
    </div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:16px;" onclick="closeCart();openCheckout();">Оформить заказ</button>`;
}
function openCart(){ renderCart(); cartModal.classList.add('open'); }
function closeCart(){ cartModal.classList.remove('open'); }
cartModal.addEventListener('click', e=>{ if(e.target===cartModal) closeCart(); });
updateCartBadge();

/* ============ FAVORITES ============ */
function saveFavorites(){
  try{ localStorage.setItem('bakeryFavorites', JSON.stringify(favorites)); }catch(e){}
}
function updateFavBadge(){
  const badge = document.getElementById('favBadge');
  const btn = document.getElementById('favBtn');
  badge.textContent = favorites.length;
  badge.classList.toggle('hide', favorites.length===0);
  btn.classList.toggle('has-items', favorites.length>0);
}
function toggleFavorite(id){
  const idx = favorites.indexOf(id);
  if(idx===-1) favorites.push(id); else favorites.splice(idx,1);
  saveFavorites();
  updateFavBadge();
  if(favModal.classList.contains('open')) renderFavorites();
}
const favModal = document.getElementById('favModal');
function renderFavorites(){
  const favItemsEl = document.getElementById('favItems');
  const items = products.filter(p=>favorites.includes(p.id));
  if(items.length===0){
    favItemsEl.innerHTML = '<div class="cart-empty">Пока пусто — нажимайте на сердечко у товаров в каталоге.</div>';
    return;
  }
  favItemsEl.innerHTML = items.map(p=>`
    <div class="cart-row">
      <div style="flex:1;">
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">${p.price} BYN</div>
      </div>
      <button class="add-btn" onclick="addToCart('p${p.id}','${p.name.replace(/'/g,"\\'")}',${p.price},1);pulseCartButton();">+</button>
      <button class="cart-remove" onclick="toggleFavorite(${p.id});">Убрать</button>
    </div>`).join('');
}
function openFavorites(){ renderFavorites(); favModal.classList.add('open'); }
function closeFavorites(){ favModal.classList.remove('open'); }
favModal.addEventListener('click', e=>{ if(e.target===favModal) closeFavorites(); });
updateFavBadge();

/* ============ CHECKOUT MODAL ============ */
const checkoutModal = document.getElementById('checkoutModal');

function renderCheckoutSummary(){
  const items = Object.values(cart);
  const el = document.getElementById('checkoutSummary');
  if(items.length===0){
    el.innerHTML = '<div class="cart-empty" style="padding:14px 0;">Корзина пуста</div>';
    return;
  }
  el.innerHTML = items.map(it=>`
    <div class="cart-row">
      <div style="flex:1;">
        <div class="ci-name">${it.name}</div>
        <div class="ci-price">${it.price} BYN × ${it.qty}</div>
      </div>
      <div class="ci-price" style="font-weight:700;color:var(--choc);">${it.price*it.qty} BYN</div>
    </div>`).join('');
}
function openCheckout(){
  if(cartCount()===0){ openCart(); return; }
  renderCheckoutSummary();
  checkoutModal.classList.add('open');
  recalcPrepay();
}
function closeCheckout(){ checkoutModal.classList.remove('open'); }
function selectPay(el){
  document.querySelectorAll('.pay-opt').forEach(p=>p.classList.remove('sel'));
  el.classList.add('sel');
}
function recalcPrepay(){
  const price = cartTotal();
  const isPricey = price > 150;
  const pct = isPricey ? 0.25 : 0.5;
  const prepay = Math.round(price*pct*100)/100;
  document.getElementById('mFull').textContent = price + ' BYN';
  document.getElementById('mPrepayLabel').textContent = `Предоплата (${Math.round(pct*100)}%)`;
  document.getElementById('mPrepay').textContent = prepay + ' BYN';
  document.getElementById('mNow').textContent = prepay + ' BYN';
}
function submitOrder(){
  if(cartCount()===0){ return; }
  closeCheckout();
  cart = {};
  updateCartBadge();
  alert('Заявка принята! Мы свяжемся с вами для подтверждения и отправим ссылку на оплату предоплаты.');
}
checkoutModal.addEventListener('click', e=>{ if(e.target===checkoutModal) closeCheckout(); });
