import React from 'react'
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai'
import App from './../src/App'
import Table from './../src/components/Table'
import 'jsdom-global/register'

describe('Daily', function () {
  it('should have headers', function() {
    const wrapper = mount(<App />)
    expect(wrapper.find('th')).to.have.length(3)
  })
  it('should display 5 dates', function() {
    const wrapper = mount(<App />)
    setTimeout(function() {
      wrapper.update();
      expect(wrapper.find('tbody tr')).to.have.length(5)
    }, 1000)
  })
  it('should display correct date', function() {
    const wrapper = mount(<App />)
    setTimeout(function() {
      wrapper.update();
      const firstDay = wrapper.state().weather[0]
      const firstRow = wrapper.find('tbody tr').first()
      expect(firstRow.find('td.date').text()).to.have.equal(firstDay.date)
    }, 1000)
  })
  it('should display correct temp', function() {
    const wrapper = mount(<App />)
    setTimeout(function() {
      wrapper.update();
      const firstDay = wrapper.state().weather[0]
      const firstRow = wrapper.find('tbody tr').first()
      expect(firstRow.find('td.temp').text()).to.have.equal(firstDay.temp)
    }, 1000)
  })
  it('should display correct variance', function() {
    const wrapper = mount(<App />)
    setTimeout(function() {
      wrapper.update();
      const firstDay = wrapper.state().weather[0]
      const firstRow = wrapper.find('tbody tr').first()
      expect(firstRow.find('td.variance').text()).to.have.equal(firstDay.variance)
    }, 1000)
  })

})