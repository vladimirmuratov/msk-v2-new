import nodemailer from 'nodemailer'
import {NextResponse} from 'next/server'


export async function POST(request) {
    const res = await request.json()
    let error = false

    const message = {
        from: process.env.ADDRESS_FROM,
        to: [process.env.ADDRESS_TO_1, process.env.ADDRESS_TO_2, process.env.ADDRESS_TO_3],
        subject: `Поступила заявка на звонок: ${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}`,
        html: ` <p>Имя: ${res?.person}</p>
                <p>Дата рождения: ${res?.dateBirth ?? 'Нет'}</p>
                <p>Телефон: ${res?.phone}</p>
                <p>Email: ${res?.email ?? 'Нет'}</p>
                <p>Информация: ${res?.info ?? 'Нет'}</p>`,
    }

    let transporter = nodemailer.createTransport({
        service: 'mail.ru',
        auth: {
            user: process.env.ADDRESS_FROM,
            pass: process.env.PASSWORD,
        },
    })

    await transporter.sendMail(message, (err, info) => {

        if(!info.messageId){
            error = true
        }
    })

    return error
        ? await NextResponse.json({message: `Server Error!`}, {status: 500})
        : await NextResponse.json({message: `Message delivered!`}, {status: 250})
}
