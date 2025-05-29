import { useContext } from 'react'
import { UserContext } from '../../context/UserContext.js'
import { useNavigate } from 'react-router-dom';


import { MdLogout } from "react-icons/md";

import s from "./index.module.css"


export const UserBar = () => {
    const { User, logout } = useContext(UserContext)
    const navegate = useNavigate()

    const handleLogout = () => {
        logout()
        navegate("/")
    }


    return (
        <menubar className={s.userInfo}>
            <span className={s.cardApresentation}>
                <span>{User.name} - </span>
                <span>{User.points} PONTOS</span>
            </span>
            <span className={s.logout}>
                <MdLogout onClick={() => handleLogout()}/>
            </span>
        </menubar>
    )
}