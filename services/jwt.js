'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/global')

function createToken(user) {
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(14,'days').unix()
    }

    return jwt.encode(payload, config.AppToken)
}

function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.AppToken)
            if (payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(payload.sub)
        } catch (error) {
            reject({
                status: 500,
                message: 'Invalid token'
            })
        }
    })
    return decoded
}

module.exports = {
    createToken,
    decodeToken
}