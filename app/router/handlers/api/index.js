const express = require('express')
const mongoose = require('mongoose')

const users = require('./users')
const userSP = require('./users-sp')

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
	.get('/users/:id', handlerFactory(users))
	.get('/users-sp/:id', handlerFactory(userSP))
