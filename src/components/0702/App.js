import React, { useEffect, useLayoutEffect, useState } from 'react';

function useMousePosition(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setPosition = (e) => {
        setX(e.x);
        setY(e.y);
    }
    
    useLayoutEffect(() => {
        window.addEventListener('mousemove', setPosition);
        return () => window.removeEventListener('mousemove', setPosition);
    }, []);

    return [x, y];
}

export default function App() {
    useEffect(() => console.log('useeffect'));
    useLayoutEffect(() => console.log('uselayouteffect'));

    const [x, y] = useMousePosition();

    return (

        <>
            ready<br />
            {x} × {y}
        </>
    );
}