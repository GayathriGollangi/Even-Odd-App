// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Count <span className="counter">{count}</span>
        </h1>
        <p>Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
        </div>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
