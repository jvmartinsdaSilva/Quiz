import express from 'express'
import {v4 as uuidv4} from "uuid"

import { userSchema } from '../../Functions/UserSchema.js'
import { DatabaseUserController } from '../../Database/Users.js'
import { encryptingPassword } from '../../Functions/EncryptPassword.js'
import { TolkenMenager } from '../../Functions/TolkenMenager.js'

const UserDatabase = new DatabaseUserController()
const TolkenMenu = new TolkenMenager()

export const UserRouter = express.Router()

UserRouter.post("/register", async (req, res) => {
    const userId = uuidv4()
    const {userDatas} = req.body
    const userDatasIsValid = await userSchema.validate(userDatas)
        .then(() => ({valid: true, message: "Dados validados com sucesso"}))
        .catch(err => ({valid: false, message: err.errors[0]}))
   
    if(!userDatasIsValid.valid) return res.status(400).send(JSON.stringify({success: false, message: userDatasIsValid.message, datas: {}}))
    
    const encriptPassword = await encryptingPassword(userDatas.password)
    const registerResponse = await UserDatabase.registerUser({id: userId ,name: userDatas.name, email: userDatas.email, password: encriptPassword})

    if(registerResponse.erro) return res.status(400).send(JSON.stringify({success: false, message: registerResponse.message, datas: {}}))
    
    const generateTolken = TolkenMenu.generateUserTolken(userId)

    if(generateTolken.erro) return res.status(500).send(JSON.stringify({success: false, message: generateTolkenResponse.message, datas: {}}))
    return res.status(202).send(JSON.stringify({success: true, message: registerResponse.message, datas: {tolken: generateTolken.tolken}}))
})