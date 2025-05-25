import { createContext, useState } from 'react';

import {setLocalStorage} from '../services/LocalStorage.js'

export const UserContext = createContext({
    User: {},
    login: datas => {}
})

export const  UserProvider = ({children}) => {
    const [User, setUser] = useState({})

    const  login = datas => {
        const {user, tolken} = datas
        setUser(user)
        setLocalStorage("user", JSON.stringify(user))
        setLocalStorage("tolken", tolken)
    }

    return <UserContext.Provider value={{User, login}}>{children}</UserContext.Provider>
}