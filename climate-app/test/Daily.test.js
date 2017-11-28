import React from 'react'
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai'
import App from './../src/App'
import 'jsdom-global/register'

describe('Daily', function () {
  it('should display h5 & h6', function() {
    const wrapper = mount(<App />)
    expect(wrapper.find('h5')).to.have.length(1)
    expect(wrapper.find('h6')).to.have.length(1)
  })
  it('should display correct city', function() {
    const wrapper = mount(<App />)
    setTimeout(() => {
      const state = wrapper.state().city
      expect(wrapper.find('h5').text()).to.have.string(state)
      expect(wrapper.find('h6').text()).to.have.string(state)
    }, 1000)
  })
  it('should display correct temp', function() {
    const wrapper = mount(<App />)
    setTimeout(() => {
      const today = wrapper.state().weather[0]
      expect(wrapper.find('h5').text()).to.have.string(today.temp)
    }, 1000)
  })
  it('should display correct variance', function() {
    const wrapper = mount(<App />)
    setTimeout(() => {
      const today = wrapper.state().weather[0]
      expect(wrapper.find('h6').text()).to.have.string(today.variance)
    }, 1000)
  })
})