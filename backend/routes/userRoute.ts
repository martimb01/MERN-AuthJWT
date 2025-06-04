import express from 'express'
export const router = express.Router()
import { createUser, getAllUsers, loginUser } from '../controllers/userController'

//register an user
router.post('/register', createUser)

//login an user
router.post('/login', loginUser)

//get all users
router.get('/getAll', getAllUsers)