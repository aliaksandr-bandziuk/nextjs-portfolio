// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, message } = req.body;

    // Здесь вы можете использовать библиотеки для отправки электронной почты, например, Nodemailer.

    try {
      const transporter = nodemailer.createTransport({
        // Настройки для отправки почты.
        // Укажите здесь настройки вашего электронного ящика для отправки писем.
        service: 'Gmail',
        auth: {
          user: 'your-email@gmail.com', // Замените на свой электронный ящик.
          pass: 'your-email-password', // Замените на пароль от вашего электронного ящика.
        },
      });

      const mailOptions = {
        from: 'your-email@gmail.com', // Замените на свой электронный ящик.
        to: 'recipient@example.com', // Замените на адрес получателя.
        subject: 'Новая форма обратной связи',
        text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Письмо успешно отправлено:', info.response);

      res.status(200).json({ message: 'Письмо успешно отправлено' });
    } catch (error) {
      console.error('Ошибка при отправке письма:', error);
      res.status(500).json({ error: 'Произошла ошибка при отправке письма' });
    }
  } else {
    res.status(405).end();
  }
}