import * as React from 'react';

import { Form, Field, FormElement, FieldRenderProps, FormRenderProps } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { Checkbox } from '@progress/kendo-react-inputs';

const MyCustomCheckbox = (fieldRenderProps: FieldRenderProps) => {
    const {
        // The meta props of the Field.
        validationMessage,
        touched,
        visited,
        modified,
        valid,
        // The input props of the Field.
        value,
        onChange,
        onFocus,
        onBlur,
        // The custom props that you passed to the Field.
        ...others
    } = fieldRenderProps;

    const onValueChange = React.useCallback(() => {
        // onChange callback expects argument with 'value' property
        onChange({ value: !value });
    }, [onChange, value]);

    return (
        <div onFocus={onFocus} onBlur={onBlur}>
            <Checkbox label={others.label} checked={value} id={others.id} onChange={onValueChange} />
            {
                // Display an error message after the "visited" or "touched" field is set to true.
                visited && validationMessage && <Error>{validationMessage}</Error>
            }
        </div>
    );
};

const requiredValidator = (value: any) => (value ? '' : 'This field is required.');

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            initialValues={{ termsAccepted: false }}
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <Field
                        name={'termsAccepted'}
                        label={'I Agree with terms & conditions'}
                        id={'termsinput'}
                        component={MyCustomCheckbox}
                        validator={requiredValidator}
                    />
                    <div className="k-form-buttons">
                        <Button type={'submit'} disabled={!formRenderProps.allowSubmit}>
                            Submit
                        </Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
export default App;
