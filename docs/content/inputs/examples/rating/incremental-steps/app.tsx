import * as React from 'react';
import { Rating } from '@progress/kendo-react-inputs';

const HotelRating = () => {
    const [value, setValue] = React.useState(6);

    const handleRatingChange = (event) => {
        setValue(event.value);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h5>Rate Your Hotel Stay</h5>
            <br />
            <p>Select a rating: (2 - Poor, 4 - Fair, 6 - Good, 8 - Very Good, 10 - Excellent)</p>
            <Rating step={2} min={2} max={10} value={value} onChange={handleRatingChange} />
            <br />
            <br />
            <p>Your rating: {value} / 10</p>
        </div>
    );
};

export default HotelRating;
