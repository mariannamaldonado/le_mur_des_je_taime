const Message = require('../models/Message')
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

//listado de mensajes
daoMessage.list = () => {
    return new Promise((resolved) => {
        Message.find()
            .then(entries => resolved(entries))
    })
}

///cambiar jean
// rtMessage.get('/list',function(req,res){
//     message.find({},function(err,message){
//         User.populate(message,{path:"user"},function(err,message){
//             res.status(200).send(message)
//         })
//     })
// })


// buscar mensaje por ID findById(id)
daoMessage.findById = (id) => {
    return new Promise((resolved) => {
        Message.findOne({ _id: id })
            .then(message => resolved(message))
    })
}

module.exports = daoMessage