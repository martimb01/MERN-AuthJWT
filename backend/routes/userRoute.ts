import express from 'express'
export const router = express.Router()
import {User} from '../models/userModel'

//register an user
router.post('/register', async (req,res) => {
    try {
        const user = new User(req.body)
        await user.save()
        console.log('There she goeeeesss ', user)
        res.status(200).json({message:'There he goeeeesss', userFields: user})
    } catch (error) {
        console.error(`Something's fucked my guy`)
        res.status(500).json({ error: 'Failed to register user' })
    }
})