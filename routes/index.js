const express = require('express')
const router = express.Router()
const db = require('../db/query')

router.get('/', (req,res) => {
    db.getAllCompanies()
    .then(data => res.render('index', {
        data:data
    }))
})

router.post('/user', (req, res) => {
    let body = req.body
    console.log(body)
    db.postUser(body)
    .then(data => res.redirect('/'))
})
module.exports = router