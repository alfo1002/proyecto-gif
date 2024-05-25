import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <div>LoginPage</div>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button className="btn btn-primary" onClick={() => setUser({ id: 1, name: 'Paul', email: 'paul@google.com' })}>
                Set User
            </button>
        </>

    )
}
