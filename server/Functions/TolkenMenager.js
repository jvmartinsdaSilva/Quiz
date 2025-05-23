import jwt from "jsonwebtoken"

export class TolkenMenager {

    generateUserTolken(userId) {
        try {
            const privateKey = `text${userId}`
            const tolken = jwt.sign({
                userId
            }, privateKey, { expiresIn: 10800 })

            return { succes: true, tolken }
        } catch (err) {
            return { succes: false, erro: err, message: "Erro a criar tolken de sessão" }
        }
    }

    validateTolken(userId, userTolken){
        const privateKey = `text${userId}`
        try{
            const status = jwt.verify(userTolken, privateKey)
            console.log(status)
            return {succes: true, message: "Usuário validado com suceso", status}
        } catch (err) {
            console.log("Erro", err)
        }
    }
}