import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps, FormFieldSet } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormMaskedTextBox, FormInput } from './shared-fm-form-components';
import { requiredValidator, cardValidator, cvcValidator } from './shared-fm-validators';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }} horizontal={true}>
                    <FormFieldSet legend={'Horizontal Form'}>
                        <Field
                            id={'fullName'}
                            name={'fullName'}
                            label={'Full Name'}
                            component={FormInput}
                            validator={requiredValidator}
                        />
                        <Field
                            id={'cardNumber'}
                            name={'cardNumber'}
                            label={'Card Number'}
                            hint={'Hint: Your Credit Card Number'}
                            mask={'0000-0000-0000-0000'}
                            component={FormMaskedTextBox}
                            validator={cardValidator}
                        />
                        <Field
                            id={'cvc'}
                            name={'cvc'}
                            label={'CVC Number'}
                            hint={'Hint: The last 3 digids on the back of the Card'}
                            mask={'000'}
                            component={FormMaskedTextBox}
                            validator={cvcValidator}
                        />

                        <div className="k-form-buttons">
                            <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                                Submit
                            </Button>
                            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                        </div>
                    </FormFieldSet>
                </FormElement>
            )}
        />
    );
};
export default App;
