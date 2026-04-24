import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';
import { Notification } from '@progress/kendo-react-notification';
import { searchIcon } from '@progress/kendo-svg-icons';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { Form, Field, FormFieldSet, FormElement } from '@progress/kendo-react-form';

import { countries } from './shared-dd-countries';

const departureValidator = (value) => (value ? '' : 'Please select a departure country!');
const arrivalValidator = (value) => (value ? '' : 'Please select an arrival country!');

const App = () => {
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (dataItem) => {
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
                            initialValues={{ dates: { start: new Date(), end: null } }}
                            render={(formRenderProps) => (
                                <FormElement>
                                    <FormFieldSet>
                                        <legend>Select your flight route:</legend>
                                        <Field
                                            name="dates"
                                            component={DateRangePicker}
                                            startDateInputSettings={{ label: 'Departure Date' }}
                                            endDateInputSettings={{ label: 'Arival Date' }}
                                            className="k-mt-4"
                                            id="dates"
                                        />

                                        <Label editorId="departureCountry" className="k-form-field k-mt-4">
                                            Departure Country
                                        </Label>
                                        <Field
                                            id="departureCountry"
                                            name="departureCountry"
                                            component={AutoComplete}
                                            placeholder="Please select..."
                                            data={countries}
                                            validator={departureValidator}
                                        />

                                        <Label editorId="arrivalCountry" className="k-form-field k-mt-4">
                                            Arrival Country
                                        </Label>
                                        <Field
                                            name="arrivalCountry"
                                            component={AutoComplete}
                                            placeholder="Please select..."
                                            data={countries}
                                            validator={arrivalValidator}
                                        />
                                    </FormFieldSet>
                                    <Button themeColor={'primary'} className="k-mt-4" svgIcon={searchIcon}>
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
