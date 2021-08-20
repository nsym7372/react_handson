import React, { useState, useEffect } from "react";

export default function DependArray({id}) {
    const [val, set] = useState("");
    const [phrase, setPhrase] = useState("example phrase");

    const createPhrase = () => {
        setPhrase(val);
        set("")
    }

    useEffect(() => {
        console.log(`typing "${val}"`);
    }, [val])

    useEffect(() => {
        console.log(`saved phrase: "${phrase}"`);
    }, [phrase])

    useEffect(() => alert('start'), [])

    useEffect(() => {
        return () => alert(`end`);
    }, [])

    return(
        <div>
            <label>Favorite phrase:{id}</label>
            <input value={val} placeholder={phrase} onChange={e => set(e.target.value)} />
            <button onClick={createPhrase}>send</button>
            
        </div>
    )
}