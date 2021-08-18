import React from "react";
import Instructions from "./Instructions";
import { IngredientsList } from "./IngredientsList";

const Recipe = ({ name, ingredients, steps }) => {
    return (
        <section id={name.toLowerCase().replace(/ /g, '-')}>
            <h1>{name}</h1>
            <IngredientsList items={ingredients}/>
            <Instructions title='cooking instructions' steps={steps} />
        </section>
    )
}

export default Recipe;