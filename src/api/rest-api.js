const axios = require('axios');
const querystring = require('querystring');

/*
 * parameters
 *  params: {
 *    key
 *    value
 *  }
 *
*/
exports.restCall = (params) => {
    // ""text1": "xyz""
    let jsonString = `{"${params.key}":"${params.value}"}`;
    console.log(jsonString)
    let json = JSON.parse(jsonString);
    let body = querystring['stringify'](json);

    console.log('body: ', body)
    // debugger
    let config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    axios.post('http://localhost:4000', body, config)
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