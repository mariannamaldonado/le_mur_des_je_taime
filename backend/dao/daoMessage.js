const Message = require('../models/Message')

const daoMessage={}

//funcion para guardar una entrada
daoMessage.save = (message)=>{
    return new Promise((resolved)=>{
        let newMessage = new Message(message)
        newMessage.save()
            .then(message=>resolved(message))
    })

}


daoMessage.delete = (id)=>{
    Message.findOneAndRemove({_id:id},(data)=>{
        console.log("registro eliminado")
    })
}

//listar todas las entradas
daoMessage.list =()=>{
    return new Promise((resolved)=>{
        Message.find()
            .then(entries=>resolved(entries))
    })
}

//falta crear: buscar entrada por ID findById(id)

module.exports=daoMessage