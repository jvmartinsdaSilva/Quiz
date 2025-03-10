import s from './index.module.css'

export const Alternative = ({alternative, questionId}) => {
    const alternativeId = Object.keys(alternative)[0]

    return (
        <label htmlFor={alternativeId} className={s.alternative}>
            <input type="radio" id={alternativeId} name={questionId} />
            <span>{Object.values(alternative)[0]}</span>
        </label>
    )
}