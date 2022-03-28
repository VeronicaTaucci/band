const express = require("express");
const res = require("express/lib/response");
const router = express.Router()
let dataFile = require('../data/data.json'); //json is an object now

//! get to the data data.artists
let pageArtists = dataFile.artists;//array of objects

//! 1 route for all artists
//! 1 route for individual artist



//localhost:300/artists
router.get('/artists', (req, res) => {
    let albumsIMG = [];
    let tracks = [];
    pageArtists.forEach(artistsObj => { //from data extract albums
        albumsIMG = albumsIMG.concat(artistsObj.albums);
        //tracks = tracks.concat(artistsObj.tracks);

    })
    console.log(albumsIMG)
    res.render('artists', {//pass it over ejs
        albums: albumsIMG,
        artists: pageArtists, //display artist info
        tracks: tracks,
    })
})


//localhost:300/artists/Deborah
router.get('/artists/:stageName', (req, res) => {
    let artistName = req.params.stageName
    let albumsIMG = [];
    let photos = [];
    let artist = [];
    let tracks = [];
    pageArtists.forEach(artistsObj => { //from data extract albums
        if (artistsObj.stageName === artistName) {
            photos = artistsObj.albums;
            tracks = tracks.concat(artistsObj.tracks);
            artist.push(artistsObj)

        }

    })
    res.render('artists', {//pass it over ejs
        albums: photos,
        artists: artist, //display artist info
        tracks:tracks,
    })
})

module.exports = router;