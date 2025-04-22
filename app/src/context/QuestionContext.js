import { createContext, useState } from 'react';
import { getQuestions } from '../services/question_api';

export const QuestionContext = createContext({
    UsersAnswers: [],
    QuestionsSelect: {},
    QuestionsList: [],
    QuestionNumber: {},
    ValidationAnswer: [],
    selectQuestions: async theme => { },
    toggleQuestion: num => { },
    saveAnswer: answer => { },
    resetGame: () => { },
    setAnswersValidation: validation => {}
})

export const QuestionsProvider = ({ children }) => {
    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState()
    const [questionNumber, setQuestionNumber] = useState(0)
    const [userAnswers, setUserAnswer] = useState([])
    const [results, setResults] = useState([])

    const selectQuestions = async theme => {
        const response = await getQuestions(theme)
        setQuestions(response.datas.questions)
        setQuestion(response.datas.questions[0])
        console.log(response.datas.questions)
    }

    const toggleQuestion = num => {
        if (num < 0 || num > questions?.length - 1) return
        setQuestionNumber(num)
        setQuestion(questions[num])
    }

    const saveAnswer = answer => {
        const questionId = Object.keys(answer)[0] // Pega apenas a chave (id) da nova resposta
        const questionsIdList = userAnswers.map(ans => Object.keys(ans)[0]) // Pega todos as chaves (id) das respostas do usuário
        const position = questionsIdList.indexOf(questionId) // Pega a posição da chave (Id) da nova resposta na lista de Id's

        // Verifica se o Id da nova resposta esta incluso na lista de Ids , através de sua posição
        // Se estiver, através de sua posição, troca a resposta antiga da lista de respostas (userAnswers) pela nova resposta
        if (position >= 0) userAnswers[position] = answer
        else userAnswers.push(answer) // Se não estiver (nova resposta), apenas adiciona

        // console.log(userAnswers)
    }


    const resetGame = () => {
        toggleQuestion(0)
        setUserAnswer([])
        setResults([])
    }

    const saveAnswerValidation = validations => setResults(validations)

    return <QuestionContext.Provider
        value={{
            QuestionNumber: questionNumber,
            QuestionsList: questions,
            UsersAnswers: userAnswers,
            QuestionsSelect: question,
            ValidationAnswer: results,
            selectQuestions,
            toggleQuestion,
            saveAnswer,
            resetGame,
            setAnswersValidation: saveAnswerValidation
        }}>
        {children}
    </QuestionContext.Provider>
}