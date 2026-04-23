import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { TextArea } from '@progress/kendo-react-inputs';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';
import { countries, interests } from './trip';

const requiredValidator = (value: any) => (value && value.length > 0 ? '' : 'This field is required.');

const interestsValidator = (value: any, values: any) => {
    if (!values.countries || values.countries.length === 0) {
        return '';
    }
    if (!value || value.length < 2) {
        return 'Please select at least 2 interests.';
    }
    return '';
};

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (dataItem) => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const InterestsField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <MultiSelect
                validityStyles={false}
                style={{ width: '100%' }}
                data={interests}
                valid={visited && !validationMessage}
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
                                countries: [],
                                interests: [],
                                additionalComments: ''
                            }}
                            render={() => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Plan Your Next Trip</legend>
                                        <Label editorId="countries" className="k-form-field k-mt-4">
                                            Destinations
                                        </Label>
                                        <Field
                                            id="countries"
                                            name="countries"
                                            component={MultiSelect}
                                            data={countries}
                                            style={{ width: '100%' }}
                                            validator={requiredValidator}
                                        />
                                        <Label editorId="interests" className="k-form-field k-mt-4">
                                            Travel interests
                                        </Label>
                                        <Field
                                            id="interests"
                                            name="interests"
                                            component={InterestsField}
                                            validator={interestsValidator}
                                        />
                                        <Label editorId="comments" className="k-form-field k-mt-4">
                                            Additional Comments
                                        </Label>
                                        <Field id="comments" name="additionalComments" component={TextArea} rows={4} />
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} className="k-mt-4">
                                        Book Now
                                    </Button>
                                </FormElement>
                            )}
                        />
                        {success && (
                            <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                                Your trip has been booked! Check your email for the next steps.
                            </Notification>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
