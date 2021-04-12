const express = require('express')
const rtMessage = express.Router()
const daoMessage = require('../dao/daoMessage')
const Message = require('../models/Message')
const User = require('../models/User')

rtMessage.post('/save/:id', (req, res) => {
    daoMessage.save(req.body, req.params.id)
        .then(message => res.json(message))
    res.send('mensaje guardado')
})

rtMessage.get('/search/:id', (req, res) => {
    daoMessage.findById(req.params.id)
        .then(message => res.json(message))
})

rtMessage.get('/list', (req, res) => {
    daoMessage.list()
        .then(message => res.json(message))
})

rtMessage.post('/delete/:id', (req, res) => {
    daoMessage.delete(req.params.id)
})

/*anny has pruebas*/
// rtMessage.post('/messages/:_id', async function(req,res){
//     const MessageNew = new Message(req.body.id)     //crear mensaje para usuario
//     const user = await User.findById(req.params.id)     //buscar usuario para asignar mensaje
//     MessageNew.user = user      //asignar al usuario como autor 
//     await MessageNew.save()      //guardar el mensaje para el usuario
//     res.json({res: 'ok'})

// })





module.exports = rtMessage