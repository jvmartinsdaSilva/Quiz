import { createContext, useContext, useState } from 'react';
import { getQuestions } from '../services/question_api';

export const QuestionContext = createContext({
    QuestionsSelect: {},
    QuestionsList: [],
    selectQuestions: async theme => {}
})

export const QuestionsProvider = ({children}) => {
    const [questions, setQuestions] = useState()
    const [question, setQuestion] = useState()

    const selectQuestions = async theme => {
        const questions_datas = await getQuestions(theme)
        setQuestions(questions_datas.datas)
        setQuestion(questions_datas.datas[0])
    }

    return <QuestionContext.Provider value={{QuestionsList: questions, selectQuestions, QuestionsSelect: question}}>{children}</QuestionContext.Provider>
}