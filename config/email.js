const nodemailer = require('nodemailer')
const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = require('./env');

exports.transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true',
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
    }
});
