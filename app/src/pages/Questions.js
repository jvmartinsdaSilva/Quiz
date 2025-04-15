import { useCallback, useContext, useState,  } from "react"
import { useHistory } from "react-router-dom";

import { QuestionContext } from "../context/QuestionContext"

import { validateAnswers } from "../services/question_api.js";

import { QuestionViewer } from "../components/QuestionViwer/index.js"


export const Questions = () => {
    const { QuestionsSelect, QuestionNumber, toggleQuestion, UsersAnswers } = useContext(QuestionContext)
    const [message, setMessage] = useState("")
    

    const handleSubmit = async event => {
        event.preventDefault()
        const datas = await validateAnswers(UsersAnswers)
        console.log(datas)
    }
    
    return (
        <form className="container" onSubmit={async e => handleSubmit(e)}>
            <h2>{QuestionsSelect?.theme}</h2>
            <QuestionViewer question={QuestionsSelect} />
            <menu className="menu">
                <button type="button" onClick={() => toggleQuestion(QuestionNumber - 1)}>BACK</button>
                <button type="button" onClick={() => toggleQuestion(QuestionNumber + 1)}>NEXT</button>
            </menu>
            <div>
                <button type="submit" >VALIDAR</button>
                <span>{message}</span>
            </div>
        </form>
    )
}