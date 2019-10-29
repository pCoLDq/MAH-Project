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
            <div class="mask-full">
                <a class="link" href=${link}>
                    <img class="preview-full" src=${preview} />
                </a>
            </div>
            <style>
                .mask-full {
                    width:570px;
                    height:351px;
                }
                .preview-full {
                    width:100%;
                    height:100%;
                    border:2px solid;
                }
                .card-full { margin-top: 40px; }
                .mask-full:hover { opacity: 0.80; }
                .link {
                    text-decoration: none;
                    color: black;
                }
                .decsription {
                    font-family: sans-serif;
                    font-size: 15px;
                    margin: 5px;
                }
                .title {
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 23px;
                }
                .category {
                    color: #9B9B9B;
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 15px;
                    position: relative;
                    margin-top: 20px;
                    margin-left: 10px;
                }
                .category::before {
                    margin-top:2px;
                    background-color: #59a66b;
                    content: '';
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-right: .3em;
                    margin-bottom: 1px;
                }
                .article-about {
                    width:600px;
                    height:100px;
                }
                .article-about .title {
                    margin-bottom:13px;
                    margin-left:5px;
                    width: 550px;
                }
                .article-about .decsription { 
                    margin-left:5px;
                    width: 560px; 
                }
            </style>
            <div class="article-about"> 
                  <a class="link" href=${link}><h3 class="title">${title}</h3></a>
                  <p class="decsription">${description}<a class="link" href=${link}> читать дальше...</a></p>
                  <p class="category" >${category}</p>
                </div>
            </div>`
                    : html`
            <div class="card" >
            <div class="mask">
                <a href=${link}>
                    <img class="preview" src=${preview} />
                </a>
            </div>
            <style>
                .mask { 
                    width:270px;
                    height:145px; 
                }
                .mask:hover { opacity: 0.80; }
                .link {
                    text-decoration: none;
                    color: black;
                }
                .preview {
                    width:100%;
                    height:100%;
                    border:1px solid;
                }
                .title {
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 16px;
                    margin-top: 10px;
                    margin-bottom: 9px;
                    padding: 6px;
                }
                .category {
                    color: #9B9B9B;
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 13px;    
                    margin-left: 10px;
                    position: relative;
                    margin-top: 1px;
                }
                .category::before {
                    background-color: #59a66b;
                    content: '';
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-right: .3em;
                }
                .article-about {
                    width: 270px;
                    height: 110px;
                }
            </style>
            <div class="article-about"> 
                  <a class="link" href=${link}><h3 class="title" >${title}</h3></a>
                  <p class="category" >${category}</p>
                </div>
            </div>`}
        `;
        }
    }
);