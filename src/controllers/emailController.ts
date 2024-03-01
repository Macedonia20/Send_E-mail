import { Request, Response } from 'express'
import * as nodemailer from 'nodemailer'

const emailController = {
  async sendMail(req: Request, res: Response) {
    const { to, subject, text } = req.body

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'mmss.macedo21@gmail.com',
        pass: 'hqat zajw enbq eikx',
      },
    })

    const mailoptions = {
      from: 'mmss.macedo21@gmail.com',
      to,
      subject,
      text,
    }

    try {
      await transporter.sendMail(mailoptions)
      res.status(200).json({ message: 'E-mail enviado com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar E-mail', error })
    }
  },
}

export default emailController
