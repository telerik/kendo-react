import * as React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
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

const arrivalValidator = (value: Date | null, formValues: any) => {
    if (!value) return 'Arrival time is required!';
    if (formValues?.departure && value < formValues.departure) {
        return 'Arrival time cannot be before Departure time!';
    }
    return '';
};

const TimeField = (p: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = p;
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

    const handleSubmit = (dataItem: any) => {
        console.log('Submitted Data:', dataItem);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
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
                                    <fieldset>
                                        <legend>Please select the time of your flight:</legend>

                                        <Label className="k-form-field">
                                            <span>Departure</span>
                                            <FieldWrapper>
                                              <Field
                                                name="departure"
                                                component={TimeField}
                                                min={now}
                                                validator={departureValidator}
                                            />
                                            </FieldWrapper>
                                        </Label>

                                        <Label className="k-form-field">
                                            <span>Arrival</span>
                                            <Field
                                                name="arrival"
                                                component={TimeField}
                                                validator={(value, formValues) =>
                                                    arrivalValidator(value as Date | null, formValues)
                                                }
                                            />
                                        </Label>

                                        <Label className="k-form-field">
                                            <span>Additional Comments</span>
                                            <FieldWrapper>
                                              <Field name="additionalComments" component={TextArea} rows={4} />
                                            </FieldWrapper>
                                        </Label>
                                    </fieldset>

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
