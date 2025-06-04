import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from 'axios'
export default function LandingPage() {
    const nav = useNavigate();
    const [inputs, setInputs] = useState({
        username:'',
        password:''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/user/login', inputs)
                       .then(function (response){
                        console.log('Axios logIn post request worked!')
                        console.log(response.data)
                        const userData = response.data.user
                        nav('/homepage', {
                            state: {userData}
                        })
                       }) 
                       .catch(function (error){
                        console.log("Axios post request worked but something went wrong in the logIn backend")
                        console.log(error)
                       })
        } catch (error) {
            console.log("Axios post request did not work")
            console.log(error)
        }
    }

    return(
        <>
            <h1>Welcome to xats!</h1>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <br />
                <input
                    onChange={handleChange}
                    name="username"
                    type="text"
                    value={inputs.username}
                />
                <br />
                <input
                    onChange={handleChange}
                    name="password" 
                    type="password" 
                    value={inputs.password}
                />
                <br />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => {nav('/register')}}>Register</button>
            
        </>
    )
}