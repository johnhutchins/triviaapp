import React, { Component } from 'react';
import './Trivia.css'

export default class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasErrors: false,
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
            // .then(res => console.log(res.country))
            .then(res => this.setState({
                country: res.country,
                capital: res.city,
                allCountries: res.allCountries.countries
            }))
    }

    shuffle(arr) {
        arr.sort(() => Math.random() - 0.5)
    }

    render() {
        return (
            <div className='triviaContainer'>
                <h1>The following city is the capital of what country?</h1>
                <h2>{this.state.capital}</h2>

                <ul>
                    {this.state.allCountries.map((country) => (
                        <li key={country}>{country}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
