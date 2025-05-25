import jwt from "jsonwebtoken"

export class TokenMenager {

    generateUserToken(userId) {
        try {
            const privateKey = `text${userId}`
            const token = jwt.sign({
                userId
            }, privateKey, { expiresIn: 10800 })

            return { success: true, token }
        } catch (err) {
            return { success: false, erro: err, message: "Erro a criar tolken de sessão" }
        }
    }

    validateToken(userId, userToken){
        const privateKey = `text${userId}`
        try{
            const tokenStatus = jwt.verify(userToken, privateKey)
            return {success: true, message: "Usuário validado com suceso", tokenStatus}
        } catch (err) {
            return {success: false, message: "Token Invalido"}
        }
    }
}