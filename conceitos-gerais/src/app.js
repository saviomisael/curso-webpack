'use strict';
import { Button } from './components/button.js';
import { Image } from './components/image.js';
import { Title } from './components/title.js';
import print from './msg.js';
import { saudacao } from './saudacao.js';
import './styles/warning.css';
import warning from './templates/warning.html';

saudacao('Savio');
new Title().create('Titulo legal');
new Image().insertBobImage();
new Button().create();

const obj = { a: 1, b: 2, c: 3 };

let { a, ...rest } = obj;

console.log(a, rest);

document.body.insertAdjacentHTML('afterbegin', warning);

console.log(process.env.API_KEY);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  console.log('production');
} else {
  console.log('development');
}

console.log(_.difference([1, 2, 3], [4, 5, 6]));

if (module.hot) {
  module.hot.accept('./msg.js', () => {
    console.log('O modulo de msg atualizou!');
    print();
  });
}
