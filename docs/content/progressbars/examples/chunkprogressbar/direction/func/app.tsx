import * as React from 'react'

import { ChunkProgressBar } from '@progress/kendo-react-progressbars';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const [direction, setDirection] = React.useState(false);

    const handleReverse = (e) => {
        setDirection(e.target.checked);
    };

    return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-sm">
          <p>State: <strong>{direction ? 'Reversed' : 'Default'}</strong></p>
          <Checkbox id="reverse" onClick={handleReverse} label="Toggle the reverse state" labelPlacement="before" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <ChunkProgressBar value={50} reverse={direction} />
        </div>
      </div>
    </div>
    );
};

export default App;
