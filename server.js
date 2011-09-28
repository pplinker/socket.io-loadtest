var io = require('socket.io').listen(8000);

io.set("log level",1);

var socketsCount = 0;
var pingsCount = 0;

io.sockets.on('connection', function (socket) {
  
  socketsCount++;

  var itv = setInterval(function() {
	socket.send('ping');
	pingsCount++;
  },1000);

  socket.on('disconnect',function() {
	clearTimeout(itv);
	socketsCount--;
  });

});

setInterval(function() {
	console.log(pingsCount+" pings sent over "+socketsCount+" sockets.");
},1000);