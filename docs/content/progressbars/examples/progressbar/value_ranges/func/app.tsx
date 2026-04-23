import * as React from 'react';

import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Checkbox, NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<number | null>(0);
    const prevValueRef = React.useRef<number | null>(null);
    const min = -10;
    const max = 10;

    React.useEffect(() => {
        prevValueRef.current = value;
    });

    const prevValue = prevValueRef.current;

    const handleClick = () => {
        if (value == null) {
            setValue(prevValue);
        } else {
            setValue(null);
        }
    };

    const handleChange = (e: NumericTextBoxChangeEvent) => {
        setValue(e.target.value);
    };
    return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm">
          <Checkbox id="indeterminate" onClick={handleClick} label="Toggle the indeterminate state" labelPlacement="before" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm">
          Value: <NumericTextBox max={max} min={min} value={value} onChange={handleChange} width={80} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <span className="mr-2">Min: {min}</span>
          <ProgressBar
            min={min}
            max={max}
            value={value}
                  />
          <span className="ml-2">Max: {max}</span>
        </div>
      </div>
    </div>
    );
};

export default App;
