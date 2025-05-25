import { pool } from "./Connection.js";


export class DatabaseUserController {
    async #execQuery(query){
        try {
            const client = await pool.connect()
            const datas = await client.query(query)
            return {message: "Query executada", datas}
        } catch (err) {
            return { message: "Erro ao se conetar ao banco", erro: err }         
        }  
    }

    async registerUser(userDatas) {
        const {id, name, email, password} = userDatas
        const query = {
            text: 'INSERT INTO users (id, email, name_alias, password) VALUES ($1, $2, $3, $4)',
            values: [id, email, name, password]
        }
        const response = await this.#execQuery(query)
        if(response.erro?.code == "23505") return {success: false, erro: response.erro, message: "Usuário ja cadastrado"}
        if(response.erro) return {success: false, erro: response.erro, message: response.message}
        
        return {success: true, message: "Usuario criado com sucesso", datas: response.datas}
    }

    async getUser(userEmail){
        const query = `SELECT id, email, name_alias, password, user_points  FROM users WHERE users.email = '${userEmail}'`
        const response = await this.#execQuery(query)
        if(response.datas.rows.length <= 0) return {success: false, message: "Usuário não encontrado"}
        return {success: true, message: "Usuário encontrado", datas: response.datas.rows[0]}
    }
}