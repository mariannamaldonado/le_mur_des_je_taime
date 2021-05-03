const express = require('express')
const rtMain = express.Router()
const mailer = require('../modules/mailer');

rtMain.get('/',(req,res)=>{
    res.json({res: 'welcome to the API!!'})
})


//contactanos
rtMain.post("/Contact", (req, res)=> {
    var contactForm = req.body

    try{
        mailer.send({
            to: contactForm.email, 
            bcc:"le.mur.des.je.taime.fr@gmail.com", //"le.mur.des.je.taime.fr@gmail.com",
            subject: "Gracias por contactar con 'Le Mur Des J'ataime'",
            template: 'contact',
            locals: {
                name: contactForm.name,
                email: contactForm.email,
                message: contactForm.message
            }
        }).then(info => {
            res.json({error:null, message: 'Un mensage de confirmacion sera enviado a tu correo electronico. Gracias por contactar con nosotros.'})
        })

    }
    catch(err){
        console.log(err)
    }
     
  })

module.exports= rtMain