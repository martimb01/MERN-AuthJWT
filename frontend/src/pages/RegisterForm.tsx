import { useState } from "react"

export default function RegisterForm() {
    const [inputs, setInputs] = useState({
        username: "",
        password:"",
        profileImgUrl:"",
        firstName:"",
        lastName:"",
        email:"",
        dateOfBirth: undefined
        })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({...inputs, [name]: value})
    }

    return(
        <>
            <form>
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
                
                 
            </form>
        </>
    )
}