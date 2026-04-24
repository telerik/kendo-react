import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormMaskedTextBox, FormFloatingNumericTextBox } from './shared-fm-form-components';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <Field
                        id={'street'}
                        name={'street'}
                        label={'Street Number'}
                        hint={'Hint: Enter your street number.'}
                        optional={true}
                        format={'n2'}
                        component={FormFloatingNumericTextBox}
                    />
                    <Field
                        id={'phoneNumber'}
                        name={'phoneNumber'}
                        label={'Phone Number'}
                        hint={'Hint: Your active phone number.'}
                        mask={'(999) 000-00-00-00'}
                        optional={true}
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
