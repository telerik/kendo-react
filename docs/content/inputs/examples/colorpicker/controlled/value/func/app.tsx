import * as React from 'react';

import { ColorPicker, ColorPickerChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState('rgba(237, 126, 50, 1)');

    const handleOnChange = (event: ColorPickerChangeEvent) => setValue(event.value);

    return (
        <div>
            <p>Select color:</p>
            <ColorPicker views={['gradient', 'palette']} value={value} onChange={handleOnChange} />
        </div>
    );
};

export default App;
