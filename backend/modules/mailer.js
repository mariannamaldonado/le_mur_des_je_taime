var fs = require('fs')
const nodemailer = require("nodemailer")
const path = require('path')
const Handlebars = require('handlebars');
const { response } = require('express');

function getTemplate(templateName, locals){
  var source = fs.readFileSync( path.join(__dirname, `../emails/${templateName}.hbs`), 'utf8');
  var template = Handlebars.compile(source);
  return template(locals)
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'le.mur.des.je.taime.fr@gmail.com',
    pass: 'fdhnjtxtdnkgfxep', // generated ethereal password
  },
})

function send(options) {
  
  // create reusable transporter object using the default SMTP transport
return transporter.sendMail({
    from: options.from || '"Le mur des je taime " <le.mur.des.je.taime.fr@gmail.com>', // sender address
    to: options.to, // list of receivers
    bcc: options.bcc || "",
    subject: options.subject, // subject line
    html: getTemplate(options.template, options.locals)
  })
  
}
module.exports = {send}
