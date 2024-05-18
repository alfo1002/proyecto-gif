import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

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
            {
                isLoading
                    ? <LoadingMessage />
                    : (<PokemonCard
                        id={counter} name={data.name}
                        sprites={[
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny
                        ]
                        } />
                    )
            }

            <h2>{data?.name}</h2>

            <button name="btdecrement" className="btn btn-primary mt-2" onClick={decrement}>Anterior</button>
            <button name="btincrement" className="btn btn-primary mt-2" onClick={increment}>Siguiente</button>
        </>

    )
}
