// Реализуйте класс Order(заказ), который имеет следующие свойства и методы:

// Свойство orderNumber(номер заказа) - число, уникальный номер заказа.
// Свойство products(продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getNameProduct () {
        return this.name;
    }
    getPriceProduct () {
        return this.price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }


    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        return this.products.reduce((total, el) => total + el.price, 0)
    }

    getListProduct() {
        for (let product of this.products) {
            console.log(product.getNameProduct);
            console.log(product.getPriceProduct);
        }
    }
}

const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);
console.log(product1.price);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

const product3 = new Product('Mixer', 3500);
order.addProduct(product3);

const product4 = new Product('table', 500);
order.addProduct(product4);

console.log(order.getTotalPrice()); // Вывод: 600
console.log(order.getListProduct()); // показать список товаров