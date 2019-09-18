 const https = require('https')
 const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoibmVoYWxrdW1hciIsImEiOiJjazBkZDVqazgwNm1mM2JvMHoyMGdmYmxwIn0.FIENQX_ap6W9Zy2veC6Gkg'

 const request = https.request(url, function(response) {
     let data = ''

     response.on('data', function(chunk) {
         // chunk is a Buffer, which is Node's way of storing binary data

         data = data + chunk.toString()

     })
     response.on('end', function(error) {
         if (error) {
             return error;
         }
         const body = JSON.parse(data)
         console.log(body)
     })
 })
 request.end()