const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('Tampilkan semua biodata')
})

router.get('/:id', function (req, res) {
    const id = req.params.id
    res.send('Tampilkan sebuah biodata pada id '+id)
})

module.exports = router;