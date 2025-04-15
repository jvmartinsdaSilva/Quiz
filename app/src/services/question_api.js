export const getThemes = async () => {
    const datas = await fetch("http://localhost:3001/questions/themes")
    const res = await datas.json()
    return res
}

export const getQuestions = async theme => {
    const datas = await fetch(`http://localhost:3001/questions/getQuestions?questionTheme=${theme}`,)
    const res = await datas.json()
    return res
}


export const validateAnswers = async userAnswer => {
    const datas = await fetch("http://localhost:3001/questions/validadeAnswer", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({userAnswer: userAnswer})
    })
    const res = await datas.json()
    return res
}