import * as React from 'react';
import { FloatingLabel } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const editorId = 'homeaddress';
    const placeholder = 'e.g.: Dublin blvd';
    return (
      <FloatingLabel
        label={'Home Address:'}
        editorId={editorId}
        editorValue={value}
        editorPlaceholder={placeholder}
        >
        <Input
          id={editorId}
          value={value}
          placeholder={placeholder}
          onChange={(e: InputChangeEvent) => setValue(e.value)}
            />
      </FloatingLabel>
    );
};

export default App;
