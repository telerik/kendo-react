import * as React from 'react';

import { Input, Checkbox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import {
    Form,
    Field,
    FormElement,
    FieldRenderProps,
    FormRenderProps,
    FormFieldSet,
    FieldWrapper
} from '@progress/kendo-react-form';

const App = () => {
    const [success, setSuccess] = React.useState<Boolean>(false);

    const handleSubmit = (dataItem: { [name: string]: any }) => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const emailValidator = (value: any) => (value ? '' : 'Email is required.');
    const checkboxValidator = (value: any) => (value ? '' : 'You must agree to the terms.');

    const CheckboxField = (fieldRenderProps: FieldRenderProps) => {
        const { value, onChange, validationMessage, visited, ...others } = fieldRenderProps;

        return (
            <div>
                <Checkbox {...others} id="ch" checked={!!value} onChange={(e) => onChange(e)}>
                    <Label className="k-checkbox-label" style={{ display: 'inline-block' }} editorId="ch">
                        By clicking <a href="#">Subscribe</a>, you agree to receive our newsletter.
                    </Label>
                </Checkbox>
                {visited && validationMessage && <div className="k-required">{validationMessage}</div>}
            </div>
        );
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-8 offset-sm-2 example-col">
                <Form
                    onSubmit={handleSubmit}
                    initialValues={{ email: '', checkbox: false }}
                    render={(formRenderProps: FormRenderProps) => (
                        <FormElement>
                            <FormFieldSet legend="Subscribe to our Newsletter:">
                                <FieldWrapper>
                                    <div className="k-form-field-wrap">
                                        <Field
                                            name="email"
                                            type="email"
                                            component={Input}
                                            label="Email Address"
                                            validator={emailValidator}
                                        />
                                    </div>
                                </FieldWrapper>
                                <FieldWrapper>
                                    <Field name="checkbox" component={CheckboxField} validator={checkboxValidator} />
                                </FieldWrapper>
                            </FormFieldSet>
                            <Button type="submit" themeColor="primary" disabled={!formRenderProps.allowSubmit}>
                                Subscribe
                            </Button>
                        </FormElement>
                    )}
                />
            </div>
            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Subscription successful!
                </div>
            )}
        </div>
    );
};

export default App;
