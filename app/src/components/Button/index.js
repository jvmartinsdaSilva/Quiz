import s from './index.module.css'

export const Button = ({textInfo, ...props}) => {
    return (
        <span className={s.container}>
            <button className={s.btn} {...props}>{textInfo}</button>
        </span>
    )
}