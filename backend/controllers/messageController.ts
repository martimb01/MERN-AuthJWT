import { Message } from "../models/messageModel"


export const sendMessage = async (req, res) => {
    try {
        const sender = req.body.senderId
        const receiver = req.body.receiverId
        const content = req.body.content

        const message = new Message({
            senderId: sender,
            receiverId: receiver,
            content: content
        })

        await message.save();
        res.status(200).json({info:'Message created!', message})
        
    } catch (error) {
        res.status(500).json({message:'message controler get didnt work!', error})
    }
    



}