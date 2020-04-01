import React, { Component } from 'react';
import './Trivia.css'

export default class Trivia extends Component {
    state = {
        hasErrors: false,
        data: {}
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
            .then(res => this.setState({ data: res }))
        console.log("data = " + this.data)
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
