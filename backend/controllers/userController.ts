import mongoose, { Mongoose } from 'mongoose';
import {User} from '../models/userModel'
import { Request, Response } from 'express';

export async function createUser (req,res) {
    try {
        const user = new User(req.body)
        //Saving user to DB, yes, password is saved as plain text, SUE ME
        await user.save()
        console.log('There she goeeeesss ', user)
        res.status(200).json({message:'There he goeeeesss', userFields: user})
    } catch (error) {
        console.error(`Something's fucked my guy`)
        res.status(500).json({ error: 'Failed to register user' })
    }
}

export async function loginUser (req, res) {
    try {
        // Checking if username exists
        const user = await User.findOne({username: req.body.username })
        if (!user) {
            res.status(401).json({message:'Username does not exist!'})
            return
        }
        //Comparing users password with the password in the req body
        if (user.password === req.body.password) {
            res.status(200).json({message:'Successful login!'})
            return
        }
        res.status(401).json({message:'Password is incorrect!'})
    } catch (error) {
        res.status(401).json({message:`Something's broke on the controller!`})
    }
}