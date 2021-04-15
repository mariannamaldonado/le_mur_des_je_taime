const mongoose = require("mongoose")
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const schemaUser = new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    username: { type: String},
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: false },
    provider_id: {type: String, unique: false},
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

class User {

    validar() {
        let errores = []
        if (this.firstname == "") errores.push({ error: "El nombre no puede estar vacio." })
        if (this.lastname == "") errores.push({ error: "El apellido no puede estar vacío." })
        if (this.username == "") errores.push({ error: "El seudonimo no puede estar vacío." })
        if (this.email == "") errores.push({ error: "El email no puede estar vacío." })
        if (this.password == "") errores.push({ error: "El password no puede estar vacío." })

        //validacion el e-mail:
        let regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!regEmail.test(this.email)) errores.push({ error: "El formato del e-mail no es válido" })
    }
    //privados
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password)
    }
}

//plugins
schemaUser.loadClass(User)
module.exports = mongoose.model('user', schemaUser)