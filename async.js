// console.log('starting')

// setTimeout(function() {
//     console.log('program stop after 2 sec')

// }, 2000)

// setTimeout(() => {
//     console.log('0 sec timer')
// }, 0)

// console.log('stoped')

// USing of HTTP request

const request = require('request')
const chalk = require('chalk')


// const url = 'https://api.darksky.net/forecast/e02af5d72e4937b5951738a309edaef0/37.8267,-122.4233'
// request({ url: url, json: true }, (err, response) => {

//     //const data = JSON.parse(response.body)
//     console.log(chalk.black.bgYellow.italic(response.body.daily.data[0].summary + 'it is currently ' + '"' + response.body.currently.temperature + '"' + ' degrees out. There is -' + '"' + response.body.currently.humidity + '"' + ' humidity'))
// })


// // Geocoding

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoibmVoYWxrdW1hciIsImEiOiJjazBkZDVqazgwNm1mM2JvMHoyMGdmYmxwIn0.FIENQX_ap6W9Zy2veC6Gkg&limit'
// request({ url: geocodeURL, json: true }, function(err, response) {

//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]

//     console.log(latitude, longitude)

// })


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoibmVoYWxrdW1hciIsImEiOiJjazBkZDVqazgwNm1mM2JvMHoyMGdmYmxwIn0'

request({ url: geocodeURL, json: true }, function(error, response) {

    if (error) {
        console.log('Unable to connect to location service');
    } else if (response.body.features) {
        console.log('Unable to find location try another search')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]

        console.log(latitude, longitude)


    }

})