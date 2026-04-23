import React, { useState } from 'react';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: InputChangeEvent) => {
        const value = event.target.value as string;
        setInputValue(value);
    };

    return (
        <div className="container">
            <div className="input-wrapper">
                <Input
                    value={inputValue}
                    onChange={handleChange}
                    placeholder={'Type something here'}
                    style={{ width: '100%' }}
                />
                <br />
                <br />
                <p className="current-value">
                    Current Value: <strong>{inputValue}</strong>
                </p>
            </div>
        </div>
    );
};

export default App;
