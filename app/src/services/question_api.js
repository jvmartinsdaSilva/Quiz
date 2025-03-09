export const getThemes = async () => {
    const datas = await fetch("http://localhost:3001/questions/themes")
    const res = await datas.json()
    return res
}

