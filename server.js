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
  boxesRouter = require('./routes/boxesRouter.js'),
  axios = require('axios'),
  Spotify = require('node-spotify-api'),
  spotifyClient = new Spotify({
    id: process.env.SPOTIFY_CLIENT_ID,
    secret: process.env.SPOTIFY_CLIENT_SECRET
  })

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
  spotifyClient
  .search({ type: 'track', query: req.params.trackName, limit: 5 })
  .then(function(response) {
    res.json(response);
  })
  .catch(function(err) {
    console.log(err);
  });
})

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})