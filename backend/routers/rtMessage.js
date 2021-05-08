const express = require('express')
const rtMessage = express.Router()
const daoMessage = require('../dao/daoMessage')
const message = require('../models/Message')
const User = require('../models/User')
const mailer = require('../modules/mailer');

rtMessage.post('/secure/save', (req, res) => {
    daoMessage.save(req.body, req.user.id)
        .then(message => {
            try {
                mailer.send({
                    to: message.addresseEmail,
                    //bcc:"le.mur.des.je.taime.fr@gmail.com",
                    subject: "Tienes un mensaje de amor en : Le Mur Des Je T`aime",
                    template: 'newLoveEmail',
                    locals: {
                        name: message.addresseName, 
                        sender: req.user.firstname,
                        link: 'http://localhost:8081/#/LeMur'
                    }
                })
            }
            catch (err) {
                console.log(err)
            }

            res.json({error:null, message:message})
        })
        .catch(err => {
            console.log(err)
            res.json({error:err, message:null})
        })
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

rtMessage.get('/secure/listUser', (req, res) => {
    daoMessage.listUser(req.user.id)
        .then(message => res.json(message))

})

rtMessage.post('/delete/:id', (req, res) => {
    daoMessage.delete(req.params.id)
    .then(res.json({error:null,message:"success"}))
    .catch(res.json({error:"ërror",message:null}))

})

module.exports = rtMessage