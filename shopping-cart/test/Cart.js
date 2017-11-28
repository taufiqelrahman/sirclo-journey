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
  describe('Remove product', function() {
    it('can remove product', function() {
      const cart = new Cart()
      cart.addProduct('red',2)
      cart.removeProduct('red')
      assert.equal(cart.getCart().length,0)
    })
    it('fails when remove non-existing product', function() {
      const cart = new Cart()
      cart.addProduct('red',2)
      cart.removeProduct('blue')
      assert.equal(cart.getCart().length,1)
    })
  })
  describe('Cart', function() {
    it('can show cart', function() {
      const cart = new Cart()
      cart.addProduct('red',2)
      cart.addProduct('blue',3)
      assert.equal(cart.showCart().includes('red (2)'), true)
      assert.equal(cart.showCart().includes('blue (3)'), true)
    })
  })
})