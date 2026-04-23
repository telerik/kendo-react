import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldRenderProps } from '@progress/kendo-react-form';
import { TimePicker } from '@progress/kendo-react-dateinputs';
import { TextArea } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label, Error } from '@progress/kendo-react-labels';

const departureValidator = (value: Date | null) => {
    const now = new Date();
    if (!value) return 'Departure time is required!';
    if (value < now) return 'Departure time cannot be in the past!';
    return '';
};

const TimeField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <>
            <TimePicker {...others} validityStyles={false} valid={visited ? !validationMessage : undefined} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </>
    );
};

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const now = new Date();

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
                                departure: new Date(),
                                arrival: new Date(),
                                additionalComments: ''
                            }}
                            render={() => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Please select the time of your flight:</legend>

                                        <Label className="k-form-field">
                                            <span>Departure</span>
                                            <Field
                                                name="departure"
                                                component={TimeField}
                                                min={now}
                                                validator={departureValidator}
                                            />
                                        </Label>

                                        <Label className="k-form-field">
                                            <span>Arrival</span>
                                            <Field
                                                name="arrival"
                                                component={TimeField}
                                                validator={(value, formValues) => {
                                                    if (!value) return 'Arrival time is required!';
                                                    const departureTime = formValues('departure');
                                                    if (departureTime && value < departureTime)
                                                        return 'Arrival time cannot be before Departure time!';
                                                    return '';
                                                }}
                                            />
                                        </Label>

                                        <Label className="k-form-field">
                                            <span>Additional Comments</span>
                                            <Field name="additionalComments" component={TextArea} rows={4} />
                                        </Label>
                                    </FormFieldSet>

                                    <Button themeColor="primary" type="submit">
                                        Search
                                    </Button>
                                </FormElement>
                            )}
                        />
                    </div>
                </div>
            </div>
            {success && (
                <div className="alert alert-success" style={{ position: 'absolute' }}>
                    Form submitted!
                </div>
            )}
        </div>
    );
};

export default App;
