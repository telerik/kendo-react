import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';
import { searchIcon } from '@progress/kendo-svg-icons';
import { Form, Field, FormFieldSet, FormElement } from '@progress/kendo-react-form';

const requiredValidator = (value) => (value ? '' : 'This field is required.');

const jobPositions: string[] = [
    'Software Engineer',
    'Product Manager',
    'UX Designer',
    'Data Analyst',
    'Marketing Specialist',
    'Sales Representative',
    'HR Manager',
    'Customer Support',
    'DevOps Engineer',
    'Cybersecurity Analyst'
];
const experienceLevels: string[] = ['Entry Level', 'Mid Level', 'Senior Level', 'Lead', 'Director'];
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
                            render={(formRenderProps) => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Job Search</legend>
                                        <Label editorId="position" className="k-form-field k-mt-4">
                                            Job Position
                                        </Label>
                                        <Field
                                            id="position"
                                            name="position"
                                            component={AutoComplete}
                                            placeholder="e.g. Software Engineer"
                                            data={jobPositions}
                                            validator={requiredValidator}
                                        />
                                        <Label editorId="experience" className="k-form-field k-mt-4">
                                            Job Experience
                                        </Label>
                                        <Field
                                            validityStyles={false}
                                            id="experience"
                                            name="experience"
                                            component={AutoComplete}
                                            placeholder="e.g. Entry Level"
                                            data={experienceLevels}
                                            validator={requiredValidator}
                                        />
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} className="k-mt-4" svgIcon={searchIcon}>
                                        Search
                                    </Button>
                                </FormElement>
                            )}
                        />
                        {success && (
                            <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                                Searching for suitable jobs...
                            </Notification>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
