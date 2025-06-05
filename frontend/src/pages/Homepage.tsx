import UsersList from "../components/UsersList"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import MessagesList from "../components/MessagesList";
export default function Homepage() {
    const loc = useLocation()
    const {userData} = loc.state || {};

    useEffect(() => {
        console.log('The state data passed!!!! :)',userData)
    })
    return (
        <>
        <h1>Welcome back, {userData.firstName} {userData.lastName}</h1>
        <MessagesList receiverId={userData._id} />
        <h1>Select what user you want to message: </h1>
        <UsersList userInfo = {userData}/>
        </>
    )
}