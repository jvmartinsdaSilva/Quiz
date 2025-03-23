import express from 'express'

import { DatabaseQuestioController } from '../../Database/index.js'
import { CacheQuestions } from '../../Cache/index.js'
import {formatQuestionsData} from '../../Filters/Questions.js'

export const QuestionRouter = express.Router()

const QuestionDatabase = new DatabaseQuestioController()
const Cache = new CacheQuestions()


QuestionRouter.get("/getQuestions/", async (req, res) => {
    const {themes} = Cache.getThemes() ?? await QuestionDatabase.getThemes()
    const questionTheme = req.query.questionTheme
    if(themes?.indexOf(questionTheme) < 0) return res.status(422).send(JSON.stringify({success: false, message: "Valores invalidos", datas: {}}))
    
    const {datas, message, erro} = await QuestionDatabase.getRandomQuestions(questionTheme)
    if(erro) return res.status(500).send(JSON.stringify({success: false ,message: message, datas: {}}))

    const questions = formatQuestionsData(datas)
    Cache.saveQuestions(questions)
    return res.status(202).send((JSON.stringify({success: true, message, datas: {questions}})))
})

QuestionRouter.get("/themes", async (req, res) => {
    // Verifica se os dados já estão salvos no cache da aplicação 
    //  antes de fazer uma nova requisição ao banco
    const cache = Cache.getThemes()
    if(cache.themes) return res.status(202).send(JSON.stringify({success: true, message: cache.message, datas: {themes: cache.themes}}))

    const {datas, message, erro} = await QuestionDatabase.getThemes()
    if(erro) return res.status(502).send(JSON.stringify({success: false, message, datas: {}}))

    const themes = datas.map(data => data.theme)
    Cache.saveThemes(themes)
    
    return res.status(202).send(JSON.stringify({success: true, message, datas: {themes}}))
})

QuestionRouter.post("/validadeAnswer", async (req, res) => {
    const questionsId = req.body.userAnswer

})