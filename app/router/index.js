const express = require('express')

const appRouter = require('./handlers/app')
const apiRouter = require('./handlers/api')

module.exports = express
	.Router()
	.use('/', appRouter)
	.use('/api', apiRouter)
