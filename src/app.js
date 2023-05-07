'use strict';
import { Button } from './components/button.js';
import { Image } from './components/image.js';
import { Title } from './components/title.js';
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
