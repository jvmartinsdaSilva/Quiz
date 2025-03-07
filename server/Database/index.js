import pg from 'pg'
const {Client} = pg

const client = new Client({
    user: 'joao',
    password: 'example',
    host: 'database',
    port: 5432,
    database: 'quizapp'
})

await client.connect()

export const getAnyQuestions = async amount => {
    const questions = await client.query(`SELECT * FROM question ORDER BY RANDOM() LIMIT ${amount}`).catch(err => {return {erro: err}})
    return questions.rows
}

export const getThemes = async () => {
    const themes = await client.query("SELECT DISTINCT theme FROM question ").catch(err => {return {erro: err}})
    return themes.rows
}