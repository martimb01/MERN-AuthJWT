import mongoose from 'mongoose'
import { ref } from 'process'

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required:true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    senderFirstName: {
        type: String,
        required:true
    },
    senderLastName: {
        type: String,
        required:true
    }
}, {timestamps: true})

export const Message = mongoose.model('Message', messageSchema)