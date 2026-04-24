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
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { Error, Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';

const startOfDay = (d: Date) => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
};

const today = startOfDay(new Date());

const destinationValidator = (value: string) => (value ? '' : 'Destination is required');

const checkInValidator = (value: Date | null) => {
    if (!value) return 'Check-In date is required';
    if (startOfDay(value) < today) return 'Dates in the past are not valid Check-In dates.';
    return '';
};

const checkOutValidator = (value: Date | null) => {
    if (!value) return 'The Check-Out date is required.';
    if (startOfDay(value) < today) return 'Dates in the past are not valid Check-Out dates.';
    return '';
};

    const CustomDateInputCheckIn = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Check-In</Label>
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

    const CustomDateInputCheckOut = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Check-Out</Label>
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
                <Label>Destination</Label>
                <Input {...others} />
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
                            destination: 'Sofia',
                            checkin: null,
                            checkout: null
                        }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement style={{ maxWidth: 650 }}>
                                <FormFieldSet legend="Plan Your Next Trip">
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
                                            component={CustomDateInputCheckIn}
                                            validator={checkInValidator}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="checkout"
                                            component={CustomDateInputCheckOut}
                                            validator={checkOutValidator}
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
                                        Search
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />

                    {success && (
                        <Notification style={{ marginTop: '1rem' }} type={{ style: 'success', icon: true }}>
                            Search finished! Explore your travel options!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
