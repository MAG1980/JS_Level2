const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img='https://picsum.photos/seed/5/200') => {
       return `<div class="product-item">
<img class="product-item__img" src="${img}" alt="товар">
            <div class="product-item__wrapper">               
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="btn btn__buy-btn">Купить</button>
            </div>
        </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    let productsListString = productsList.join('');
    // console.log(productsList);
    console.log(productsListString);
    //  document.querySelector('.products').innerHTML = productsList;
    document.querySelector('.products').innerHTML = productsListString;
};

renderPage(products);