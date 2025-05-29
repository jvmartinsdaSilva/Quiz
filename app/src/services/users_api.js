export const registerUser = async datas => {
    try {
        const register = await fetch("http://localhost:3001/users/register", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ userDatas: datas })
        })

        const response = await register.json()
        return response
    } catch (err) {
        return err
    }
}


export const LoginUser = async datas => {
    try {
        const login = await fetch("http://localhost:3001/users/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ userDatas: datas })
        })
        const response = await login.json()
        return response

    } catch(err) {
        return err
    }
}