const User = require('../models/User')
const mailer = require('../modules/mailer')


const daoUsers = {}

//función para guardar un usuario
daoUsers.signup = (user) => {
    return new Promise((resolved, reject) => {
        let newUser = new User(user)
        newUser.save().then(user => {
            mailer.send(user.email)
            resolved(user)
        }).catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}

//función para listar usurios
daoUsers.listar = () => {
    return new Promise((resolved, reject) => {
        User.find()
            .then(users => resolved(users))
            .catch(err => reject(err))
    })
}

//buscar usuario por email
daoUsers.findByEmail = (email) => {
    return new Promise((resolved) => {
        User.findOne({ email: email })
            .then(user => resolved(user))
    })
}

//función para eliminar usuario
daoUsers.delete = (id)=>{
    
    User.findOneAndRemove({_id:id},(data)=>{
        console.log("registro eliminado")
    })
}

//función para loguear usuarios
daoUsers.signin = (email, password) => {
    return new Promise((resolved, reject) => {
        User.findOne({ email: email })
            .then(data => {
                if (data) {
                    if (data.checkPassword(password))
                        resolved(data) //todo correcto ;)
                    else
                        resolved(null) //el password no coincide
                } else {
                    resolved(null) //no encuentro ese usuario
                }
            })
    })
}
//función para editar usuario





module.exports = daoUsers