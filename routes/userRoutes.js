import { Router } from 'express'
import UserController from '../controller/userController.js'
import auth from '../utility/auth.js'
const router = Router()

router.post('/login', auth, UserController.login)
router.post('/register', auth, UserController.register)

export default router