import React from 'react';
import Dropdown from './components/Dropdown';

export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      dropdown: ''
    }
  }
  handleDropdown = (e) => {
    this.setState({ dropdown: e.target.value })
  }
  render() {
    const { dropdown } = this.state
    return (
      <div>
        <Dropdown onChange={this.handleDropdown.bind(this)} value={dropdown}/>
      </div>
    )
  }
}