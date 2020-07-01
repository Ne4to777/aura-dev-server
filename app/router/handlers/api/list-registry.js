const schema = {
	ID: Number,
	Title: String,
	Name: String,
	webRelativeUrl: String
}

const handler = model => (req, res, next) => {
	model.find({}, (err, items) => {
		if (err) return console.log(err)
		res.json(items)
	})
}

module.exports = {
	name: 'ListRegistry',
	schema,
	handler
}