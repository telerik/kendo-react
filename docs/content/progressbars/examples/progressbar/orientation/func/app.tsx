import * as React from 'react'

import { ProgressBar } from '@progress/kendo-react-progressbars';

const App = () => {
    return (
      <div className="row">
        <div className="col-6 example-col">
          <p>Horizontal ProgressBar</p>
          <ProgressBar value={50} />
        </div>

        <div className="col-6 example-col">
          <p>Vertical ProgressBar</p>
          <ProgressBar value={50} orientation={'vertical'} />
        </div>
      </div>
    );
};

export default App;
