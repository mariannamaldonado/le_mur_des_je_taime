const express = require('express')
const rtMessage = express.Router()
const daoMessage = require('../dao/daoMessage')

rtMessage.post('/save',(req,res)=>{
    daoMessage.save(req.body)
        .then(message=>res.json(message))
        res.send('usuario guardado')
    })

rtMessage.get('/search/:id',(req,res)=>{
    daoMessage.findById(req.params.id)
        .then(entry=>res.json(entry))
})

rtMessage.get('/list',(req,res)=>{
    daoMessage.list()
        .then(entries=>res.json(entries))

})

rtMessage.post('/delete/:id',(req,res)=>{
    daoMessage.delete(req.params.id)
    res.json({res: 'ok'})
})



module.exports= rtMessage