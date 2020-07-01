const mongoose = require('mongoose')
const express = require('express')
const router = require('./router')
const middleware = require('./middleware')
const handlers = require('./handlers')
const livereload = require('./livereload')

livereload()

mongoose.pluralize(null)

mongoose.connect('mongodb://localhost/aura', {
	useUnifiedTopology: true,
	useNewUrlParser: true
})
	.catch(console.log)


module.exports = express()
	.set('views', `${__dirname}/views`)
	.set('view engine', 'ejs')
	.use('/', router)
	.use(...middleware)
	.use(...handlers)
