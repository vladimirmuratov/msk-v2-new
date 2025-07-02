import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const req = await request.json();
  let error = false;

  const message = {
    from: process.env.ADDRESS_FROM,
    to: [
      process.env.ADDRESS_TO_1,
      process.env.ADDRESS_TO_2,
      process.env.ADDRESS_TO_3,
      process.env.ADDRESS_TO_4,
    ],
    subject: `Поступила заявка на звонок: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
    html: ` <p>Имя: ${req?.person}</p>
                <p>Дата рождения: ${req?.dateBirth ?? 'Нет'}</p>
                <p>Телефон: ${req?.phone}</p>
                <p>Email: ${req?.email ?? 'Нет'}</p>
                <p>Информация: ${req?.info ?? 'Нет'}</p>
                <p>Сообщение пришло с сайта: msk-emergency.ru</p>`,
  };

  const transporter = nodemailer.createTransport({
    service: 'mail.ru',
    auth: {
      user: process.env.ADDRESS_FROM,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail(message);
  } catch (err) {
    error = true;
  }

  //----------------------------------------

  if (req.email) {
    const message2 = {
      from: process.env.ADDRESS_FROM,
      to: [req.email],
      subject: `Вы оставили заявку на звонок на сайте msk-emergency.ru ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
      html: ` <p>Имя: ${req?.person}</p>
                    <p>Дата рождения: ${req?.dateBirth ?? 'Нет'}</p>
                    <p>Телефон: ${req?.phone}</p>
                    <p>Email: ${req?.email ?? 'Нет'}</p>
                    <p>Информация: ${req?.info ?? 'Нет'}</p>`,
    };

    const transporter2 = nodemailer.createTransport({
      service: 'mail.ru',
      auth: {
        user: process.env.ADDRESS_FROM,
        pass: process.env.PASSWORD,
      },
    });

    transporter2.sendMail(message2);
  }

  return error
    ? await NextResponse.json({ message: `Server Error!` }, { status: 500 })
    : await NextResponse.json({ message: `Message delivered!` }, { status: 250 });
}
