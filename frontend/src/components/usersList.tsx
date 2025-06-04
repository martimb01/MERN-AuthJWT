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
    const[receiver, setReceiver] = useState<UserI>({
                                                    firstName:'',
                                                    lastName:'',
                                                    _id:''
                                                    })
    // const [messageContent, setMessageContent] = useState('')

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

    const handleClick = (receiverId: string, firstName: string, lastName:string) => {
        setIsClicked(true)
        setReceiver({
            firstName: firstName,
            lastName: lastName,
            _id:receiverId
        })
    }

    useEffect(() => {
        fetchAllUsers()
    } ,[])
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
            {isClicked? <textarea></textarea> : ''}
        </>
    )
}