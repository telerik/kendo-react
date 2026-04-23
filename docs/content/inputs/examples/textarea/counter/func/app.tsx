import * as React from 'react';

import { Hint } from '@progress/kendo-react-labels';
import { TextArea, TextAreaChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState('');
    const max = 20;

    const handleChange = (e: TextAreaChangeEvent) => {
        setValue(e.value);
    }

    return (
      <div style={{ position: 'absolute' }}>
        <TextArea
          maxLength={max}
          value={value}
          onChange={handleChange}
          rows={4}
            />
        <Hint direction={'end'}>{value.length} / {max}</Hint>
      </div>
    );
}


export default App;
