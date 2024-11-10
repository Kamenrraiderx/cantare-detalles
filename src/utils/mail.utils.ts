import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

import Mail from "nodemailer/lib/mailer";
import { welcomTemplate } from "@/lib/templates/welcome";

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: `${process.env.NODEMAILER_USER}`,
        pass: `${process.env.NODEMAILER_PASS}`,
    },
} as SMTPTransport.Options);


type SendEmailDto = {
    sender: Mail.Address,
    receipients: Mail.Address[]
    subject: string,
    message: string
}

export const sendMail = async (dto: SendEmailDto) => {
    const { sender, receipients, subject, message } = dto;

    return await transporter.sendMail(
        {
            from: sender,
            to: receipients,
            subject,
            html: welcomTemplate,
            text: message
        }
    )

}