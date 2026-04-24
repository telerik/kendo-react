import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FormFieldSet, FormSeparator } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormCheckbox, FormInput } from './shared-fm-form-components';
import { requiredValidator, emailValidator } from './shared-fm-validators';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <FormFieldSet legend={'User Details'}>
                        <Field
                            id={'fullName'}
                            name={'fullName'}
                            label={'Full Name'}
                            component={FormInput}
                            validator={requiredValidator}
                        />
                        <Field
                            id={'fullName'}
                            name={'fullName'}
                            label={'Full Name'}
                            component={FormInput}
                            validator={requiredValidator}
                        />
                        <Field
                            id={'email'}
                            name={'email'}
                            label={'Email'}
                            hint={'Hint: Enter your personal email address.'}
                            type={'email'}
                            component={FormInput}
                            validator={emailValidator}
                        />
                        <FormSeparator />
                        <Field
                            id={'notifications'}
                            name={'notifications'}
                            label={'I want to receive notifications'}
                            hint={'You will receive our latest updates and promotions on your email'}
                            optional={true}
                            component={FormCheckbox}
                        />
                        <div className="k-form-buttons">
                            <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                Submit
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                        </div>
                    </FormFieldSet>
                </FormElement>
            )}
        />
    );
};
export default App;
