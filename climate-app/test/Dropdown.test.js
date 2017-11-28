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
})