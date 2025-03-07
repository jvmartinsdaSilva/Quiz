import s from './index.module.css'


export const Option = ({theme}) => {
    return <button className={s.option}>{theme}</button>
}