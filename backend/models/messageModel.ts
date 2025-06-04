import mongoose from 'mongoose'
import { ref } from 'process'

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required:true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
}, {timestamps: true})

export const Message = mongoose.model('Message', messageSchema)