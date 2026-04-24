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
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Error, Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';
import { DropDownList } from '@progress/kendo-react-dropdowns';

const nameValidator = (value: string) => (value ? '' : 'Full Name is required');

const courseValidator = (value: string) => (value ? '' : 'Course Selection is required');

const startDateValidator = (value: Date | null) => {
    const today = new Date();
    if (!value) return 'Preferred Start Date is required';
    if (value < today) return 'Start date cannot be in the past';
    return '';
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

const DropDownField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, data, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Label>Course Selection</Label>
            <DropDownList data={data} {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const DatePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, min, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Label>Preferred Start Date</Label>
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
                            name: 'John Doe',
                            course: 'Introduction to Programming',
                            checkin: null
                        }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement style={{ maxWidth: 650 }}>
                                <FormFieldSet legend="Course Enrollment">
                                    <FieldWrapper>
                                        <Field
                                            name="name"
                                            component={InputField}
                                            validator={nameValidator}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="course"
                                            component={DropDownField}
                                            data={[
                                                'Introduction to Programming',
                                                'Web Development Basics',
                                                'Data Structures and Algorithms'
                                            ]}
                                            validator={courseValidator}
                                        />
                                    </FieldWrapper>

                                    <FieldWrapper>
                                        <Field
                                            name="checkin"
                                            component={DatePickerField}
                                            min={today}
                                            validator={startDateValidator}
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
                                        Enroll
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />
                    {success && (
                        <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                            Enrollment confirmed! Welcome aboard!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
