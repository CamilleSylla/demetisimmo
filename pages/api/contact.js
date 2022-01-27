export default function (req, res) {
    let nodemailer = require('nodemailer')
    require('dotenv').config()
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "ssl0.ovh.net",
        auth: {
          user: 'support@demetisimmo.fr',
          pass: process.env.MAIL_PASS,
        },
        secure: false,
      })  
      let mailData
      if (req.body.form === "Bien") {
          mailData = {
              from: 'support@demetisimmo.fr',
              to: req.body.agent,
              subject: `Nouveau message de ${req.body.nom.value} || ${req.body.bien_id} - ${req.body.bien_name} - ${req.body.reference}`,
              text: `
              ######################
              Information Client
              ######################\n
              Nom : ${req.body.nom.value}
              Email : ${req.body.email.value}
              Tel : ${req.body.phone.value}\n
              ######################
              Information Bien
              ######################\n
              Bien :  ${req.body.bien_name}
              ID : ${req.body.bien_id}
              Référence Bien : ${req.body.reference}\n
              ######################
              MESSAGE
              ######################\n
              ${req.body.msg.value}
              `,
             }
    } else if (req.body.form === "contact") {
        mailData = {
            from: 'support@demetisimmo.fr',
            to: 'carmelosylla@gmail.com',
            subject: `Demande de contact de  ${req.body.nom} - ${req.body.objet} `,
            text: `
            ######################
            Information Client
            ######################\n
            Nom : ${req.body.nom}
            Email : ${req.body.email}\n
            ######################
            MESSAGE
            ######################\n
            ${req.body.msg}
            `,
           }
    } else {
        res.status(400).send(`${req.body.nom.value}, une erreur c'est produite, veuillez recommencer ulterieurement`)
    }
       transporter.sendMail(mailData, function (err, info) {
        if(err)
          res.status(400).send(`${req.body.nom.value}, une erreur c'est produite, veuillez recommencer ulterieurement`)
        else
        console.log(info)
      })
      res.status(200).send(`Merci ${req.body.nom.value}, nous vous répondrons dans les plus brefs delais`)
    console.log(req.body)
  }