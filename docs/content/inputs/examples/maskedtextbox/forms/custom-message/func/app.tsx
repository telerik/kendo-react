import * as React from 'react';
import { MaskedTextBox, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement, FieldRenderProps, FormFieldSet, FieldWrapper } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';

const firstNameValidator = (value?: string) => (value ? '' : 'Please enter your first name!');
const lastNameValidator = (value?: string) => (value ? '' : 'Please enter your last name!');
const postcodeValidator = (value?: string) => {
    const len = (value || '').replace(/_/g, '').length;
    return len > 3 ? '' : 'Please enter your postcode!';
};

const InputField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const PostcodeField = (fieldRenderProps: FieldRenderProps) => {
    const { value, onChange, visited, validationMessage, ...others } = fieldRenderProps;
    const showMsg = !!visited && !!validationMessage;

    return (
        <div className="k-form-field-wrap">
            <MaskedTextBox
                {...others}
                value={value}
                onChange={(e) => onChange(e)}
                mask="A9 9AA"
                validityStyles={false}
                required
                label="Postcode (A9 9AA)"
                valid={visited ? !validationMessage : undefined}
                validationMessage={showMsg ? (validationMessage as string) : undefined}
            />
        </div>
    );
};

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{ firstName: 'John', lastName: 'Smith', postcode: '' }}
                    render={() => (
                        <FormElement>
                            <FormFieldSet legend="Please fill in the fields:">
                                <FieldWrapper>
                                    <Field
                                        name="firstName"
                                        component={InputField}
                                        label="First Name"
                                        validator={firstNameValidator}
                                    />
                                </FieldWrapper>

                                <FieldWrapper>
                                    <Field
                                        name="lastName"
                                        component={InputField}
                                        label="Last Name"
                                        validator={lastNameValidator}
                                    />
                                </FieldWrapper>

                                <FieldWrapper>
                                    <Field name="postcode" component={PostcodeField} validator={postcodeValidator} />
                                </FieldWrapper>
                            </FormFieldSet>

                            <Button type="submit" themeColor="primary">
                                Search
                            </Button>
                        </FormElement>
                    )}
                />
            </div>

            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Form submitted!
                </div>
            )}
        </div>
    );
};

export default App;
