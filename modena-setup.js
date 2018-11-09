const { configureEndpoints } = require('modena');
const path = require('path');

module.exports = configureEndpoints(router => {
	router.get('/', (req, res, next) =>
		res.sendFile(path.join(__dirname, 'public', 'index.html')));
});
