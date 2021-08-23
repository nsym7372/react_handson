import axios from 'axios';
import React, { useState } from 'react';

export default function Store() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const createUser = async() => {
        await axios.post('http://localhost:8080/api/public/api/users', {name, email, password});
    }

    const submit = e => {
        e.preventDefault();

        // alert(title + ' : ' + color);
        // fetch('http://localhost:8080/api/public/api/users', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         name,
        //         email,
        //         password
        //     })
        // })

        createUser();
        

        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={submit}>
            <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='name' required />
            <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='email' required />
            <input value={password} onChange={e => setPassword(e.target.value)} type='text' placeholder='password' required />
            <button>ADD</button>
        </form>
    )
}