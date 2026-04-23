import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormMaskedTextBox, FormInput } from './shared-fm-form-components';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={{
                ownerName: 'Chuck Norris',
                phoneNumber: '(359) 884-12-33-21'
            }}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <Field
                        id={'ownerName'}
                        name={'ownerName'}
                        label={'Owner Name'}
                        hint={'Hint: Disabled field'}
                        disabled={true}
                        component={FormInput}
                    />
                    <Field
                        id={'phoneNumber'}
                        name={'phoneNumber'}
                        label={'Phone Number'}
                        mask={'(999) 000-00-00-00'}
                        hint={'Hint: Readonly field'}
                        readonly={true}
                        component={FormMaskedTextBox}
                    />
                    <div className="k-form-buttons">
                        <Button themeColor={'primary'} type={'submit'} disabled={!formRenderProps.allowSubmit}>
                            Submit
                        </Button>
                        <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
export default App;
