import React, { Component } from 'react';
import './Trivia.css'

export default class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'test',
            hasErrors: false,
            data: {}
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
            .then(res => this.setState({ data: res }))
    }

    render() {
        return (
            <div className='triviaContainer'>
                <h1>The following city is the capital of what country?</h1>
                <h2>{this.data}</h2>
                <h3>{this.name}</h3>
            </div>
        )
    }
}
