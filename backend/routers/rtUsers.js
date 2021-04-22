const express = require('express')
const rtUsers = express.Router()
const daoUsers = require('../dao/daoUsers')
var passport = require('passport');

rtUsers.post('/signup', (req, res) => {
  daoUsers.signup(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
  //res.send('usuario guardado') //revisar linea Andree
})

rtUsers.get('/listar', (req, res) => {
  daoUsers.listar()
    .then(users => res.json(users))
})

rtUsers.get('/modify/:email', (req, res) => {
  let email = req.params.email
    .then(data => res.json(data))
  res.send("Modificando usurio: " + email)
})

rtUsers.get('/search/:email', (req, res) => {
  daoUsers.findByEmail(req.params.email)
    .then(user => res.json(user))
})

rtUsers.post('/delete/:id', (req, res) => {
  daoUsers.delete(req.params.id)
  res.json({ res: 'ok' })
})

rtUsers.post('/login', (req, res) => {
  daoUsers.signin(req.body.email, req.body.password)
  
    .then(data => res.json(data))
})

rtUsers.post("/send-email", (req, res) => {
  console.log("Email enviado")
  res.send('menasaje enviado')
})

rtUsers.get('/auth/facebook', (req, res) => {
  passport.authenticate('facebook')
  res.send('login Facebook')
})

rtUsers.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/', failureRedirect: '/login' }
))

rtUsers.get('/auth/google', (req, res) => {
  passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' })
  res.send('login Google')
})

rtUsers.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  });

module.exports = rtUsers