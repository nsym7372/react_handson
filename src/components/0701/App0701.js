import React, {useState} from 'react';
import DependArray from './DependArray';
export default function App() {
    const [val,set] = useState(3);
    return (
 
        <>
            {[...Array(val)].map((_, i) => <DependArray id={i} />)}
            <button onClick={() => set(val - 1)}>delete</button>
        </>
    );
}