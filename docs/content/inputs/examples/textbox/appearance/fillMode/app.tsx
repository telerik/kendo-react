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
                    <TextBox placeholder={'Solid'} value={smallValue} onChange={handleSmallChange} fillMode={'solid'} />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <TextBox
                        placeholder={'Outline'}
                        value={mediumValue}
                        onChange={handleMediumChange}
                        fillMode={'outline'}
                    />
                </div>
                <div style={{ display: 'inline-block' }}>
                    <TextBox placeholder={'Flat'} value={largeValue} onChange={handleLargeChange} />
                </div>
            </div>
        </div>
    );
};

export default App;
