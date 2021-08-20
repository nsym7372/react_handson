import React, { useState, useEffect } from "react";

export default function FetchObject() {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        fetch(`http://localhost:8080/api/public/api/users`)
            .then(res => res.json())
            .then(data => { setUsers(data) })
    }, []);

    return (
        <ul>
            {users.map(user => {
                return (
                    <li key={user.id}>{user.id} : {user.name}</li>
                )
            })}
        </ul>
    )
}