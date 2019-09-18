// global.fetch = require("node-fetch");

// console.log('client side java script ')


// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => { // It will run when JSON Data arive and then data will parse that time THEN will run

//         console.log(data)

//     })
// })
global.fetch = require('node-fetch')
fetch('http://localhost:3000/weather?weather=Boston').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)

        }


    })

})