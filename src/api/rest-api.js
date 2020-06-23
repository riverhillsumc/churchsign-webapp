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
exports.restCall = async (serverLocation = 'localhost', body, sleepTime = 100) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
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
            sleep(sleepTime);
        });
}