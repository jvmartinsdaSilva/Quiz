import { Link } from 'react-router-dom'

import { QuestionContext } from '../../context/QuestionContext.js'

import s from './index.module.css'
import { useContext } from 'react'

export const Option = ({ theme }) => {
    const { QuestionsList, selectQuestions } = useContext(QuestionContext)


    return <Link to='/questions' className={s.option} onClick={() => selectQuestions(theme)}>{theme}</Link>
}