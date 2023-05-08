import Bob from '../assets/bob-esponja.jpg';
import './image.css';

export class Image {
  insertBobImage() {
    const img = document.createElement('img');

    img.src = Bob;

    img.classList.add('image');

    document.body.insertAdjacentElement('beforeend', img);
  }
}
