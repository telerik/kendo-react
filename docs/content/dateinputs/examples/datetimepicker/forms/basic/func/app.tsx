import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FormSeparator, FieldWrapper, FieldRenderProps, FormRenderProps } from '@progress/kendo-react-form';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Notification } from '@progress/kendo-react-notification';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Error, Label } from '@progress/kendo-react-labels';

const requiredValidator = (value: any) => (value ? '' : 'This field is required');

const InputField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Full Name</Label>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const DropDownField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, data, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Course Selection</Label>
            <DropDownList
                data={data || ['Introduction to Programming', 'Web Development Basics', 'Data Structures and Algorithms']}
                {...others}
            />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const DateTimePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, min, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Preferred Start Date</Label>
            <DateTimePicker width="100%" min={min} {...others} />
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
                            course: 'Introduction to Programming'
                        }}
                        render={(formRenderProps: FormRenderProps) => (
                            <FormElement>
                                <FormFieldSet>
                                    <legend>Course Enrollment</legend>
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
                                            validator={requiredValidator}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <Field
                                            name="checkin"
                                            component={DateTimePickerField}
                                            validator={requiredValidator}
                                            min={today}
                                        />
                                    </FieldWrapper>
                                </FormFieldSet>
                                <FormSeparator />
                                <div className="k-form-buttons">
                                    <Button type="submit" themeColor="primary">
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
