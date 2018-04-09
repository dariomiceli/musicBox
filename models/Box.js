const
	mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs'),
	boxSchema = new mongoose.Schema({
    name: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  })

const Box = mongoose.model('Box', boxSchema)
module.exports = Box