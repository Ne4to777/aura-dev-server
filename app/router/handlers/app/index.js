const express = require('express')

const root = require('./root')
const users = require('./users')

module.exports = express
	.Router()
	.get('/', root)
	.get('/users', users)
