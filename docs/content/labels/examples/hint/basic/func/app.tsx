import * as React from 'react';
import { Label, Hint } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { FormElement } from '@progress/kendo-react-form';

const App = () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const editorId = 'firstName';
    return (
      <FormElement style={{maxWidth: 400}}>
        <Label editorId={editorId}>
          First Name:&nbsp;
        </Label>
        <Input
          id={editorId}
          value={value}
          ariaDescribedBy={'firstNameHint'}
          onChange={(e: InputChangeEvent) => setValue(e.value)}
            />
        <Hint id={'firstNameHint'}>e.g.: Peter</Hint>
      </FormElement>
    );
};

export default App;
