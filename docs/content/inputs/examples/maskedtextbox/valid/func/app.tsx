import * as React from 'react'

import { MaskedTextBox, MaskedTextBoxChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string>('(359) 884-12-33-21');
    const [valid, setValid] = React.useState<boolean>(true);

    let timeout;

    const handleChange = (event: MaskedTextBoxChangeEvent) => {
        if (value === event.target.value) {
            updateValidity(event);
        } else {
            setValue(event.target.value);
        }
    }

    const updateValidity = (event) => {
        const textbox = event.target;
        if (textbox.element.value.length > textbox.value.length) {
            if (valid) {
                setValid(false);
            } else {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                setValid(true);
            }, 100);
        }
    }

    return (
      <div>
        <p>Type any numbers</p>
        <MaskedTextBox
          width={200}
          value={value}
          onChange={handleChange}
          mask="(999) 000-00-00-00"
          valid={valid}
        />
      </div>
    );
}

export default App;
