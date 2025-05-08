import pg from 'pg'

const { Pool } = pg
export const pool = new Pool({
    user: 'joao',
    password: 'example',
    host: 'database',
    port: 5432,
    database: 'quizapp',
    max: 30
})