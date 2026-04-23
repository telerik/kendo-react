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
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { Error, Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';

const destinationValidator = (value: string) => (value ? '' : 'Destination is required');

const checkInValidator = (value: Date | null) => {
    const today = new Date();
    if (!value) return 'Check-In date is required';
    if (value < today) return 'Dates in the past are not valid Check-In dates.';
    return '';
};

const checkOutValidator = (value: Date | null) => {
    const today = new Date();
    if (!value) return 'The Check-Out date is required.';
    if (value < today) return 'Dates in the past are not valid Check-Out dates.';
    return '';
};

const InputField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Label>Destination</Label>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const CheckInDatePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, min, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Label>Check-In</Label>
            <DatePicker min={min} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const CheckOutDatePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, min, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Label>Check-Out</Label>
            <DatePicker min={min} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const today = new Date();

    const handleSubmit = (dataItem: any) => {
        console.log('Submitted Data:', dataItem);
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
                            destination: 'Sofia',
                            checkin: null,
                            checkout: null
                        }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement style={{ maxWidth: 650 }}>
                                <FormFieldSet legend="Plan your next trip:">
                                    <FieldWrapper>
                                        <Field
                                            name="destination"
                                            component={InputField}
                                            validator={destinationValidator}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="checkin"
                                            component={CheckInDatePickerField}
                                            min={today}
                                            validator={checkInValidator}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="checkout"
                                            component={CheckOutDatePickerField}
                                            min={today}
                                            validator={checkOutValidator}
                                        />
                                    </FieldWrapper>
                                </FormFieldSet>
                                <FormSeparator />
                                <div className="k-form-buttons">
                                    <Button
                                        className="k-mt-2"
                                        themeColor="primary"
                                        disabled={!formRenderProps.allowSubmit}
                                    >
                                        Search
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />
                    {success && (
                        <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                            Search finished! Explore your travel options!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
