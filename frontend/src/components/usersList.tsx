import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

interface UserI {
    firstName: string,
    lastName:string
}

export default function UsersList () {
    const [usersArray, setUsersArray] = useState<UserI[]>([])

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
    return (
        <>
        {usersArray.reverse().map((user, index) => {
            return (
                <li key={index}>
                    {user.firstName}{user.lastName}
                    
                </li>
            )
        })}
        </>
    )
}