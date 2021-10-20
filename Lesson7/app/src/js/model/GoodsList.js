import goods from "../js/goods";
import good from "../js/good";
export default class GoodsList {
  constructor(goods) {
    this._goods = goods;
  }
  addGood(good) {
    this._goods.push(good);
  }
  removeGood(id) {
    let idRemovedGood = this._goods.findIndex((good) => good.id === id);
    this._goods.splice(idRemovedGood, 1);
  }
}
