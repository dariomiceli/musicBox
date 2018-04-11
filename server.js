const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/music-box',
	PORT = process.env.PORT || 3001,
  usersRouter = require('./routes/usersRouter.js'),
  boxesRouter = require('./routes/boxesRouter.js')
  

mongoose.connect(MONGODB_URI, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "Welcome to the Music-Box API root."})
})

// Routers
app.use('/api/users', usersRouter)
app.use('/api/boxes', boxesRouter)

app.get('/api/search/:trackName', (req, res) => {
  // 1. using req.params.trackName, search spotify with axios
  // 2. when you get a response from spotify, then send a response to your client...
  // res.json({ message: "You searched for: " + req.params.trackName })
})

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})