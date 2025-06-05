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

export const getMessageByReceiverId = async (req,res) => {
    try {
        const receiverId = req.params.id
        const messages = await Message.find({receiverId: receiverId})

        if(messages.length === 0) {
            res.status(200).json({message:'No messages for you!'})
            console.log('messageController get successfull but no messages for this receiverId!')
            return
        }  
        res.status(200).json({message:`Messages fetched successfully!`, messages})
        console.log('Messages fetched successfully!')
    } catch (error) {
        res.status(500).json({message:'Something went wrong with the getMessagesByReceiverId controller!'})
        console.error(error)
    }


}