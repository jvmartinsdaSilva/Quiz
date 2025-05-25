import { TokenMenager } from "../../Functions/TokenMenager.js"

export const Authenticate = async (req, res, next) => {
    const { authenticate_token, user_id } = req.headers
    const TokenMenu = new TokenMenager()
    const validateToken = TokenMenu.validateToken(user_id, authenticate_token)

    if(!validateToken.success) return res.status(401).send(JSON.stringify({success: validateToken.success, message: validateToken.message, datas: {}}))

    return next()
}