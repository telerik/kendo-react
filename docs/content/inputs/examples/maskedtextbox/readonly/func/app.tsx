import * as React from 'react'

import { MaskedTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <MaskedTextBox
        width={200}
        mask="aaaaaaaaaaaaaaaaa"
        value="Andrew Green"
        readonly={true}
      />
    )
}

export default App;
