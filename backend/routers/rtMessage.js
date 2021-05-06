const express = require('express')
const rtMessage = express.Router()
const daoMessage = require('../dao/daoMessage')
const message = require('../models/Message')
const User = require('../models/User')
const payload = require('../services')

rtMessage.post('/save/:id', (req, res) => {
    daoMessage.save(req.body, req.params.id)
        .then(message => res.json(message))
    res.send('mensaje guardado')
})

rtMessage.get('/search/:id', (req, res) => {
    daoMessage.findById(req.params.id)
        .then(message => res.json(message))
})

rtMessage.get('/list', function (req, res) {
    message.find({}, function (err, message) {
        User.populate(message, { path: "user" }, function (err, message) {
            res.status(200).send(message)
        })
    })
})

rtMessage.get('/listUser/:id', (req, res) => {
    daoMessage.listUser(req.params.id)
        .then(message => res.json(message))
        console.log(payload)

})

rtMessage.post('/delete/:id', (req, res) => {
    daoMessage.delete(req.params.id)
})

module.exports = rtMessage