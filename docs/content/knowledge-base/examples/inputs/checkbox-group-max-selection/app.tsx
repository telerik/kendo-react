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

    const [selectedItems, setSelectedItems] = React.useState(new Set(value || []));

    const handleCheckboxChange = React.useCallback(
        (event, index) => {
            // onChange callback expects argument with 'value' property
            console.log(event, index);

            setSelectedItems((prevSelected) => {
                const updatedSelected = new Set(prevSelected);
                event.target.value ? updatedSelected.add(index) : updatedSelected.delete(index);
                onChange({ value: Array.from(updatedSelected) });
                return updatedSelected;
            });
        },
        [onChange]
    );
    return (
        <div onFocus={onFocus} onBlur={onBlur}>
            <div className="example-config">
                {[...Array(6)].map((_, index) => {
                    const isChecked = selectedItems.has(index);
                    const isDisabled = !isChecked && selectedItems.size >= 2;

                    return (
                        <Checkbox
                            key={index}
                            label={`Option ${index}`}
                            checked={isChecked}
                            onChange={(event) => handleCheckboxChange(event, index)}
                            disabled={isDisabled}
                        />
                    );
                })}
            </div>
            {
                // Display an error message after the "visited" or "touched" field is set to true.
                visited && validationMessage && <Error>{validationMessage}</Error>
            }
        </div>
    );
};

const requiredValidator = (value: any) => (value ? '' : 'This field is required.');

const App = () => {
    const handleSubmit = (dataItem: { [name: string]: any }) => alert(JSON.stringify([...dataItem.termsAccepted]));
    return (
        <Form
            initialValues={{ termsAccepted: [1] }}
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
