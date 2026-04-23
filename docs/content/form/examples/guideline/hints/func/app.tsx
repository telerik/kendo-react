import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormInput, FormDatePicker } from './shared-fm-form-components';
import { requiredValidator } from './shared-fm-validators';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <Field
                        id={'bdate'}
                        name={'bdate'}
                        label={'Birth Date'}
                        hint={'Hint: Hint message aligned end'}
                        hintDirection={'end'}
                        component={FormDatePicker}
                        validator={requiredValidator}
                    />
                    <Field
                        id={'username'}
                        name={'username'}
                        label={'User Name'}
                        hint={'Hint: Hint message aligned start'}
                        component={FormInput}
                        validator={requiredValidator}
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
