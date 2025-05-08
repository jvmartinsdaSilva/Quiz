import { text } from "express";
import { pool } from "./Connection.js";

export class DatabaseUserController {
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

    async registerUser(userDatas) {
        const {name, email, password, userId} = userDatas
        const query = {
            text: 'INSERT INTO users (id, email, name_alias, password) VALUES ($1, $2, $3, $4)',
            values: [userId, email, name, password]
        }
        const response = await this.#execQuery(query)
        return response
    }
}