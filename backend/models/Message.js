const mongoose = require("mongoose")
const { Schema } = mongoose

const schemaMessage = new Schema({
    message: { type: String, required: false },
    author: { type: String, required: false },
    encryption: { type: Boolean, default: false },
    encryption_key: { type: Boolean, default: false },
    properties: { type: String, default: "Times New Roman" },
    coordinates: { type: Array },
    size: { type: String },
    receiver: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

class Message {

    validar() {
        let errores = []
        if (this.firstname == "") errores.push({ error: "El nombre no puede estar vacio." })
        if (this.message == "") errores.push({ error: "El mensaje no puede estar vacío." })
    }
}
//plugins
schemaMessage.loadClass(Message)
module.exports = mongoose.model('message', schemaMessage)