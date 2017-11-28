var assert = require('assert')
const Product = require('./../Product')

describe('Product', function() {
  it('should have name property', function() {
    const product = new Product('red')
    assert.equal(product.getName(), 'red')
  });
});