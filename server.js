

var app = require('express')();
var http = require('http').Server(app);

// initialize a new instance of socket.io by passing the http server object
var io = require('socket.io')(http);

var os = require('os');

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

function randomIntFromInterval(min,max){
   return Math.floor(Math.random()*(max-min+min));
}

// listen on the connection event for incoming sockets
// ... and log them to the console
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('mymessage', function(msg){
    console.log('mymessage: ' + msg);
  });
  socket.emit('mymessage', 'server sent this message to the browser');
  //var cpus = os.cpus();
  //var message = JSON.stringify(cpus);
  //console.log("cpus");
  //console.log(message);
  // var cpuUsage = randomIntFromInterval(1,100);
  //socket.emit('cpuinfo', cpuUsage.toString());

  setInterval(function(){
    var cpuUsage = randomIntFromInterval(1,100);
    socket.emit('cpuinfo', cpuUsage.toString());
  }, 3000);

  socket.on('disconnect', function(msg){
    console.log('user disconnected');
  });
});

http.listen(80, function(){
  console.log('listening on *:80');
});


