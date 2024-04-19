// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

class Student {
    constructor (name, age, grade) {
        this.name = name,
        this.age = age,
        this.grade =grade
    }
    displayInfo() {
        return `имя студента: ${this.name}, возраст студента: ${this.age}, класс, в котором учится студент: ${this.grade}`;
    }
}
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// Пример использования класса
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"

const student3 = new Student("Ann Ford", 18, "19th grade");
student3.displayInfo();

// визуальное оформление

// функция для создания элементов HTML
function createElement(tag, className, insertText="") {
    const item = document.createElement(tag);
    item.classList.add(className)
    item.textContent = insertText;
    return item;
}

const mainTag = createElement('div', 'main');
const header = createElement('h1', 'text', 'Управление списком студентов');
const divBlock = createElement('div', 'block')
const paragraf1 = createElement('p', 'info', student1.displayInfo())
const paragraf2 = createElement('p', 'info', student2.displayInfo())
const paragraf3 = createElement('p', 'info', student3.displayInfo())

// Добавляем элементы на страницу
document.body.append(mainTag);
mainTag.append(header, divBlock);
divBlock.append(paragraf1, paragraf2, paragraf3);