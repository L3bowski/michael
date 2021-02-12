const express = require('express');
const { join } = require('path');

module.exports = () => {
	const app = express();
	app.use('/michael', express.static(join(__dirname, 'docs')));
	return app;
};
