import UserModel from "../models/user_model.js"
import Jwt from 'jsonwebtoken'

const generatedRefreshToken = async(userId)=>{
    const token = await Jwt.sign({ id : userId},
        process.env.SECRET_KEY_REFRESH_TOKEN,
        { expiresIn : '7d'}
    )

    const updateRefreshTokenUser = await UserModel.updateOne(
        { _id : userId},
        {
            refresh_token : token
        }
    )

    return token
}

export default generatedRefreshToken