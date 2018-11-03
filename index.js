const express = require('express');
const server = express();
const { join } = require('path');

server.use('/', express.static(join(__dirname, 'public')));

server.listen(80, error => {
	if (error) {
		console.error(error);
	}
	else {
		console.log('Express server listening on port 80');
	}
});
