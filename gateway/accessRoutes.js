'use strict'
const express = require('express')
const user = require('../services/serviceUser')
const genius = require('../services/serviceGenius')
const lyrics = require('../services/serviceLyric')
const auth = require('../middleware/auth')

const lal = express.Router()

lal.post('/login', user.loginUser)
lal.post('/logout', user.logoutUser)
lal.post('/register', user.newUser)
lal.get('/lyrics/id/:id', lyrics.getLyricsById)
lal.get('/lyrics/search/:search', lyrics.searchLyrics)
lal.get('/lyrics/:page?/:limit?', lyrics.getAllLyrics)
lal.post('/lyrics', auth, lyrics.newLyrics)
lal.post('/genius/:song', auth, genius.searchSong)
lal.post('/genius/:id', auth, genius.getSongById)

module.exports = lal
