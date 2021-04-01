const mongoose = require("mongoose")
const { Schema } = mongoose

const schemaMessage = new Schema({
    message: { type: String, required: false },
    author: { type: String, required: false},
    encryption: { type: Boolean, default: true },
    encryption_key: { type: Boolean, default: false },
    properties: { type: String, default: "Times New Roman" },
    coordinates: { type: Array},
    size: { type: String },
    receiver: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

class Message {
    //set y get

    //privados

}

//plugins
schemaMessage.loadClass(Message)
module.exports = mongoose.model('message', schemaMessage)