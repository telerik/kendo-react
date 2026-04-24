import * as React from 'react';
import { Popover, PopoverActionsBar } from '@progress/kendo-react-tooltip';
import { Button, ButtonHandle } from '@progress/kendo-react-buttons';
import { Form, Field } from '@progress/kendo-react-form';
import { nameValidator, emailValidator, FormInput } from './editors';

const App = () => {
    const anchor = React.useRef<ButtonHandle>(null);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        setShow(true);
    }, []);

    const onFormSubmit = React.useCallback((event) => {
        console.log(event);
        setShow(false);
    }, []);

    const onClick = () => setShow(true);
    const onCancelClick = (event) => {
        event.preventDefault();
        setShow(false);
    };

    return (
        <div>
            <div>
                <Button style={{ left: 280, top: 350 }} onClick={onClick} disabled={show} ref={anchor}>
                    Show
                </Button>
                {show && (
                    <Form
                        onSubmit={onFormSubmit}
                        render={(formRenderProps) => (
                            <Popover
                                show={true}
                                anchor={anchor.current && anchor.current.element}
                                title={'Please enter your personal details:'}
                            >
                                <div style={{ width: 350 }}>
                                    <Field
                                        id={'fullName'}
                                        name={'fullName'}
                                        label={'Full Name'}
                                        component={FormInput}
                                        style={{ width: '100%' }}
                                        validator={nameValidator}
                                    />
                                    <Field
                                        id={'email'}
                                        name={'email'}
                                        label={'Email'}
                                        hint={'Hint: Enter your personal email address.'}
                                        type={'email'}
                                        style={{ width: '100%' }}
                                        component={FormInput}
                                        validator={emailValidator}
                                    />
                                </div>
                                <PopoverActionsBar>
                                    <Button
                                        onClick={formRenderProps.onSubmit}
                                        disabled={!formRenderProps.allowSubmit}
                                        themeColor={'primary'}
                                        fillMode={'flat'}
                                    >
                                        Submit
                                    </Button>
                                    <Button onClick={onCancelClick} fillMode={'flat'}>
                                        Cancel
                                    </Button>
                                </PopoverActionsBar>
                            </Popover>
                        )}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
