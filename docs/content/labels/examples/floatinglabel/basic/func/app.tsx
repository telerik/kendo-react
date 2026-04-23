import * as React from 'react';
import { FloatingLabel } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const editorId = 'firstName';
    return (
      <FloatingLabel label={'First Name:'} editorId={editorId} editorValue={value}>
        <Input
          id={editorId}
          value={value}
          onChange={(e: InputChangeEvent) => setValue(e.value)}
            />
      </FloatingLabel>
    );
};

export default App;
