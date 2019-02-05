export const setUpAttacks = (items, shield = true) => {
  
  const result = []; 

  if(!shield){
    function func(i){
      return function(harm){
        items[i].health = items[i].health - harm;
      return items;
      }
    }

    for (let i=0; i<items.length; i++){
      result.push(func(i));
    }  
  }

  else{
    function funcWithBonus(i){
      return function(harm){
        const harmInd = (harm - harm%3)/3;
        for (let element of items){
          element.health = element.health - harmInd;
        }
        items[i].health = items[i].health - harm%3;
      return items;
      }
    }

    for (let i=0; i<items.length; i++){
      result.push(funcWithBonus(i));
    } 
  }
  return result; 
} 