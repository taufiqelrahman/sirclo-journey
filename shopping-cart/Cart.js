const Product = require('./Product')

class Cart {
  constructor() {
    this._cart = new Array()
  }
  getCart() {
    return this._cart
  }
  addProduct(code, quantity) {
    let exists = this._cart.find(item => item.product.getName() == code)
    if (exists) {
      let oldQuantity = this._cart.find(item => item.product.getName() == code).quantity
      this._cart.find(item => item.product.getName() == code).quantity = oldQuantity + quantity
    }
    else {
      this._cart.push({
        product: new Product(code),
        quantity: quantity
      })
    } 
  }
}

module.exports = Cart