import { LitElement, html } from 'lit-element'
import './components/article-card'

var articles = {
  'full': [{
    title: '«Мы больше не можем скрывать этот трансфер». «Мерида» сообщила о переходе Ибрагимовича',
    preview: 'static/images/previews/zlatan_transfer.png',
    full: true,
    category: 'Спорт',
    link: 'https://news.sportbox.ru/Vidy_sporta/Futbol/Evropejskie_chempionaty/Ispaniya/spbnews_NI1101814_My_bolshe_ne_mozhem_skryvat_etot_transfer_Merida_soobshhila_o_perehode_Ibragimovicha?utm_source=yxsport&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fsport',
    description: 'Испанский клуб «Мерида» сообщил о подписании контракта с нападающим «Лос-Анджелес Гэлакси» Златаном Ибрагимовичем. Официальная страница клуба в Twitter приложила к посту скриншот страницы из «Википедии», где швед указан в качестве игрока «Мериды».'
  },],
  'not-full-1': [{
    title: 'В Китае приняли первый закон о шифровании данных',
    preview: 'static/images/previews/chinaencrypt.png',
    full: false,
    category: 'Технологии',
    link: 'https://www.kp.ru/daily/27047.7/4112237/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Постоянный комитет Всекитайского собрания народных представителей одобрил первый в истории страны закон о криптографии, сообщает агентство «Синьхуа». Он вступит в силу 1 января 2020 года.'
  },
  {
    title: '«Убийца» Xiaomi всё ближе. За год Realme увеличила продажи смартфонов в шесть раз',
    preview: 'static/images/previews/readmesells.png',
    full: false,
    category: 'Технологии',
    link: 'https://www.ixbt.com/news/2019/10/25/ubijca-xiaomi-vsjo-blizhe-za-god-realme-uvelichila-prodazhi-smartfonov-v-shest-raz.html?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Аналитики Counterpoint оценили рынок смартфонов Индии по итогам третьего квартала текущего года. За отчётный период в стране было продано рекордные 49 млн аппаратов'
  },],
  'not-full-2': [{
    title: 'Англичанка нашла в саду кусок ядерного бомбардировщика',
    preview: 'static/images/previews/part_of_plane.png',
    full: false,
    category: 'Общество',
    link: 'https://www.vesti.ru/doc.html?id=3204637&utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Англичанка из городка Брейлс обнаружила у себя в саду неизвестный желтый предмет, который появился там сразу после пролета над населенным пунктом, боевого самолета, сообщает агентство "Интерфакс".'
  },
  {
    title: '«В конгрессе США предложили новые санкции против «Северного потока-2»',
    preview: 'static/images/previews/usa_sanctions.png',
    full: false,
    category: 'Политика',
    link: 'https://utro.ru/politics/2019/10/29/1422484.shtml?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Республиканец Энди Барр потребовал от конгрессменов США наказать Россию за "Северный поток – 2". Политик предложил ввести ограничения в отношении трубоукладочных судов и иностранных субъектов, играющих ключевую роль в строительстве этого проекта.'
  },],
  'not-full-3': [{
    title: 'Летевший из Южно-Сахалинска в Москву кот сутки провел в небе',
    preview: 'static/images/previews/flycat.png',
    full: false,
    category: 'Общество',
    link: 'https://www.kp.ru/daily/27047.7/4112237/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Настоящий переполох устроил кот, который летел рейсом «Москва - Южно-Сахалинск». Получая багаж, хозяйка Мурзика ахнула. Переноска, в которой ее любимый питомец путешествовал в багажном отделении, была пуста.'
  },
  {
    title: 'Зрители не увидели половину профинансированных Минкультом фильмов',
    preview: 'static/images/previews/min_cult_films.png',
    full: false,
    category: 'Культура',
    link: 'https://www.kinopoisk.ru/media/news/3428380/?utm_source=yxnews&utm_medium=desktop&utm_referrer=https%3A%2F%2Fyandex.ru%2Fnews',
    description: 'Согласно информации, опубликованной в базе данных продажи кинобилетов (ЕАИС), больше половины фильмов, получивших финансирование от государства, остались практически без зрителя. По подсчетам экспертов, из 155 картин, поддержанных министерством культуры, 80 увидело меньше 10 тысяч человек.'
  },],
}
var categories = [
  { category: 'all', text: 'Все', color: '#9B9B9B' },
  { category: 'culture', text: 'Культура', color: '#FC5B5E' },
  { category: 'social', text: 'Общество', color: '#FDAE55' },
  { category: 'politic', text: 'Политика', color: '#49BF98' },
  { category: 'sport', text: 'Спорт', color: '#4A4D77' },
  { category: 'science', text: 'Наука', color: '#27B2CD' },
  { category: 'tech', text: 'Технологии', color: '#282828' },
]

const get = async url => {
  let response = await fetch(url);
  let news = await response.json();
  return news
}

class MainPage extends LitElement {
  static get properties() {
    return {
      category: { type: String },
      news: { type: Array },
    }
  }
  constructor() {
    super()
    this.getData()
    window.addEventListener('hashchange', this.getData)
  }
  async getData() {
    this.category = window.location.hash.replace('#category/', '');
    this.news = await get("category/" + this.category + '/')
    console.log(this.news)
  }
  render() {
    if (!this.news) return html``
    return html`
      <div class="about">
        <a id="premium" href="https://vk.com/without_nothing">Эльвис  Исаев</a>
        <a href="https://www.facebook.com/" ><img id="first" src="static/images/icons/fb.png" /></a>
        <a href="https://www.instagram.com/" ><img src="static/images/icons/inst.png" /></a>
        <a href="https://twitter.com/" ><img src="static/images/icons/twitter.png" /></a>
        <a href="https://www.youtube.com/" ><img src="static/images/icons/youtube.png" /></a>
      </div>
      <div class="head">
        <a id="logo" href="http://localhost:8000/#category/all" ><img id="logo-img" src="static/images/icons/logo.png" /></a>
        <div class="categories">
          ${categories.map(x => html`
          <a href="http://localhost:8000/#category/${x.category}">
          <img id=${x.category} src="static/images/icons/${x.category + ".png"}"/><h5>${x.text}</h5>
          </a>
          `)}
        </div>
           <a class="rup-buttons" href="https://vk.com/without_nothing">Связаться с нами</a>
           <a class="rup-buttons" href="https://www.sberbank.ru/ru/person">Поддержать нас</a>
        <a href="http://localhost:8000/#category/all"><img id="wd" src="static/images/icons/window_decor.png" /></a>
      </div>
      <div class="news-block">
        ${console.log(this.category)}
        <!-- ! ПУТИ К ПРЕВЬЮШКАМ В БД ХРАНЯТСЯ БЕЗ 'static/', ТАК ЧТО ДОПИСЫВАЙ ЕГО ЧЕРЕЗ format() ИЛИ КОНКАТЕНАЦИЮ ! -->
        ${this.category == 'all' ? html`
        <div class="full">
          ${this.news['full'].map(x => html`
　         <article-card .article=${x}></article-card>
          `)}
        </div>
        <div class="not-full-1">
          ${this.news['not-full-1'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="not-full-2">
          ${this.news['not-full-2'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="not-full-3">
          ${this.news['not-full-3'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>`
        : html`
        <div class="block-1">
          ${this.news['block-1'].map(x => html`
　         <article-card .article=${x}></article-card>
          `)}
        </div>
        <div class="block-2">
          ${this.news['block-2'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="block-3">
          ${this.news['block-3'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="block-4">
          ${this.news['block-4'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>
       <div class="block-5">
          ${this.news['block-5'].map(x => html`
　              <article-card .article=${x}></article-card> `)}
       </div>`}
      </div>
      <link rel="stylesheet" href="static/index.css" />
    `;
  }
}
customElements.define("main-page", MainPage);