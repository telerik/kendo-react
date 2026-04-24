import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper } from '@progress/kendo-react-form';
import countries from './shared-dd-countries';

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (dataItem: { [name: string]: any }) => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const requiredValidator = (value: any) => (value ? '' : 'This field is required.');

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
                                            <div className="k-form-field-wrap">
                                                <Field
                                                    name="departureCountry"
                                                    component={ComboBox}
                                                    label="Departure Country"
                                                    data={countries}
                                                    validator={requiredValidator}
                                                />
                                            </div>
                                        </FieldWrapper>
                                        <FieldWrapper>
                                            <div className="k-form-field-wrap">
                                                <Field
                                                    name="arrivalCountry"
                                                    component={ComboBox}
                                                    label="Arrival Country"
                                                    data={countries}
                                                    validator={requiredValidator}
                                                />
                                            </div>
                                        </FieldWrapper>
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} style={{ marginTop: 20 }} type={'submit'}>
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
