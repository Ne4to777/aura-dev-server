
const httpStatusCodes = require('./httpStatusCodes.json')

const notFound = (req, res) => {
	res
		.status(httpStatusCodes.notFound)
		.render('notFound', {
			url: req.url
		})
}

const error = (err, req, res) => {
	res
		.status(httpStatusCodes.internalServer)
		.render('error', {
			error: err,
			res
		})
}

const success = (err, req, res, next) => {
	next(err)
}

module.exports = [notFound, success, error]
