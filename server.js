var http = require('http');
var fs = require('fs');
var url = require('url');
//url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoibmVoYWxrdW1hciIsImEiOiJjazBkZDVqazgwNm1mM2JvMHoyMGdmYmxwIn0.FIENQX_ap6W9Zy2veC6Gkg'

http.createServer(function(request, response) {

    //parse the request containing file name
    var pathname = url.parse(request.url).pathname;

    // print the file name for which request is made
    console.log('Request for' + pathname + 'received');

    // read the request file content from file system

    fs.readFile(pathname.substr(1), function(err, data) {

        if (err) {

            console.log(err);

            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data.toString());
            response.end();
        }
    });


}).listen(3000);

console.log("server runing at http://127.0.1:3000");