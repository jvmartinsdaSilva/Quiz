import express from 'express'
import { getAnyQuestions, getThemes } from '../../Database/index.js'

export const QuestionRouter = express.Router()

QuestionRouter.get("/getQuestions", async (req, res) => {
    const questionsAmount = Number(req.body.questionsAmount)
    if(questionsAmount > 5  || !questionsAmount) return res.status(422).send(JSON.stringify({message: "Valores invalidos"}))
    const questions = await getAnyQuestions(questionsAmount)
    if(questions?.erro) return res.status(502).send(JSON.stringify({message: "Erro ao conectar ao banco " + questions.erro}))
    return res.status(202).send(JSON.stringify(questions))
})

QuestionRouter.get("/themes", async (req, res) => {
    const get_themes = await getThemes()
    if(get_themes?.erro) return res.status(502).send(JSON.stringify({message: "Erro ao conectar ao banco " + get_themes.erro}))
    
    const themes = get_themes?.map(theme => theme.theme)   
    return res.status(202).send(JSON.stringify({themes}))
})