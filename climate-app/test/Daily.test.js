import React from 'react'
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai'
import Daily from './../src/components/Daily'
import 'jsdom-global/register'

describe('Daily', function () {
  it('should have 2 h5s', function() {
    const wrapper = shallow(<Daily />)
    expect(wrapper.find('h5')).to.have.length(2)
  })

})