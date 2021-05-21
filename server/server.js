const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const transport = { 
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'servervue@gmail.com',
    clientId: "598771439338-aqfout4sa6q11q4va18kgg2d4c4083c2.apps.googleusercontent.com",
    clientSecret: "75BhioR9ZDmG6GT6ztrfVDvH",
    refreshToken: "1//04lspyUGqV7_vCgYIARAAGAQSNwF-L9IrChNA9rZQSdORl_TXwdu1XY9K4myZqnpH86B2MC8hp1SRmY0btsW-1xBF9h9iwmC7mWk",
    accessToken: "ya29.a0AfH6SMD0JvhMB-sjs-we1nwZbfPrXAyTJS48N5MF6Bh9eomsgh408oLMyaWBsdRK3f0sMHlZRbcIwaCz_60Q9c_OUHFX8OINMa3ca2Us2FVD0V-ucu50WcpmqfSa4fPPvGhgoEnsVCUGPdG96lhsKGXPxAmR",
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/send', (req, res, next) => {
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message

  var mail = {
    from: 'Rohan Vaghani <servervue@gmail.com>',
    to: email,
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})


app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

// listen on the port
app.listen(port);