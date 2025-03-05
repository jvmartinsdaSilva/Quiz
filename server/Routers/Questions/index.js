import express from 'express'
import { getAnyQuestions } from '../../Database/index.js'

export const QuestionRouter = express.Router()

QuestionRouter.get("/getQuestions", async (req, res) => {
    const questionsAmount = Number(req.body.questionsAmount)
    if(questionsAmount > 5  || !questionsAmount) return res.status(422).send(JSON.stringify({message: "Valores invalidos"}))
        
    const question = await getAnyQuestions(questionsAmount)
    if(question?.erro) return res.status(502).send(JSON.stringify({message: "Erro ao conectar ao banco " + question.erro}))
    return res.status(202).send(JSON.stringify(question))
})

