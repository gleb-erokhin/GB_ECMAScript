// Задание 1
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

// Задание 2
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

// Задание 3
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

// Задание 4
// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.

// создаем класс 
class Person {
    // создаем метод Конструктор, который принимает переменные на вход, значения в this используются когда мы создаем экземпляр класса
    constructor (name, age) {
        this.name = name,
        this.age = age
    }
    // создаем метод клааса
    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old`);
    }
}

console.log('Экземпляры класса');
// создаем экземпляр класса Person, присваиваем новые значения.
const person3 = new Person("John", 25);
person3.introduce(); // Вывод: My name is John and I'm 25 years old

// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
const person4 = new Person("John", 25);
person4.introduce(); // Вывод: My name is John and I'm 25 years old

// можно использовать  заимствование
console.log('Заимствование');
person.bark = dog.bark;
person.bark(); 

// Задание 3
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.

class BankAccount {
    static bankName = 'bank'
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber,
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposeted ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficent founds ${amount} in account ${this.accountNumber}.`);
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        }
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balanc  e: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890