var io = require("socket.io-client");

// On Mac, must launchctl limit maxfiles 400000 unlimited
for (i=0;i<10000;i++) {

	var socket = io.connect('http://localhost:8000/',{'force new connection':true});

	socket.on('connection', function () {
	  
	  socket.on('ping', function (data) {
	    socket.emit('pong', { content: 'parisjs' });
	  });
	  
	});

}