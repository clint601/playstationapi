const express = require('express')
const axios = require('axios')
const router = express.Router()


router.use(express.static('public'))


const gameRoutes = require('./api/gamesRoutes')
router.use('/games', gameRoutes)


// home page
//localhost:3000
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'PlayStation',
        name: 'PlayStationGames'
    })
})



module.exports = router