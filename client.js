var io = require("socket.io-client");

var scount = parseInt(process.argv[2],10) || 1;
// On Mac, must launchctl limit maxfiles 400000 unlimited
for (i=0;i<scount;i++) {

	var socket = io.connect('http://pp-node-pplinker.a3c1.starter-us-west-1.openshiftapps.com:8000/',{'force new connection':true});

	socket.on('ping', function (data) {
		console.log("client ping");
		socket.emit('pone');
	});

}