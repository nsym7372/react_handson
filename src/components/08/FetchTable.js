import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function FetchTable() {
    const [users, setUsers] = useState([]);

    // const f = async () => {
    //     await fetch(`http://localhost:8080/api/public/api/users`)
    //         .then(res => res.json())
    //         .then(data => { setUsers(data) })
    // };

    // const f = useCallback(
    //     async() => {
    //         const {data} = await axios.get("http://localhost:8080/api/public/api/users");
    //         setUsers(data);
    //     }, [])

    const f = async () => {
        const { data } = await axios.get("http://localhost:8080/api/public/api/users");
        setUsers(data);
    }


    useEffect(() => {
        // 純粋関数で無ければならない　https://qiita.com/daishi/items/4423878a1cd7a0ab69eb
        f();
        console.log('index');
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