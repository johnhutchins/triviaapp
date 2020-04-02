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

  callbackFunction = (child) => {
    console.log('child = ' + child)
    let scr = (this.state.score)
    //if correct, scr += 1
    //this.setState({
    //   score:
    // })
  }

  //if correct answer, +1

  render() {
    return (
      <div>
        <p>{this.state.score}</p>
        <Trivia parentCallback={this.callbackFunction} />
      </div>
    )
  }
}
