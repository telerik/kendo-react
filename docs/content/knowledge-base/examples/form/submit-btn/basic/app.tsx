import * as React from 'react';

import { Form, Field, FormElement, FormHandle } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
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

const App = () => {
    const formRef = React.useRef<FormHandle>(null);

    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    const submit = (event) => {
        formRef?.current?.onSubmit(event);
    };
    return (
        <div>
            <div style={{ height: '50px' }}>
                <Button type={'submit'} className="k-button" form="form1" onClick={submit}>
                    Submit
                </Button>
            </div>
            <Form
                ref={formRef}
                onSubmit={handleSubmit}
                render={() => (
                    <FormElement
                        id={'form1'}
                        style={{
                            maxWidth: 650
                        }}
                    >
                        <fieldset className={'k-form-fieldset'}>
                            <legend className={'k-form-legend'}>Please fill in the fields:</legend>
                            <div className="mb-3">
                                <Field name={'firstName'} component={Input} label={'First name'} />
                            </div>

                            <div className="mb-3">
                                <Field name={'lastName'} component={Input} label={'Last name'} />
                            </div>

                            <div className="mb-3">
                                <Field name={'email'} type={'email'} component={EmailInput} label={'Email'} />
                            </div>
                        </fieldset>
                        <div className="k-form-buttons"></div>
                    </FormElement>
                )}
            />
        </div>
    );
};

export default App;
