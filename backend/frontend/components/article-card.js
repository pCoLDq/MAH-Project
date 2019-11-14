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
            <div class="card-full" >
                    <img class="preview-full" src="static/${preview}" />
                <div class="article-about"> 
                  <h3 class="title">${title}</h3>
                  <p class="decsription">${description}</p>
                  <p class="category" data-category=${category}>${category}</p>
                </div>
            </div>
            </a>
        `;
        }
    }
);