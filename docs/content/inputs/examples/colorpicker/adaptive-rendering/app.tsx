import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    return <ColorPicker views={['gradient', 'palette']} adaptive={true} defaultValue={'#3a6098'} />;
};

export default App;
