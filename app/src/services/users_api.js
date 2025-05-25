export const registerUser = async datas => {
    try{
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
