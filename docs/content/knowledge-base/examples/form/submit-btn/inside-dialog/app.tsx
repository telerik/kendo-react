import * as React from 'react';
import { Form, Field, FormElement, FieldWrapper, FormHandle } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import { Button } from '@progress/kendo-react-buttons';
import { Window, WindowActionsBar } from '@progress/kendo-react-dialogs';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);

const emailValidator = (value) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');

const EmailInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Input {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const [visible, setVisible] = React.useState(true);
    const [allow, setAllow] = React.useState(false);
    const toggleDialog = () => {
        setVisible(!visible);
    };

    const formRef = React.useRef<FormHandle>(null);

    const handleBtnClick = (event) => {
        formRef?.current?.onSubmit(event);
    };

    const handleSubmit = (dataItem) => {
        alert(JSON.stringify(dataItem, null, 2));
    };

    const handleAllowFormSubmit = () => {
        setAllow(true);
    };

    return (
        <div>
            <Button type="button" onClick={toggleDialog} id="open-window">
                Toggle Window
            </Button>
            {visible && (
                <Window title={'Status'} onClose={toggleDialog} initialHeight={350} initialWidth={350}>
                    <div className="example-config">
                        <Form
                            ref={formRef}
                            ignoreModified={true}
                            onSubmit={handleSubmit}
                            render={() => (
                                <FormElement
                                    style={{
                                        maxWidth: 650
                                    }}
                                >
                                    <fieldset className={'k-form-fieldset'}>
                                        <legend className={'k-form-legend'}>Please fill in the fields:</legend>
                                        <FieldWrapper>
                                            <div className="k-form-field-wrap">
                                                <Field
                                                    name={'firstName'}
                                                    component={Input}
                                                    labelClassName={'k-form-label'}
                                                    label={'First name'}
                                                    onChange={handleAllowFormSubmit}
                                                />
                                            </div>
                                        </FieldWrapper>

                                        <FieldWrapper>
                                            <div className="k-form-field-wrap">
                                                <Field
                                                    name={'lastName'}
                                                    component={Input}
                                                    labelClassName={'k-form-label'}
                                                    label={'Last name'}
                                                />
                                            </div>
                                        </FieldWrapper>

                                        <FieldWrapper>
                                            <Field
                                                name={'email'}
                                                type={'email'}
                                                component={EmailInput}
                                                label={'Email'}
                                                validator={emailValidator}
                                            />
                                        </FieldWrapper>
                                    </fieldset>
                                </FormElement>
                            )}
                        />
                    </div>
                    <WindowActionsBar layout={'end'}>
                        <Button type="button" onClick={toggleDialog}>
                            Cancel
                        </Button>
                        <Button type="submit" themeColor={'primary'} disabled={!allow} onClick={handleBtnClick}>
                            Submit
                        </Button>
                    </WindowActionsBar>
                </Window>
            )}
        </div>
    );
};

export default App;
