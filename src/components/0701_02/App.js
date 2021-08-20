import React, {useEffect} from 'react';
import useAnyKeyToRender from './useAnyKeyToRender';


const words = ["gnar", "sick", "powder"];

export default function App() {
    useAnyKeyToRender();


    useEffect( () => {
        console.log('fresh render');
    }, [words]);

    return (
 
        <>
            open the console
        </>
    );
}