import React from "react"
import Ingredient from "./Ingredient";

export function IngredientsList({items}) {

    return (
        <ul className='ingredients'>
            {items.map((ingredient, i) => {
                return <Ingredient key={i} {...ingredient} />
            })}
        </ul>
    );
}