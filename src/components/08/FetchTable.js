import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

export default function FetchTable() {
    // const [users, setUsers] = useState([]);

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

    // const f = async () => {
    //     const { data } = await axios.get("http://localhost:8080/api/public/api/users");
    //     setUsers(data);
    // }

    const {data, status} = useQuery('getUsers', async () => {
        const { data } = await axios.get("http://localhost:8080/api/public/api/users")
        return data;
    });

    if(status === 'loading'){ return 'loading'}
    else if(status === 'error'){return 'error'}

    // useEffect(() => {
    //     // 純粋関数で無ければならない　https://qiita.com/daishi/items/4423878a1cd7a0ab69eb
    //     f();
    //     console.log('index');
    // }, []);

    return (
        <ul>
            {
                data.map(user => {
                    return (
                        <li key={user.id}>{user.id} : {user.name}</li>
                    )
                })
            }
        </ul>

        // <ul>
        //     {
        //         users.map(user => {
        //             return (
        //                 <li key={user.id}>{user.id} : {user.name}</li>
        //             )
        //         })
        //     }
        // </ul>
    )
}