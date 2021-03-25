const Message = require('../models/Message')

const daoMessage={}

//funcion para guardar una entrada
daoMessage.save = (Message)=>{
    return new Promise((resolved)=>{
        let newMessage = new Message(Message)
        newMessage.save()
            .then(Message=>resolved(Message))
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