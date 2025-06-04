import express from 'express'
export const router = express.Router()
import {User} from '../models/userModel'
import { createUser, loginUser } from '../controllers/userController'

//register an user
router.post('/register', createUser)

//login an user
router.post('/login', loginUser)