import express from 'express'
import { getMessageByReceiverId, sendMessage } from '../controllers/messageController'
export const router = express.Router()

router.post('/send', sendMessage)
router.get('/userMessages/:id', getMessageByReceiverId)