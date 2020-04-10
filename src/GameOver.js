import React, { Component } from 'react'
import Trivia from './Trivia'
import './App.css'
import './GameOver.css'

export default class GameOver extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            gameOver: false
        }
    }

    render() {
        return (
            <div h1 className='center'>
                <h1>GAME OVER</h1>
            </div>
        )
    }
}