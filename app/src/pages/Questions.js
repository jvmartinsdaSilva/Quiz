import { useContext, useState, } from "react"
import { useNavigate } from 'react-router-dom';

import { QuestionContext } from "../context/QuestionContext"
import { validateAnswers } from "../services/question_api.js";

import { QuestionViewer } from "../components/QuestionViwer/index.js"


export const Questions = () => {
    const { QuestionsSelect, QuestionNumber, toggleQuestion, UsersAnswers, setAnswersValidation } = useContext(QuestionContext)
    const [message, setMessage] = useState("")
    const navegate = useNavigate()


    const handleSubmit = async event => {
        event.preventDefault()
        if (UsersAnswers.length < 3) return setMessage("Responde o Quiz por completo antes de continuar")

        const {success, datas} = await validateAnswers(UsersAnswers)
        if(success) setAnswersValidation(datas)
        navegate("/results")
    }

    return (
        <form className="container" onSubmit={async e => handleSubmit(e)}>
            <h2>{QuestionsSelect?.theme}</h2>
            <QuestionViewer question={QuestionsSelect} />
            <menu className="menu">
                <button type="button" onClick={() => toggleQuestion(QuestionNumber - 1)}>BACK</button>
                <button type="button" onClick={() => toggleQuestion(QuestionNumber + 1)}>NEXT</button>
            </menu>
            <div className="validation">
                <button type="submit" className="confirm_btn">VALIDAR</button> 
                <span>{message}</span>
            </div>
        </form>
    )
}