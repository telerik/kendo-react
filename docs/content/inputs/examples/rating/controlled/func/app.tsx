import * as React from 'react';
import { Rating, RatingChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [value, setValue] = React.useState(2);

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
            <Label>Selected Rating: {value}</Label>
            <Rating value={value} onChange={handleValueChange} />
        </div>
    );
};

export default App;
