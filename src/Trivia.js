import React, { Component } from 'react';
import './Trivia.css'

export default class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correct: 0,
            country: '',
            capital: '',
            allCountries: [],
            counter: 0
        }
    }

    getData = () => {
        fetch('https://jwhrandomcountry.herokuapp.com/country', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(res => this.setState({
                country: res.country,
                capital: res.city,
                allCountries: res.allCountries.countries
            }))
    }

    componentDidMount() {
        this.setState({
            correct: false,
            country: '',
            capital: '',
            allCountries: []
        })
        this.getData()
        //this.shuffle()
    }

    shuffle = () => {
        return this.state.allCountries = this.state.allCountries.sort(() => Math.random() - 0.5)
    }

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    increaseCorrect = () => {
        this.setState({
            correct: this.state.correct + 1
        })
    }

    handleGuess = (event) => {
        if (this.state.counter === 50) {
            this.sendData()
        }

        if (event.currentTarget.textContent === this.state.country) {
            this.increaseCounter()
            this.increaseCorrect()
            this.sendData()
            this.getData()
        } else {
            this.increaseCounter()
            this.getData()
        }
    }

    sendData = () => {
        this.props.parentCallback(this.state.correct)
    }

    render() {
        this.shuffle()
        return (
            <div className='triviaContainer'>
                <h1><strong>{this.state.capital}</strong> is the capital of what country?</h1>
                {this.state.allCountries.map((country) => (
                    <button key={country} onClick={this.handleGuess}>
                        {country}
                    </button>
                ))}

            </div>
        )
    }
}
