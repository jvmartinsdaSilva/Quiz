import { useContext } from 'react';
import { Alternative } from '../Alternative/index.js';

import s from './index.module.css'
import { QuestionContext } from '../../context/QuestionContext.js';

export const QuestionViewer = ({question}) => {
    const {QuestionNumber} = useContext(QuestionContext)
    const questionId = `${question?.id}`

    return(
        <div className={s.container}>
            <h3 className={s.questionTitle}>{QuestionNumber + 1} - {question?.title}</h3>
            {question?.answers.map(alternative => 
                <Alternative alternative={alternative} questionId={questionId} key={`${questionId}-${Object.keys(alternative)[0]}`}/>)}
        </div>
    )
}