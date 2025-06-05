import axios from 'axios'
import { useEffect, useState } from 'react';

type Message = {
    senderId: string,
    senderFirstName: string,
    senderLastName:string,
    receiverId: string,
    content: string
}

export default function MessagesList({receiverId = ''}: any) {
    const [messages, setMessages] = useState<Message[]>()
    const fetchUserMessages = async() =>{
        const id = receiverId;
        try {
            await axios
            .get(`http://localhost:4000/message/userMessages/${id}`)
            .then(function(response){
                setMessages(response.data.messages)
                console.log(response.data)
                console.log("Axios get messages successfull!")
            })
            .catch(function(error){
                console.error(error)
                console.log('Axios get request work but something in the backend did not!')
            })
        } catch (error) {
            console.error(error)
            console.log("Axios get messages didnt work :(")
        }
    }

    useEffect(() => {
        fetchUserMessages()
    },[])

    return (
        <>
            <h1>Your messages:</h1>
            {messages ? [...messages].reverse().map((message) => {
                return (
                    <li key={message.senderId + message.content}>
                        <h3>From: {message.senderFirstName} {message.senderLastName}</h3>
                        <p>{message.content}</p>
                    </li>
                )
            }) : <h3>No messages yet!</h3>}
        </>
    )

}