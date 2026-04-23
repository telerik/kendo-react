import * as React from 'react'

import { ProgressBar } from '@progress/kendo-react-progressbars';

const App = () => {
    return (
    <ProgressBar
      value={50}
      style={{ width: 600 }}
    />
    );
};

export default App;
