const path = require('path')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const data = require('./data/items.json')

const biodataRouter = require('./routes/biodata')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index', {
        items: data
    })
})

app.get('/detail/:id', (req , res) => {
    const item = data.find(data => {
        return data.id === parseInt(req.params.id)
    })
    res.render('detail', {
        item: item
    })
})

app.get('/echo', (req, res) => {
    res.render('post')
})
app.post('/echo', (req, res) => {
    res.render('post', {
        nama: req.body.nama
    })
})

app.get('/pindah', (req, res) => {
    res.redirect('/')
})

// app.get('/:nama/:umur', function (req, res) {
//     const nama = req.params.nama
//     const umur = req.params.umur

//     res.send('Hello ' + nama + ' umur anda ' + umur)
// })

app.use('/biodata', biodataRouter)

app.listen(3000,function (err) {
    console.log('Server berjalan')
})