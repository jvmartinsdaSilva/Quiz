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

    async #execQuery(query){
        // console.log(query)
        try {
            const client = await pool.connect()
            const datas = await client.query(query)
            client.release(true)
            return {datas: datas.rows, message: "Dados coletados com sucesso"}
        } catch (err) {
            return { message: "Erro ao se conetar ao banco", erro: err }
        }
    }

    async getRandomQuestions(questionTheme){
        const query = `SELECT * FROM question WHERE question.theme = '${questionTheme}' ORDER BY RANDOM() LIMIT 3`
        const response = await this.#execQuery(query)
        return response
    }

    async getThemes(){
        const query = "SELECT DISTINCT theme FROM question"
        const response = await this.#execQuery(query)
        return response
    }

    async getQuestionsById(questionsId){
        const query = `SELECT * FROM question WHERE id in (${questionsId.map(id => id)})`
        const response = await this.#execQuery(query)
        return response
    }
}