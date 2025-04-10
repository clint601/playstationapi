const express = require('express')
const router = express.Router()
const axios = require('axios')


let count 
axios.get('https://api.sampleapis.com/playstation/games')
.then(res => count = res.data.length)

//localhost:3000/games
router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/playstation/games'

    axios.get(url).then(resp => {
        res.render('pages/games', {
            title: 'PlayStation',
            name: 'Games',
            data: resp.data,
            path: 'games'
        })
    })
})

// does not work dont know how to fix yet to be continued

// router.get('/genre/:genre', (req, res) => {
//     const genreParam = req.params.genre.toLowerCase();
//     const url = 'https://api.sampleapis.com/playstation/games';
//     let genreArr
//     axios.get(url)
//     .then(resp => genreArr = resp.data.filter(item => (item genre == genre))
//         .then(genreArr => {
//             res.render('pages/games', {
//             title: genreParam,
//             name: `${genreParam} games`,
//             data: genreArr
//             })
//         })
//     })



//single pages
// locathost:3000/game${id}

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/playstation/games/${id}`


    axios.get(url).then(resp => {
        const data =resp.data
        res.render('pages/gamesSingle', {
            title: data.title,
            name: data.name,
            data: data,
            path: 'games',
            count
        })
    })
})

module.exports = router