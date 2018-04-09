const Box = require('../models/Box.js')
const signToken = require('../serverAuth.js').signToken

module.exports = {
	// list all boxes
	index: (req, res) => {
		Box.find({}, (err, boxes) => {
			res.json(boxes)
		})
	},

	// get one user
	show: (req, res) => {
		Box.findById(req.params.id, (err, box) => {
			res.json(box)
		})
	},

	// create a new user
	create: (req, res) => {
		Box.create(req.body, (err, box) => {
			if(err) return res.json({success: false, message: "nope!!!", code: err.code})
			// once user is created, generate a token to "log in":
			const token = signToken(box)
			res.json({success: true, message: "Box created. Token attached.", token})
		})
	},

	// update an existing user
	update: (req, res) => {
		Box.findById(req.params.id, (err, box) => {
			Object.assign(box, req.body)
			box.save((err, updatedUser) => {
				res.json({success: true, message: "Box updated.", box})
			})
		})
	},

	// delete an existing box
	destroy: (req, res) => {
		Box.findByIdAndRemove(req.params.id, (err, box) => {
			res.json({success: true, message: "Box deleted.", box})
		})
	}
}