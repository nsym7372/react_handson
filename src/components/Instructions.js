import React from "react";

const Instructions = (({ title, steps }) => {
    return (
        <section className='instructions'>
            <h2>{title}</h2>
            {steps.map((step, i) => {
                return <p key={i}>{step}</p>
            })}
        </section>
    );
});

export default Instructions;