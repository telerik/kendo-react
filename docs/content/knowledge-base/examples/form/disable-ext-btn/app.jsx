import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

const App = () => {
    const formRef = React.useRef(null);
    const [allowSubmitValue, setAllowSubmitValue] = React.useState(false);

    const checkAllowSubmit = (props) => {
        setTimeout(() => {
            setAllowSubmitValue(props.allowSubmit);
        });
    };
    return (
        <div>
            <Button type="button" disabled={!allowSubmitValue}>external button</Button>
            <Form
                ref={formRef}
                onSubmit={handleSubmit}
                render={(formRenderProps) => (
                    <FormElement
                        style={{
                            maxWidth: 650
                        }}
                    >
                        {checkAllowSubmit(formRenderProps)}
                        <fieldset className={'k-form-fieldset'}>
                            <legend className={'k-form-legend'}>Please fill in the fields:</legend>
                            <FieldWrapper>
                                <div className="k-form-field-wrap">
                                    <Field
                                        name={'firstName'}
                                        component={Input}
                                        labelClassName={'k-form-label'}
                                        label={'First name'}
                                    />
                                </div>
                            </FieldWrapper>
                        </fieldset>
                        <div className="k-form-buttons">
                            <Button
                                type={'submit'}
                                disabled={!formRenderProps.allowSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    </FormElement>
                )}
            />
        </div>
    );
};

export default App;
