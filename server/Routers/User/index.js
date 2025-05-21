import express from 'express'

import { userSchema } from '../../Functions/UserSchema.js'
import { DatabaseUserController } from '../../Database/Users.js'
import { encryptingPassword } from '../../Functions/EncryptPassword.js'

const UserDatabase = new DatabaseUserController()

export const UserRouter = express.Router()

UserRouter.post("/register", async (req, res) => {
    const {userDatas} = req.body
    const userDatasIsValid = await userSchema.validate(userDatas)
        .then(() => ({valid: true, message: "Dados validados com sucesso"}))
        .catch(err => ({valid: false, message: err.errors[0]}))
   
    if(!userDatasIsValid.valid) return res.status(400).send(JSON.stringify({success: false, message: userDatasIsValid.message, datas: {}}))
    
    const encriptPassword = await encryptingPassword(userDatas.password)

    const registerResponse = await UserDatabase.registerUser({name: userDatas.name, email: userDatas.email, password: encriptPassword})

    if(registerResponse.erro) return res.status(400).send(JSON.stringify({success: false, message: registerResponse.message, datas: {}}))
    
    return res.status(202).send(JSON.stringify({success: true, message: registerResponse.message, datas: {tolken: ""}}))
})