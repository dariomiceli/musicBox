const
	express = require('express'),
	boxesRouter = new express.Router(),
	boxesCtrl = require('../controllers/boxesCtrl.js'),
	verifyToken = require('../serverAuth.js').verifyToken

boxesRouter.route('/')
	.get(boxesCtrl.index)
	.post(verifyToken, boxesCtrl.create)

boxesRouter.use(verifyToken)
boxesRouter.route('/:id')
	.get(boxesCtrl.show)
	.patch(boxesCtrl.update)
	.delete(boxesCtrl.destroy)

module.exports = boxesRouter