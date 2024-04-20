// Задача 1
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj.Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.


// Задача 2
// Напишите конструктор объекта Person, который принимает два аргумента:
// name(строка) и age(число).Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".

class Person {
  constructor(name, age) {
    this.name = name,
      this.age = age
  }
  introduce() {
    console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

// Пример:
const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// Задача 3
// Создайте класс Animal, который будет представлять животное.У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name(строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal.Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed(строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч."

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} издает звук`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // ключевое слово super в конструкторе вызывает родительский конструктор класса Animal и забираем его свойство name
    super(name);
    this.breed = breed;
  }
  fetch() {
    console.log(`Собака  ${this.name} породы ${this.breed} принесла мяч.`);
  }
  // метод перехваттывает на себя и выводит это значение. Является более приоритетным
  speak() {
    console.log(`${this.name} издает звук гав`);
  }
}

const animal = new Animal('Bobik');
animal.speak();
const dog = new Dog('шарик', 'гончая');
dog.fetch();
dog.speak();

// Задание 4
// 1. Создать класс "Калькулятор" с приватными полями "последний результат" и "текущее значение".Класс должен иметь публичные методы "сложить", "вычесть", "умножить" и "разделить", которые будут изменять значение текущего значения в соответствии с выбранной операцией.Также класс должен иметь статическое поле "точность", которое будет задавать количество знаков после запятой при выводе результата.

// доступ к приватному полю
class Calculator {
  // объявляем приватное поле недоступное извне
  #result;
  constructor(result) {
    this.#result = result;
  }
  // записываем geter, метод будет получать поле result, название может быть любое
  getResult() {
    return this.#result;
  }
  // записываем метод seter
  setResult(num) {
    return this.#result = num;
  }
}

const num = new Calculator(100)
console.log(num.getResult());
console.log(num.setResult(30));
console.log(num.getResult());
// console.log(num.#result()); // невозможно обратиться


class Calculator2 {
  #lastResult = 0;
  #currentValue = 0;
  // статичное поле нужно именно для класса, в экземпляре класса оно не будет доступно
  static #precision = 2;
  plus(value) {
    this.#lastResult = this.#currentValue;
    this.#currentValue += value;
  }
  minus(value) {
    this.#lastResult = this.#currentValue;
    this.#currentValue -= value;
  }
  mul(value) {
    this.#lastResult = this.#currentValue;
    this.#currentValue *= value;
  }
  div(value) {
    if (value === 0) {
      throw new Error('На ноль делить нельзя')
    }
    this.#lastResult = this.#currentValue;
    this.#currentValue /= value;
  }
  getResult() {
    // добраться до параметра precission так как это статичное поле, можно только обратившись через класс
    // toFixed нужно чтобы указать количество знаков после запятой
    return Number(this.#currentValue.toFixed(Calculator2.#precision))
  }
  getLastResult() {
    return this.#lastResult;
  }
}

const number = new Calculator2();
number.plus(6);
console.log(number); // 6
number.minus(2)
console.log(number); // 4
number.mul(3)
console.log(number);  // 12
// number.div(0)
// console.log(number); // 0 

console.log(number.getResult());
console.log(number.getLastResult());
