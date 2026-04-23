import * as React from 'react';

import { TextArea } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <TextArea
        disabled={true}
        placeholder={'Disabled textarea'}
        rows={4}
      />
    );
}


export default App;
