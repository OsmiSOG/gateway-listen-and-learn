'use strict'

const initServer = require('./gateway/server')
const config = require('./config/global')

initServer(config)