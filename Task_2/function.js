// функция для создания элементов HTML
function createElement(tag, className, showText = "") {
    const item = document.createElement(tag);
    item.classList.add(className)
    item.textContent = showText;
    return item;
}

const mainTag = createElement('div', 'main');
const header = createElement('h1', 'text', 'Управление персоналом компании');
// const paragraf = createElement('p', 'info', `Название: ${Book.title}, Автор: ${Book.author}, Количество страниц: ${Book.pages}`)
const paragraf = createElement('p', 'info', order.getTotalPrice())
const oList = createElement('ol', 'ol-List')
// const paragraf2 = createElement('p', 'info', order.getListProduct())

// Добавляем элементы на страницу
document.body.append(mainTag);
mainTag.append(header, paragraf, oList);

let newData = order.getListProduct();
console.log(newData);

const itemBox = document.querySelector(".ol-List");

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

