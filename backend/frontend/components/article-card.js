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
          ${full
                    ? html`
            <div class="card-full" >
                <a class="link" href=${link}>
                    <img class="preview-full" src=${preview} />
                </a>
            <link rel="stylesheet" href="components/article-card.css" />
            <div class="article-about"> 
                  <a class="link" href=${link}><h3 class="title">${title}</h3></a>
                  <p class="decsription">${description}<a class="link" href=${link}> читать дальше...</a></p>
                  <p class="category" >${category}</p>
                </div>
            </div>`
                    : html`
            <div class="card" >
                <a href=${link}>
                    <img class="preview" src=${preview} />
                </a>
            <link rel="stylesheet" href="components/article-card.css" />
            <div class="article-about"> 
                  <a class="link" href=${link}><h3 class="title" >${title}</h3></a>
                  <p class="category" >${category}</p>
                </div>
            </div>`}
        `;
        }
    }
);