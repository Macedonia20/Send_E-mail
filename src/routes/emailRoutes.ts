import { Router } from 'express'
import emailController from '../controllers/emailController'

const router = Router()

router.post('/send', emailController.sendMail)

export default router
