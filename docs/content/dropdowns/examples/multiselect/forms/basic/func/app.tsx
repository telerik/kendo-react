import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { Form, Field, FormElement, FormFieldSet } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Notification } from '@progress/kendo-react-notification';
import { Label } from '@progress/kendo-react-labels';
import { skills, locations } from './jobs';

const requiredValidator = (value: any) => (value && value.length > 0 ? '' : 'This field is required.');

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
                <div className="card">
                    <div className="card-block">
                        <Form
                            onSubmit={handleSubmit}
                            initialValues={{
                                skills: [],
                                locations: []
                            }}
                            render={(formRenderProps) => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Job Application</legend>
                                        <Label editorId="skills" className="k-form-field k-mt-4">
                                            Skills
                                        </Label>
                                        <Field
                                            id="skills"
                                            name="skills"
                                            component={MultiSelect}
                                            data={skills}
                                            style={{ width: '100%' }}
                                            placeholder="Please select..."
                                            validator={requiredValidator}
                                        />
                                        <Label editorId="locations" className="k-form-field k-mt-4">
                                            Preferred Locations
                                        </Label>
                                        <Field
                                            id="locations"
                                            name="locations"
                                            component={MultiSelect}
                                            data={locations}
                                            style={{ width: '100%' }}
                                            placeholder="Please select..."
                                            validator={requiredValidator}
                                        />
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} style={{ marginTop: 20 }} type={'submit'}>
                                        Submit
                                    </Button>
                                </FormElement>
                            )}
                        />
                        {success && (
                            <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                                Thank you for applying! Our team will review your application and contact you soon.
                            </Notification>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
