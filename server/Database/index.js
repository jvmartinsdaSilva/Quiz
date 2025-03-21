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

export class DatabaseQuestioController{

    async #ececQuery(query){
        try {
            const client = await pool.connect()
            const datas = await client.query(query)
            client.release(true)
            return {datas: datas.rows}
        } catch (err) {
            return { message: "Erro ao se conetar ao banco", erro: err }
        }
    }

    async getRandomQuestions(questionTheme){
        const query = `SELECT * FROM question WHERE question.theme = '${questionTheme}' ORDER BY RANDOM() LIMIT 3`
        const datas = this.#ececQuery(query)
        return datas
    }

    async getThemes(){
        const query = "SELECT DISTINCT theme FROM question"
        const datas = this.#ececQuery(query)
        return datas
    }

    async getQuestionsById(questionId){
        const query = `SELECT * FROM question WHERE id in (${ids.map(id => id)})`
        const datas = this.#ececQuery(query)
        return datas
    }
}