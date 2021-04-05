const Message = require('../models/Message')

const daoMessage={}

//funcion para guardar mensaje
daoMessage.save = (message)=>{
    return new Promise((resolved)=>{
        let newMessage = new Message(message)
        newMessage.save()
            .then(message=>resolved(message))
    })

}

//funcion para eliminar
daoMessage.delete = (id)=>{
    Message.findOneAndRemove({_id:id},(data)=>{
        console.log("mensaje eliminado")
    })
}

//listado de mensajes
daoMessage.list =()=>{
    return new Promise((resolved)=>{
        Message.find()
            .then(entries=>resolved(entries))
    })
}

// buscar mensaje por ID findById(id)
daoMessage.findByid = (id) => {
    return new Promise((resolved) => {
        Message.findOne6({ _id: id })
            .then(message => resolved(message))
    })
}

module.exports=daoMessage