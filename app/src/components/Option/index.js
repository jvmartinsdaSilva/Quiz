import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { QuestionContext } from '../../context/QuestionContext.js'

import s from './index.module.css'

export const Option = ({ theme }) => {
    const {selectQuestions } = useContext(QuestionContext)


    return <Link to='/questions' className={s.option} onClick={() => selectQuestions(theme)}>{theme}</Link>
}