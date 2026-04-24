import * as React from 'react'

import { NumericTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <div>
        <NumericTextBox
          width={200}
          defaultValue={5}
        />
      </div>
    );
}

export default App;
