'use strict'
const express = require('express')
const user = require('../services/serviceUser')
const genius = require('../services/serviceGenius')
const lyrics = require('../services/serviceLyric')
const auth = require('../middleware/auth')

const lal = express.Router()

lal.post('/login', user.loginUser)
lal.post('/logout', auth, user.logoutUser)
lal.post('/register', user.newUser)
lal.get('/lyrics/id/:id', lyrics.getLyricsById)
lal.get('/lyrics/search/:search', lyrics.searchLyrics)
lal.get('/lyrics/:page?/:limit?', lyrics.getAllLyrics)
lal.post('/lyrics', auth, lyrics.newLyrics)
lal.get('/genius/id/:id',  auth, genius.getSongById)
lal.get('/genius/search/:song', auth, genius.searchSong)

module.exports = lal
