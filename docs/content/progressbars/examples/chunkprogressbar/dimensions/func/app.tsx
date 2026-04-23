import * as React from 'react';

import { ChunkProgressBar } from '@progress/kendo-react-progressbars';

const App = () => {
    return (
    <ChunkProgressBar
      value={40}
      style={{ width: 600 }}
    />
    );
};

export default App;
