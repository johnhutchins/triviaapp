import React, { Component } from 'react'
import Trivia from './Trivia'
import GameOver from './GameOver'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      gameOver: false
    }
  }

  callbackFunction = () => {
    let scr = this.state.score
    this.setState({
      score: scr + 1
    })
  }

  endGame = () => {
    console.log("GAME OVER CALLED")
    this.setState({
      gameOver: true
    })
  }

  render() {
    return (
      <div className='app'>
        {this.state.gameOver
          ? <GameOver />
          : < Trivia parentCallback={this.callbackFunction} parentCallback2={this.endGame} />
        }
        <p>Your score: {this.state.score}/50</p>

      </div>
    )
  }
}
