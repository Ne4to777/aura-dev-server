
const livereload = require('livereload')

const livereloadServerOpts = {
	exts: ['js']
}

module.exports = () => livereload
	.createServer(livereloadServerOpts)
	.watch(`${__dirname}/../public`)
