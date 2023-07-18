// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount} = this.state
    const {bananaCount} = this.state

    const counterEl = (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="counter-head">
            Bob ate <span className="style-fruit">{mangoCount}</span> mangoes{' '}
            <span className="style-fruit">{bananaCount} </span>bananas
          </h1>
          <div className="fruits-card-cont">
            <div className="mango-cont">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="eat-btn" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="banana-cont">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="eat-btn" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
    return counterEl
  }
}

export default FruitsCounter
