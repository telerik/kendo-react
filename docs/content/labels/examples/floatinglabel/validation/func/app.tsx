import * as React from 'react';
import { FloatingLabel, Error } from '@progress/kendo-react-labels';
import { FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';

const App = () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    const editorId = 'firstname';
    const isValid = !!value;
    return (
      <FormElement style={{maxWidth: 400}}>
        <FieldWrapper>
          <FloatingLabel
            label={'First name:'}
            editorId={editorId}
            editorValue={value}
            editorValid={isValid}
                >
            <Input
              id={editorId}
              value={value}
              valid={isValid}
              onChange={(e: InputChangeEvent) => setValue(e.value)}
                    />
          </FloatingLabel>
          {
                    !isValid && <Error>This field is required.</Error>
                }
        </FieldWrapper>
      </FormElement>
    );
};

export default App;
