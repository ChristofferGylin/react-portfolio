import type { NextFunction, Request, Response } from "express"
import config from "../config/config.ts"
import nodemailer from "nodemailer"

export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const requiredFields = ['email', 'name', 'message']

        for (const field of requiredFields) {
            if (!req.body[field]) {
                res.status(400).json({ error: `Missing required field ${field}` })
                return 
            }
        }

        const { email, name, message } = req.body

        const transporter = nodemailer.createTransport({
            host: config.emailHost,
            port: config.emailPort,
            secure: config.emailPort === 465,
            auth: {
                user: config.emailUser,
                pass: config.emailPassword,
            },
            tls: {
                rejectUnauthorized: false,
            }
        })

        const emailInfo = await transporter.sendMail({
            from: email,
            to: config.emailRecipient,
            subject: `Contact form message from ${name}`,
            text: message,
            html: `<p>${message}</p>`,

        })

        console.log("Message sent:", emailInfo.messageId)

        res.status(200).send()

    } catch (error) {
        console.error(error)
        next(error)
    }
}