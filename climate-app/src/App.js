import React from 'react';
import Dropdown from './components/Dropdown';
import Daily from './components/Daily';

export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      dropdown: ''
    }
  }
  componentDidMount() {
    
  }  
  handleDropdown = (e) => {
    this.setState({ dropdown: e.target.value })
  }
  render() {
    const { dropdown } = this.state
    return (
      <div>
        <Dropdown onChange={this.handleDropdown.bind(this)} value={dropdown}/>
        <Daily />
      </div>
    )
  }
}