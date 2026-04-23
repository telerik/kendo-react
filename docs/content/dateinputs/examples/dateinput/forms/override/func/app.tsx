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

const nameValidator = (value: string) => (value ? '' : 'Name is required');

const startTimeValidator = (value: Date | null) => {
    const today = new Date();
    if (!value) return 'Start Time is required!';
    if (value < today) return 'Start Time cannot be in the past!';
    return '';
};

const endTimeValidator = (value: Date | null, formValues: any) => {
    if (!value) return 'End Time is required!';
    if (formValues?.start && value < formValues.start) {
        return 'End Time cannot be before Start Time!';
    }
    return '';
};

const App = () => {
    const today = new Date();
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (dataItem: any) => {
        console.log('Submitted Data:', dataItem);
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const NameField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Name</Label>
                <Input {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    const StartTimeField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Start Time</Label>
                <DateInput format="dd-MMM-yyyy hh:mm a" min={today} {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    const EndTimeField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>End Time</Label>
                <DateInput format="dd-MMM-yyyy hh:mm a" {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </div>
        );
    };

    const TextAreaField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, rows, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Additional Details</Label>
                <TextArea rows={rows} {...others} />
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
                        initialValues={{
                            name: 'John Doe',
                            start: null,
                            end: null,
                            additionalDetails: ''
                        }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement style={{ maxWidth: 650 }}>
                                <FormFieldSet legend="Schedule a Meeting">
                                    <FieldWrapper>
                                        <Field
                                            name="name"
                                            component={NameField}
                                            validator={nameValidator}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="start"
                                            component={StartTimeField}
                                            validator={startTimeValidator}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="end"
                                            component={EndTimeField}
                                            validator={(value, formValues) => endTimeValidator(value as Date | null, formValues)}
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
                                    <Button
                                        className="k-mt-4"
                                        themeColor="primary"
                                        disabled={!formRenderProps.allowSubmit}
                                    >
                                        Add
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />
                    {success && (
                        <Notification style={{ marginTop: '1rem' }} type={{ style: 'success', icon: true }}>
                            Meeting successfully added to your schedule!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
