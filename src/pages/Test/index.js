import React, { Component } from "react"
// import "./index.scss"
export default class NumbersCount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }
  render() {
    const { showValue } = this.props
    const numberList = (showValue + "").split("")
    return <div className="numbers-container" style={this.props.numberContainerStyle}>
      {
        numberList.map((number, index) => {
          let scrollClass = ""
          if (number === "0") {
            scrollClass = "numbers-scroll0" + Math.ceil(Math.random * 5)
          } else {
            scrollClass = "numbers-scroll" + number
          }

          return <div className="numbers-box" key={index}>
            { showValue > 0 ?
              <span className={scrollClass} style={this.props.numberStyle}>
                <label>0</label>
                <label>1</label>
                <label>2</label>
                <label>3</label>
                <label>4</label>
                <label>5</label>
                <label>6</label>
                <label>7</label>
                <label>8</label>
                <label>9</label>
                <label>0</label>
              </span>
              :
              <span>
                <label>0</label>
              </span>
            }
          </div>
        })
      }
    </div>
  }
}