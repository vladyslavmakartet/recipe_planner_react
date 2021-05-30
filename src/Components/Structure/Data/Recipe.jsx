import React from 'react'
import Ingredient from './Ingredient'
const Recipe = ({ingredients}) => {
    return (
        <>
            {ingredients.map((ingredient) => (
                <Ingredient />
            ))}
        </>
    )
}

export default Recipe
