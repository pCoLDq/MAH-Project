import { LitElement, html } from 'lit-element'
import './components/article-card'
import './components/article-card-2'

var categories = [
  { category: 'all', text: 'Все' },
  { category: 'culture', text: 'Культура' },
  { category: 'social', text: 'Общество' },
  { category: 'politic', text: 'Политика' },
  { category: 'sport', text: 'Спорт' },
  { category: 'science', text: 'Наука' },
  { category: 'tech', text: 'Технологии' },
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
      news: { type: Object },
    }
  }
  async getData() {
    const category = window.location.hash.replace('#category/', '');
    this.news = await get("category/" + category + '/');
    this.category = category;
    this.requestUpdate()
    console.log('32th')
    console.log(this.news)
  }
  constructor() {
    super()
    this.getData()
    console.log('Constructor-1')
    window.addEventListener('hashchange', () => this.getData())
    console.log('Constructor-2')
  }
  render() {
    console.log('Rendering')
    if (!this.news) { return html`` }
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
        ${console.log('66th')}
        ${console.log(this.category)}
        <!-- ! ПУТИ К ПРЕВЬЮШКАМ В БД ХРАНЯТСЯ БЕЗ 'static/', ТАК ЧТО ДОПИСЫВАЙ ЕГО ЧЕРЕЗ format() ИЛИ КОНКАТЕНАЦИЮ ! -->
        ${this.category === 'all' ? html`
        <div class="full">
          ${this.news['full'].map(x => html`
　         <article-card .article=${x}></article-card>
          `)}
        </div>
        <div class="not-full-1">
          ${this.news['not-full-1'].map(x => html`
　              <article-card-2 .article=${x}></article-card-2>`)}
       </div>
       <div class="not-full-2">
          ${this.news['not-full-2'].map(x => html`
　              <article-card-2 .article=${x}></article-card-2> `)}
       </div>
       <div class="not-full-3">
          ${this.news['not-full-3'].map(x => html`
　              <article-card-2 .article=${x}></article-card-2> `)}
       </div>`
        : html`
        <div class="block-1">
          ${this.news['block-1'].map(x => html`
　         <article-card-2 .article=${x}></article-card-2>
          `)}
        </div>
        <div class="block-2">
          ${this.news['block-2'].map(x => html`
　              <article-card-2 .article=${x}></article-card-2> `)}
       </div>
       <div class="block-3">
          ${this.news['block-3'].map(x => html`
　              <article-card-2 .article=${x}></article-card-2> `)}
       </div>
       <div class="block-4">
          ${this.news['block-4'].map(x => html`
　              <article-card-2 .article=${x}></article-card-2> `)}
       </div>
       <div class="block-5">
          ${this.news['block-5'].map(x => html`
　              <article-card-2 .article=${x}></article-card-2> `)}
       </div>`}
      </div>
      <link rel="stylesheet" href="static/index.css" />
    `;
  }
}
customElements.define("main-page", MainPage);