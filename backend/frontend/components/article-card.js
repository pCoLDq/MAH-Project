import { LitElement, html } from 'lit-element'

customElements.define(
    "article-card",
    class extends LitElement {
        static get properties() {
            return {
                article: { type: Object },
            };
        }
        render() {
            const { title, preview, category, description, link, full } = this.article;
            return html`
            <a class="link" href=${link}>
            <link rel="stylesheet" href="static/components/article-card.css" />
          ${full
                    ? html`
            <div class="card-full" >
                    <img class="preview-full" src=${preview} />
            <div class="article-about"> 
                  <h3 class="title">${title}</h3>
                  <p class="decsription">${description}</p>
                  <p class="category" >${category}</p>
                </div>
            </div>`
                    : html`
            <div class="card" >
                <a href=${link}>
                    <img class="preview" src=${preview} />
                </a>
            <div class="article-about"> 
                  <h3 class="title" >${title}</h3>
                  <p class="category" >${category}</p>
                </div>
            </div>`}
            </a>
        `;
        }
    }
);