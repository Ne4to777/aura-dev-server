const express = require('express')
const mongoose = require('mongoose')

const hostRegistry = require('./host-registry')
const listRegistry = require('./list-registry')
const sidebar = require('./sidebar')
const user = require('./user')
const userSP = require('./user-sp')

const { Schema } = mongoose

mongoose.pluralize(null)

const handlerFactory = ({ name, schema, handler }) => {
	const Model = mongoose.model(
		name,
		Schema(schema, {
			versionKey: false
		})
	)
	return handler(Model)
}

module.exports = express
	.Router()
	.get('/host-registry', handlerFactory(hostRegistry))
	.get('/list-registry', handlerFactory(listRegistry))
	.get('/sidebar', handlerFactory(sidebar))
	.get('/user', handlerFactory(user))
	.get('/user-sp', handlerFactory(userSP))
