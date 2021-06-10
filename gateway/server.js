'use strict'

const express = require('express')
const cors = require('cors')
const gatewayRoutes = require('./accessRoutes')

function initServer(config) {
    const app = express()

    app.use(cors())    
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use('/lal', gatewayRoutes)
    app.listen(config.server.port, () => {
        console.log(`server listen at http://localhost:${config.server.port}`);
    })
    
}

module.exports = initServer
