import { Link } from 'react-router-dom'
import s from './index.module.css'

export const Option = ({ theme }) => {
    return <Link to='/questions' className={s.option}>{theme}</Link>
}