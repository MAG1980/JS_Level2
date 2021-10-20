import 
export default class Card{
    constructor(goodsList) {
        this._data = goodsList;}
        get markUp(){
  return `<div class="header__card">
              <a class="header__card_link">
                  <img src=${
                    product.imgSrc
                  } alt="товар" class="header__card_img">
                  <div class="header__card_info">
                      <h3 class="header__card_title">${product.cardTitle}</h3>
                      <p class="header__card_icons">
                          ${product.rating}
                      </p>
                      <p class="header__card_text"><span class="header__card_text-span">${product.count()}</span> x $${
    product.price
  }</p>
                  </div>
              </a>
              <button class="header__card_close" type="button"><i class="fa fa-times-circle"
                      aria-hidden="true"></i></button>
              </div>`;
}
}
}

