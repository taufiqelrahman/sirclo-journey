var assert = require('assert')
const Cart = require('./../Cart')

describe('Cart', function() {
  describe('Init', function() {
    it('should have _cart property', function() {
      const cart = new Cart()
      assert.equal(cart.getCart().length, 0)
    })
  })

})