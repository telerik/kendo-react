import * as React from 'react';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { Notification } from '@progress/kendo-react-notification';
import {
    Form,
    Field,
    FormElement,
    FormFieldSet,
    FormSeparator,
    FieldWrapper,
    FieldRenderProps,
    FormRenderProps
} from '@progress/kendo-react-form';
import { Error, Label } from '@progress/kendo-react-labels';

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const today = new Date();

    const checkInValidator = (value: any) =>
        value && value >= today ? '' : 'Dates in the past are not valid Check-In dates.';
    const checkOutValidator = (value: any) => (value ? '' : 'The Check-Out date is required.');

    const handleSubmit = (dataItem: { [name: string]: any }) => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const InputField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div>
                <Label>Destination</Label>
                <Input {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    const CheckInDateTimePickerField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, min, ...others } = fieldRenderProps;
        return (
            <div>
                <Label>Check-In</Label>
                <DateTimePicker min={min} {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    const CheckOutDateTimePickerField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, min, ...others } = fieldRenderProps;
        return (
            <div>
                <Label>Check-Out</Label>
                <DateTimePicker min={min} {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card-block">
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={{ destination: 'Sofia' }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement>
                                <FormFieldSet>
                                    <legend>Plan Your Next Trip</legend>
                                    <FieldWrapper>
                                        <Field
                                            name="destination"
                                            component={InputField}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="checkin"
                                            component={CheckInDateTimePickerField}
                                            min={today}
                                            validator={checkInValidator}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="checkout"
                                            component={CheckOutDateTimePickerField}
                                            min={today}
                                            validator={checkOutValidator}
                                        />
                                    </FieldWrapper>
                                </FormFieldSet>
                                <FormSeparator />
                                <div className="k-form-buttons">
                                    <Button type="submit" themeColor="primary">
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
