import * as React from 'react'

import { Checkbox, CheckboxHandle } from '@progress/kendo-react-inputs';

const App = () => {
    const checkboxRef = React.useRef<CheckboxHandle>(null);

    React.useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.focus();
        }
    });

    return (
    <div>
      <Checkbox ref={checkboxRef} label="Initially focused" />
      <br />
      <Checkbox label="Secondary focused" />
    </div>
    )
}

export default App;
