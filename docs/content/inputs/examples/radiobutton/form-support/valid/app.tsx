import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Error, Label } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const VALID_CODES = ['FREESHIP'];

const discountCodeValidator = (value: string | undefined) => {
    if (!value) return 'Discount code is required.';
    return VALID_CODES.includes(value.toUpperCase()) ? '' : 'Invalid discount code!';
};

const DiscountCodeInput = (fieldRenderProps: FieldRenderProps) => {
    const { value, onChange, validationMessage, visited } = fieldRenderProps;

    return (
        <div className={'k-form-field-wrap'}>
            <Label>Discount Code</Label>
            <br />
            <Input name={'discountCode'} value={value || ''} onChange={onChange} valid={!validationMessage} />

            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: '500px' }}>
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Checkout</legend>

                        <FieldWrapper>
                            <div className={'k-form-field-wrap'}>
                                <Field
                                    name={'fullName'}
                                    component={Input}
                                    labelClassName={'k-form-label'}
                                    label={'Full Name'}
                                    required={'required'}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className={'k-form-field-wrap'}>
                                <Field
                                    name={'email'}
                                    type={'email'}
                                    component={Input}
                                    label={'Email'}
                                    required={'required'}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <Field
                                name={'discountCode'}
                                component={DiscountCodeInput}
                                validator={discountCodeValidator}
                            />
                        </FieldWrapper>
                    </fieldset>
                    <br />
                    <div className={'k-form-buttons'}>
                        <Button disabled={!formRenderProps.allowSubmit}>Apply Discount</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
