const Message = require('../models/Message')
const User = require('../models/User')
const daoMessage = {}

//funcion para guardar mensaje
daoMessage.save = (message, id) => {
    return new Promise((resolved) => {
        let MessageNew = new Message(message)
        MessageNew.user = id
        MessageNew.save()  
        
    })

}

//funcion para eliminar
daoMessage.delete = (id) => {
    Message.findOneAndRemove({ _id: id }, (data) => {
        console.log("mensaje eliminado")
        console.log(id);
    })
}

// listado de mensajes
// daoMessage.list = () => {
//     return new Promise((resolved) => {
//         Message.find()
//             .then(entries => resolved(entries))
//     })
// }

// buscar mensaje por ID findById(id)
daoMessage.findByid = (id) => {
    return new Promise((resolved) => {
        Message.findOne({ _id: id })
            .then(message => resolved(message))
    })
}

module.exports = daoMessage