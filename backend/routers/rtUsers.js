const express = require('express')
const rtUsers = express.Router()
const daoUsers = require('../dao/daoUsers')

rtUsers.post('/signup',(req,res)=>{
    daoUsers.signup(req.body)
        .then(user=>res.json(user))
})

rtUsers.get('/list',(req,res)=>{
    daoUsers.list()
        .then(users=>res.json(users))
})

rtUsers.get('/get',(req,res)=>{ //?email='e@mail.com'
    daoUsers.findByEmail(req.query.email)
        .then(user=>res.json(user))
})

rtUsers.post('/delete/:id',(req,res)=>{
    daoUsers.delete(req.params.id)
    res.json({res: 'ok'})
})

rtUsers.post('/signin',(req,res)=>{
    daoUsers.signin(req.body.email,req.body.password)
        .then(data=>res.json(data))
})


module.exports= rtUsers