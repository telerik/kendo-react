import * as React from 'react';
import { MaskedTextBox, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement, FieldRenderProps, FieldWrapper, FormFieldSet } from '@progress/kendo-react-form';

const postcodeValidator = (value?: string) => {
    const len = (value || '').replace(/_/g, '').length;
    return len > 3 ? '' : 'Please enter a valid postcode!';
};

const MaskedTextBoxField = (fieldRenderProps: FieldRenderProps) => {
    const { value, onChange, visited, validationMessage, ...others } = fieldRenderProps;

    const showMsg = !!visited && !!validationMessage;

    return (
        <div className="k-form-field-wrap">
            <MaskedTextBox
                {...others}
                value={value}
                mask="A9 9AA"
                required
                onChange={(e) => onChange(e)}
                valid={visited ? !validationMessage : undefined}
                validationMessage={showMsg ? (validationMessage as string) : undefined}
                label="Postcode (A9 9AA)"
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
                                    <div className="k-form-field-wrap">
                                        <Field name="firstName" component={Input} label="First Name" />
                                    </div>
                                </FieldWrapper>

                                <FieldWrapper>
                                    <div className="k-form-field-wrap">
                                        <Field name="lastName" component={Input} label="Last Name" />
                                    </div>
                                </FieldWrapper>

                                <FieldWrapper>
                                    <Field
                                        name="postcode"
                                        component={MaskedTextBoxField}
                                        label="Postcode (A9 9AA)"
                                        validator={postcodeValidator}
                                    />
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
