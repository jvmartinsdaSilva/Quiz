import s from './index.module.css'

export const Button = ({textInfo}) => {
    return (
        <span className={s.container}>
            <button className={s.btn}>{textInfo}</button>
        </span>
    )
}