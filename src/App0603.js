import React, { useState } from 'react';
import ColorList from './components/0602/ColorList';
import colorData from './data/color-data.json';
import AddColorForm from './components/0603/AddColorForm';
import {v4} from 'uuid';


export default function App() {
    const [colors, setColors] = useState(colorData);

    return (
        <>
            <ColorList colors={colors}
                onRateColor={(id, rating) => {
                    const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
                    setColors(newColors);
                }

                }
                onRemoveColor={
                    id => {
                        const newColors = colors.filter(color => color.id !== id);
                        setColors(newColors);
                    }
                }
            />
            <AddColorForm onNewColor={(title, color) => {
                const newColors = [
                    ...colors,
                    {
                        id: v4(),
                        rating: 0,
                        title,
                        color
                    }
                ]
                setColors(newColors);
            }}/>
        </>
    );
}