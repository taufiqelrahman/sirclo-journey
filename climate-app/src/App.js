import React from 'react';
import axios from 'axios';
import Dropdown from './components/Dropdown'
import Daily from './components/Daily'

export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      dropdown: '',
      city: '',
      weather: []
    }
  }
  componentDidMount() {
    const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=Jakarta&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1`
    axios.get(URL)
      .then(res => {
        // console.log(res.data)
        let newState = Object.assign({}, this.state)
        newState.city = res.data.city.name
        this.setState(newState)
      })
      .catch(err => {
        alert(err)
      })
  }  
  handleDropdown = (e) => {
    this.setState({ dropdown: e.target.value })
  }
  render() {
    const { dropdown, city } = this.state
    return (
      <div>
        <Dropdown onChange={this.handleDropdown.bind(this)} value={dropdown}/>
        <Daily city={city} />
      </div>
    )
  }
}