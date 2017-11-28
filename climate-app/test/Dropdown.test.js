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
})