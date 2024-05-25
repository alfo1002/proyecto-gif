import { useState } from "react"
import { UserContext } from "./UserContext"

/*const user = {
    id: 1,
    name: 'paul',
    email: 'paul@gmail.com',
}*/

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})

    return (
        //<UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
