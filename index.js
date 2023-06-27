#!/bin/env node
var http, director, bot, router, server, port, ip, ipAddr, db;

http        = require('http');
director    = require('director');
bot         = require('./bot.js');
//
router = new director.http.Router({
  '/'    : {
    get: ping
  },
  '/init' : {
    get:  bot.init,
    post: bot.init
  },
  '/commands' : {
    get: bot.commands
  },
  '/bot/:botRoom' : {
    get: ping,
    post: bot.respond
  },
});

server = http.createServer(function (req, res) {
  req.chunks = [];

  req.on('data', function (chunk) {
    req.chunks.push(chunk.toString());
  });

  router.dispatch(req, res, function(err) {
    res.writeHead(err.status, {"Content-Type": "text/plain"});
    res.end(err.message);
  });
});

port = process.env.PORT || "8080";
ip = "0.0.0.0" || "127.0.0.1";

server.listen(port, function(req, res) {
/*  ipAddr = req.headers["x-forwarded-for"];
if (ipAddr){
  var list = ipAddr.split(",");
  ipAddr = list[list.length-1];
} else {
  ipAddr = req.connection.remoteAddress;
}
*/
  console.log('Server started on port: ' + port);
});

function ping() {
  this.res.writeHead(200);
  this.res.end("I am a robot.");
}
