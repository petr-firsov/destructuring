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
        const { id, name, icon, description = 'Описание недоступно'} = attack;
        let item = {};
        item.id = id;
        item.name = name;
        item.icon = icon;
        item.description = description;
        attackInfo.push(item);
    });
    return attackInfo;
};   
