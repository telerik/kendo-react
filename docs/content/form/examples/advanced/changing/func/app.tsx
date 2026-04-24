import * as React from 'react';

import { Form, Field, FieldWrapper, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <Form
            initialValues={{
                price: 20
            }}
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <FieldWrapper>
                        <Field name={'price'} type={'text'} component={NumericTextBox} />
                    </FieldWrapper>
                    <br />
                    <Button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            // Changing desired field value
                            formRenderProps.onChange('price', { value: 0 });
                        }}
                    >
                        Clear price
                    </Button>
                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
export default App;
