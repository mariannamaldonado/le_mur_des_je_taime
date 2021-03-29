const mongoose = require("mongoose")
const { Schema } = mongoose

const schemaMessage = new Schema({
    message: { type: String},
    author: { type: String, required: true },
    encryption: { type: Boolean, default: false },
    encryption_key: { type: Boolean, default: true },
    properties: { type: String, default: "Times New Roman" },
    coordinates: { type: Array},
    size: { type: String },
    receiver: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user' }
})

class Message {
    //set y get

    //privados

}

//plugins
schemaMessage.loadClass(Message)
module.exports = mongoose.model('message', schemaMessage)