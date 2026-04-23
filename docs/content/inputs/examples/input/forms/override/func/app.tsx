import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { DatePicker, TimePicker } from '@progress/kendo-react-dateinputs';
import { Error } from '@progress/kendo-react-labels';

const dateValidator = (value: Date) => (value ? '' : 'Date is required');

const timeValidator = (value: Date) => (value ? '' : 'Time is required');

const passwordValidator = (value: string) =>
    value && value.length >= 6 && value.length <= 16 ? '' : 'Password must be between 6 and 16 characters!';

const DatePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, ...others } = fieldRenderProps;
    return (
        <div>
            <DatePicker label={label} id={id} valid={valid} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const TimePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, ...others } = fieldRenderProps;
    return (
        <div>
            <TimePicker label={label} id={id} valid={valid} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const InputField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, label, id, valid, type, ...others } = fieldRenderProps;
    return (
        <div>
            <Input label={label} id={id} valid={valid} type={type} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
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
                            <FormFieldSet legend="Secure Your Appointment:">
                                <br />
                                <div className="mb-3">
                                    <Field
                                        name="date"
                                        component={DatePickerField}
                                        label="Select Date"
                                        validator={dateValidator}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Field
                                        name="time"
                                        component={TimePickerField}
                                        label="Select Time"
                                        validator={timeValidator}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Field
                                        name="password"
                                        component={InputField}
                                        type="password"
                                        label="Password"
                                        validator={passwordValidator}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Field
                                        name="confirmPassword"
                                        component={InputField}
                                        type="password"
                                        label="Confirm Password"
                                        validator={(value) => {
                                            const password = formRenderProps.valueGetter('password');
                                            return value && value === password ? '' : 'Passwords do not match!';
                                        }}
                                    />
                                </div>
                            </FormFieldSet>
                            <Button themeColor="primary">Book Now</Button>
                        </FormElement>
                    )}
                />
            </div>
            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Appointment booked successfully!
                </div>
            )}
        </div>
    );
};

export default App;
