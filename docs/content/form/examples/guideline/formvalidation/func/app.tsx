import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FormFieldSet } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormInput, FormCheckbox } from './shared-fm-form-components';
import { userNameValidator, emailValidator, formValidator } from './shared-fm-validators';

const genericErrorField: string = 'VALIDATION_SUMMARY';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            validator={formValidator}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <FormFieldSet legend="Please fill in the following information:">
                        {formRenderProps.visited &&
                            formRenderProps.errors &&
                            formRenderProps.errors[genericErrorField] && (
                                <div className={'k-messagebox k-messagebox-error'}>
                                    {formRenderProps.errors[genericErrorField]}
                                    <ul>
                                        {Object.keys(formRenderProps.errors)
                                            .filter((field) => field !== genericErrorField)
                                            .filter((field) => formRenderProps.errors[field])
                                            .map((field, key) => (
                                                <li key={key}>{formRenderProps.errors[field]}</li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        <Field
                            id={'username'}
                            name={'username'}
                            label={'User Name'}
                            component={FormInput}
                            validator={userNameValidator}
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
