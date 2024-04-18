// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

const Book = {
    title: "Война и Мир",
    author: "Лев Толстой",
    pages: 800,
    displayInfo () {
        console.log(`название: ${this.title}, Автор: ${this.author}, количество страниц: ${this.pages}`);
    }
}

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

Book.displayInfo();

// функция для создания элементов HTML
function createElement(tag, className, showText="") {
    const item = document.createElement(tag);
    item.classList.add(className)
    item.textContent = showText;
    return item;
}

const mainTag = createElement('div', 'main');
const header = createElement('h1', 'text', 'Управление библиотекой книг');
const paragraf = createElement('p', 'info', `Название: ${Book.title}, Автор: ${Book.author}, Количество страниц: ${Book.pages}`)

// Добавляем элементы на страницу
document.body.append(mainTag);
mainTag.append(header, paragraf);