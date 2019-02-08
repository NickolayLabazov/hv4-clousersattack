import { setUpAttacks } from '../src/function.js';

test('Атака при наличии бонуса без выбывания', () => {
  const characters = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];

  const expected = [
    { name: 'Маг', health: 97 },
    { name: 'Лучник', health: 77 },
    { name: 'Мечник', health: 6 },
  ];

  const received = setUpAttacks(characters, true)[2](10);

  expect(received).toEqual(expected);
});

test('Атака при наличии бонуса с выбыванием', () => {
  const characters = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];

  const expected = [
    { name: 'Маг', health: 90 },
    { name: 'Лучник', health: 70 },
  ];

  const received = setUpAttacks(characters, true)[2](30);

  expect(received).toEqual(expected);
});

test('Атака без бонуса без выбывания', () => {
  const characters = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];

  const expected = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 5 },
  ];

  const received = setUpAttacks(characters, false)[2](5);

  expect(received).toEqual(expected);
});

test('Атака без бонуса с выбыванием', () => {
  const characters = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
    { name: 'Мечник', health: 10 },
  ];

  const expected = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: 80 },
  ];

  const received = setUpAttacks(characters, false)[2](10);

  expect(received).toEqual(expected);
});
