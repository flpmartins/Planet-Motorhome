const nodemailer = require('nodemailer')

class MailProvider {

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      debug: true,
      logger: true,
      secureConnection: process.env.MAIL_SECURITY,
      tls: {
        ciphers: 'SSLv3',
      },
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })
  }

  async sendMail(email, subject, template) {
    await this.transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject,
      html: template,
    })
  }
}

module.exports = MailProvider
