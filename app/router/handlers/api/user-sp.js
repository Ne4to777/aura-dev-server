const schema = {
	ID: Number,
	Title: String,
	LoginName: String,
	Id: Number,
	Email: String
}

const handler = Model => (req, res, next) => {
	Model.findOne({}, (err, items) => {
		if (err) return console.log(err)
		res.json(items)
	})
}

module.exports = {
	name: 'UserSP',
	schema,
	handler
}