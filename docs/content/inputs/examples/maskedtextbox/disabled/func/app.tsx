import * as React from 'react'

import { MaskedTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <div>
        <p>Phone number</p>
        <MaskedTextBox
          disabled={true}

          width={200}
          mask="(999) 000-00-00-00"
          defaultValue="(359) 884-12-33-21"
        />
      </div>
    )
}

export default App;
