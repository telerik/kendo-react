import * as React from 'react';

import { Form, Field, FormElement, FormRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            initialValues={{
                userCount: 20,
                ticketCount: 100
            }}
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <FieldWrapper>
                        <Field name={'userCount'} type={'text'} component={NumericTextBox} />
                    </FieldWrapper>
                    <FieldWrapper>
                        <Field name={'ticketCount'} type={'text'} component={NumericTextBox} />
                    </FieldWrapper>
                    Total ticket price:
                    <strong>
                        {
                            // A calculated value.
                            formRenderProps.valueGetter('userCount') * formRenderProps.valueGetter('ticketCount')
                        }
                    </strong>
                    <div className="k-form-buttons">
                        <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
export default App;
