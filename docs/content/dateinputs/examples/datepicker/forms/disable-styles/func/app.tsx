import * as React from 'react';
import { Form, Field, FormFieldSet, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { TextArea, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';

const nameValidator = (value: string) => (value ? '' : 'Full Name is required');

const startTimeValidator = (value: Date | null) => {
    const today = new Date();
    if (!value) return 'Preferred Start Date is required';
    if (value < today) return 'Start Time cannot be in the past!';
    return '';
};

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const today = new Date();

    const handleSubmit = () => {
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
                            render={() => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Make a Medical Appointment</legend>
                                        <Label className="k-form-field">
                                            <span>Full Name</span>
                                            <FieldWrapper>
                                                <Field name="name" component={Input} validator={nameValidator} />
                                            </FieldWrapper>
                                        </Label>
                                        <Label className="k-form-field k-mt-4">
                                            <span>Preferred Start Date</span>
                                            <FieldWrapper>
                                                <Field
                                                    name="checkin"
                                                    component={DatePicker}
                                                    min={today}
                                                    validityStyles={false}
                                                    validator={startTimeValidator}
                                                />
                                            </FieldWrapper>
                                        </Label>
                                        <Label className="k-form-field k-mt-4">
                                            <span>Additional Comments</span>
                                            <FieldWrapper>
                                                <Field name="additionalComments" component={TextArea} rows={4} />
                                            </FieldWrapper>
                                        </Label>
                                    </FormFieldSet>
                                    <Button className="k-mt-2" themeColor="primary">
                                        Confirm
                                    </Button>
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
