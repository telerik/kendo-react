import * as React from 'react'

import { ColorGradient, ColorGradientChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string>('rgba(195, 0, 47, 1)');

    const handleOnChange = (event: ColorGradientChangeEvent) => setValue(event.value);

    return (
      <div>
        <div className="example-config">
          <strong>Selected color: <span>{value}</span></strong>
        </div>
        <ColorGradient opacity={false} defaultValue={value} onChange={handleOnChange} />
      </div>
    );
}

export default App;
