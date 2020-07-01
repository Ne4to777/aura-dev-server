const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const urlencodedOpts = {
	extended: false
}

module.exports = [
	express.json(),
	express.urlencoded(urlencodedOpts),
	express.static(`${__dirname}/../public`),
	logger('dev'),
	cookieParser()
]
