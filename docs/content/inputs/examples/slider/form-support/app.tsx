import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input, Slider } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');

const EmailInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const salaryValidator = (value) => (value > 30000 ? '' : 'Please adjust the salary slider to select a valid amount.');

const SalarySlider = (fieldRenderProps) => {
    const { validationMessage, visited, value = 30000, onChange, ...others } = fieldRenderProps;

    const handleSliderChange = (e) => {
        if (onChange) {
            onChange({ value: Math.round(e.value) });
        }
    };

    return (
        <div>
            <Slider {...others} min={30000} max={200000} step={5000} value={value} onChange={handleSliderChange} />
            <p>
                Selected Salary: <strong>${value.toLocaleString()}</strong>
            </p>
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem) => {
        alert(JSON.stringify(dataItem, null, 2));
    };

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Job Application Form</legend>

                        <div className="mb-3">
                            <Field name={'fullName'} component={Input} label={'Full Name'} />
                        </div>

                        <div className="mb-3">
                            <Field
                                name={'email'}
                                type={'email'}
                                component={EmailInput}
                                label={'Email'}
                                validator={emailValidator}
                            />
                        </div>

                        <div className="mb-3">
                            <Field name={'jobTitle'} component={Input} label={'Job Title You Are Applying For'} />
                        </div>

                        <legend className={'k-form-legend'}>Expected Salary (Drag to adjust)</legend>
                        <div className="mb-3">
                            <Field name={'expectedSalary'} component={SalarySlider} validator={salaryValidator} />
                        </div>

                        <div className="mb-3">
                            <Field name={'comments'} component={Input} label={'Additional Comments'} />
                        </div>
                    </fieldset>

                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};

export default App;
