import { useNavigate } from "react-router-dom"

export default function LandingPage() {
    const nav = useNavigate();

    return(
        <>
            <h1>Welcome to xats!</h1>
            <div>
                <button onClick={() => {nav('/register')}}>Register</button>
                <br />
                <button>Login</button>
            </div>
        </>
    )
}