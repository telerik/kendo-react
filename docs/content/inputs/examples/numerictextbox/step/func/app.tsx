import * as React from 'react'

import { NumericTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
      <div>
        <div>Enter step:</div>
        <NumericTextBox
          width={300}
          defaultValue={5}
          step={3}
            />
      </div>
    );
}

export default App;
