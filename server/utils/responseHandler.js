function respond(res, status, obj) {
	if (!res) {
		return;
	}

	if (!status) {
		res.status(500);
		res.send({ message: 'Something went wrong!' });
		return;
	}

	res.status(status);

	obj = obj || {};
	res.send(obj);
}

module.exports = respond;
