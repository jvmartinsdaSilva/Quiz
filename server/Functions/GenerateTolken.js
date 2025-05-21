import jwt from "jsonwebtoken"

export const generateUserTolken = userName => {
    try{
        const privateKey = `text${userName}`
        const tolken = jwt.sign({
            userName
        }, privateKey, {expiresIn: 10800})
        
        return {succes: true, tolken}
    } catch(err) {
        return {succes: false , erro: err, message: "Erro a criar tolken de sessão"}
    }
}