import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHook = () => {

    const [counter, setCounter] = useState(1)
    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/' + counter)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        console.log(counter)
        if (counter == 1) return
        setCounter(counter - 1)
    }

    return (
        <>
            <div>Información del Pokemon</div>
            <hr />
            {isLoading && <p>Cargando...</p>}

            <h2>{data?.name}</h2>

            <button name="btdecrement" className="btn btn-primary mt-2" onClick={decrement}>Anterior</button>
            <button name="btincrement" className="btn btn-primary mt-2" onClick={increment}>Siguiente</button>
        </>

    )
}
