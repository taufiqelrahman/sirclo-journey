import React from 'react';
import Dropdown from './components/Dropdown';

export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      dropdown: null
    }
  }
  handleDropdown = (e) => {
    this.setState({ dropdown: e.target.value })
  }
  render() {
    return (
      <div>
        <Dropdown onChange={this.handleDropdown.bind(this)}/>
      </div>
    )
  }
}