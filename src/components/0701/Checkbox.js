import React, { useState, useEffect } from "react";

export default function Checkbox() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        alert(`checked: ${checked.toString()}`);
    });

    // alert(`${checked.toString()}`);

    return (
        <>
            <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
            {checked ? "checked" : "not checked"}
        </>
        
    );

}