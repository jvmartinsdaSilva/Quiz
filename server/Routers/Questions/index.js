import express from 'express'

import { DatabaseQuestioController } from '../../Database/index.js'
import {formatQuestionsData} from '../../Filters/Questions.js'

export const QuestionRouter = express.Router()

const questionDatabase = new DatabaseQuestioController()

QuestionRouter.get("/getQuestions/", async (req, res) => {
    const {themes} = await questionDatabase.getThemes()
    const questionTheme = req.query.questionTheme
    if(themes?.indexOf(questionTheme) < 0) return res.status(422).send(JSON.stringify({message: "Valores invalidos"}))

    const datas = await questionDatabase.getRandomQuestions(questionTheme)
    if(datas.erro) return res.status(500).send(JSON.stringify({message: questions.message}))
    const questions = formatQuestionsData(datas.datas)
    return res.status(202).send((JSON.stringify({datas: questions})))
})

QuestionRouter.get("/themes", async (req, res) => {
    const themes = await questionDatabase.getThemes()
    if(themes?.erro) return res.status(502).send(JSON.stringify({message: "Erro ao conectar ao banco " + themes.erro}))
    return res.status(202).send(JSON.stringify(themes))
})

QuestionRouter.post("/validadeAnswer", async (req, res) => {
    const questionsId = req.body.userAnswer
})