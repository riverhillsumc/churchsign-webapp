# churchsign-webapp
Webapp version of church sign controller

# Setup
* Install Node.js
* Clone this repo
* In the repo directory run `npm i`

# Starting the development environment
Run `npm start`

# Builds
Run `npm run build`

# Running the webapp server
After running `npm run build` you can run `npm run webapp_server`.

This will start a Express server running `localhost:4444` and pointing to the `./build` folder. The port can be configured in the `./server.js` file.