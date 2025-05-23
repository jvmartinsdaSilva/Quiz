import s  from './index.module.css'


export const Input = ({type, placeholder, text, innerRef = ''}) => {
    const ramdomId = Math.random()

    return (
    <label htmlFor={ramdomId} className={s.inputContainer}>
        <span>{text}</span> 
        <input type={type} placeholder={placeholder} id={ramdomId} {...innerRef} />
    </label>
    )
}