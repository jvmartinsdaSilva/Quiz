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

export const getAnyQuestions = async () => {
    const questions = await client.query("SELECT * FROM question").catch(err => {return {erro: err}})
    return questions.rows
}