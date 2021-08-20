import React, { useState, useEffect } from "react";

export default function Fetch() {
    const [data, setData] = useState({});

    useEffect(async () => {
        const result = fetch(`https://api.github.com/users/nsym7372`)
            .then(res => res.json())
            .then(data => { setData(data) })
    }, []);

    return (
        <div>
            {/* {Object.keys(data).map((key) => <p>key: {key} value: {data.key}</p>)} */}
            {Object.entries(data).map(([key, value]) => <p>key: {key} / value: {value}</p>)}
            {data.login}
        </div>
    )
}