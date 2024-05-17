import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'alfo1002',
        email: 'alfo@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        console.log('Hey!')
    })

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text" className="form-control"
                placeholder="Username" name="username" value={username}
                onChange={onInputChange}
            />

            <input
                type="email" className="form-control mt-2"
                placeholder="Username" name="email" value={email}
                onChange={onInputChange}
            />
        </>
    )

}
