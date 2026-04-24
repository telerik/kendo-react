import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormCheckbox, FormRadioGroup } from './shared-fm-form-components';
import { genders } from './shared-fm-data';

interface confirmationDataInterface {
    label: string;
    value: string;
}

const confirmationData: Array<confirmationDataInterface> = [
    { label: 'Phone Call', value: 'phone' },
    { label: 'Via Email', value: 'email' }
];

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <Field
                        id={'confirmationType'}
                        name={'confirmationType'}
                        label={'Type of Confirmation'}
                        hint={'Hint: Choose a way to receive a confirmation'}
                        component={FormRadioGroup}
                        data={confirmationData}
                    />
                    <Field
                        id={'gender'}
                        name={'gender'}
                        label={'Gender'}
                        layout={'horizontal'}
                        component={FormRadioGroup}
                        data={genders}
                    />
                    <Field
                        id={'terms'}
                        name={'terms'}
                        label={'I agree with terms and conditions'}
                        hint={'Hint: By checking this, you agree to our Terms&Conditions'}
                        component={FormCheckbox}
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
