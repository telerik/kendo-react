import * as React from 'react';
import { Form, Field, FormElement, FormSeparator, FieldRenderProps, FieldWrapper, FormFieldSet, FormRenderProps } from '@progress/kendo-react-form';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { TextArea, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Error, Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';

const requiredValidator = (value: any) => (value ? '' : 'This field is required');

const startTimeValidator = (value: Date | null) => {
    const today = new Date();
    if (!value) return 'Start Time is required!';
    if (value < today) return 'Start Time cannot be in the past!';
    return '';
};

const endTimeValidator = (value: Date | null, formValues: any) => {
    if (!value) return 'End Time is required!';
    if (formValues?.start && value < formValues.start) return 'End Time cannot be before Start Time!';
    return '';
};

const NameField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Name</Label>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const StartDateTimeField = (fieldRenderProps: FieldRenderProps & { format?: string; min?: Date }) => {
    const { validationMessage, visited, format, min, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Start Time</Label>
            <DateTimePicker format={format} min={min} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const EndDateTimeField = (fieldRenderProps: FieldRenderProps & { format?: string }) => {
    const { validationMessage, visited, format, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>End Time</Label>
            <DateTimePicker format={format} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const TextAreaField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, rows, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Additional Details</Label>
            <TextArea rows={rows} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const today = new Date();
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
                            start: null,
                            end: null,
                            additionalDetails: ''
                        }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement>
                                <FormFieldSet>
                                    <legend>Schedule a Meeting</legend>
                                    <FieldWrapper>
                                        <Field
                                            name="name"
                                            component={NameField}
                                            validator={requiredValidator}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="start"
                                            component={StartDateTimeField}
                                            validator={startTimeValidator}
                                            format="dd-MMM-yyyy hh:mm a"
                                            min={today}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="end"
                                            component={EndDateTimeField}
                                            format="dd-MMM-yyyy hh:mm a"
                                            validator={(value, formValues) =>
                                                endTimeValidator(value as Date | null, formValues)
                                            }
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="additionalDetails"
                                            component={TextAreaField}
                                            rows={4}
                                        />
                                    </FieldWrapper>
                                </FormFieldSet>
                                <FormSeparator />
                                <div className="k-form-buttons">
                                    <Button type="submit" themeColor="primary">
                                        Add
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />

                    {success && (
                        <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                            Meeting successfully added to your schedule!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
