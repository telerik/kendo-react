import * as React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import { Form, Field, FormElement, FormFieldSet } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';

const App = () => {
    const [visible, setVisible] = React.useState<boolean>(true);

    const toggleDialog = () => {
        setVisible(!visible);
    };

    const handleSubmit = (dataItem) => {
        toggleDialog();
    };

    return (
        <div>
            <Button type="button" onClick={toggleDialog} id="open-window">
                Open Window
            </Button>
            {visible && (
                <Window title={'Status'} onClose={toggleDialog} initialHeight={350}>
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={{
                            firstName: '',
                            lastName: ''
                        }}
                        render={(formRenderProps) => (
                            <FormElement>
                                <FormFieldSet legend="User details:">
                                    <Label className="k-form-field">
                                        <span>First Name</span>
                                        <Field name="firstName" component={Input} placeholder="Your Name" />
                                    </Label>
                                    <Label className="k-form-field">
                                        <span>Last Name</span>
                                        <Field name="lastName" component={Input} placeholder="Your Last Name" />
                                    </Label>
                                </FormFieldSet>

                                <div className="text-right">
                                    <Button type="button" onClick={toggleDialog}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" themeColor={'primary'}>
                                        Submit
                                    </Button>
                                </div>
                            </FormElement>
                        )}
                    />
                </Window>
            )}
        </div>
    );
};
export default App;
