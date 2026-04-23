import * as React from 'react'

import { ColorPalette, ColorPaletteChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string>('none');

    const handleOnChange = (event: ColorPaletteChangeEvent) => setValue(event.value);

    return (
      <div>
        <p>Select color:</p>
        <ColorPalette value={value} onChange={handleOnChange} palette='basic' />
      </div>
    );
}

export default App;
