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
    let scr = this.state.score
    this.setState({
      score: scr + 1
    })
  }


  render() {
    return (
      <div class='app'>
        <Trivia parentCallback={this.callbackFunction} />
        <p>Your score: {this.state.score}/50</p>
      </div>
    )
  }
}
