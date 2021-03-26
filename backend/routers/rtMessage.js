const express = require('express')
const rtMessage = express.Router()
const daoMessage = require('../dao/daoMessage')

rtMessage.post('/save',(req,res)=>{
    daoMessage.save(req.body)
        .then(entry=>res.json(entry))
})

rtMessage.get('/get/:id',(req,res)=>{
    daoMessage.findById(req.params.id)
        .then(entry=>res.json(entry))
})

rtMessage.get('/list',(req,res)=>{
    daoMessage.listar()
        .then(entries=>res.json(entries))
})

rtMessage.post('/delete/:id',(req,res)=>{
    daoMessage.delete(req.params.id)
    res.json({res: 'ok'})
})



module.exports= rtMessage