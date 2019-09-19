const path = require('path')
const express = require('express')
    //const hbs = require('ejs')
    //var ejs = require('ejs');

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').renderFile);

const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath))

app.get('/abc', function(req, res) {
    res.render('views/about');
})

app.get('/node', function(req, res) {
    res.render('about', {
        title: 'Express',
        name: 'Node'
    })
})






// app.get('', function(req, res) {
//     res.send('<h1>Hello Express</h1>') // html message
// })

app.get('/help', function(req, res) { //res.send("It's a Help Page")
    res.send({
        name: 'name', // JSON message
        age: 23
    })
})
app.get('/about', function(req, res) {
    res.send('its an about page')
})
app.get('/weather', function(req, res) {
    //console.log(req.query)
    if (!req.query.weather) {
        return res.send({
            error: 'No Address'
        })

    }

    res.send({
        weather: []
    })
})
app.get('/info', function(req, res) {
    console.log(req.query)
    res.send({

        search: []
    })
})

app.listen(port, function() {
    console.log('server is running at port')
})