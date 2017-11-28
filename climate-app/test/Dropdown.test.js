import assert from 'assert'
import React from 'react'
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai'
import App from './../src/App'
import Dropdown from './../src/components/Dropdown'
import 'jsdom-global/register'

describe('Dropdown', function () {
  it('should have dropdown', function() {
    const wrapper = shallow(<Dropdown />)
    expect(wrapper.find('select')).to.have.length(1)
  })
  it('should have 3 options', function() {
    const wrapper = shallow(<Dropdown />)
    expect(wrapper.find('select option')).to.have.length(3)
  })
  it('can change dropdown value', function() {
    const wrapper = mount(<App />)
    wrapper.find('select').simulate('change', {target: { value : 'Tokyo'}})
    expect(wrapper.state().dropdown).to.equal('Tokyo')
  })
  it('can change dropdown value with correct API', function() {
    const wrapper = mount(<App />)
    
    setTimeout(() => {
    wrapper.find('select').simulate('change', {target: { value : 'Tokyo'}})
      setTimeout(() => {
        wrapper.update();
        expect(wrapper.state().dropdown).to.equal(wrapper.state().city)
        expect(wrapper.find('h5').text()).to.have.string(wrapper.state().city)
      }, 1000)
    }, 1000)
  })
})