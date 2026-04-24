import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper } from '@progress/kendo-react-form';
import { TimePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

const departureValidator = (value: Date | null) => {
    const today = new Date();
    if (!value) return 'Departure time is required';
    if (value < today) return 'Times in the past are not valid Departure times.';
    return '';
};

const arrivalValidator = (value: Date | null) => (value ? '' : 'The Arrival time is required.');

const App = () => {
    const [success, setSuccess] = React.useState(false);
    const today = new Date();

    const handleSubmit = (dataItem: any) => {
        console.log('Submitted Data:', dataItem);
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
                                        <legend>Please select the time of your flight:</legend>

                                        <Label className="k-form-field">
                                            <span>Departure</span>
                                            <Field
                                                name="departure"
                                                component={TimePicker}
                                                min={today}
                                                validator={departureValidator}
                                            />
                                        </Label>
                                                        <Label className="k-form-field">
                                                            <span>Arrival</span>
                                                            <FieldWrapper>
                                                                <Field name="arrival" component={TimePicker} validator={arrivalValidator} />
                                                            </FieldWrapper>
                                                        </Label>
                                                    </FormFieldSet>
                                                    <Button themeColor="primary">Search</Button>
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
