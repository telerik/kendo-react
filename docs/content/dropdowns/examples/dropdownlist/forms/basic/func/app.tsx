import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Form, Field, FormFieldSet, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Notification } from '@progress/kendo-react-notification';
import { Label } from '@progress/kendo-react-labels';
import { TextArea, TextBox } from '@progress/kendo-react-inputs';

const pets: string[] = [
    'Dog',
    'Cat',
    'Rabbit',
    'Parrot',
    'Hamster',
    'Turtle',
    'Guinea Pig',
    'Snake',
    'Ferret',
    'Chinchilla',
    'Goldfish',
    'Lizard'
];

const requiredValidator = (value: any) => (value ? '' : 'This field is required.');
const petValidator = (value: any) => (value ? '' : 'This field is required.');

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div className="row example-wrapper">
            <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card-block">
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={{
                            name: 'John Doe',
                            pet: null,
                            reason: ''
                        }}
                        render={() => (
                            <FormElement>
                                <FormFieldSet legend="Pet Adoption">
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
                                    <Label editorId="pet" className="k-form-field k-mt-4">
                                        Pet
                                    </Label>
                                    <Field
                                        id="pet"
                                        name="pet"
                                        component={DropDownList}
                                        data={pets}
                                        defaultItem="Please select..."
                                        validator={petValidator}
                                    />
                                    <Label editorId="reason" optional className="k-form-field k-mt-4">
                                        Reason for Adopting
                                    </Label>
                                    <Field id="reason" name="reason" component={TextArea} rows={4} />
                                </FormFieldSet>
                                <Button className="k-mt-4" themeColor={'primary'}>
                                    Submit
                                </Button>
                            </FormElement>
                        )}
                    />
                    {success && (
                        <Notification style={{ marginTop: '1rem' }} type={{ style: 'success', icon: true }}>
                            Request for adopting a pet confirmed!
                        </Notification>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
