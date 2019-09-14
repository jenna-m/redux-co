const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
let transporter = nodemailer.createTransport(transport);


// POST route from contact form
app.post('/contact', function (req, res) {
    let mailOpts, smtpTrans;

    // SMTP configuration detils
    smtpTrans = nodemailer.createTransport({
        // host, port, and secure are gmail-specific
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        // GMAIL_PASS is a google application-specific PW
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        }
    });

    // Email formatting
    // Use body-parser to grab name, email, and message fields
    mailOpts = {
        from: req.body.name + '&lt;' + req.body.email + '&gt;',
        to: GMAIL_USER,
        subject: 'New message from Redux Co. contact form',
        text: `${req.body.name} (${req.body.email}) says:${req.body.message}`
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
            res.render('contact-failure');
        } else {
            res.render('contact-success');
        }
    });
});


