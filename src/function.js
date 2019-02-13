/* Функция принимает массив с персонажами с любым health.
При отсутствии бонуса ущерб достается атакуемому персонажу.
При наличии бонуса ущерб распределяется между персонажами с health>0.
При атаке на персонажа с health<=0 функция возвращает массив без изменений.  */
export default function setUpAttacks(items, shield = true) {
  const result = [];

  function func(i) {
    return function (harm) {
      if (items[i].health > 0) {
        items[i].health = items[i].health - harm;
      }
      return items;
    };
  }

  function funcWithBonus(i) {
    return function (harm) {
      if (items[i].health > 0) {
        const life = items.filter(elem => elem.health > 0).length;
        const divHarm = harm % life;
        const harmInd = (harm - divHarm) / life;
        for (const element of items) {
          if (element.health > 0) {
            element.health -= harmInd;
          }
        }
        items[i].health = items[i].health - divHarm;
      }
      return items;
    };
  }

  if (!shield) {
    for (let i = 0; i < items.length; i += 1) {
      result.push(func(i));
    }
  } else {
    for (let i = 0; i < items.length; i += 1) {
      result.push(funcWithBonus(i));
    }
  }

  return result;
}

/* Функция принимает массив с персонажами с health>0.
При отсутствии бонуса ущерб достается атакуемому персонажу.
При наличии бонуса ущерб распределяется между всеми персонажами.
После распределения ущерба функция возвращает массив персонажей с health>0. */
/* export default function setUpAttacks(items, shield = true) {
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
      const divHarm = harm % items.length;
      const harmInd = (harm - divHarm) / items.length;
      for (const element of items) {
        element.health -= harmInd;
      }
      items[i].health = items[i].health - divHarm;
      items = items.filter(elem => elem.health > 0);
      return items;
    };
  }

  if (!shield) {
    for (let i = 0; i < items.length; i += 1) {
      result.push(func(i));
    }
  } else {
    for (let i = 0; i < items.length; i += 1) {
      result.push(funcWithBonus(i));
    }
  }
  return result;
}
 */
