import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { TextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label, Error } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';
import { Form, Field, FormFieldSet, FormElement, FieldRenderProps } from '@progress/kendo-react-form';

const requiredValidator = (value) => (value ? '' : 'This field is required.');

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const MembershipField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <>
                <AutoComplete placeholder="Please select..." data={['Monthly', 'Yearly', 'Family']} {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </>
        );
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card">
                    <div className="card-block">
                        <Form
                            onSubmit={handleSubmit}
                            initialValues={{ name: 'John Doe' }}
                            render={(formRenderProps) => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Membership form</legend>
                                        <Label editorId="name" className="k-form-field">
                                            Full Name
                                        </Label>
                                        <Field
                                            id="name"
                                            name="name"
                                            component={TextBox}
                                            validator={requiredValidator}
                                        />
                                        <Label editorId="location" className="k-form-field k-mt-4">
                                            Gym Location
                                        </Label>
                                        <Field
                                            id="location"
                                            name="location"
                                            component={AutoComplete}
                                            placeholder="Please select..."
                                            data={['Downtown', 'Uptown', 'Suburb']}
                                        />
                                        <Label editorId="membership" className="k-form-field k-mt-4">
                                            Membership Type
                                        </Label>
                                        <Field
                                            name="membership"
                                            component={MembershipField}
                                            validator={(value) => {
                                                const location = formRenderProps.valueGetter('location');
                                                if (!location) {
                                                    return 'Please select a Gym Location first!';
                                                }
                                                if (!value) {
                                                    return 'Please select a Membership Type';
                                                }
                                                return '';
                                            }}
                                        />
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} className="k-mt-4">
                                        Become a member
                                    </Button>
                                </FormElement>
                            )}
                        />
                        {success && (
                            <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                                Congratulations! Welcome to the gym!
                            </Notification>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
