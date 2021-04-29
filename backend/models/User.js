const mongoose = require("mongoose")
const { Schema } = mongoose
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const schemaUser = new Schema({
    firstname: { type: String, required: [true, "El nombre es obligatorio."]},
    lastname: { type: String, required: [true, "El apellido es obligatorio."]},
    username: { type: String},
    email: { 
        type: String, 
        required: [true, "El email es obligatorio."], 
        index: true, 
        unique: [true,"Existe un usuario registrado con el mismo email."],
        validate: [{validator: validateEmail, "msg":"El formato del e-mail no es válido"}]
    },
    password: { 
        type: String, 
        required: [true,"La contrasena es obligatoria."],
        validate: [{validator: validatePwdLength, "msg":"La contrasena deberia tener por lo menos 6 caracteres."}]    
    },
    active: { type: Boolean, default: false },
    provider_id: {type: String, unique: true},
    role: { type: Boolean, default: false },
    avatar: { type: String},
    createdAt: { type: Date, default: Date.now }
})

schemaUser.index({ email: 1 }, { unique: true })

schemaUser.pre('save', function (next) {
    bcrypt.hash(this.password, 6)
        .then(hash => {
            this.password = hash
            next()
        })
})

function validateEmail(email){
    let regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return regEmail.test(email)
}
function validatePwdLength(pwd){
    if(pwd.length >= 6)
        return true
    else 
        return false
}
class User {
    
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password)
    }
}

//plugins
schemaUser.loadClass(User)
module.exports = mongoose.model('user', schemaUser)