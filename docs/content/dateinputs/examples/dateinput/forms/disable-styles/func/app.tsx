import * as React from 'react';
import {
    Form,
    Field,
    FormElement,
    FieldRenderProps,
    FormRenderProps,
    FieldWrapper,
    FormFieldSet,
    FormSeparator
} from '@progress/kendo-react-form';
import { DateInput } from '@progress/kendo-react-dateinputs';
import { TextArea, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Error, Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';

const startOfDay = (d: Date) => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
};

const today = startOfDay(new Date());

const nameValidator = (value: string) => (value ? '' : 'Full Name is required');

const startTimeValidator = (value: Date | null) => {
    if (!value) return 'Preferred Start Date is required';
    if (startOfDay(value) < today) return 'Start Time cannot be in the past!';
    return '';
};

    const CustomDateInput = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Preferred Start Date</Label>
                <DateInput
                    {...others}
                    style={{ width: '100%' }}
                    format="MM/dd/yyyy"
                    min={today}
                    required
                />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    const InputField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Full Name</Label>
                <Input {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    const TextAreaField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, rows, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Additional Comments</Label>
                <TextArea rows={rows} {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (dataItem: any) => {
        console.log('Submitted Data:', dataItem);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
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
                            <FormElement style={{ maxWidth: 650 }}>
                                <FormFieldSet legend="Make a Medical Appointment">
                                    <FieldWrapper>
                                        <Field
                                            name="name"
                                            component={InputField}
                                            validator={nameValidator}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="checkin"
                                            component={CustomDateInput}
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
                                    <Button
                                        className="k-mt-4"
                                        themeColor="primary"
                                        disabled={!formRenderProps.allowSubmit}
                                    >
                                        Confirm
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />

                    {success && (
                        <Notification style={{ marginTop: '1rem' }} type={{ style: 'success', icon: true }}>
                            Your medical appointment has been successfully booked!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
