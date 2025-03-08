import pg from 'pg'

const { Pool } = pg
const pool = new Pool({
    user: 'joao',
    password: 'example',
    host: 'database',
    port: 5432,
    database: 'quizapp',
    max: 30
})


export const getAnyQuestions = async questionTheme => {
    const query = `SELECT * FROM question WHERE question.theme = '${questionTheme}' ORDER BY RANDOM() LIMIT 3`
    try {
        const client = await pool.connect()
        const datas = await client.query(query)
        client.release(true)
        return {datas: datas.rows}
    } catch (err) {
        return { message: "Erro ao se conetar ao banco", erro: err }
    }
}

export const getThemes = async () => {
    const query = "SELECT DISTINCT theme FROM question"
    try{
        const client = await pool.connect()
        const datas = await client.query(query)
        client.release(true)       
        return {themes: datas.rows.map(data => data.theme)}
    }  catch (err) {
        return { message: "Erro ao se conetar ao banco", erro: err }
    }
}