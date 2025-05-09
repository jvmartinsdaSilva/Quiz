import express from 'express'
import cors from 'cors'

import { QuestionRouter } from './Routers/Questions/index.js'
import { UserRouter } from './Routers/User/index.js'

const server = express()
server.use(cors())
server.use(express.json())

server.use("/questions", QuestionRouter)
server.use("/users", UserRouter)
server.listen(3001, () => console.log("http://localhost:3001"))