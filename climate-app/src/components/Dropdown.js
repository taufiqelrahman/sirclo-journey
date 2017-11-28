import React from 'react'

export default class Dropdown extends React.Component{  
  renderDropdown() {
    const cities = ['Jakarta', 'Tokyo', 'London']
    let rendered = new Array()
    cities.map( (city,i) => rendered.push(<option key={i} value={city}>{city}</option>))
    return rendered    
  }
  render() {
    const { onChange, value } = this.props
    return (
      <select onChange={onChange} value={value}>
        { this.renderDropdown() }
      </select>
    )    
  }
}