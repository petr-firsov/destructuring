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
    const { special: array } = object;
    array.forEach(element => { 
        const { id: id, name: name, icon: icon, description: description = 'Описание недоступно'} = element;
        let attackChoice = [];
        attackChoice.push(id, name, icon, description);
        return attackChoice;
    })   
}
