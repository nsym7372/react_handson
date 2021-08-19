import React, { useContext } from 'react';
import { useColors } from './ColorProvider';
import Color from './Color';

export default function ColorList() {
    const { colors, rateColor } = useColors();
    if (!colors.length) {
        return <div>No Colors Listed.</div>
    }

    return (
        <div>
            {colors.map(color => <Color key={color.id} {...color}
                // onRemove={onRemoveColor} onRate={onRateColor}
                
                // onRate={(id, rating) => {
                //     const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
                //     setColors(newColors);
                // }}

                onRate={(id, rating) => {rateColor(id, rating)}}
            />
            )}
        </div>
    )
}