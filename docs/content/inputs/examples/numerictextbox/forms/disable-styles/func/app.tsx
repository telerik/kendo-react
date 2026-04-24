import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { NumericTextBox, Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const ageValidationMessage = 'You must be at least 18 years old to rent a car!';
const requiredValidator = (value) => (value ? '' : 'This field is required.');
const ageValidator = (value) => (value >= 18 ? '' : ageValidationMessage);

const CustomInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <Input {...others} />
            {visited && validationMessage && <span className="k-form-error">{validationMessage}</span>}
        </div>
    );
};

const CustomNumericInput = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, value, ...others } = fieldRenderProps;
    return (
        <div className="k-form-field-wrap">
            <NumericTextBox {...others} valid={value >= 18} />
            {visited && validationMessage && <span className="k-form-error">{validationMessage}</span>}
        </div>
    );
};

const App = () => {
    const [isAgeValid, setIsAgeValid] = React.useState(false);

    const handleAgeChange = (event) => {
        const ageValue = event.value;
        setIsAgeValid(ageValue >= 18);
    };

    const handleSubmit = (dataItem: { [name: string]: any }) => {
        if (!isAgeValid) {
            alert('You must be at least 18 years old to submit this form.');
            return;
        }
        alert(`Car Rental Request Submitted:\n${JSON.stringify(dataItem, null, 2)}`);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Car Rental Reservation</legend>
                        <p>Please fill in the details to rent a car.</p>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'fullName'}
                                    component={CustomInput}
                                    label={'Full Name'}
                                    validator={requiredValidator}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'contactNumber'}
                                    component={CustomInput}
                                    label={'Contact Number'}
                                    pattern={'\\d{10}'}
                                    validator={requiredValidator}
                                    validationMessage={'Please enter a valid 10-digit phone number!'}
                                />
                            </div>
                        </FieldWrapper>

                        <FieldWrapper>
                            <div className="k-form-field-wrap">
                                <Field
                                    name={'age'}
                                    component={CustomNumericInput}
                                    label={'Age'}
                                    required={'true'}
                                    validator={ageValidator}
                                    validationMessage={ageValidationMessage}
                                    onChange={handleAgeChange}
                                />
                            </div>
                        </FieldWrapper>
                    </fieldset>
                    <br />
                    <div className="k-form-buttons">
                        <Button disabled={!isAgeValid || !formRenderProps.allowSubmit}>Submit Reservation</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
