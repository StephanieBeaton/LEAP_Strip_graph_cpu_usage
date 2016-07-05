var path   =   require("path");
var fs    =  require("fs");
var http  =  require("http");
var express  =  require("express");
var app  =  express();

//capture logs in the console
app.use(express.logger("dev"));

//serve static files - blank in the quotes means server.js is in the same folder as your HTML files.
app.use(express.static(__dirname + ''));

//404 error
app.use(function(req, res, next) {
  res.send(404, "file not found");
});

//start server
app.listen(80);
console.log("listening on port 80");
