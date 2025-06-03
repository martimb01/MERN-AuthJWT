import express from 'express'
export const router = express.Router()
import {User} from '../models/userModel'

//register an user
router.get('/register', async (req,res) => {
    try {
        const user = req.body
        console.log(user)
    } catch (error) {
        console.error(`Something's fucked my guy`)
    }
})