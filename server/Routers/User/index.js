import express from 'express'
import { v4 as uuidv4 } from "uuid"

import { UserRegisterSchema, UserLoginSchema } from '../../Functions/UserSchema.js'
import { DatabaseUserController } from '../../Database/Users.js'
import { encryptingPassword, decryptPassword } from '../../Functions/CryptoManager.js'
import { TokenMenager } from '../../Functions/TokenMenager.js'

const UserDatabase = new DatabaseUserController()
const TokenMenu = new TokenMenager()

export const UserRouter = express.Router()

UserRouter.post("/register", async (req, res) => {
    const userId = uuidv4()
    const { userDatas } = req.body
    const userDatasIsValid = await UserRegisterSchema.validate(userDatas)
        .then(() => ({ valid: true, message: "Dados validados com sucesso" }))
        .catch(err => ({ valid: false, message: err.errors[0] }))

    if (!userDatasIsValid.valid) return res.status(400).send(JSON.stringify({ success: false, message: userDatasIsValid.message, datas: {} }))

    const encriptPassword = await encryptingPassword(userDatas.password)
    const registerResponse = await UserDatabase.registerUser({ id: userId, name: userDatas.name, email: userDatas.email, password: encriptPassword })
    if (registerResponse.erro) return res.status(400).send(JSON.stringify({ success: false, message: registerResponse.message, datas: {} }))

    const generateToken = TokenMenu.generateUserToken(userId)
    if (generateToken.erro) return res.status(500).send(JSON.stringify({ success: false, message: generateToken.message, datas: {} }))

    const datas = { user: { id: userId, name: userDatas.name, points: 0 }, token: generateToken.token }
    return res.status(202).send(JSON.stringify({ success: true, message: registerResponse.message, datas }))
})

UserRouter.post("/login", async (req, res) => {
    const {userDatas} =  req.body
    const userDatasIsValid = await UserLoginSchema.validate(userDatas)
        .then(() => ({ valid: true, message: "Dados validados com sucesso" }))
        .catch(err => ({ valid: false, message: err.errors[0] }))

    if (!userDatasIsValid.valid) return res.status(400).send(JSON.stringify({ success: false, message: userDatasIsValid.message, datas: {} }))

    const getUser = await UserDatabase.getUser(userDatas.email)
    if(!getUser.success) return res.status(400).send(JSON.stringify({success: false, message: getUser.message, datas: {}}))

    const checkPassword = await decryptPassword(userDatas.password, getUser.datas.password)
    if(!checkPassword) return res.status(400).send(JSON.stringify({succes:false, message: "Senha incorreta"}))
    
    const generateToken = TokenMenu.generateUserToken(getUser.datas.id)
    if (generateToken.erro) return res.status(500).send(JSON.stringify({ success: false, message: generateToken.message, datas: {} }))
    
    const datas = {
        user: {
            id: getUser.datas.id,
            name: getUser.datas.name_alias,
            email: getUser.datas.email,
            user_points: getUser.datas.user_points
        },
        token: generateToken.token
    }

    return res.status(202).send(JSON.stringify({success: true, message: getUser.message, datas}))
})