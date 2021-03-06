import React, { Component } from 'react';
import './Trivia.css'

export default class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correct: 0,
            gameState: [],
            country: '',
            capital: '',
            allCountries: [],
            counter: 0,
            countriesFiltered: []
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
            .then(res =>
                this.setState({
                    country: res.country,
                    capital: res.city,
                    allCountries: res.allCountries.countries
                }))


        if (!this.state.countriesFiltered.includes(this.state.country)) {
            return this.state.countriesFiltered.push(this.state.country)
        } else {
            console.log("that country already is shown")
            console.log(this.state.country)
            //below breaks the 


        }
    }

    componentDidMount() {
        this.getData()
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
            this.props.parentCallback2(this.state.country)
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
        if (this.state.counter === 50) {

        }
        this.props.parentCallback(this.state.correct)
    }

    render() {
        this.shuffle()
        return (
            <div className='triviaContainer'>
                <h1><strong><em>{this.state.capital}</em></strong></h1><h2>is the capital of what country?</h2>
                {this.state.allCountries.map((country) => (
                    <button key={country} onClick={this.handleGuess}>
                        {country}
                    </button>
                ))}
            </div>
        )
    }
}
