import * as React from 'react'

import { MaskedTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string>("5748-1570-0019-4334");

    const handleOnChange = (event) => {
        const newValue = event.target.value;
        if (newValue !== value) {
            setValue(newValue);
        }
    };

    return (
      <>
        <div>Number:</div>
        <MaskedTextBox
          width={200}
          mask="0000-0000-0000-0000"
          value={value}
          onChange={handleOnChange}
          style={{width: 300}}
      />
      </>
    )
}

export default App;
