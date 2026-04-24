import * as React from 'react';
import { Input, MaskedTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import {
    Form,
    Field,
    FormElement,
    FieldRenderProps,
    FormRenderProps,
    FormFieldSet,
    FieldWrapper
} from '@progress/kendo-react-form';

const requiredValidator = (value: any) => (value ? '' : 'This field is required.');

const FirstNameInputField = (fieldRenderProps: FieldRenderProps) => {
    const { value, onChange, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Input
                {...others}
                name="firstName"
                style={{ width: '100%' }}
                label="First Name"
                value={value}
                onChange={(e) => onChange(e)}
                pattern="[A-Za-z]+"
                minLength={2}
            />
        </div>
    );
};

const SecondNameInputField = (fieldRenderProps: FieldRenderProps) => {
    const { value, onChange, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Input
                {...others}
                name="lastName"
                style={{ width: '100%' }}
                label="Last Name"
                value={value}
                onChange={(e) => onChange(e)}
                pattern="[A-Za-z]+"
                minLength={2}
            />
        </div>
    );
};

const PostcodeField = (fieldRenderProps: FieldRenderProps) => {
    const { ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <MaskedTextBox
                {...others}
                name="postcode"
                width="100%"
                label="Postcode (A9 9AA)"
                required={true}
                mask="A9 9AA"
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
                    render={(formRenderProps: FormRenderProps) => (
                        <FormElement noValidate>
                            <FormFieldSet legend="Please fill in the fields:">
                                <FieldWrapper>
                                    <Field name="firstName" component={FirstNameInputField} label="First Name" />
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field name="lastName" component={SecondNameInputField} label="Last Name" />
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field name="postcode" component={PostcodeField} validator={requiredValidator} />
                                </FieldWrapper>
                            </FormFieldSet>
                            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
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
