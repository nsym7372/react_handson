import React, {useState} from 'react';
import colorData from './data/color-data.json';


export default function App() {
    const [colors] = useState(colorData);
    
}