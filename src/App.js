import React, { Component } from 'react'
import Trivia from './Trivia'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
  }

  callbackFunction = () => {
    let scr = (this.state.score += 1)
    this.setState({
      score: scr
    })
  }


  render() {
    return (
      <div>
        <p>{this.state.score}</p>
        <Trivia parentCallback={this.callbackFunction} />
      </div>
    )
  }
}
