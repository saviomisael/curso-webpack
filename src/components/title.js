import './title.css';

export class Title {
  create(title) {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<h1 class="main-title">${title}</h1>`,
    );
  }
}
