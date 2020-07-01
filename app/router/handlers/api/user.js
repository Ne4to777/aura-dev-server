const schema = {
	ID: Number,
	Title: String,
	name: String,
	surname: String,
	patronymic: String,
	workerID: String,
	userID: Number,
	avatar: String,
	avatarPosition: String,
	email: String,
	administrativeLeaderID: String,
	methodistLeaderID: String,
	login: String,
	position: String,
	fullPath: String,
	shortPath: String,
	birthDate: String,
	address: String,
	room: String,
	phoneMobile: String,
	phoneWork: String,
	gender: String,
	fired: String,
	active: String
}

const handler = Model => (req, res, next) => {
	Model.findOne({}, (err, items) => {
		if (err) return console.log(err)
		res.json(items)
	})
}

module.exports = {
	name: 'User',
	schema,
	handler
}
