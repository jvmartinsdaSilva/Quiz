import express from 'express'
import cors from 'cors'

import { QuestionRouter } from './Routers/Questions/index.js'

const server = express()
server.use(cors())

server.use("/questions", QuestionRouter)
server.listen(3001, () => console.log("http://localhost:3001"))