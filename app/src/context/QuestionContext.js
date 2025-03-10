import { createContext, useState } from 'react';
import { getQuestions } from '../services/question_api';

export const QuestionContext = createContext({
    UsersAnswers: [],
    QuestionsSelect: {},
    QuestionsList: [],
    QuestionNumber: {},
    selectQuestions: async theme => { },
    toggleQuestion: num => { },
    saveAnswer: answer => { }
})

export const QuestionsProvider = ({ children }) => {
    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState()
    const [questionNumber, setQuestionNumber] = useState(0)
    const [userAnswers, setUserAnswer] = useState([])

    const selectQuestions = async theme => {
        const questions_datas = await getQuestions(theme)
        setQuestions(questions_datas.datas)
        setQuestion(questions_datas.datas[questionNumber])
    }

    const toggleQuestion = num => {
        if (num < 0 || num > 2) return
        setQuestionNumber(num)
        setQuestion(questions[num])
    }

    const saveAnswer = answer => {
        const questionId = Object.keys(answer)[0] // Pega apenas a chave (id) da nova resposta
        const questionsIdList = userAnswers.map(ans => Object.keys(ans)[0]) // Pega todos a chave (id) das respostas do usuário
        const position = questionsIdList.indexOf(questionId) // Pega a posição da chave (Id) da nova resposta na lista de Id's

        if (userAnswers.length == 0) return userAnswers.push(answer) // Se for a primeira resposta, apenas adiciona a nova resposta
        // Verifica se o Id da nova resposta esta incluso na lista de Ids , através de sua posição
        // Se estiver, através de sua posição, troca a resposta antiga da lista de respostas (userAnswers) pela nova resposta
        if(position >= 0) userAnswers[position] = answer 
        else userAnswers.push(answer) // Se não estiver (nova resposta), apenas adiciona

        console.log(userAnswers)
    }


    return <QuestionContext.Provider
        value={{
            QuestionNumber: questionNumber,
            QuestionsList: questions,
            selectQuestions,
            QuestionsSelect: question,
            toggleQuestion,
            saveAnswer,
            UsersAnswers: userAnswers
        }}>
        {children}
    </QuestionContext.Provider>
}