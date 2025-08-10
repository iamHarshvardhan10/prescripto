import nodemailer from 'nodemailer';


const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })

        const info = await transporter.sendMail({
            from: `"Coderoom" "${process.env.SMTP_USER}"`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })


        console.log(info);
        return info;
    } catch (error) {
        console.log(error.message)
    }
}

export default mailSender;