import React from "react";
import Recipe from "./Recipe";

const Menu = ({title, recipes}) => {
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => {
                    return <Recipe key={i} {...recipe} />
                })}
            </div>
        </article>
    );
}

export default Menu;