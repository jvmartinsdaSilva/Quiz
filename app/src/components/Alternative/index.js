import { useContext } from 'react'
import s from './index.module.css'
import { QuestionContext } from '../../context/QuestionContext'

export const Alternative = ({alternative, questionId}) => {

    const {UsersAnswers, saveAnswer} = useContext(QuestionContext)
    const alternativeId = `${questionId}${Object.keys(alternative)[0]}`

    const answerActualChecked = UsersAnswers.map(answer => answer[questionId])
    const isChecked = answerActualChecked.includes(Object.keys(alternative)[0])

    const  saveUserAnswer = () => {
        const answer = {[questionId]: Object.keys(alternative)[0]}
        saveAnswer(answer)
    }

    return (
        <label htmlFor={alternativeId} className={s.alternative}>
            <input 
                type="radio" 
                id={alternativeId} 
                name={questionId} 
                defaultChecked={isChecked} 
                onChange={() => saveUserAnswer()}/>
            <span>{Object.values(alternative)[0]}</span>
        </label>
    )
}