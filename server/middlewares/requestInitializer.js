const uuid = require('uuid');

function requestInitializer(req, res, next) {
	req.requestData = req.requestData || {};
	req.requestData.requestId = uuid.v4();
	req.requestData.clientId = req.body.clientData.clientId;

	res.header('x-abc-requestId', req.requestData.requestId);

	next();
}

module.exports = requestInitializer;
