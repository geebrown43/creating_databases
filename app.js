const express =require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const index = require('./routes/index')

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use('/', index)
app.listen(port, () => {
    console.log('listening on port:' + port)
})