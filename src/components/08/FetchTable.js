import React, { useState, useEffect } from "react";

export default function FetchTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // 純粋関数で無ければならない　https://qiita.com/daishi/items/4423878a1cd7a0ab69eb
        const f = async () => {
            await fetch(`http://localhost:8080/api/public/api/users`)
                .then(res => res.json())
                .then(data => { setUsers(data) })
        }
        f();

    }, []);

    return (
        <ul>
            {
                users.map(user => {
                    return (
                        <li key={user.id}>{user.id} : {user.name}</li>
                    )
                })
            }
        </ul>
    )
}