'use strict'

const jwt = require('./jwt')
const fetch = require('node-fetch')
const { response } = require('express')

const uriBase = 'http://[::1]:8000/api/'

function loginUser(req, res) {
    fetch(`${uriBase}get/user`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        if (data.success) {
            return res.status(200).send({
                message:'Bienvenido de nuevo a Listen and Learn, tu registro fue exitos, eperamos que te diviertas... !!!', 
                success:data.success,
                user: data.user, 
                token: jwt.createToken(data.user),
            })   
        } else {
            return res.status(200).send({
                message: data.message, 
                success:data.success,
                error: data.error
            })   
        }
    })
    .catch(error=>{
        return res.status(200).send({
            message: 'Error al identificarse con el usuario', 
            success: false,
            error
        })
    })
}

function logoutUser(req, res) {
    fetch(`http://[::1]:8000/`, {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
        },
        // body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

function newUser(req, res) {

    fetch(`${uriBase}new/user`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(response=>{
        return response.json()
    })
    .then(data => {
        if (data.success) {
            return res.status(200).send({
                message:'Bienvenido a Listen and Learn, tu registro fue exitos, eperamos que te diviertas... !!!', 
                success:data.success, 
                user: data.user,
                token: jwt.createToken(data.user)
            })
        } else {
            return res.status(200).send({
                message: data.message, 
                success:data.success,
                error: data.error
            })
        }
    })
    .catch(error=>{
        return res.status(200).send({
            message: 'Error al crear el nuevo usuario', 
            success: false,
            error
        })
    })
}

function languages(req, res) {
    fetch(`${uriBase}get/languages`, {
        method: 'GET',
        headers: {
            'content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        return res.status(200).send({
            languages: data, success: true
        });
    })

}
module.exports = {loginUser, logoutUser, newUser, languages}