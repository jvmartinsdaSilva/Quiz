import express from 'express'

import { DatabaseUserController } from '../../Database/Users.js'

const UserDatabase = new DatabaseUserController()

export const UserRouter = express.Router()