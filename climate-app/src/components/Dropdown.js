import React from 'react';

export default class Dropdown extends React.Component{  
  renderDropdown() {
    const cities = ['Jakarta', 'Tokyo', 'London']
    let rendered = new Array()
    cities.map( (city,i) => rendered.push(<option key={i} value={city}>{city}</option>))
    return rendered    
  }
  render() {
    const { onChange } = this.props
    return (
      <select onChange={onChange}>
        { this.renderDropdown() }
      </select>
    )    
  }
}