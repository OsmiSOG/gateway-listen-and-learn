'use strict'

const config = require('../config/global')
const genius = require('genius-lyrics-api');

async function searchSong(req, res) {
    try {
        const nameSong = req.params.song
        let options = {
            apiKey: config.genius.token,
            title: nameSong,
            artist: '',
            optimizeQuery: true
        }        
        const songs = await genius.searchSong(options)
        res.status(200).send({
            'message': 'Coincidencias de cancioens encontradas',
            songs,
            'success': true
        })
    } catch (error) {
        return res.status(500).send({
            'message':'Error al encontrar la cancion',
            'error': error,
            'success': false
        })
    }
}

async function getSongById(req, res) {
    try {
        const id = parseInt(req.params.id)
        const song = await genius.getSongById(id, config.genius.token) 
        res.status(200).send(song)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {searchSong, getSongById}