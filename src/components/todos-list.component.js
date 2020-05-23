import React, { Component } from 'react';
const axios = require('axios');


export default class TodoList extends Component {
    click = () => {
        axios.get('https://httpbin.org/get')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render () {
        return (
            <div>
                <p>Welcome to Todos List Component!!</p>
                <button onClick={this.click}>click me</button>
            </div>
        )
    }
}