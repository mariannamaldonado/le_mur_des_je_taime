const express = require('express')
const rtUsers = express.Router()
const daoUsers = require('../dao/daoUsers')
var passport = require('passport');
const jwt = require('jsonwebtoken');
const mailer = require('../modules/mailer');
const { user } = require('../mongodb');

rtUsers.post('/signup', (req, res) => {
  daoUsers.signup(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

rtUsers.get('/listar', (req, res) => {
  daoUsers.listar()
    .then(users => res.json(users))
})

rtUsers.get('/modify/:email', (req, res) => {
  let email = req.params.email
    .then(data => res.json(data))
})

rtUsers.get('/search/:email', (req, res) => {
  daoUsers.findByEmail(req.params.email)
    .then(user => res.json(user))
})

rtUsers.get('/delete/:id', (req, res) => {
  console.log(req.params.id)
  daoUsers.delete(req.params.id)
  res.json({ res: 'ok' })
})

rtUsers.post('/delete/:id', (req, res) => {
  daoUsers.delete(req.params.id)
  res.json({ res: 'ok' })
})

rtUsers.post('/login', (req, res) => {
  daoUsers.signin(req.body.email, req.body.password)
    .then(data => {
      if (data) {
        const token = jwt.sign({
          email: data.email,
          id: data._id
        }, process.env.TOKEN_SECRET)
        res.header('auth-token', token).json({
          data: { token }
        })
      } else {
        // 401 = HTTP codigo de error "No autorizado"
        res.status(401).json({ error: "üser/password incorrect" })
      }
    })
})

rtUsers.post("/send-email", (req, res) => {
  console.log("Email enviado")
  res.send('menasaje enviado')
})

rtUsers.post('/logout', (req, res) => {
    req.logout()
    res.redirect('/');
})

rtUsers.post("/forgotpassword", (req, res) => {
  var emailaddress = req.body.email

  daoUsers.findByEmail(emailaddress)
    .then(user => {
      // console.log(user)
      if (user) {
        try {
          mailer.send({
            to: user.email,
            //bcc:"le.mur.des.je.taime.fr@gmail.com",
            subject: "Reset Password",
            template: 'resetPassword',
            locals: {
              name: user.firstname,
              token: user._id,
            }
          })
        }
        catch (err) {
          console.log(err)
        }
      }
      res.json({ error: null, message: '¡Revisa tu correo y sigue las instrucciones para resetear tu contraseña!' })
    })
    .catch(err => res.json({ error: 'Este usuario no existe.', message: err }))
})

rtUsers.post("/resetpassword", (req, res) => {
  var id = req.body.token
  var password = req.body.password
  daoUsers.updatePassword(id, password)
    .then(user => {
      res.json({ error: null, message: `${user.firstname}, tu contraseña ha sido reseteada con exito` })
    })
    .catch(err => res.json({ error: 'Este usuario no existe.', message: JSON.stringify(err) }))
})

rtUsers.get('/auth/facebook', (req, res) => {
  console.log("logging with facebook")
  passport.authenticate('facebook')
})

// ejemplo ruta segura (necesita login)
rtUsers.post('/secure/currentuser', (req, res) => {
  console.log(req.current_user_id)
  daoUsers.findById(req.current_user_id)
    .then(user => res.json(user))
})



rtUsers.get('/auth/facebook/callback', passport.authenticate('facebook', { scope: ['email'] }), (req, res) => {
  console.log('logged in, ')

  const token = jwt.sign({
    id: res.req.user.id,
    email: req.user.email,
    firstname: res.req.user.firstname
  },
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256' });

  console.log(token)
  res.header('auth-token', token)
  res.redirect("/?token=" + token);
  //res.json({token:token});
})



rtUsers.get('/auth/google',
  passport.authenticate('google', {
    scope:
      ['email', 'profile']
  }
  ));

rtUsers.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  console.log('logged in, ')

  const token = jwt.sign({
    id: res.req.user.id,
    email: req.user.email,
    firstname: res.req.user.firstname
  },
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256' });

  console.log(token)
  res.header('auth-token', token)
  //res.json({token: token})
  res.redirect("/?token=" + token);
});








module.exports = rtUsers