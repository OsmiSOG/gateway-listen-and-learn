'use strict'

const services = require('../services/jwt')

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({message: 'No tienes autorización'})
    }
    const token = req.headers.authorization

    services.decodeToken(token)
        .then(response => {
            req.user = response
            next()
        })
        .catch(response => {
            res.status(response.status)
        })
}

module.exports = isAuth