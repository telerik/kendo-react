import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Editor, EditorChangeEvent } from '@progress/kendo-react-editor';

const FormEditor = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, touched, ...others } = fieldRenderProps;

    const onChange = React.useCallback(
        (ev: EditorChangeEvent) => {
            // you can pass ev.value as well, if you want to store the doc structure
            fieldRenderProps.onChange({
                value: ev.html
            });
        },
        [fieldRenderProps.onChange]
    );
    return (
        <div className={'k-form-field-wrap'}>
            <Editor {...others} onChange={onChange} />
        </div>
    );
};

const App = () => {
    const handleSubmit = (dataItem: any) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps: FormRenderProps) => (
                <FormElement
                    style={{
                        width: 400
                    }}
                >
                    <Field id={'Content'} name={'Content'} label={'Content'} component={FormEditor} />
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
