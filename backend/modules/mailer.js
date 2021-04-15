const nodemailer = require("nodemailer");

const mailer={}

mailer.send = async function send(destinatario) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'le.mur.des.je.taime.fr@gmail.com', 
      pass: 'fdhnjtxtdnkgfxep', // generated ethereal password 'cyllujrpkbmbccja'
    },
  })

  // send mail with defined transport object
  //mailer.getTemplate(template)
  //  .then(datos=>
      let info = await transporter.sendMail({
            from:  '"Le mur des je taime " <le.mur.des.je.taime.fr@gmail.com>', // sender address
            to: destinatario, // list of receivers
            subject: "Registro usuario nuevo", // Subject line
/*             text: "Estos son sus datos", // plain text body
 */            html: "<h1>Hello,¡ ya estas registrado!</h1>"
          })
  //  )
}

module.exports=mailer
