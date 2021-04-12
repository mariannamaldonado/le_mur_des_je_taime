const express = require('express')
const rtMessage = express.Router()
const daoMessage = require('../dao/daoMessage')
const message = require('../models/Message')
const User = require('../models/User')

rtMessage.post('/save/:id',(req,res)=>{
    daoMessage.save(req.body, req.params.id)
        .then(message=>res.json(message))
        res.send('mensaje guardado')

})

rtMessage.get('/search/:id',(req,res)=>{
    daoMessage.findById(req.params.id)
        .then(message=>res.json(message))
        res.json({res: 'ok'})

})

rtMessage.get('/list',function(req,res){
    message.find({},function(err,message){
        User.populate(message,{path:"user"},function(err,message){
            res.status(200).send(message)
        })
    })
})

rtMessage.post('/delete/:id',(req,res)=>{
    daoMessage.delete(req.params.id)
})

/*anny has pruebas*/
/*rtMessage.post('/messages/:_id', async function(req,res){
    const MessageNew = new Message(req.body)     //crear mensaje para usuario
    const user = await User.findById(req.params)     //buscar usuario para asignar mensaje
    MessageNew.user = user      //asignar al usuario como autor 
    await MessageNew.save()      //guardar el mensaje para el usuario
    res.json({res: 'ok'})
 
})*/





module.exports= rtMessage