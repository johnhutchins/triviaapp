import React, { Component } from 'react';
import logo from './logo.svg';
import './Trivia.css'

export default class Trivia extends Component {
    state = {
        hasErrors: false,
        data: {}
    }

    //this should be on click. for now componentDidMount hook is fine
    componentDidMount() {
        fetch('https://jwhrandomcountry.herokuapp.com/country')
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
    }

    render() {
        return (
            <div className='triviaContainer'>
                <h1>The following city is the capital of what country?</h1>
                <h2>capital</h2>
                <div>{this.data}</div>
            </div>
        )
    }
}
