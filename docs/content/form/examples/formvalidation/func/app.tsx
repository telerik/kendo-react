import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FormFieldSet } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { getter } from '@progress/kendo-react-common';

const firstNameGetter: any = getter('user.firstName');
const lastNameGetter: any = getter('user.lastName');
const firstOrLastNameValidator = (values: any) => {
    if (firstNameGetter(values) || lastNameGetter(values)) {
        return;
    }

    return {
        VALIDATION_SUMMARY: 'Please fill at least one of the following fields.',
        ['user.firstName']: 'Please check the validation summary for more information.',
        ['user.lastName']: 'Please check the validation summary for more information.'
    };
};

const ValidatedInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem: any) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            validator={firstOrLastNameValidator}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <FormFieldSet legend={'Please fill in the following information:'}>
                        {formRenderProps.visited &&
                            formRenderProps.errors &&
                            formRenderProps.errors.VALIDATION_SUMMARY && (
                                <div className={'k-messagebox k-messagebox-error'}>
                                    {formRenderProps.errors.VALIDATION_SUMMARY}
                                </div>
                            )}
                        <div className="mb-3">
                            <Field name={'user.firstName'} component={ValidatedInput} label={'First name'} />
                        </div>
                        <div className="mb-3">
                            <Field name={'user.lastName'} component={ValidatedInput} label={'Last name'} />
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
