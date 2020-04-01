import React, { Component } from 'react';
import './Trivia.css'

export default class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasErrors: false,
            data: {}
        }
    }

    //this should be on click. for now componentDidMount hook is fine
    async componentDidMount() {
        await fetch('https://jwhrandomcountry.herokuapp.com/country', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
            .then(console.log('data = ' + JSON.stringify(this.state.data)))
    }

    render() {
        return (
            <div className='triviaContainer'>
                <h1>The following city is the capital of what country?</h1>
                {/* <h2>{this.state.data}</h2> */}
            </div>
        )
    }
}
