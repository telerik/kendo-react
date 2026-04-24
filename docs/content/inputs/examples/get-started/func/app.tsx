import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    return (
    <div>
      <ColorPicker view="gradient" defaultValue={'green'} />
    </div>
    );
};

export default App;
