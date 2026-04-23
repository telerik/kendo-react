import * as React from 'react';
import { Form, Field, FormFieldSet, FormElement, FormSeparator, FieldWrapper, FieldRenderProps, FormRenderProps } from '@progress/kendo-react-form';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { TextArea, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Notification } from '@progress/kendo-react-notification';
import { Error, Label } from '@progress/kendo-react-labels';

const requiredValidator = (value: any) => (value ? '' : 'This field is required');

const startTimeValidator = (value: Date | null) => {
    const today = new Date();
    if (!value) return 'Preferred Start Date is required';
    if (value < today) return 'Start Time cannot be in the past!';
    return '';
};

const InputField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Full Name</Label>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const DateTimePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, min, validityStyles, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Preferred Start Date</Label>
            <DateTimePicker min={min} validityStyles={validityStyles} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const TextAreaField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, rows, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Additional Comments</Label>
            <TextArea rows={rows} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const today = new Date();

    const handleSubmit = (dataItem: any) => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card-block">
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={{
                            name: 'John Doe',
                            checkin: null,
                            additionalComments: ''
                        }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement>
                                <FormFieldSet>
                                    <legend>Make a Medical Appointment</legend>
                                    <FieldWrapper>
                                        <Field
                                            name="name"
                                            component={InputField}
                                            validator={requiredValidator}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="checkin"
                                            component={DateTimePickerField}
                                            min={today}
                                            validityStyles={false}
                                            validator={startTimeValidator}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="additionalComments"
                                            component={TextAreaField}
                                            rows={4}
                                        />
                                    </FieldWrapper>
                                </FormFieldSet>
                                <FormSeparator />
                                <div className="k-form-buttons">
                                    <Button type="submit" themeColor="primary">
                                        Confirm
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />
                    {success && (
                        <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                            Your medical appointment has been successfully booked!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
