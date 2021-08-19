import React, { useState, createContext, useContext } from 'react';
import colorData from '../../data/color-data.json';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function App({ children }) {

    const [colors, setColors] = useState(colorData);

    // //ok
    // const rateColor1 = (id, rating) =>
    //     setColors(
    //         colors.map(color => (color.id === id ? { ...color, rating } : color))
    //     );

    // //ok
    // const rateColor2 = (id, rating) => {
    //     setColors(
    //         colors.map(color => (color.id === id ? { ...color, rating } : color))
    //     );
    // };

    // //ok
    // const rateColor3 = (id, rating) => {
    //     const newColors = colors.map(color => (color.id === id ? { ...color, rating } : color));
    //     setColors(newColors);
    // }

    // //ok
    // const rateColor4 = (id, rating) => {
    //     const newColors = colors.map(color =>{ return (color.id === id ? { ...color, rating } : color)});
    //     setColors(newColors);
    // }

    // //ok
    // const rateColor5 = (id, rating) => {
    //     const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
    //     setColors(newColors);
    // }

    //ok
    const rateColor = (id, rating) => {
        // const newColors = colors.map(color => (color.id === id ? { ...color, rating } : colors));

        const newColors = colors.map(color => {
            return (color.id === id ? { ...color, rating } : color);
        });
        setColors(newColors);
    };

    return (
        <ColorContext.Provider value={{ colors, rateColor }}>
            {children}
        </ColorContext.Provider>
    );
}