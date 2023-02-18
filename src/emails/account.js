const Sib = require('sib-api-v3-sdk')
const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.SENDGRID_API_KEY

const tranEmailApi = new Sib.TransactionalEmailsApi()

const sender = {
    email: 'chrischan.ancheta@gmail.com',
    name: 'Christian',
}


const sendWelcomeEmail = (email, name) => {
    tranEmailApi
        .sendTransacEmail({
            sender,
            to: [
                {
                    email,
                },
            ],
            subject: 'Thanks for joining in!',
            textContent: `
            Welcome to the app, ${name}. Let me know how you get along with the app.
            `,
            htmlContent: `
            Welcome to the app, ${name}. Let me know how you get along with the app.
                    `,
            params: {
                role: 'Frontend',
            },
        })
        .then()
        .catch(console.log)
}

const sendCancelationEmail = (email, name) => {
    tranEmailApi
        .sendTransacEmail({
            sender,
            to: [
                {
                    email,
                },
            ],
            subject: 'Sorry to see you go.',
            textContent: `
            Goodbye, ${name}. I hope to see you back sometime soon.
            `,
            htmlContent: `
            Goodbye, ${name}. I hope to see you back sometime soon.
            `,
            params: {
                role: 'Frontend',
            },
        })
        .then()
        .catch(console.log)
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}