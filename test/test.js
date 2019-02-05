import { setUpAttacks } from '../src/function.js';

test('Атака при наличии бонуса', () => {

  let characters = [
    {name: 'Маг', health: 100},
    {name: 'Лучник', health: 80},
    {name: 'Мечник', health: 10}
  ];
      
  const expected = [
    {name: 'Маг', health: 97},
    {name: 'Лучник', health: 77},
    {name: 'Мечник', health: 6}
  ];
 
  const received =setUpAttacks(characters, true)[2](10);
  
  expect(received).toEqual(expected);
});

test('Атака без бонуса', () => {

  let characters = [
    {name: 'Маг', health: 100},
    {name: 'Лучник', health: 80},
    {name: 'Мечник', health: 10}
  ];
      
  const expected = [
    {name: 'Маг', health: 100},
    {name: 'Лучник', health: 80},
    {name: 'Мечник', health: 0}
  ];
 
  const received =setUpAttacks(characters, false)[2](10);
  
  expect(received).toEqual(expected);
});