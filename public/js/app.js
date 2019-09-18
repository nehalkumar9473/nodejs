const weatherForm = document.querySelector('form') //form is from index.hbs file

const search = document.querySelector('input')


weatherForm.addEventListener('submit', (event) => {

    event.preventDefault() //it will prevent to default behaviour to refresh web page
    const location = search.value

    global.fetch = require('node-fetch')
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)

            }


        })

    })


    console.log(location)




    console.log('Running')
})