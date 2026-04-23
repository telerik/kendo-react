import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FormFieldSet } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');
const EmailInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};
const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <FormFieldSet legend={'Please fill in the email field:'}>
                        <div className="mb-3">
                            <Field
                                name={'email'}
                                type={'email'}
                                component={EmailInput}
                                label={'Email'}
                                validator={emailValidator}
                            />
                        </div>
                    </FormFieldSet>
                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
export default App;
