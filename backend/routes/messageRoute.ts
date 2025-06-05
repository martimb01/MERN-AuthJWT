import express from 'express'
import { sendMessage } from '../controllers/messageController'
export const router = express.Router()

router.post('/send', sendMessage)