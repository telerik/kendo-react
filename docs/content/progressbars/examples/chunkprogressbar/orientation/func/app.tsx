import * as React from 'react'

import { ChunkProgressBar } from '@progress/kendo-react-progressbars';

const App = () => {
    return (
    <div className="row">
      <div className="col-6 example-col">
        <p>Horizontal ChunkProgressBar</p>
        <ChunkProgressBar value={50} />
      </div>

      <div className="col-6 example-col">
        <p>Vertical ChunkProgressBar</p>
        <ChunkProgressBar value={50} orientation={'vertical'} />
      </div>
    </div>
    );
};

export default App;
