import express from 'express'
import { getAnyQuestions, getThemes } from '../../Database/index.js'

export const QuestionRouter = express.Router()


const formatQuestionsData = datas => {
    const questions = datas.map(data => {
        return {
            id: data.id,
            title: data.title,
            theme: data.theme,
            right_option: data.right_option,
            answers: [
                {option_a: data.option_a},
                {option_b: data.option_b},
                {option_c: data.option_c},
                {option_d: data.option_d},
            ]
        }
    })
    return questions
}

QuestionRouter.get("/getQuestions/", async (req, res) => {
    const {themes} = await getThemes()
    const questionTheme = req.query.questionTheme
    if(themes.indexOf(questionTheme) < 0) return res.status(422).send(JSON.stringify({message: "Valores invalidos"}))

    const datas = await getAnyQuestions(questionTheme)
    if(datas.erro) return res.status(500).send(JSON.stringify({message: questions.message}))
    const questions = formatQuestionsData(datas.datas)
    return res.status(202).send((JSON.stringify({datas: questions})))
})

QuestionRouter.get("/themes", async (req, res) => {
    const themes = await getThemes()
    if(themes?.erro) return res.status(502).send(JSON.stringify({message: "Erro ao conectar ao banco " + themes.erro}))
    return res.status(202).send(JSON.stringify(themes))
})