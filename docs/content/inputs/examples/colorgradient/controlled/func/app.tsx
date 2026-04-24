import * as React from 'react'

import { ColorGradient, ColorGradientChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string>('rgba(195, 0, 47, 1)');

    const handleOnChange = (event: ColorGradientChangeEvent) => setValue(event.value);

    return (
      <div>
        <ColorGradient value={value} onChange={handleOnChange} />
      </div>
    );
}

export default App;
