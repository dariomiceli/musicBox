const
	mongoose = require('mongoose'),
	boxSchema = new mongoose.Schema({
    name: { type: String },
    track1: {
      name: String,
      artist: String,
      picture: String,
      link: String
    },
    track2:{
      name: String,
      artist: String,
      picture: String,
      link: String
    },
    track3: {
      name: String,
      artist: String,
      picture: String,
      link: String
    },
    track4:{
      name: String,
      artist: String,
      picture: String,
      link: String
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  })

const Box = mongoose.model('Box', boxSchema)
module.exports = Box