import { Router } from 'express'
import { loginController,registerUserController, verifyEmailController } from '../controllers/user_controller.js'

const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/verifyemail',verifyEmailController)
userRouter.post('/login',loginController)

export default userRouter
