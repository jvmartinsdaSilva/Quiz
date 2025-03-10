import { Alternative } from '../Alternative/index.js';

import s from './index.module.css'

export const QuestionViewer = ({question}) => {
    return(
        <div className={s.container}>
            <h3 className={s.questionTitle}>{question?.title}</h3>
            {question?.answers.map(alternative => <Alternative alternative={alternative} questionId={question.id} key={Object.keys(alternative)[0]}/>)}
        </div>
    )
}