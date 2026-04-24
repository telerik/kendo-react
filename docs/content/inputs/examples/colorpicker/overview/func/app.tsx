import * as React from 'react';

import { ColorPicker, ColorPickerChangeEvent } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    const [value, setValue] = React.useState('rgba(237, 126, 50, 1)');

    const handleOnChange = (event: ColorPickerChangeEvent) => setValue(event.value);

    return (
        <div className="example-wrapper">
            <div className="example" style={{ background: value }}>
                <div className="kendoka" />
            </div>
            <div>
                <h4 className="k-h4">T-shirt Design</h4>
                <p>Choose color:</p>
                <ColorPicker views={['gradient', 'palette']} value={value} onChange={handleOnChange} />
            </div>
        </div>
    );
};

export default App;
