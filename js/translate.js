window.addEventListener("DOMContentLoaded", () => {
  const textLang = [{
      "ru": {
        "nav": [
          "О компании",
          "Услуги",
          "Карьера",
          "Контакты"
        ]
      }
    },
    {
      "en": {
        "nav": [
          "About company",
          "Services",
          "Career",
          "Contacts"
        ]
      }
    }
  ]

  const chooseLang = document.querySelector('.choose_lang');
  const langsCont = document.querySelector('.langs_cont');
  const langsCountItem = document.querySelectorAll('.langs_count-item');
  const menuLink = document.querySelectorAll('.nav ul li a')

  function curLang() {
    for (let i = 0; i < langsCountItem.length; i++) {
      langsCountItem[i].classList.remove('current_lang')
      if (localStorage.getItem('lang') == langsCountItem[i].dataset.lang) {
        console.log('rus')
        langsCountItem[i].classList.add('current_lang')
        chooseLang.innerHTML = `
    <img src="images/${langsCountItem[i].dataset.langFlag}.png" alt="${langsCountItem[i].dataset.langFlag}">
    ${langsCountItem[i].dataset.lang}
    `;
      }
    }
  }
  curLang();
  langsCountItem.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      for (let i = 0; i < langsCountItem.length; i++) {
        langsCountItem[i].classList.remove('current_lang')
      }
      item.classList.add('current_lang')
      if (item.classList.contains('current_lang')) {
        chooseLang.innerHTML = `
        <img src="images/${item.dataset.langFlag}.png" alt="${item.dataset.langFlag}">
        ${item.dataset.lang}
        `
      }
      chooseLang.classList.remove('active');
      langsCont.classList.remove('active');
      chooseLang.dataset.lang = item.dataset.lang;
      localStorage.setItem('lang', item.dataset.lang);
      window.location.reload();
    })
  })

  function getPageName(url) {
    return url.split('/').pop().split('.')[0];
  }

  let pageName = getPageName(window.location.href);

  console.log(pageName)
  textLang.forEach(item=>{
    console.log(item)
    if (localStorage.getItem('lang') == 'ru') {
      for(let i = 0; i < menuLink.length; i++){
        menuLink[i].innerHTML = item.ru.nav[i]
      }
    }
    if (localStorage.getItem('lang') == 'en') {
      for(let i = 0; i < menuLink.length; i++){
        menuLink[i].innerHTML = item.en.nav[i]
      }
    }
  })

  window.addEventListener('storage', function (event) {
    if (localStorage.getItem('lang') == 'ru') {
      console.log('rus')
      curLang();
    }
    if (localStorage.getItem('lang') == 'en') {
      console.log('engl')
      curLang();
    }
  })
});