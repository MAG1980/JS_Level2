class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
// Метод для подсчёта суммарной стоимости товаров в списке
    totalPriceCalc(){
        return this.goods.reduce(function (totalPrice, item) {
            return totalPrice + item.price;
        }, 0);
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

class Cart{
    constructor() {
        this.list = [];
        this.totalPrice();
        this.render();
    }
//Добавить товар в корзину
    addProductItem(obj){
    }
//Увеличить количество единиц товара в корзине
    productCounterIncrement(id){
    }
//Уменьшить количество единиц товара в корзине
    productCounterDecrement(id){
    }
//Удалить товар из корзины
    removeProductItem(id){
    }
//Очистить содержимое корзины
    removeProductItem(id){
    }
//Подсчитать суммарную стоимость товаров в корзине
    totalPriceCalc(arr){
    }
//Отрисовать содержимое корзины
    render(){
    }
}

class CartItem {
    constructor(obj) {
        this.title = obj.title;
        this.id = obj.id;
        this.price = obj.price;
        this.img = obj.img;
    }
//Возвращает HTML-разметку карточки товара в корзине
    render(){
    }
}



//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);