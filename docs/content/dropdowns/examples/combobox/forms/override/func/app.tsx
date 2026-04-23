import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Label, Error } from '@progress/kendo-react-labels';
import { Form, Field, FormFieldSet, FieldWrapper, FormElement, FieldRenderProps } from '@progress/kendo-react-form';
import countries from './shared-dd-countries';

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = () => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    const ArrivalCountryField = (fieldRenderProps: FieldRenderProps) => {
        const { validationMessage, visited, ...others } = fieldRenderProps;
        return (
            <>
                <ComboBox {...others} />
                {visited && validationMessage && <Error>{validationMessage}</Error>}
            </>
        );
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
                                        <FieldWrapper>
                                            <div className="mb-3">
                                                <Field
                                                    style={{ width: '100%' }}
                                                    name="departureCountry"
                                                    component={ComboBox}
                                                    label="Departure Country"
                                                    data={countries}
                                                />
                                            </div>
                                        </FieldWrapper>
                                        <div className="mb-3">
                                            <Label>Arrival Country</Label>
                                            <Field
                                                style={{ width: '100%' }}
                                                name="arrivalCountry"
                                                component={ArrivalCountryField}
                                                data={countries}
                                                validator={(value) => {
                                                    const departureCountry =
                                                        formRenderProps.valueGetter('departureCountry');
                                                    if (!departureCountry) {
                                                        return 'Please select a Departure Country first!';
                                                    }
                                                    if (!value) {
                                                        return 'Please select an Arrival Country';
                                                    }
                                                    return '';
                                                }}
                                            />
                                        </div>
                                        <Label className="k-form-field">
                                            <span>Additional Comments</span>
                                            <Field
                                                name="additionalComments"
                                                component="textarea"
                                                className="k-textarea"
                                                style={{ width: '100%' }}
                                            />
                                        </Label>
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} style={{ marginTop: 10 }}>
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
