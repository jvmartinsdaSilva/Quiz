import { text } from "express";
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
        const {name, email, password, userId=331} = userDatas
        const query = {
            text: 'INSERT INTO users (id, email, name_alias, password) VALUES ($1, $2, $3, $4)',
            values: [userId, email, name, password]
        }
        const response = await this.#execQuery(query)
        const message = !response.erro && "Usuário cadastrado com sucesso"
        return {...response, message}
    }
}