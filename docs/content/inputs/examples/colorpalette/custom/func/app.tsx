import * as React from 'react'

import { ColorPalette } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <div>
        <p>Select color:</p>
        <ColorPalette columns={5} tileSize={{ width: 40, height: 30 }} palette='basic' />
      </div>
    );
}

export default App;
