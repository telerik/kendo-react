import * as React from 'react'

import { MaskedTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <MaskedTextBox
        width={200}
        mask="0000-0000-0000-0000"
        defaultValue="5748-1570-0019-4334"
      />
    )
}

export default App;
