import * as React from 'react'

import { ProgressBar, ChunkProgressBar } from '@progress/kendo-react-progressbars';

const App = () => {
    const value = 55;
    const chunks = 5;

    return (
    <div className="container">
      <div className="row">
        <div className="col-sm mb-2">
          ProgressBar
        </div>
        <div className="col-sm mb-2">
          Chunk ProgressBar
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <ProgressBar value={value} />
        </div>
        <div className="col-sm">
          <ChunkProgressBar value={value} chunkCount={chunks} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div>Value: <strong>{value}</strong></div>
          <div>Chunk count: <strong>{chunks}</strong></div>
        </div>
      </div>
    </div>
    );
};

export default App;
