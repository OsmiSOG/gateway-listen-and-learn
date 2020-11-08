'use strict'
const express = require('express')
const user = require('../services/serviceUser')
const genius = require('../services/serviceGenius')
const lyrics = require('../services/serviceLyric')
const auth = require('../middleware/auth')

const lal = express.Router()

lal.post('/login', ()=>{})
lal.post('/logout', auth, ()=>{})
lal.post('/register', ()=>{})
lal.get('/lyrics', ()=>{})
lal.get('/lyrics/:id', ()=>{})
lal.get('/lyrics/:search', ()=>{})
lal.post('/lyrics', auth, ()=>{})
lal.post('/genius/:song', auth, ()=>{})
lal.post('/genius/:id', auth, ()=>{})

module.exports = lal