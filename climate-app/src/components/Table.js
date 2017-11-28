import React from 'react'

export default class Table extends React.Component{  
  renderHeading() {
    return (      
      <tr>
        <th>Jakarta</th>
        <th>Temperature</th> 
        <th>Variance</th>
      </tr>
    )
  }
  renderBody() {
    const { weather } = this.props
    let body = new Array()
    weather.map(w => {
      body.push(
        <tr key={w.date}>
          <td className="date">{w.date}</td>
          <td className="temp">{w.temp}</td>
          <td className="variance">{w.variance}</td>
        </tr>
      )
    })
    return body
  }
  render() {
    return (
      <div>
        <table>
          <thead>
          {this.renderHeading()}
          </thead>
          <tbody>
          {this.renderBody()}
          </tbody>
        </table>
      </div>
    )    
  }
}