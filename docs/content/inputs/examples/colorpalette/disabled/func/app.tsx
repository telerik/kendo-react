import * as React from 'react'

import { ColorPalette } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <div>
        <p>Select color:</p>
        <ColorPalette disabled={true} palette='office' />
      </div>
    );
}

export default App;
