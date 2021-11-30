const mailgun = require('mailgun-js')
const mg = mailgun({apiKey: process.env.MAILGUN_API, domain: process.env.MAILGUN_DOMAIN});

const sendWelcomeEmail = (email, name) => {
    mg.messages().send({
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Testing some Mailgun awesomness ${name}!`
    });
}

const sendCancelationEmail = (email, name) => {
    mg.messages().send({
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'It\'s a pity',
        text: `Testing some Mailgun awesomness ${name}!`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

