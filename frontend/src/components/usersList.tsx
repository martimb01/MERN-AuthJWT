import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

interface UserI {
    firstName: string,
    lastName:string,
    _id:string
}

export default function UsersList () {
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
    }

    return (
        <>
            <ul>
            {[...usersArray].reverse().map((user) => {
                return (
                        <>
                            <li onClick={() => handleClick(user._id, user.firstName, user.lastName)} key={user._id}>
                                {user.firstName} {user.lastName} 
                            </li>
                        </> 
                )
            })}
            </ul>
            
            <h1>Currently messaging {receiver.firstName} {receiver.lastName} with the id {receiver._id}</h1>
            {isClicked? <textarea
                         onChange={handleChange}
                         name='message'
                         value={messageContent}
                         >Write your message here! 
                         </textarea> : ''}
        </>
    )
}