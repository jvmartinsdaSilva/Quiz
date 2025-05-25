import { useContext } from 'react'
import { UserContext } from '../../context/UserContext.js'

import { MdLogout } from "react-icons/md";

import s from "./index.module.css"


export const UserBar = () => {
    const { User } = useContext(UserContext)

    return (
        <menubar className={s.userInfo}>
            <span className={s.cardApresentation}>
                <span>{User.name} - </span>
                <span>{User.points} PONTOS</span>
            </span>
            <span className={s.logout}>
                <MdLogout />
            </span>
        </menubar>
    )
}