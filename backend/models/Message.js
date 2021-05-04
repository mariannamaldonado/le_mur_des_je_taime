const mongoose = require("mongoose")
const { Schema } = mongoose

const schemaMessage = new Schema({
    message: { type: String, required: false },
    encryption: { type: Boolean, default: false },
    encryption_key: { type: Array, default: false },
    properties: { type: String, default: "Times New Roman" },
    size: { type: String },
    addresseEmail: { type: String, required: false },
    addresseName: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}) 

class Message {

    validar() {
        let errores = []
        if (this.addresseName == "") errores.push({ error: "El nombre no puede estar vacio." })
        if (this.addresseEmail == "") errores.push({ error: "El email no puede estar vacío." })
        if (this.message == "") errores.push({ error: "El mensaje no puede estar vacío." })
    }
}
//plugins
schemaMessage.loadClass(Message)
module.exports = mongoose.model('message', schemaMessage)