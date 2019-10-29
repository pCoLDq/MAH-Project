import './components/article-card.js'
class MainPage extends LitElement {
  render() {
    return html`
      <div class="about">
        <a id="premium" href="https://www.sberbank.ru/ru/person">ПРЕМИУМ</a>
        <a href="https://www.facebook.com/" ><img id="first" src="images/icons/fb.png" /></a>
        <a href="https://www.instagram.com/" ><img src="images/icons/inst.png" /></a>
        <a href="https://twitter.com/" ><img src="images/icons/twitter.png" /></a>
        <a href="https://www.youtube.com/" ><img src="images/icons/youtube.png" /></a>
      </div>
      <div class="head">
        <a id="logo" href="http://localhost:5000/frontend/" ><img id="logo-img" src="images/icons/logo.png" /></a>
        <div class="categories">
          <a href="http://localhost:5000/frontend/" ><img id="all" src="images/icons/all.png" /><h5>Все</h5></a>
          <a href="http://localhost:5000/frontend/" ><img id="culture" src="images/icons/culture.png" /><h5>Культура</h5></a>
          <a href="http://localhost:5000/frontend/" ><img id="social" src="images/icons/social.png" /><h5>Общество</h5></a>
          <a href="http://localhost:5000/frontend/" ><img id="politic" src="images/icons/globus.png" /><h5>Политика</h5></a>
          <a href="http://localhost:5000/frontend/" ><img id="sport" src="images/icons/sport.png" /><h5>Спорт</h5></a>
          <a href="http://localhost:5000/frontend/" ><img id="science" src="images/icons/science.png" /><h5>Наука</h5></a>
          <a href="http://localhost:5000/frontend/" ><img id="tech" src="images/icons/tech.png" /><h5>Технологии</h5></a>
        </div>
           <a class="rup-buttons" id="contact" href="https://vk.com/without_nothing"
             >Связаться с нами</a
           >
           <a class="rup-buttons" id="support" href="https://www.sberbank.ru/ru/person"
             >Поддержать нас</a
           >
        <a href="http://localhost:5000/frontend/"><img id="wd" src="images/icons/window_decor.png" /></a>
      </div>
      <div class="news-block">
        <div class="full">
        ${[
        {
          title: 'Летевший из Южно-Сахалинска в Москву кот сутки провел в небе',
          preview: 'images/previews/flycat.png',
          full: true,
          category: 'Общество',
          link: 'https://www.kp.ru/daily/27047.7/4112237/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
          description: 'Настоящий переполох устроил кот, который летел рейсом «Москва - Южно-Сахалинск». Получая багаж, хозяйка Мурзика ахнула. Переноска, в которой ее любимый питомец путешествовал в багажном отделении, была пуста.'
        },].map(x => html`
　       <article-card .article=${x}></article-card>
       `)}
        </div>
         <div class="not-full-1">
          ${[{
        title: 'В Китае приняли первый закон о шифровании данных',
        preview: 'images/previews/chinaencrypt.png',
        full: false,
        category: 'Технологии',
        link: 'https://www.kp.ru/daily/27047.7/4112237/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
        description: 'Постоянный комитет Всекитайского собрания народных представителей одобрил первый в истории страны закон о криптографии, сообщает агентство «Синьхуа». Он вступит в силу 1 января 2020 года.'
      },
      {
        title: '«Убийца» Xiaomi всё ближе. За год Realme увеличила продажи смартфонов в шесть раз',
        preview: 'images/previews/readmesells.png',
        full: false,
        category: 'Технологии',
        link: 'https://www.ixbt.com/news/2019/10/25/ubijca-xiaomi-vsjo-blizhe-za-god-realme-uvelichila-prodazhi-smartfonov-v-shest-raz.html?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
        description: 'Аналитики Counterpoint оценили рынок смартфонов Индии по итогам третьего квартала текущего года. За отчётный период в стране было продано рекордные 49 млн аппаратов'
      },
      ].map(x => html`
　          <article-card .article=${x}></article-card>
         `)}
       </div>
       <div class="not-full-2">
       ${[{
        title: 'В Китае приняли первый закон о шифровании данных',
        preview: 'images/previews/chinaencrypt.png',
        full: false,
        category: 'Технологии',
        link: 'https://www.kp.ru/daily/27047.7/4112237/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
        description: 'Постоянный комитет Всекитайского собрания народных представителей одобрил первый в истории страны закон о криптографии, сообщает агентство «Синьхуа». Он вступит в силу 1 января 2020 года.'
      },
      {
        title: '«Убийца» Xiaomi всё ближе. За год Realme увеличила продажи смартфонов в шесть раз',
        preview: 'images/previews/readmesells.png',
        full: false,
        category: 'Технологии',
        link: 'https://www.ixbt.com/news/2019/10/25/ubijca-xiaomi-vsjo-blizhe-za-god-realme-uvelichila-prodazhi-smartfonov-v-shest-raz.html?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
        description: 'Аналитики Counterpoint оценили рынок смартфонов Индии по итогам третьего квартала текущего года. За отчётный период в стране было продано рекордные 49 млн аппаратов'
      },
      ].map(x => html`
　          <article-card .article=${x}></article-card>
         `)}
       </div>
       <div class="not-full-3">
       ${[{
        title: 'В Китае приняли первый закон о шифровании данных',
        preview: 'images/previews/chinaencrypt.png',
        full: false,
        category: 'Технологии',
        link: 'https://www.kp.ru/daily/27047.7/4112237/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
        description: 'Постоянный комитет Всекитайского собрания народных представителей одобрил первый в истории страны закон о криптографии, сообщает агентство «Синьхуа». Он вступит в силу 1 января 2020 года.'
      },
      {
        title: '«Убийца» Xiaomi всё ближе. За год Realme увеличила продажи смартфонов в шесть раз',
        preview: 'images/previews/readmesells.png',
        full: false,
        category: 'Технологии',
        link: 'https://www.ixbt.com/news/2019/10/25/ubijca-xiaomi-vsjo-blizhe-za-god-realme-uvelichila-prodazhi-smartfonov-v-shest-raz.html?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
        description: 'Аналитики Counterpoint оценили рынок смартфонов Индии по итогам третьего квартала текущего года. За отчётный период в стране было продано рекордные 49 млн аппаратов'
      },
      ].map(x => html`
　          <article-card .article=${x}></article-card>
         `)}
       </div>
      </div>
      <link rel="stylesheet" href="index.css" />
    `;
  }
}
customElements.define("main-page", MainPage);