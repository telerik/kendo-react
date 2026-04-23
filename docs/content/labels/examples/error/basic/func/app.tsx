import * as React from 'react';
import { Label, Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { FormElement } from '@progress/kendo-react-form';

const App = () => {
    const [value, setValue] = React.useState();
    const editorId = 'firstName';
    return (
      <FormElement style={{maxWidth: 400}}>
        <Label editorId={editorId}>
          First Name:&nbsp;
        </Label>
        <Input
          id={editorId}
          value={value}
          ariaDescribedBy={'firstNameError'}
          onChange={(e: any) => setValue(e.value)}
            />
        {
                !value && <Error id={'firstNameError'}>This field is required.</Error>
            }
      </FormElement>
    );
};

export default App;
