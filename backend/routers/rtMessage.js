const express = require('express')
const rtMessage = express.Router()
const daoMessage = require('../dao/daoMessage')
const message = require('../models/Message')
const User = require('../models/User')

rtMessage.post('/secure/save/:id', (req, res) => {
    daoMessage.save(req.body, req.user.id)
        .then(message => {

            try {
                mailer.send({
                    to: message.addresseEmail,
                    //bcc:"le.mur.des.je.taime.fr@gmail.com",
                    subject: "Tienes un mensaje de amor en : Le Mur Des Je T`aime",
                    template: 'newLoveEmail',
                    locals: {
                        link: 'http://localhost:8081/#/LeMur'
                    }
                })
            }
            catch (err) {
                console.log(err)
            }

            res.json(message)
        })
        .catch(res.status(401).json({ error: "error" }))
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

})

rtMessage.post('/delete/:id', (req, res) => {
    daoMessage.delete(req.params.id)
})

module.exports = rtMessage