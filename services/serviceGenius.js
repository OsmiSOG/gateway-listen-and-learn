const config = require('../config/global')
const genius = require('genius-lyrics-api');

const options = {
    apiKey: config.genius.token,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    optimizeQuery: true
}

async function testGenius(req, res) {

    try {
        const lyrics = await genius.getLyrics(options)
        console.log(lyrics);
        res.status(200).send({'lyrics':lyrics})
    } catch (error) {
        console.log(error);
    }
    // genius.getSong(options).then((song) =>
    //     console.log(`
    //     ${song.id}
    //     ${song.url}
    //     ${song.albumArt}
    //     ${song.lyrics}`)
    // );
}

module.exports = testGenius