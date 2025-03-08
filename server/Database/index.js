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

export const getAnyQuestions = async questionTheme => {
    const query = await client.query(`SELECT * FROM question WHERE question.theme = '${questionTheme}' ORDER BY RANDOM() LIMIT 3 `).catch(err => {return {erro: err}})
    const questions = query.rows
    return questions
}

export const getThemes = async () => {
    const query = await client.query("SELECT DISTINCT theme FROM question ").catch(err => {return {erro: err}})
    const themes = query.rows?.map(theme => theme.theme)
    return themes
}