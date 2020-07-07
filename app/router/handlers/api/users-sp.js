const schema = {
	ID: Number,
	Title: String,
	LoginName: String,
	Email: String
}

const handler = Model => (req, res, next) => {
	Model.findOne({ ID: req.params.id }, (err, items) => {
		if (err) return console.log(err)
		res.json(items)
	})
}

module.exports = {
	name: 'UsersSP',
	schema,
	handler
}