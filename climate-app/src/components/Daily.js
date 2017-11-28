import React from 'react'

export default class Daily extends React.Component{  
  render() {
    const { city, weather } = this.props
    return (
      <div>
        <h5>today's temperature at {city} is: {weather.length ? weather[0].temp : 0}</h5>
        <h6>today's variance at {city} is: {weather.length ? weather[0].variance : 0}</h6>
      </div>
    )    
  }
}