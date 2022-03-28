const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
//! 1. convert json into js object, import data from data.json
const dataFile = require('../data/data.json'); //path
//{artists: [{},{}]} Deborah_01.jpg
//console.log(dataFile.artists);
//
let pageArtists = dataFile.artists
//! 2. concat all albums (images) of all artists into 1 array and pass it to ejs file to replace the hard-coded images.use a loop

router.get('/', (req, res) => {
    let albumsIMG = [];
    let tracks = [];
    pageArtists.forEach(artistsObj => { //from data extract albums
        albumsIMG = albumsIMG.concat(artistsObj.albums) 
        tracks = tracks.concat(artistsObj.tracks)
       
    })
    console.log(albumsIMG)
    res.render('index', {//pass it over ejs
        albums: albumsIMG,
        tracks: tracks
    })
})
module.exports = router;