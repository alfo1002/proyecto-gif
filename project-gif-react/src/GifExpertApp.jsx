import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Games', 'Meme'])

    const ondAddCategory = (newCategory) => {
        console.log(newCategory)
        //setCategories([...categories, 'verde'])
        setCategories(cat => [...cat, newCategory])
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={value => ondAddCategory(value)}
            />

            {/*<button onClick={ondAddCategory}>Agregar</button> */}
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
