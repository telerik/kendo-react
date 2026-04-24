import * as React from 'react';
import { Rating, RatingChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState(1);

    const handleValueChange = (event: RatingChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}
        >
            <Rating value={value} onChange={handleValueChange} min={1} max={3} />
        </div>
    );
};

export default App;
