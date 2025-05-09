import { pool } from "./Connection.js";


export class DatabaseUserController {
    async #execQuery(query){
        try {
            const client = await pool.connect()
            const datas = await client.query(query)
            client.release(true)
            return {datas: datas.rows}
        } catch (err) {
            return { message: "Erro ao se conetar ao banco", erro: err }
        }
    }

    async registerUser(userDatas) {
        const {name, email, password} = userDatas
        const query = {
            text: 'INSERT INTO users (email, name_alias, password) VALUES ($1, $2, $3)',
            values: [email, name, password]
        }
        const response = await this.#execQuery(query)
        const message = !response.erro && "Usuário cadastrado com sucesso"
        return {...response, message}
    }
}