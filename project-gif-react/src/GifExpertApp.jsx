import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Games', 'Meme'])
    console.log(categories)
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            <button>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
