// ************************************** Task 1 **************************************

const http = require("http");
const os = require('os');
const path = require('path');
const personalModule = require("./my_modules/personalmodule");

http.createServer( function(request, response) {
    // Send the HTTP header with HTTP Status: 200=OK, Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>System information</h1><br>");
    response.write("Current user name: " + os.hostname + "<br>");
    response.write("OS type: " + process.platform + "<br>");
    response.write("System work time: " + os.uptime()/60 + "<br>");
    response.write("System work directory: " + __dirname + "<br>");
    response.write("Server file name: " + path.basename(__filename) + "<br>");
    response.write("personalModule: " + personalModule.moduleFunc(os.hostname) + "<br>");
    // Send the response body as "Testing NodeJS server"
    response.end('Testing NodeJS server\n');
 }).listen(5000);

// ************************************** Task 2 **************************************

const os = require('os');
const express = require("express");
const personalModule = require("./my_modules/personalmodule");

const app = express();
app.get("", function(request, response){
    response.send(personalModule.moduleFunc(os.hostname));
});

app.listen(5000);