const axios = require('axios');
const querystring = require('querystring');

const SERVER_LOCATION = 'http://localhost:4000';

const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

/*
 * parameters
 *  params: {
 *    key
 *    value
 *  }
 *
*/
exports.restCall = async (serverLocation = 'localhost', params) => {
    let jsonString = params;
    console.log(jsonString);
    let json = JSON.parse(jsonString);
    let body = querystring['stringify'](json);

    console.log('body: ', body)
    // debugger
    let config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    await axios.post(serverLocation, body, config)
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
            console.log('about to sleep for 3000 mil')
            sleep(3000);
        });
}