import * as React from 'react'

import { ColorGradient } from '@progress/kendo-react-inputs';

const App = () => {
    const value = 'rgba(195, 0, 47, 1)';

    return (
      <ColorGradient disabled={true} defaultValue={value} />
    );
}

export default App;
