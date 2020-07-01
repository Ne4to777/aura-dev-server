const schema = {
	ID: Number,
	Title: String,
	icon: String,
	url: String,
	FileDirRef: String,
	orderCount: Number
}

const handler = Model => (req, res, next) => {
	Model.find({}, (err, items) => {
		if (err) return console.log(err)
		res.json(items)
	})
}

module.exports = {
	name: 'Sidebar',
	schema,
	handler
}