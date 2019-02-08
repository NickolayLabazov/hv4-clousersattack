export const setUpAttacks = (items, shield = true) => {
  const result = [];

  function func(i) {
    return function (harm) {
      items[i].health = items[i].health - harm;
      items = items.filter(elem => elem.health > 0);
      return items;
    };
  }

  function funcWithBonus(i) {
    return function (harm) {
      const harmInd = (harm - harm % 3) / 3;
      for (const element of items) {
        element.health -= harmInd;
      }
      items[i].health = items[i].health - harm % 3;
      items = items.filter(elem => elem.health > 0);
      return items;
    };
  }

  if (!shield) {
    for (let i = 0; i < items.length; i++) {
      result.push(func(i));
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      result.push(funcWithBonus(i));
    }
  }
  return result;
};
