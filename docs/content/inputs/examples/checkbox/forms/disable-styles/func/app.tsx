import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Error } from '@progress/kendo-react-labels';

const nameValidator = (value: string) =>
    value && /^[A-Za-z ]+$/.test(value) && value.length >= 2 ? '' : 'Your name should contain only letters';

const passcodeValidator = (value: string) =>
    value && value.length >= 6 && value.length <= 18
        ? ''
        : 'Please enter an event passcode between 6 and 16 characters';

const emailValidator = (value: string) =>
    value && /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email address';

const checkboxValidator = (value: boolean) => (value ? '' : 'You must subscribe to event updates');

const InputField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <>
            <Input {...others} validityStyles={false} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    );
};

const CheckboxField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <>
            <Checkbox {...others} validityStyles={false} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    );
};

const App = () => {
    const [success, setSuccess] = React.useState<boolean>(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <Form
                    onSubmit={handleSubmit}
                    render={(formRenderProps) => (
                        <FormElement>
                            <FormFieldSet legend="Event Registration Form::">
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="attendeeName"
                                            component={InputField}
                                            label="Attendee Name"
                                            validator={nameValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="passcode"
                                            component={InputField}
                                            type="password"
                                            label="Event Passcode"
                                            validator={passcodeValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="confirmPasscode"
                                            component={InputField}
                                            type="password"
                                            label="Confirm Passcode"
                                            validator={(value) => {
                                                const passcode = formRenderProps.valueGetter('passcode');
                                                return value && value === passcode ? '' : 'Passcodes do not match';
                                            }}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="email"
                                            component={InputField}
                                            type="email"
                                            label="Email Address"
                                            validator={emailValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                                <div className="mb-3">
                                    <FieldWrapper>
                                        <Field
                                            name="checkbox"
                                            component={CheckboxField}
                                            label="Subscribe to event updates"
                                            validator={checkboxValidator}
                                        />
                                    </FieldWrapper>
                                </div>
                            </FormFieldSet>
                            <Button themeColor="primary">Register</Button>
                        </FormElement>
                    )}
                />
            </div>
            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Registration submitted successfully!
                </div>
            )}
        </div>
    );
};

export default App;
