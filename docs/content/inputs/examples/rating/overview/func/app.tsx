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
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <Label>Controlled:</Label>
                    <Rating value={value} onChange={handleValueChange} />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <Label>Uncontrolled:</Label>
                    <Rating defaultValue={4} />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <Label>Read only:</Label>
                    <Rating defaultValue={3} readonly={true} />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <Label>Disabled:</Label>
                    <Rating defaultValue={3} disabled={true} />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <Label>No rating given:</Label>
                    <Rating />
                </div>
            </div>
        </div>
    );
};

export default App;
