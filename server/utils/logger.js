const logger = ({ level, message, requestId }) => {
	const errString = `${level} error occured for ${requestId} - error is - `;
	console.log(errString, message);
};

module.exports = logger;
