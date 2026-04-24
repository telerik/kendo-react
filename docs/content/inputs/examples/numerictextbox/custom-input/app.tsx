import * as React from 'react';
import { useState } from 'react';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';

const formatNumberAsHex = (dec: number) => {
    return dec !== null ? Math.floor(dec).toString(16).toUpperCase() : '';
};

const App = () => {
    const [value, setValue] = useState(11256099);

    const handleDecimalChange = (e: NumericTextBoxChangeEvent) => {
        const newDecimal = e.value ?? 0;
        setValue(newDecimal);
    };

    return (
        <div className="col-xs-12 col-sm-12 example-col" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NumericTextBox style={{ width: '230px' }} format="n0" value={value} onChange={handleDecimalChange} />
            <br />
            <p style={{ margin: 15, fontWeight: 'bold' }}>Hex: {formatNumberAsHex(value)}</p>
        </div>
    );
};

export default App;
