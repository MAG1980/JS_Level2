'use strict';

class CartProductList extends ProductsList {
    constructor(container, way) {
        super(container, way);
        this._getProducts(way)
            .then(data => { //data - объект js
                this.goods = data.contents;
                console.log(data);
                console.log(this.goods);
                this.render()
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new CartProductItem(product);
//            this.allCartProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class CartProductItem extends ProductItem {
    constructor(product, img) {
        super(product, img);
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="cart__item" data-id="${this.id}">
                <img class="img cart__item-img" src="${this.img}" alt="Some img">
                <div class="desc cart__item-desc">
                    <h3 class="cart__item-title">${this.title}</h3>
                    <p class="cart__item-price">${this.price} $</p>
                    <p class="cart__item-quantity">Количество: ${this.quantity}</p>
                    <button class="cart__item-remove-btn">Удалить</button>
                </div>
            </div>`
    }
}

class Cart {
    constructor(selector, container, way) {
        this.cartList = new CartProductList(container, way);
        this.listener = document.querySelector(selector).addEventListener('click', () => {
            document.querySelector(container).classList.toggle('cart__list_show');
        })
    }

}

let $Cart = new Cart('.btn-cart', '.cart__list', '/getBasket.json');