import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Games',])

    const ondAddCategory = (newCategory) => {
        console.log(newCategory)
        if (categories.includes(newCategory)) return
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
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
