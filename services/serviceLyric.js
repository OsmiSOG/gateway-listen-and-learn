'use strict'

const { response, json } = require('express')
const fetch = require('node-fetch')

const uriBase = 'http://localhost:3000/api/'

function getAllLyrics(req ,res) {
    let page = req.params.page ? `page=${parseInt(req.params.page)}` : ''
    let limit = req.params.limit ? `limit=${parseInt(req.params.limit)}` : ''
    let query = ''
    if (page || limit) {
        query += '?'
        query += page ? page : '';
        query += limit ? `&${limit}` : '';
    }
    // console.log(query);
    fetch(`${uriBase}${query}`)
    .then(response => response.json())
    .then(data => {
        res.status(200).send(data)
    })
    .catch(error => {
        res.status(422).send({error})
    })
}

function getLyricsById(req, res) {
    let id = req.params.id
    let endpoint = `lyrics/${id}`
    fetch(`${uriBase}${endpoint}`)
    .then(response => response.json())
    .then(data => {
        let lyric = data
        res.status(200).send({lyric, success:true})
    })
    .catch(error => {res.status(200).send({error})})
}

function searchLyrics(req, res) {
    let search = req.params.search
    console.log(search, 'search');
    let endpoint = `lyrics/?search=${search}`
    fetch(`${uriBase}${endpoint}`)
    .then(response => response.json())
    .then(data => {
        let lyrics = data
        res.status(200).send({lyrics, success:true})
    })
    .catch(error => {res.status(200).send({error})})
}

function newLyrics(req, res) {
    console.log(req.body);
    fetch(`${uriBase}/lyrics`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(data => {
        res.status(200).send({lyric:data, success:true})
    })
    .catch(error => {
        return res.status(422).send({lyric:error, success:false})
    })
}

module.exports = {getAllLyrics, getLyricsById, searchLyrics, newLyrics}