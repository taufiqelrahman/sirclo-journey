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
  renderFooter() {
    const { average } = this.props
    return (
      <tr>
        <td>Average</td>
        <td className="temp">{average ? average.temp : 0}</td>
        <td className="variance">{average ? average.variance : 0}</td>
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