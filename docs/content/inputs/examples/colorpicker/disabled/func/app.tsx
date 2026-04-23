import * as React from 'react'

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <div>
        <p>Disabled:</p>
        <ColorPicker disabled={true} />
      </div>
    )
}

export default App;
