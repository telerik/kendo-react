import * as React from 'react';
import { Form, Field, FormElement, FormFieldSet, FormSeparator, FieldWrapper, FieldRenderProps, FormRenderProps } from '@progress/kendo-react-form';
import { TimePicker } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';
import { Error, Label } from '@progress/kendo-react-labels';

const requiredValidator = (value: any) => (value ? '' : 'This field is required');

const DepartureTimePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Departure</Label>
            <TimePicker {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const ArrivalTimePickerField = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <Label>Arrival</Label>
            <TimePicker {...others} />
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (dataItem: any) => {
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
                            render={(formRenderProps: FormRenderProps) => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Please select the time of your flight:</legend>
                                        <FieldWrapper>
                                            <Field
                                                name="departure"
                                                component={DepartureTimePickerField}
                                                validator={requiredValidator}
                                            />
                                        </FieldWrapper>
                                        <FieldWrapper>
                                            <Field
                                                name="arrival"
                                                component={ArrivalTimePickerField}
                                                validator={requiredValidator}
                                            />
                                        </FieldWrapper>
                                    </FormFieldSet>
                                    <FormSeparator />
                                    <div className="k-form-buttons">
                                        <Button type="submit" themeColor="primary">Search</Button>
                                    </div>
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
