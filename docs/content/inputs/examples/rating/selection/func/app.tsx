import * as React from 'react';
import { Rating } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <Label>Continuous Selection Mode:</Label>
                <Rating selection={'continues'} defaultValue={2} />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <Label>Single Selection Mode:</Label>
                <Rating selection={'single'} defaultValue={4} />
            </div>
        </div>
    );
};

export default App;
