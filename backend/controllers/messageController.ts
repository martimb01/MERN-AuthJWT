import { Message } from "../models/messageModel"


export const sendMessage = async (req, res) => {
    try {
        const senderId = req.body.senderId
        const senderFirstName = req.body.senderFirstName
        const senderLastName = req.body.senderLastName
        const receiverId = req.body.receiverId
        const content = req.body.content

        const message = new Message({
            senderId,
            receiverId,
            content,
            senderFirstName,
            senderLastName

        })

        await message.save();
        res.status(200).json({info:'Message created!', message})
        
    } catch (error) {
        res.status(500).json({message:'message controler post didnt work!', error})
    }
    



}