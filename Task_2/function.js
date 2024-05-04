/**
 * функция для создания элементов HTML
 * @param {string} tag указываем тег который надо создать
 * @param {string} className указываем нужный класс для создаваемого тега
 * @param {string} showText параметр по умолчанию. Нужен для добавления текста тегу.
 * @returns возвращает готовый блок разметки
 */
function createElement(tag, className, showText = "") {
    const item = document.createElement(tag);
    item.classList.add(className)
    item.textContent = showText;
    return item;
}

// создаем элементы разметки через функцию
const mainTag = createElement('div', 'main');
const header = createElement('h1', 'text', 'Управление персоналом компании');
const paragraf = createElement('p', 'info', `ИТОГО: ${order.getTotalPrice()} Rub`)
const oList = createElement('ol', 'ol-List')

// Добавляем элементы на страницу
document.body.append(mainTag);
mainTag.append(header, oList, paragraf);

// Принимаем значения массива объектов
let newData = order.getListProduct();

// ищем элемент нумерованного списка по классу и вставляем внутрь него элементы li через шаблон HTML
const itemBox = document.querySelector(".ol-List");

// пробегаемя циклом по массиву обектов и добавляем в шаблон HTML
newData.forEach((element) => {
    itemBox.insertAdjacentHTML(
        "beforeend",
    `
    <li class="li-item">
        <span class="bold_text">Name of product:</span> ${element.name}, 
        <span class="bold_text">cost:</span> ${element.price} 
        <span class="bold_text">Rub.</span>
    </li>
    `
    );
});

