import { createContext, useState } from 'react';

import {setLocalStorage, cleanStorage} from '../services/LocalStorage.js'

export const UserContext = createContext({
    User: {},
    login: datas => {},
    logout: () => {},
    updatePoints: points => {}
})

export const  UserProvider = ({children}) => {
    const [User, setUser] = useState({})

    const  login = datas => {
        const {user, token} = datas
        setUser(user)
        setLocalStorage("user", JSON.stringify(user))
        setLocalStorage("token", token)
    }

    const updatePoints = newPoints => {
        const {points} = User
        setUser(prev => ({...prev, points: points + newPoints}))
    }

    const logout = () => {
        cleanStorage()
    }

    return <UserContext.Provider value={{User, login, logout, updatePoints}}>{children}</UserContext.Provider>
}