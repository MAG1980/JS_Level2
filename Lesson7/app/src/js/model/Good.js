import idGenerator from "../utils/idGenerator";
export default class Good {
  constructor({ link, name, price, imageSrc, rating, discount }) {
      this._id = idGenerator(),
      this._link = link,
      this._name = name,
      this._price = price,
      this._imageSrc = imageSrc,
      this._rating = rating,
      this.discount = discount,
  }
  get price(){
      return this._price * (100 - this._discount)/100
    } 
}
