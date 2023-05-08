import './button.scss';

export class Button {
  create() {
    const button = document.createElement('button');

    button.textContent = 'Clique em mim';

    button.classList.add('btn');

    document.body.insertAdjacentElement('afterbegin', button);
  }
}
