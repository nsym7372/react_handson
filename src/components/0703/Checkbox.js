import React, { useReducer } from "react";
import Numbers from "./Number";

export default function Checkbox() {

    const [checked, toggle] = useReducer(checked => !checked, false);

    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked ? "checked" : "not checked"}

            <br />
            <Numbers />
        </>
        
    );

}