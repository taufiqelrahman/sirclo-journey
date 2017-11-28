const Product = require('./Product')

class Cart {
  constructor() {
    this._cart = new Array()
  }
  getCart() {
    return this._cart
  }
}

module.exports = Cart