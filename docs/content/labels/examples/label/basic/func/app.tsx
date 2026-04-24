import * as React from 'react';
import { Label } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const editorId = 'firstName';
    return (
      <div>
        <Label editorId={editorId}>
          First Name:&nbsp;
        </Label>
        <Input
          id={editorId}
          value={value}
          onChange={(e: InputChangeEvent) => setValue(e.value)}
            />
      </div>
    );
};

export default App;
