import * as React from 'react';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormUpload } from './shared-fm-form-components';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <Field
                        id={'avatar'}
                        name={'avatar'}
                        label={'Avatar'}
                        hint={'Hint: Upload your avatar picture'}
                        component={FormUpload}
                    />
                    <Field
                        id={'photos'}
                        name={'photos'}
                        label={'Upload Photos'}
                        hint={'Hint: Select your additional photos'}
                        component={FormUpload}
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
