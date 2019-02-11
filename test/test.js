import setUpAttacks from '../src/function';

// Тесты для первого варианта решения
test('Атака при наличии бонуса', () => {
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

test('Атака без бонуса', () => {
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

test('Атака при наличии бонуса на массив с выбывшим персонажем', () => {
  const characters = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: -80 },
    { name: 'Мечник', health: 10 },
  ];

  const expected = [
    { name: 'Маг', health: 95 },
    { name: 'Лучник', health: -80 },
    { name: 'Мечник', health: 5 },
  ];

  const received = setUpAttacks(characters, true)[2](10);

  expect(received).toEqual(expected);
});

test('Атака без бонуса на массив с выбывшим персонажем', () => {
  const characters = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: -80 },
    { name: 'Мечник', health: 10 },
  ];

  const expected = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: -80 },
    { name: 'Мечник', health: 5 },
  ];

  const received = setUpAttacks(characters, false)[2](5);

  expect(received).toEqual(expected);
});

test('Атака при наличии бонуса на выбывшего персонажа', () => {
  const characters = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: -80 },
    { name: 'Мечник', health: 10 },
  ];

  const expected = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: -80 },
    { name: 'Мечник', health: 10 },
  ];

  const received = setUpAttacks(characters, true)[1](10);

  expect(received).toEqual(expected);
});

test('Атака без бонусана на выбывшего персонажа', () => {
  const characters = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: -80 },
    { name: 'Мечник', health: 10 },
  ];

  const expected = [
    { name: 'Маг', health: 100 },
    { name: 'Лучник', health: -80 },
    { name: 'Мечник', health: 10 },
  ];

  const received = setUpAttacks(characters, false)[1](10);

  expect(received).toEqual(expected);
}); 

// Тесты для второго варианта решения
/* test('Атака при наличии бонуса без выбывания', () => {
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
 */