import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function RegisterForm() {
    const nav = useNavigate()
    const [inputs, setInputs] = useState({
        username: "",
        password:"",
        profileImgUrl:"",
        firstName:"",
        lastName:"",
        email:"",
        dateOfBirth: ''
        })

    
    //Handle user input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({...inputs, [name]: value})
        console.log(e)
    }
    //Handle submit (registration)
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/user/register', inputs)
             .then(function (response) {
                console.log(response.data)
                setTimeout(() => (nav('/')), 2000)
             })
             .catch(function (error) {
                console.log("Did not work! (logging on browser console)")
                console.log(error)
             })
            
        } catch (error) {
            console.log("Axios request did not work!")
            console.error(error)
        }
        
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <br />
                <input 
                    type="string"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                 />
                <br />
                <label>Password</label>
                <br />
                <input 
                    type="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                 />
                <br />
                <label>Profile Picture URL</label>
                <br />
                <input 
                    type="string"
                    name="profileImgUrl"
                    value={inputs.profileImgUrl}
                    onChange={handleChange}
                 />
                <br />
                <label>First Name</label>
                <br />
                <input 
                    type="string"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                 />
                <br />
                <label>Last Name</label>
                <br />
                <input 
                    type="string"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                 />
                <br />
                <label>Email</label>
                <br />
                <input 
                    type="string"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                 />
                <br />
                <label>Date Of Birth</label>
                <br />
                <input 
                    type="date"
                    name="dateOfBirth"
                    value={inputs.dateOfBirth}
                    onChange={handleChange}
                 />
                 <br />
                <button type="submit">Register!</button>
            </form>
        </>
    )
}

