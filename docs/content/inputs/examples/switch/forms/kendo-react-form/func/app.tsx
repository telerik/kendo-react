import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper, FormFieldSet } from '@progress/kendo-react-form';
import { Input, Switch } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');

const requiredValidator = (value) => (value ? '' : 'This field is required.');

const MyCustomSwitch = (fieldRenderProps) => {
    const { validationMessage, visited, value, onChange, onFocus, onBlur, ...others } = fieldRenderProps;

    const onValueChange = React.useCallback(() => {
        onChange({ value: !value });
    }, [onChange, value]);

    return (
        <div onFocus={onFocus} onBlur={onBlur}>
            <Switch onChange={onValueChange} checked={value} id={others.id} />
            {visited && validationMessage && <div className={'k-required'}>{validationMessage}</div>}
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <div className="d-flex justify-content-center align-items-center ">
            <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body">
                    <Form
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <FormElement>
                                <FormFieldSet>
                                    <legend>Please fill in the fields:</legend>
                                    <div className="mb-3">
                                        <FieldWrapper>
                                            <Field
                                                name={'firstName'}
                                                component={Input}
                                                label={'First name'}
                                                validator={requiredValidator}
                                            />
                                        </FieldWrapper>
                                    </div>

                                    <div className="mb-3">
                                        <FieldWrapper>
                                            <Field
                                                name={'lastName'}
                                                component={Input}
                                                label={'Last name'}
                                                validator={requiredValidator}
                                            />
                                        </FieldWrapper>
                                    </div>

                                    <div className="mb-3">
                                        <FieldWrapper>
                                            <Field
                                                name={'email'}
                                                type={'email'}
                                                component={Input}
                                                label={'Email'}
                                                validator={emailValidator}
                                            />
                                        </FieldWrapper>
                                    </div>

                                    <div className="mb-3">
                                        <FieldWrapper>
                                            <Field
                                                name={'keepMeSignedIn'}
                                                id={'termsinput'}
                                                component={MyCustomSwitch}
                                                validator={requiredValidator}
                                            />
                                        </FieldWrapper>
                                        <br />
                                        <br />
                                        <span style={{ fontSize: 12 }}>Keep me signed in</span>
                                    </div>
                                </FormFieldSet>
                                <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                            </FormElement>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
