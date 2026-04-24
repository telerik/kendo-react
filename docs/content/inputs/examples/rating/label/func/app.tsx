import * as React from 'react';
import { Rating, RatingChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState(2);

    const handleValueChange = (event: RatingChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Rating
                value={value}
                precision={'half'}
                label={value ? value + ' out of 5' : 'please select value'}
                onChange={handleValueChange}
            />
        </div>
    );
};

export default App;
