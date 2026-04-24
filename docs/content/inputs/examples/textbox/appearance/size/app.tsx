import * as React from 'react';
import { TextBox, TextBoxChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [smallValue, setSmallValue] = React.useState('');
    const [mediumValue, setMediumValue] = React.useState('');
    const [largeValue, setLargeValue] = React.useState('');

    const handleSmallChange = (event: TextBoxChangeEvent) => {
        setSmallValue(event.target.value as string);
    };

    const handleMediumChange = (event: TextBoxChangeEvent) => {
        setMediumValue(event.target.value as string);
    };

    const handleLargeChange = (event: TextBoxChangeEvent) => {
        setLargeValue(event.target.value as string);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ whiteSpace: 'nowrap' }}>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <TextBox placeholder="Small" value={smallValue} onChange={handleSmallChange} size={'small'} />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <TextBox placeholder="Medium" value={mediumValue} onChange={handleMediumChange} size={'medium'} />
                </div>
                <div style={{ display: 'inline-block' }}>
                    <TextBox placeholder="Large" value={largeValue} onChange={handleLargeChange} size={'large'} />
                </div>
            </div>
        </div>
    );
};

export default App;
