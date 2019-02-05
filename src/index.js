import {setUpAttacks} from './function.js';

let characters = [
  {name: 'Маг', health: 100},
  {name: 'Лучник', health: 80},
  {name: 'Мечник', health: 10}
]

const attacks = setUpAttacks(characters);

attacks[2](10);

console.log(characters);