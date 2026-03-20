import { Router } from 'express'
import { registerUserController } from '../controllers/user_controller.js'

const userRouter = Router()

userRouter.post('/register',registerUserController)

export default userRouter
