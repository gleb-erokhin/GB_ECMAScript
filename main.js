// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.

const person = {
    name:  this.name,
    age: this.age, 
    gender: this.gender,
    introduce() {
        console.log(`My name is ${this.name} I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName(newname) {
        console.log(this.name = newname);
    }
}

console.log('Task 1');
person.name = "John";
person.age = 25;
person.gender = "male";
person.introduce();
person.changeName("Mike");
person.age = 27;
person.introduce();


// Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест.

const animal = {
    name: "boby",
    eat() {
        console.log(`${this.name} is eating`);
    }
}

const dog = {
    name: "Rex",
    bark() {
        console.log(`${this.name} лает`);
    }
}

console.log('Task 2');

dog.eat = animal.eat; // Вывод: Rex is eating.
dog.eat();
animal.bark = dog.bark;
animal.bark();


// Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов.

const calculator = {
    add(a, b) {
        return a + b;
    }, 
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    }
}

const number = {
    num1: 14,
    num2: 3
}

console.log('Task 3');

// null указывает что в данном случае мы берем из контекста калькулятора значения
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8, call способ принятия значений перечислением
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2, apply способ принятия значений массивом

// используем как раз имя объекта откуда берем значения. после чего по ключам забираем значения
console.log(calculator.add.call(number, number.num1, number.num2)); // Вывод: 17

