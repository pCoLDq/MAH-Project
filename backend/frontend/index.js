import './components/article-card.js'

var articles = {
  'full': [{
    title: 'Летевший из Южно-Сахалинска в Москву кот сутки провел в небе',
    preview: 'images/previews/flycat.png',
    full: true,
    category: 'Общество',
    link: 'https://www.kp.ru/daily/27047.7/4112237/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Настоящий переполох устроил кот, который летел рейсом «Москва - Южно-Сахалинск». Получая багаж, хозяйка Мурзика ахнула. Переноска, в которой ее любимый питомец путешествовал в багажном отделении, была пуста.'
  },],
  'not-full-1': [{
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
  },],
  'not-full-2': [{
    title: 'Англичанка нашла в саду кусок ядерного бомбардировщика',
    preview: 'images/previews/part_of_plane.png',
    full: false,
    category: 'Общество',
    link: 'https://www.vesti.ru/doc.html?id=3204637&utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Англичанка из городка Брейлс обнаружила у себя в саду неизвестный желтый предмет, который появился там сразу после пролета над населенным пунктом, боевого самолета, сообщает агентство "Интерфакс".'
  },
  {
    title: '«В конгрессе США предложили новые санкции против «Северного потока-2»',
    preview: 'images/previews/usa_sanctions.png',
    full: false,
    category: 'Политика',
    link: 'https://utro.ru/politics/2019/10/29/1422484.shtml?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Республиканец Энди Барр потребовал от конгрессменов США наказать Россию за "Северный поток – 2". Политик предложил ввести ограничения в отношении трубоукладочных судов и иностранных субъектов, играющих ключевую роль в строительстве этого проекта.'
  },],
  'not-full-3': [{
    title: '«Мы больше не можем скрывать этот трансфер». «Мерида» сообщила о переходе Ибрагимовича',
    preview: 'images/previews/zlatan_transfer.png',
    full: false,
    category: 'Спорт',
    link: 'https://news.sportbox.ru/Vidy_sporta/Futbol/Evropejskie_chempionaty/Ispaniya/spbnews_NI1101814_My_bolshe_ne_mozhem_skryvat_etot_transfer_Merida_soobshhila_o_perehode_Ibragimovicha?utm_source=yxsport&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fsport',
    description: 'Испанский клуб «Мерида» сообщил о подписании контракта с нападающим «Лос-Анджелес Гэлакси» Златаном Ибрагимовичем. Официальная страница клуба в Twitter приложила к посту скриншот страницы из «Википедии», где швед указан в качестве игрока «Мериды».'
  },
  {
    title: 'Зрители не увидели половину профинансированных Минкультом фильмов',
    preview: 'images/previews/min_cult_films.png',
    full: false,
    category: 'Культура',
    link: 'https://www.kinopoisk.ru/media/news/3428380/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Согласно информации, опубликованной в базе данных продажи кинобилетов (ЕАИС), больше половины фильмов, получивших финансирование от государства, остались практически без зрителя. По подсчетам экспертов, из 155 картин, поддержанных министерством культуры, 80 увидело меньше 10 тысяч человек.'
  },],
}




class MainPage extends LitElement {
  static get properties() {
    return {
      category: { type: String },
    }
  }
  constructor() {
    super()
    window.addEventListener('hashchange', () => {
      this.category = window.location.hash
    })
  }
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
        <a id="logo" href="http://localhost:5000/frontend/category/#/all" ><img id="logo-img" src="images/icons/logo.png" /></a>
        <div class="categories">
          <a href="http://localhost:5000/frontend/"><img id='all' src="images/icons/all.png"/><h5>Все</h5>
          </a>
          ${[
        { category: 'culture', text: 'Культура' },
        { category: 'social', text: 'Общество' },
        { category: 'politic', text: 'Политика' },
        { category: 'sport', text: 'Спорт' },
        { category: 'science', text: 'Наука' },
        { category: 'tech', text: 'Технологии' },
      ].map(x => html`
          <a href="http://localhost:5000/frontend/category/#/${x.category}">
          <img id=${x.category} src="images/icons/${x.category + ".png"}"/><h5>${x.text}</h5>
          </a>
          `)}
        </div>
           <a class="rup-buttons" href="https://vk.com/without_nothing">Связаться с нами</a>
           <a class="rup-buttons" href="https://www.sberbank.ru/ru/person">Поддержать нас</a>
        <a href="http://localhost:5000/frontend/"><img id="wd" src="images/icons/window_decor.png" /></a>
      </div>
      <div class="news-block">
        ${this.category === '' ? html`
        <div class="full">
          ${articles['full'].map(x => html`
　         <article-card .article=${x}></article-card>
          `)}
        </div>
        <div class="not-full-1">
          ${articles['not-full-1'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="not-full-2">
          ${articles['not-full-2'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="not-full-3">
          ${articles['not-full-3'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>` : ''}
       
       ${this.category === 'culture' ? html`
        <div class="category-page-block1">
          ${categories['Культура'].map(x => html`
　         <article-card .article=${x}></article-card>
          `)}
        </div>
        <div class="category-page-block2">
          ${categories['Культура'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="category-page-block3">
          ${categories['Культура'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="category-page-block4">
          ${categories['Культура'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>` : ''}
      </div>
      <link rel="stylesheet" href="index.css" />
    `;
  }
}
customElements.define("main-page", MainPage);