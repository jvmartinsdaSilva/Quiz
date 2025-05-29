import { createContext, useState } from 'react';

import {setLocalStorage} from '../services/LocalStorage.js'

export const UserContext = createContext({
    User: {},
    login: datas => {},
    updatePoints: points => {}
})

export const  UserProvider = ({children}) => {
    const [User, setUser] = useState({})

    const  login = datas => {
        const {user, tolken} = datas
        setUser(user)
        setLocalStorage("user", JSON.stringify(user))
        setLocalStorage("tolken", tolken)
    }

    const updatePoints = newPoints => {
        const {points} = User
        setUser(prev => ({...prev, points: points + newPoints}))
    }

    return <UserContext.Provider value={{User, login, updatePoints}}>{children}</UserContext.Provider>
}