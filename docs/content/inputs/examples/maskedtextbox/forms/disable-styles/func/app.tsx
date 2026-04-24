import * as React from 'react';

import { MaskedTextBox, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper } from '@progress/kendo-react-form';

const App = () => {
    const [success, setSuccess] = React.useState<Boolean>(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const requiredValidator = (value: any) => (value ? '' : 'Please enter valid postcode!');

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{ firstName: 'John', lastName: 'Smith' }}
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
                                    <div className="k-form-field-wrap">
                                        <Field
                                            name="postcode"
                                            component={MaskedTextBox}
                                            label="Postcode (A9 9AA)"
                                            mask="A9 9AA"
                                            validityStyles={false}
                                            validator={requiredValidator}
                                        />
                                    </div>
                                </FieldWrapper>
                            </FormFieldSet>
                            <Button type="submit" themeColor={'primary'}>
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
