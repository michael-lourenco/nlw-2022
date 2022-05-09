import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ce08cf0d3b69df",
    pass: "d62bd0d14cf48b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Michael Lourenço <kontempler@gmail.com>',
      subject,
      html: body,
    });
  }
}
