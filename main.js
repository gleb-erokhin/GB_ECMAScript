const person = {
    name:  "Jhon",
    age: 0, 
    gender: "",
    introduce() {
        console.log(`My name is ${this.name} I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName(newname) {
        console.log(this.name = newname);
    }
}

person.name = "John";
person.age = 25;
person.gender = "male";
person.introduce();
person.changeName("Mike");
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
        console.log("Собака лает");
    }
}


dog.eat = animal.eat; // Вывод: Rex is eating.
dog.eat();


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

console.log(calculator.add.call(null, 5, 3)); // Вывод: 8

console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
