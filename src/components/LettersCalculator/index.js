// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onSearchChange = event =>
    this.setState(prevState => ({
      count: event.target.value.length,
    }))

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="content-container">
            <h1 className="head">Calculate the Letters you enter</h1>
            <label htmlFor="search" className="lab">
              Enter the phrase
            </label>
            <input
              type="text"
              id="search"
              placeholder="Enter the phrase"
              className="inp"
              onChange={this.onSearchChange}
            />
            <p className="btn">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
