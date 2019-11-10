import { LitElement, html } from 'lit-element'

customElements.define(
    "article-card-2",
    class extends LitElement {
        static get properties() {
            return {
                article: { type: Object },
            };
        }
        render() {
            const { title, preview, category, link } = this.article;
            return html`
            <link rel="stylesheet" href="static/components/article-card-2.css" />
            <div class="card" >
                <a href=${link}>
                    <img class="preview" src="static/${preview}" />
                </a>
            <div class="article-about"> 
                  <h3 class="title" >${title}</h3>
                  <p class="category" >${category}</p>
                </div>
            </div>
        `;
        }
    }
);