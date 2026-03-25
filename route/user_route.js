import { Router } from 'express'
import { loginController,logoutController,registerUserController, verifyEmailController } from '../controllers/user_controller.js'
import auth from '../middleware/auth.js'

const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/verifyemail',verifyEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)

export default userRouter
