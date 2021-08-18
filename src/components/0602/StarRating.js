import React from 'react';
import Star from '../0601/Star';

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {

    return (
        <div>
            {[...Array(totalStars)].map((_, i) => (
                <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)} />)
            )}
            <p>
                {selectedStars} of {totalStars} stars.
            </p>
        </div>
    );
}