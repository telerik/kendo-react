import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import { TextArea } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Form, Field, FormFieldSet, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import countries from './shared-dd-countries';

const departureValidator = (value) => (value ? '' : 'Please select a departure country!');
const arrivalValidator = (value) => (value ? '' : 'Please select an arrival country!');

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
                            render={() => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Select your flight route:</legend>
                                        <FieldWrapper>
                                            <div className="mb-3">
                                                <Field
                                                    style={{ width: '100%' }}
                                                    name="departureCountry"
                                                    component={ComboBox}
                                                    label="Departure Country"
                                                    data={countries}
                                                    validator={departureValidator}
                                                />
                                            </div>
                                        </FieldWrapper>
                                        <FieldWrapper>
                                            <div className="mb-3">
                                                <Field
                                                    validityStyles={false}
                                                    style={{ width: '100%' }}
                                                    name="arrivalCountry"
                                                    component={ComboBox}
                                                    label="Arrival Country"
                                                    data={countries}
                                                    validator={arrivalValidator}
                                                />
                                            </div>
                                        </FieldWrapper>
                                        <Label className="k-form-field">
                                            <span>Additional Comments</span>
                                            <Field name="additionalComments" component={TextArea} rows={4} />
                                        </Label>
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} style={{ marginTop: 15 }}>
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
