// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee(сотрудник), который имеет следующие свойства и методы:

class Employee {
  constructor(name) {
    // Свойство name(имя) - строка, имя сотрудника.
    this.name = name
  }
  // Метод displayInfo() - выводит информацию о сотруднике(имя).
  displayInfo() {
    // console.log(`Name: ${this.name}`);
    return `Name: ${this.name}`; // смена типа вывода для работы с HTML
  }
}

// Пример использования классов
const employee = new Employee('John Smith');
employee.displayInfo();
// Вывод:
// Name: John Smith

// Реализуйте класс Manager(менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department(отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере(имя и отдел).

class Manager extends Employee {
  constructor(name, depart) {
    super(name); 
    this.name = name;
    this.depart = depart;
  }
  displayInfo() {
    // console.log(`Name: ${this.name}\nDepartment: ${this.depart}`);
    return `Name: ${this.name}, Department: ${this.depart}`; // смена типа вывода для работы с HTML
  }
}

// Пример использования классов и переопределения
const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales