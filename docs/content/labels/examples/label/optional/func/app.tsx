import * as React from 'react';
import { Label } from '@progress/kendo-react-labels';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { FormElement, FieldWrapper } from '@progress/kendo-react-form';

const App = () => {
    return (
        <FormElement style={{ maxWidth: 400 }}>
            <FieldWrapper>
                <Label editorId={'firstName'}>First Name</Label>
                <Input id={'firstName'} />
            </FieldWrapper>
            <FieldWrapper>
                <Label optional={true} editorId={'lastName'}>
                    Last Name
                </Label>
                <Input id={'lastName'} />
            </FieldWrapper>
        </FormElement>
    );
};

export default App;
