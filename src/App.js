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
  render() {
    return (
      <div>
        <p>{this.state.score}</p>
        <Trivia />
      </div>
    )
  }
}
