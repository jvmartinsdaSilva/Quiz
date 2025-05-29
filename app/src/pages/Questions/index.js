import { useContext, useState, } from "react"
import { useNavigate } from 'react-router-dom';

import { QuestionContext } from "../../context/QuestionContext.js"
import { validateAnswers } from "../../services/question_api.js";

import { Card } from "../../components/Card/index.js";
import { QuestionViewer } from "../../components/QuestionViewer/index.js"
import { Button } from "../../components/Button/index.js"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


import s from './index.module.css'
import { ProgressBar } from "../../components/ProgressBar/index.js";
import { UserContext } from "../../context/UserContext.js";


export const Questions = () => {
    const {User} = useContext(UserContext)
    const { QuestionsSelect, QuestionNumber, toggleQuestion, UsersAnswers, setAnswersValidation } = useContext(QuestionContext)
    const [message, setMessage] = useState("")
    const navegate = useNavigate()
    console.log(QuestionsSelect)

    const handleSubmit = async event => {
        event.preventDefault()
        if (UsersAnswers.length < 3) return setMessage("Responda o Quiz por completo antes de continuar")

        const { success, datas } = await validateAnswers(UsersAnswers, User.id)
        if (success) setAnswersValidation(datas)
        navegate("/results")
    }

    return (

        <Card>
            <form onSubmit={async e => handleSubmit(e)} className={s.container}>
                <h2 className='title'>{QuestionsSelect?.theme}</h2>
                <QuestionViewer question={QuestionsSelect} />
                <menu>
                    <SlArrowLeft className={s.arrow} onClick={() => toggleQuestion(QuestionNumber - 1)} />
                    <SlArrowRight className={s.arrow} onClick={() => toggleQuestion(QuestionNumber + 1)} />
                </menu>
                
                <ProgressBar />
                <div className={s.validation}>
                    <Button type="submit" textInfo="VALIDAR" />
                    <span>{message}</span>
                </div>
            </form>
        </Card>
    )
}