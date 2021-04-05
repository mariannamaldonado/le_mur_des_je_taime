const express = require('express')
const rtMessage = express.Router()
const daoMessage = require('../dao/daoMessage')
const Message = require('../models/Message')
const User = require('../models/User')

rtMessage.post('/save',(req,res)=>{
    daoMessage.save(req.body)
        .then(message=>res.json(message))
        res.send('mensaje guardado')
    })

rtMessage.get('/search/:id',(req,res)=>{
    daoMessage.findById(req.params.id)
        .then(message=>res.json(message))
        res.json({res: 'ok'})

})

rtMessage.get('/list',(req,res)=>{
    daoMessage.list()
        .then(message=>res.json(message))

})

rtMessage.post('/delete/:id',(req,res)=>{
    daoMessage.delete(req.params.id)
})

rtMessage.post('/messages/:_id', async function(req,res){
    const MessageNew = new Message(req.body)     //crear mensaje para usuario
    const user = await User.findById(req.params)     //buscar usuario para asignar mensaje
    MessageNew.user = user      //asignar al usuario como autor 
    await MessageNew.save()      //guardar el mensaje para el usuario
    user.messages.push(MessageNew)       //asignar el mensaje dentro del array 
    await user.save()       //guardar al usuario con su mensaje nuevo
    res.json({res: 'ok'})
 
})

module.exports= rtMessage