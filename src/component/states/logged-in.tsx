import { useState } from "react"

const LoggedIn = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleLogin = () => {
        setisLoggedIn(true)
    }
    const handleLogout = () => {
        setisLoggedIn(false)
    }

    return(
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>user is {isLoggedIn? 'logged in':'logged out'}</div> 
        </div>
    )
}
export default LoggedIn

//in this component typescript has infered the state variable to be a boolean