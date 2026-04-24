import * as React from 'react'

import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const [disabled, setDisabled] = React.useState(false);

    const handleClick = (e) => {
        setDisabled(e.target.checked);
    };

    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm">
            <Checkbox id="disabled" onClick={handleClick} label="Toggle the disabled state" labelPlacement="before" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm">
            <ProgressBar value={20} disabled={disabled} />
          </div>
        </div>
      </div>
    );
};

export default App;
