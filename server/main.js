import express from 'express'
import cors from 'cors'

import { QuestionRouter } from './Routers/Questions/index.js'

const server = express()
server.use(express.json())
server.use(cors())

server.use("/questions", QuestionRouter)
server.listen(3000, () => console.log("http://localhost:3000"))