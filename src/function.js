export default function setUpAttacks(items, shield = true) {
  const result = [];

  function func(i) {
    return function (harm) {
      if ((items[i].health > 0) && (items[i].health > harm)) {
        items[i].health = items[i].health - harm;        
      }
      else{items[i].health = 0;}
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
          if ((element.health > 0) && (element.health > harmInd)) {
            element.health -= harmInd;           
          }
          else{element.health = 0;}
        }
        if ((items[i].health > 0) && (items[i].health > divHarm)) {
          items[i].health = items[i].health - divHarm;        
        }
        else{items[i].health = 0;}        
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