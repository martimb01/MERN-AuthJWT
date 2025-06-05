import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

interface UserI {
    firstName: string,
    lastName:string,
    _id:string
}

export default function UsersList ({userInfo}:any) {
    const userData = userInfo
    const [usersArray, setUsersArray] = useState<UserI[]>([])
    const[isClicked, setIsClicked] = useState(false)
    const [messageContent, setMessageContent] = useState('')
    const[receiver, setReceiver] = useState<UserI>({
                                                    firstName:'',
                                                    lastName:'',
                                                    _id:''
                                                    })
    

    const fetchAllUsers = async () => {
        try {
            await axios
            .get('http://localhost:4000/user/getAll')
            .then(function(response){
                console.log('Successful axios get!')
                setUsersArray(response.data.users)
            })
            .catch(function(error){
                console.log('Successful axios get but somethings gone wrong in the backend')
                console.error(error)
            })
            
        } catch (error) {
            console.log('Axios get did not work!', error)
        }
    }

    useEffect(() => {
        fetchAllUsers()
        console.log("Prop sent down by the heavens!", userData)
    } ,[])
    
    //On click turns isClicked true to render the textarea and gets the message receiver data (Name and Id)
    const handleClick = (receiverId: string, firstName: string, lastName:string) => {
        setIsClicked(true)
        setReceiver({
            firstName: firstName,
            lastName: lastName,
            _id:receiverId
        })
    }

    //Handle textArea input
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageContent(e.target.value)
        console.log(messageContent)
    }

    //Handle form (message) submition
    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios
            .post('http://localhost:4000/message/send',{
                senderId: userData._id,
                content: messageContent,
                receiver: receiver._id
            })
            .then(function (response){
                console.log('Axios message post request worked!')
                console.log(response.data)
            })
            .catch(function(error){
                console.log('Axios message post request worked, but something went wrong in the backend')
                console.log(error)
            })
        } catch (error) {
            console.log('Axios message post request did not work!')
            console.error(error)
        }
    }

    return (
        <>
            <ul>
            {[...usersArray].reverse().map((user, index) => {
                return (
                        <>
                            <li onClick={() => handleClick(user._id, user.firstName, user.lastName)} 
                                key={index}
                                style={{cursor:"pointer"}}>
                                {user.firstName} {user.lastName} 
                            </li>
                        </> 
                )
            })}
            </ul>
            
            <h1>Currently messaging {receiver.firstName} {receiver.lastName} with the id {receiver._id}</h1>
            {isClicked? <form onSubmit={handleSubmit}>
                            <textarea
                                onChange={handleChange}
                                name='message'
                                value={messageContent}
                                >Write your message here! 
                            </textarea>
                            <br />
                            <button type='submit'>Send!</button>
                         </form>
                       : ''}
        </>
    )
}