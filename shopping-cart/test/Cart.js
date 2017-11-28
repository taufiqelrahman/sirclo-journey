var assert = require('assert')
const Cart = require('./../Cart')

describe('Cart', function() {
  describe('Init', function() {
    it('should have _cart property', function() {
      const cart = new Cart()
      assert.equal(cart.getCart().length, 0)
    })
  })
  describe('Add product', function() {
    it('can add product', function() {
      const cart = new Cart()
      cart.addProduct('red',2)
      assert.equal(cart.getCart().length,1)
    })
    it('can add the same product', function() {
      const cart = new Cart()
      cart.addProduct('red',2)
      cart.addProduct('red',3)
      assert.equal(cart.getCart().length,1)
    })
  })

})