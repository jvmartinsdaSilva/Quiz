import { pool } from "./Connection.js"


export class DatabaseQuestioController{

    async #execQuery(query){
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
        questionsId.map(id => console.log(typeof(id)))
        const query = `SELECT * FROM question WHERE id in (${questionsId.map(id => id)})`
        const response = await this.#execQuery(query)
        return response
    }
}