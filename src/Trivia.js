import React, { Component } from 'react';
import './Trivia.css'

export default class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correct: null,
            country: '',
            capital: '',
            allCountries: []
        }
    }

    //this should be on click. for now componentDidMount hook is fine
    componentDidMount() {
        fetch('https://jwhrandomcountry.herokuapp.com/country', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(res => this.setState({
                correct: false,
                country: res.country,
                capital: res.city,
                allCountries: res.allCountries.countries
            }))
        this.shuffle()
    }

    shuffle = () => {
        return this.state.allCountries = this.state.allCountries.sort(() => Math.random() - 0.5)
    }

    handleGuess = (event) => {
        if (event.currentTarget.textContent === this.state.country) {
            console.log('correct!')
            this.sendData()
        } else {
            //refresh page
        }
    }

    sendData = () => {
        this.props.parentCallback(this.state.country)
    }


    render() {
        return (
            <div className='triviaContainer'>
                <h1>The following city is the capital of what country?</h1>
                <h2>{this.state.capital}</h2>
                <ul>
                    {this.state.allCountries.map((country) => (
                        <li key={country} onClick={this.handleGuess}>
                            {country}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
