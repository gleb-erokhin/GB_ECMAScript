// задача 1 

// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender.Добавьте
// также методы introduce и changeName.Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол.Метод changeName должен изменять
// имя человека на новое заданное значение.

const Person = {
    // this означает работа с переменной в контексте определенного объекта
    // необходимо обращаться с this через function
    name: this.name,
    age: this.age,
    gender: this.gender,
    // метод, это функция внутри объекта
    introduce: function () {
        console.log(`My name is ${this.name}.I'm ${this.age} years old and I identify as ${this.gender}`);
    },
    changeName: function (name) {
        this.name = name;
    }
}

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is John.I'm 25 years old and I identify as male.
Person.changeName("Mike");
Person.introduce(); // Ожидаемый результат: My name is John.I'm 25 years old and I identify as male.
