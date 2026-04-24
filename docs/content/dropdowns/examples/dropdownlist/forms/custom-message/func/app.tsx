import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Form, Field, FormElement, FormFieldSet, FieldWrapper } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';
import { searchIcon } from '@progress/kendo-svg-icons';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';

import countries from './shared-dd-countries';

const departureValidator = (value: any) => (value ? '' : 'Please select a departure country!');
const arrivalValidator = (value: any) => (value ? '' : 'Please select an arrival country!');

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
                            initialValues={{
                                dates: { start: new Date(), end: null },
                                departureCountry: null,
                                arrivalCountry: null
                            }}
                            render={() => (
                                <FormElement>
                                    <FormFieldSet>
                                        <FieldWrapper>
                                            <Field
                                                id="dates"
                                                name="dates"
                                                component={DateRangePicker}
                                                startDateInputSettings={{ label: 'Departure Date' }}
                                                endDateInputSettings={{ label: 'Arival Date' }}
                                                className="k-mt-4"
                                            />
                                        </FieldWrapper>

                                        <Label editorId="departureCountry" className="k-form-field k-mt-4">
                                            Departure Country
                                        </Label>
                                        <FieldWrapper>
                                            <Field
                                                id="departureCountry"
                                                name="departureCountry"
                                                component={DropDownList}
                                                defaultItem="Please select..."
                                                data={countries}
                                                validator={departureValidator}
                                            />
                                        </FieldWrapper>

                                        <Label editorId="arrivalCountry" className="k-form-field k-mt-4">
                                            Arrival Country
                                        </Label>
                                        <FieldWrapper>
                                            <Field
                                                name="arrivalCountry"
                                                component={DropDownList}
                                                defaultItem="Please select..."
                                                data={countries}
                                                validator={arrivalValidator}
                                            />
                                        </FieldWrapper>
                                    </FormFieldSet>

                                    <Button themeColor="primary" className="k-mt-4" svgIcon={searchIcon}>
                                        Search
                                    </Button>
                                </FormElement>
                            )}
                        />
                        {success && (
                            <Notification className="k-mt-4" type={{ style: 'success', icon: true }}>
                                Searching for a flight...
                            </Notification>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
