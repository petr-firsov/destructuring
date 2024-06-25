export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }
  
export function extractData(object) {
    const { special: attacks } = object;
    attacks.length;
    const attackInfo = [];
    attacks.forEach(attack => { 
      for (let property in attack) {
        let attackProperty = attack[property];
        attackInfo.push(attackProperty);
      }
    });
    return attackInfo;
};   


console.log(extractData(character));
