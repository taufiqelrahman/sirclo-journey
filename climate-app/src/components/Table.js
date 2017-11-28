import React from 'react'

export default class Table extends React.Component{  
  renderHeading() {
    const { city } = this.props
    return (      
      <tr>
        <th>{city}</th>
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
          <td className="temp">{w.temp}C</td>
          <td className="variance">{w.variance}C</td>
        </tr>
      )
    })
    return body
  }
  renderFooter() {
    const { average } = this.props
    return (
      <tr>
        <td>Average</td>
        <td className="temp">{average ? average.temp : 0}C</td>
        <td className="variance">{average ? average.variance : 0}C</td>
      </tr>
    )
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
          <tfoot>
            {this.renderFooter()}
          </tfoot>
        </table>
      </div>
    )    
  }
}