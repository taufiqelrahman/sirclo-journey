import React from 'react'

export default class Daily extends React.Component{  
  render() {
    const { city } = this.props
    return (
      <div>
        <h5>today's temperature at {city} is: {}</h5>
        <h6>today's variance at {city} is: {}</h6>
      </div>
    )    
  }
}