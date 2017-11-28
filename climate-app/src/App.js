import React from 'react'
import axios from 'axios'
import moment from 'moment'
import Dropdown from './components/Dropdown'
import Daily from './components/Daily'
import Table from './components/Table'

export default class App extends React.Component{
  constructor() {
    super()
    this.state = {
      dropdown: '',
      city: '',
      weather: [],
      avarage: []
    }
  }
  componentDidMount() {
    const URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=Jakarta&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1`
    axios.get(URL)
      .then(res => {
        // console.log(res.data)
        let newState = Object.assign({}, this.state)
        res.data.list.map(x => {
          newState.weather.push({
            date: moment(x.dt*1000).format('YYYY-MM-DD'),
            temp: x.temp.day.toFixed(0),
            variance: (x.temp.max-x.temp.min).toFixed(1)
          })

        })
        let temps = newState.weather.map(x => parseInt(x.temp))
        let variances = newState.weather.map(x => parseInt(x.variance))
        newState.average = {
          temp: (temps.reduce((total, temp) => total + temp) / temps.length).toFixed(0),
          variance: (variances.reduce((total, variance) => total + variance) / variances.length).toFixed(1)
        }
        newState.city = res.data.city.name
        this.setState(newState)
      })
      .catch(err => {
        alert(err)
      })
  }
  findAverate(array) {

  }
  handleDropdown = (e) => {
    this.setState({ dropdown: e.target.value })
  }
  render() {
    const { dropdown, city, weather, average } = this.state
    return (
      <div>
        <Dropdown onChange={this.handleDropdown.bind(this)} value={dropdown}/>
        <Daily city={city} weather={weather}/>
        <Table weather={weather} average={average}/>
      </div>
    )
  }
}