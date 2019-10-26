class MainPage extends LitElement {
  render() {
    return html`
      <div class="about">
        <a id="premium" href="https://www.sberbank.ru/ru/person">ПРЕМИУМ</a>
        <img src="images/fb.png" />
        <img src="images/inst.png" />
        <img src="images/twitter.png" />
        <img src="images/youtube.png" />
      </div>
      <div class="head">
        <img id="logo" src="images/logo.jpg" />
        <a id="contact" href="https://vk.com/without_nothing"
          >Связаться с нами</a
        >
        <a id="support" href="https://www.sberbank.ru/ru/person"
          >Поддержать нас</a
        >
        <img id="wd" src="images/window_decor.png" />
      </div>
      <style>
        .about {
          background-color: #58ab6d;
          padding: 20px;
          color: white;
          font-family: sans-serif;
          font-weight: bold;
          font-size: 25px;
          letter-spacing: 1px;
          top: 0;
          bottom: 0;
          writing-mode: vertical-lr;
          position: fixed;
          transform: scale(-1);
          justify-content: end;
          margin-bottom: 13px;
        }
        .about #premium:hover {
          padding: 8px;
          color: #58ab6d;
          background-color: white;
          border-radius: 5px;
        }
        .about > a {
          color: white;
          transition: background-color 300ms;
          text-decoration: none;
        }
        .about > img {
          width: 40px;
          height: 40px;
          margin-bottom: 13px;
          transform: rotate(-180deg);
        }
        .about > img:first-of-type {
          margin-top: 30px;
        }
        .head #logo {
          width: 200px;
          height: 80px;
          margin-left: 125px;
          margin-top: 20px;
          margin-right: auto;
        }
        .head #wd {
          position: absolute;
          width: 40px;
          height: 40px;
          margin-left: 150px;
          margin-top: 70px;
          right: 170px;
          opacity: 0.2;
        }
        .head {
          display: flex;
          align-items: center;
          padding-right: 200px;
        }
        .head > a {
          text-decoration: none;
          padding: 10px;
          margin: 20px;
          margin-right: 10px;
          color: #58ab6d;
          font-family: sans-serif;
          font-weight: bold;
          font-size: 20px;
          letter-spacing: 1px;
          transition: background-color 300ms;
        }
        .head #support:hover {
          color: white;
          background-color: #58ab6d;
          border-radius: 5px;
        }
        .head #contact:hover {
          color: white;
          background-color: #58ab6d;
          border-radius: 5px;
        }
      </style>
    `;
  }
}
customElements.define("main-page", MainPage);
