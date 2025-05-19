import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { QuestionContext } from '../../context/QuestionContext.js'


import s from './index.module.css'

export const Option = ({ theme }) => {
    const {selectQuestions, resetGame } = useContext(QuestionContext)

    const start_quiz = theme => {
        resetGame() // Reseta possíveis dados que ficaram salvos do jogo anterior
        selectQuestions(theme)
    }

    return <Link to='/questions' className={s.option} onClick={() => start_quiz(theme)}>{theme}</Link>
}