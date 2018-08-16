/*
 * For starting project in nodeJS we need to do three things; 1.) Create a server.
 * 2.) Create a request and response. 3.) Test it.
 */

/*
 * For creating HTTP server with nodeJS we use http library.
 */

 var http = require("http");

 http.createServer(function(request, response) {
   response.writeHead(200, {"Content-Type" : "text/plain"});
   response.end("Hello World.");
 }).listen(8081);
 console.log("Server started at http://127.0.0.1:8081/");
