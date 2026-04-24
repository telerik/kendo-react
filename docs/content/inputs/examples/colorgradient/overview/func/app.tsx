import * as React from 'react';

import {
    ColorGradient,
    ColorGradientChangeEvent
} from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    const [value, setValue] = React.useState<string>('rgba(195, 0, 47, 1)');

    const handleOnChange = (event: ColorGradientChangeEvent) => {
        setValue(event.value);
    };

    return (
    <div className="example-wrapper">
      <div className="example" style={{ background: value }}>
        <div className="kendoka" />
      </div>
      <div>
        <h4 className="k-h4">T-shirt Design</h4>
        <p>Choose color:</p>
        <ColorGradient
          defaultValue={value}
          value={value}
          onChange={handleOnChange}
          style={{ marginTop: '10px' }}
        />
      </div>
    </div>
    );
};

export default App;
