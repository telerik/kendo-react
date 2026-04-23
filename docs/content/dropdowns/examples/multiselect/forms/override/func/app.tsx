import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { TextArea } from '@progress/kendo-react-inputs';
import { Form, Field, FormElement, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';
import { sessions, interests } from './conference';

const interestsValidator = (value: any, values: any) => {
    if (!values.sessions || values.sessions.length === 0) {
        return 'Pick sessions first!';
    }
    if (!value || value.length < 2) {
        return 'Please pick at least 2 networking interests!';
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
                style={{ width: '100%' }}
                data={interests}
                valid={visited && !validationMessage}
                validationMessage={visited ? validationMessage : ''}
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
                                sessions: [],
                                interests: [],
                                additionalComments: ''
                            }}
                            render={(formRenderProps) => (
                                <FormElement>
                                    <fieldset>
                                        <legend>Event Registration</legend>
                                        <Label editorId="sessions" className="k-form-field k-mt-4">
                                            Conference Sessions
                                        </Label>
                                        <FieldWrapper>
                                          <Field
                                            name="sessions"
                                            component={MultiSelect}
                                            data={sessions}
                                            style={{ width: '100%' }}
                                        />
                                        </FieldWrapper>
                                        <Label editorId="interests" className="k-form-field k-mt-4">
                                            Networking Interests
                                        </Label>
                                        <FieldWrapper>
                                          <Field
                                            name="interests"
                                            component={InterestsField}
                                            validator={interestsValidator}
                                        />
                                        </FieldWrapper>
                                        <Label editorId="comments" className="k-form-field k-mt-4">
                                            Additional Comments
                                        </Label>
                                        <FieldWrapper>
                                          <Field id="comments" name="additionalComments" component={TextArea} rows={4} />
                                        </FieldWrapper>
                                    </fieldset>
                                    <Button themeColor={'primary'} className="k-mt-4">
                                        Register
                                    </Button>
                                </FormElement>
                            )}
                        />
                        {success && (
                            <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                                You are successfully registered!
                            </Notification>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
