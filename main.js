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
dog.voice();