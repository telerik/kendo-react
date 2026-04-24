import * as React from 'react';
import { DateInput } from '@progress/kendo-react-dateinputs';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Notification } from '@progress/kendo-react-notification';
import { DropDownList } from '@progress/kendo-react-dropdowns';
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
import { Error, Label } from '@progress/kendo-react-labels';

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const today = new Date();

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    const requiredValidator = (value: any) => (value ? '' : 'This field is required.');

    const minDateValidator = (min: Date) => (value: any) => {
        if (!value) return '';
        const strip = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
        return strip(value as Date) >= strip(min) ? '' : `Date must be on or after ${strip(min).toLocaleDateString()}.`;
    };

    const DateInputComponent = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <div className="k-form-field-wrap">
                <Label>Preferred Start Date</Label>
                <DateInput
                    width="100%"
                    required={true}
                    min={today}
                    {...others}
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

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card-block">
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={{
                            name: 'John Doe',
                            course: 'Introduction to Programming'
                        }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement style={{ maxWidth: 650 }}>
                                <FormFieldSet legend="Course Enrollment">
                                    <FieldWrapper>
                                        <Field
                                            name="name"
                                            component={InputField}
                                            validator={requiredValidator}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="course"
                                            component={DropDownField}
                                            labelClassName={'k-form-label'}
                                            label={'Course Selection'}
                                            data={[
                                                'Introduction to Programming',
                                                'Web Development Basics',
                                                'Data Structures and Algorithms'
                                            ]}
                                            validator={requiredValidator}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="checkin"
                                            component={DateInputComponent}
                                            labelClassName={'k-form-label'}
                                            label={'Preferred Start Date'}
                                            validator={[requiredValidator, minDateValidator(today)]}
                                        />
                                    </FieldWrapper>
                                </FormFieldSet>
                                <FormSeparator />
                                <div className="k-form-buttons">
                                    <Button
                                        type="submit"
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
                        <Notification style={{ marginTop: '1rem' }} type={{ style: 'success', icon: true }}>
                            Enrollment confirmed! Welcome aboard!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
