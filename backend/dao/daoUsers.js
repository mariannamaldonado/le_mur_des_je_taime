const User = require('../models/User')
const mailer = require('../modules/mailer')

const daoUsers = {}

//función para guardar un usuario
daoUsers.signup = (user) => {
    return new Promise((resolved, reject) => {
        let newUser = new User(user)
        newUser.save().then(user => {
            // usuario registrado, ahora enviar email
            mailer.send({
                to: user.email,
                //bcc:"le.mur.des.je.taime.fr@gmail.com",
                subject: "Registro usuario nuevo",
                template: 'signup',
                locals: {
                    name: user.firstname,
                    email: user.email
                }
            }).then(info => {
                resolved(user)
            })
        }).catch(err => {
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
//buscar usuario por id
daoUsers.findById = (user_id) => {
    return new Promise((resolved, reject) => {
        User.findOne({ _id: user_id })
            .then(user => resolved(user))
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
//función para validar password
daoUsers.updatePassword = (id, password) => {
    return new Promise((resolve, reject) => {
        const query = { _id: id };
        User.findOneAndUpdate(query, { password: password }, { runValidators: true })
            .then(user => {
                if (!user) throw new Error('El usuario no existe');
                resolve(user)
            })
            .catch(err => reject(err))
    })
}
//función para eliminar usuario
daoUsers.delete = (id) => {
    User.findOneAndRemove({ _id: id }, (data) => {
        console.log("Registro eliminado")
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
                }
            })
    })
}
//función para desloguear usuarios
daoUsers.logout = () => {
    return new Promise((resolved) => {
        passport.auth().logout()
            .then(() => resolved('Sesión cerrada correctamente'))
            .catch((error) => resolved(error))
    })
}

module.exports = daoUsers