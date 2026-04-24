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

const StartPickerField = (fieldRenderProps: FieldRenderProps & { format?: string; min?: Date }) => {
    const { validationMessage, visited, format, min, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Label>Start Time</Label>
            <DatePicker format={format} min={min} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const EndPickerField = (fieldRenderProps: FieldRenderProps & { format?: string }) => {
    const { validationMessage, visited, format, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Label>End Time</Label>
            <DatePicker format={format} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const today = new Date();

    const handleSubmit = (dataItem: any) => {
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
                            <FormElement style={{ maxWidth: 650 }}>
                                <FormFieldSet legend="Schedule a Meeting">
                                    <FieldWrapper>
                                        <Field
                                            name="name"
                                            component={NameField}
                                            validator={nameValidator}
                                            label={'Name'}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="start"
                                            component={StartPickerField}
                                            validator={startTimeValidator}
                                            format="dd-MMM-yyyy hh:mm a"
                                            min={today}
                                            label={'Start Time'}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="end"
                                            component={EndPickerField}
                                            format="dd-MMM-yyyy hh:mm a"
                                            validator={(value, formValues) =>
                                                endTimeValidator(value as Date | null, formValues)
                                            }
                                            label={'End Time'}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <div className="k-form-field-wrap">
                                            <Field
                                                name="additionalDetails"
                                                component={TextArea}
                                                rows={4}
                                                labelClassName={'k-form-label'}
                                                label={'Additional Details'}
                                            />
                                        </div>
                                    </FieldWrapper>
                                </FormFieldSet>
                                <FormSeparator />
                                <div className="k-form-buttons">
                                    <Button
                                        className="k-mt-2"
                                        themeColor="primary"
                                        type="submit"
                                        disabled={!formRenderProps.allowSubmit}
                                    >
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
