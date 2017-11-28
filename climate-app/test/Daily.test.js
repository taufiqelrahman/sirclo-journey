import React from 'react'
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai'
import App from './../src/App'
import Daily from './../src/components/Daily'
import 'jsdom-global/register'

describe('Daily', function () {
  it('should display h5 & h6', function() {
    const wrapper = shallow(<Daily />)
    expect(wrapper.find('h5')).to.have.length(1)
    expect(wrapper.find('h6')).to.have.length(1)
  })
  it('should display correct city', function() {
    const wrapper = mount(<App />)
    setTimeout(function() {
      const state = wrapper.state().city
      expect(wrapper.find('h5').text()).to.have.string(state)
      expect(wrapper.find('h6').text()).to.have.string(state)
    }, 1000)
  })

})