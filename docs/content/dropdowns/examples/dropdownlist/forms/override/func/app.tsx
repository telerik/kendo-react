import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { TextBox } from '@progress/kendo-react-inputs';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';

const requiredValidator = (value: any) => (value ? '' : 'This field is required.');

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const MembershipField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, valid, ...others } = fieldRenderProps;
        return (
            <DropDownList
                data={['Monthly', 'Yearly', 'Family']}
                valid={visited ? !validationMessage : undefined}
                validationMessage={visited && validationMessage ? validationMessage : undefined}
                {...others}
            />
        );
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card">
                    <div className="card-block">
                        <Form
                            onSubmit={handleSubmit}
                            initialValues={{
                                name: 'John Doe',
                                location: null,
                                membership: null
                            }}
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
                                            width="100%"
                                            validator={requiredValidator}
                                        />
                                        <Label editorId="location" className="k-form-field k-mt-4">
                                            Gym Location
                                        </Label>
                                        <Field
                                            id="location"
                                            name="location"
                                            component={DropDownList}
                                            data={['Downtown', 'Uptown', 'Suburb']}
                                            validator={requiredValidator}
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
