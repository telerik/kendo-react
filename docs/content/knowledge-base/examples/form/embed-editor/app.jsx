import * as React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Editor } from '@progress/kendo-react-editor';

const MyFormEditor = (fieldRenderProps) => {
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
    const onValueChange = (ev) => {
        onChange({
            value: ev.html
        });
    };

    return (
        <div>
            <Editor onChange={onValueChange} value={value} />
        </div>
    );
};

const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

const App = () => {
    return (
        <Form
            initialValues={{ description: 'test' }}
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <FormElement
                    style={{
                        maxWidth: 650
                    }}
                >
                    <Field name={'description'} component={MyFormEditor} />
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
