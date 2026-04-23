import * as React from 'react';

import { TextArea, TextAreaChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string>('');

    const handleChange = (e: TextAreaChangeEvent) => {
        console.log(e.value);
        setValue(e.value);
    };

    return (
      <TextArea
        value={value}
        onChange={handleChange}
        rows={2}
      />
    );
}

export default App;
