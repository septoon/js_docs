/**
 * <Функция-конструктор игрового персонажа>
 *
 * @param name - имя персонажа
 * @param type - тип персонажа
 *
 * @throws <описание генерируемой ошибки>
 */
function Character(name, type) {
  this.name = name;
  this.type = type;
}
/* eslint-disable no-console */
const character = new Character('name', 'type');
console.log(character);
