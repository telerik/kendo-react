import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    return (
    <div className="example-wrapper-center">
      <ColorPicker view="gradient" defaultValue={'green'} />
    </div>
    );
};

export default App;
